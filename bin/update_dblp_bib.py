#!/usr/bin/env python3
"""Append new publications from DBLP to the site bibliography.

Fetches the author's DBLP BibTeX export and appends entries that are not
already present in _bibliography/my.bib. Existing entries are never
rewritten, so hand-curated fields (selected, abbr, preview, pdf, code, ...)
are preserved by construction.

The script fails closed: if the fetch errors, or returns implausibly few
entries, nothing is written and it exits non-zero.

Usage:
    python bin/update_dblp_bib.py --dry-run
    python bin/update_dblp_bib.py --report /tmp/report.md
"""

from __future__ import annotations

import argparse
import difflib
import re
import sys
import time
import urllib.error
import urllib.request
from dataclasses import dataclass, field as dc_field
from pathlib import Path

# --- configuration -----------------------------------------------------------

DBLP_PID = "180/3296"
DBLP_URL = f"https://dblp.org/pid/{DBLP_PID}.bib"
BIB_PATH = Path("_bibliography/my.bib")

# A fetch returning fewer than this many entries is treated as a failure
# rather than as "the author lost half their publications".
MIN_ENTRIES = 30

# Entry types we never import (proceedings the author merely edited).
SKIP_TYPES = {"proceedings"}

# DBLP indexes deposited artifacts (Zenodo datasets, replication packages) under
# `data/` keys. They are not publications and are often listed twice, once per
# uploaded version, so they are excluded unless explicitly requested.
SKIP_KEY_PREFIXES = ("DBLP:data/",)

# DBLP bookkeeping fields that add noise to a curated bibliography.
STRIP_FIELDS = {"biburl", "bibsource", "timestamp"}

# Titles this similar are treated as the same paper.
FUZZY_THRESHOLD = 0.90

UA = "cpoli87.github.io publication sync (+https://github.com/cpoli87/cpoli87.github.io)"


# --- bibtex parsing ----------------------------------------------------------


@dataclass
class Entry:
    type: str
    key: str
    body: str
    fields: dict = dc_field(default_factory=dict)

    @property
    def title(self) -> str:
        return self.fields.get("title", "")

    @property
    def doi(self) -> str:
        return normalize_doi(self.fields.get("doi", ""))

    @property
    def is_preprint(self) -> bool:
        journal = self.fields.get("journal", "")
        return "corr" in journal.lower() or "arxiv" in journal.lower()


def _match_brace(text: str, open_idx: int) -> int:
    """Index of the brace closing the one at open_idx."""
    depth = 0
    for i in range(open_idx, len(text)):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return i
    return len(text) - 1


def parse_bib(text: str) -> list[Entry]:
    entries: list[Entry] = []
    for m in re.finditer(r"@(\w+)\s*\{\s*([^,\s]+)\s*,", text):
        open_idx = text.index("{", m.start())
        close_idx = _match_brace(text, open_idx)
        body = text[m.start() : close_idx + 1]
        entries.append(
            Entry(type=m.group(1).lower(), key=m.group(2).strip(), body=body, fields=parse_fields(body))
        )
    return entries


def parse_fields(body: str) -> dict:
    """Extract top-level `name = {value}` pairs, anchored at line start.

    Anchoring matters: an unanchored search for `title` also matches inside
    `booktitle`, which silently mislabels every @inproceedings entry.
    """
    out: dict = {}
    for m in re.finditer(r"(?mi)^\s*([a-z_]+)\s*=\s*", body):
        name = m.group(1).lower()
        rest = body[m.end() :]
        if rest.startswith("{"):
            end = _match_brace(rest, 0)
            value = rest[1:end]
        elif rest.startswith('"'):
            end = rest.index('"', 1)
            value = rest[1:end]
        else:
            value = rest.split(",")[0]
        out.setdefault(name, re.sub(r"\s+", " ", value).strip())
    return out


def normalize_title(title: str) -> str:
    t = re.sub(r"\{|\}|\\", "", title or "").lower()
    return re.sub(r"[^a-z0-9]", "", t)


def normalize_doi(doi: str) -> str:
    d = (doi or "").strip().lower()
    d = re.sub(r"^https?://(dx\.)?doi\.org/", "", d)
    return d


def strip_noise(body: str) -> str:
    """Drop DBLP bookkeeping fields from an entry body.

    The stripped fields (biburl, bibsource, timestamp) are the *last* ones in a
    DBLP entry, and their values wrap across lines. A naive line filter that
    skips until the next `name =` therefore also swallows the entry's closing
    brace, producing unparseable BibTeX. So the final line is always kept, and
    the result is discarded entirely if brace balance does not survive.
    """
    lines = body.splitlines()
    if len(lines) < 2:
        return body

    *head, last = lines
    kept, skipping = [], False
    for line in head:
        m = re.match(r"\s*([a-z_]+)\s*=", line, re.I)
        if m:
            skipping = m.group(1).lower() in STRIP_FIELDS
        if not skipping:
            kept.append(line)
    kept.append(last)
    stripped = "\n".join(kept)

    # Never trade valid BibTeX for tidiness: if anything went wrong, keep the
    # original entry verbatim.
    if stripped.count("{") != stripped.count("}") or not stripped.rstrip().endswith("}"):
        return body
    if body.count("{") != body.count("}"):
        return body
    return stripped


# --- fetching ----------------------------------------------------------------


def fetch(url: str, attempts: int = 3) -> str:
    last = None
    for i in range(attempts):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as resp:
                if resp.status != 200:
                    raise urllib.error.HTTPError(url, resp.status, "unexpected status", resp.headers, None)
                return resp.read().decode("utf-8", errors="replace")
        except Exception as exc:  # noqa: BLE001 - retry on anything transient
            last = exc
            print(f"  attempt {i + 1}/{attempts} failed: {exc}", file=sys.stderr)
            if i + 1 < attempts:
                time.sleep(5 * (i + 1))
    raise SystemExit(f"FAILED: could not fetch {url}: {last}")


# --- classification ----------------------------------------------------------


def classify(remote: list[Entry], local: list[Entry], include_preprints: bool,
             include_datasets: bool = False):
    local_dois = {e.doi for e in local if e.doi}
    local_titles = {normalize_title(e.title) for e in local if e.title}
    local_keys = {e.key for e in local}

    new, uncertain, duplicate, skipped = [], [], [], []

    for e in remote:
        if e.type in SKIP_TYPES:
            skipped.append((e, f"@{e.type}"))
            continue
        if e.key.startswith(SKIP_KEY_PREFIXES) and not include_datasets:
            skipped.append((e, "dataset/artifact"))
            continue
        if e.is_preprint and not include_preprints:
            skipped.append((e, "preprint"))
            continue
        if e.key in local_keys:
            duplicate.append((e, "key already present"))
            continue
        if e.doi and e.doi in local_dois:
            duplicate.append((e, f"doi {e.doi}"))
            continue

        nt = normalize_title(e.title)
        if nt and nt in local_titles:
            duplicate.append((e, "exact title"))
            continue

        # Near-miss titles are the dangerous case: the arXiv and published
        # versions of one paper often differ by a word or two. Import, but
        # surface it for review rather than guessing.
        close = difflib.get_close_matches(nt, [t for t in local_titles if t], n=1, cutoff=FUZZY_THRESHOLD)
        if close:
            ratio = difflib.SequenceMatcher(None, nt, close[0]).ratio()
            match = next((x.title for x in local if normalize_title(x.title) == close[0]), close[0])
            uncertain.append((e, match, ratio))
        else:
            new.append(e)

    return new, uncertain, duplicate, skipped


# --- reporting ---------------------------------------------------------------


def build_report(new, uncertain, duplicate, skipped, total_remote, total_local) -> str:
    L = []
    added = len(new) + len(uncertain)
    L.append(f"Fetched **{total_remote}** entries from [DBLP](https://dblp.org/pid/{DBLP_PID}.html); "
             f"`my.bib` had **{total_local}**.")
    L.append("")
    L.append(f"Appending **{added}** entr{'y' if added == 1 else 'ies'}. "
             "Existing entries were not modified.")
    L.append("")

    if new:
        L.append(f"### New ({len(new)})")
        for e in new:
            L.append(f"- `{e.key}` — {e.title}")
        L.append("")

    if uncertain:
        L.append(f"### Needs review — possible duplicates ({len(uncertain)})")
        L.append("")
        L.append("These were added, but their titles closely match entries you already have "
                 "(typically an arXiv version vs the published one). **Delete any that are duplicates "
                 "before merging.**")
        L.append("")
        for e, match, ratio in uncertain:
            L.append(f"- `{e.key}` — {e.title}")
            L.append(f"  - {ratio:.0%} similar to existing: _{match}_")
        L.append("")

    if skipped:
        reasons: dict = {}
        for _, why in skipped:
            reasons[why] = reasons.get(why, 0) + 1
        summary = ", ".join(f"{n} {why}" for why, n in sorted(reasons.items()))
        L.append(f"### Skipped ({len(skipped)})")
        L.append("")
        L.append(f"{summary}. Flags: `--include-preprints`, `--include-datasets`.")
        L.append("")

    L.append(f"<sub>{len(duplicate)} already present. "
             "Generated by `bin/update_dblp_bib.py`.</sub>")
    return "\n".join(L)


# --- main --------------------------------------------------------------------


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dry-run", action="store_true", help="report only; do not write")
    ap.add_argument("--include-preprints", action="store_true", help="import arXiv/CoRR entries too")
    ap.add_argument("--include-datasets", action="store_true", help="import DBLP data/ artifact entries too")
    ap.add_argument("--report", type=Path, help="write the markdown report here")
    ap.add_argument("--min-entries", type=int, default=MIN_ENTRIES)
    ap.add_argument("--bib", type=Path, default=BIB_PATH)
    args = ap.parse_args()

    if not args.bib.exists():
        raise SystemExit(f"FAILED: {args.bib} not found (run from the repo root)")

    print(f"Fetching {DBLP_URL}")
    remote_text = fetch(DBLP_URL)
    remote = parse_bib(remote_text)
    print(f"  parsed {len(remote)} entries")

    # Fail closed rather than truncating a real bibliography on a bad response.
    if len(remote) < args.min_entries:
        raise SystemExit(
            f"FAILED: only {len(remote)} entries parsed (expected >= {args.min_entries}). "
            "Refusing to proceed; treating this as a bad response."
        )

    local_text = args.bib.read_text(encoding="utf-8")
    local = parse_bib(local_text)
    print(f"  {args.bib} has {len(local)} entries")

    new, uncertain, duplicate, skipped = classify(remote, local, args.include_preprints, args.include_datasets)
    to_add = new + [u[0] for u in uncertain]

    report = build_report(new, uncertain, duplicate, skipped, len(remote), len(local))
    if args.report:
        args.report.write_text(report, encoding="utf-8")
    print("\n" + report + "\n")

    if not to_add:
        print("Nothing to add.")
        return 0

    if args.dry_run:
        print(f"[dry-run] would append {len(to_add)} entries to {args.bib}")
        return 0

    chunks = [strip_noise(e.body) for e in to_add]
    appended = local_text.rstrip("\n") + "\n\n" + "\n\n".join(chunks) + "\n"
    args.bib.write_text(appended, encoding="utf-8")
    print(f"Appended {len(to_add)} entries to {args.bib}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
