/* Code & Sorcery zine: small progressive enhancements.
   Every page works without this file; it adds the ink switcher, publication
   filters, venue labels, the party roster and character sheets, and groups
   the teaching list by term. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const norm = (s) =>
    String(s || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim();

  /* ---------- spot ink ---------- */
  const inks = $$(".ink-btn");
  function setInk(btn) {
    document.documentElement.style.setProperty("--spot", btn.dataset.c);
    inks.forEach((b) => b.setAttribute("aria-pressed", b === btn));
    try {
      localStorage.setItem("cs-ink", btn.id);
    } catch (e) {}
  }
  inks.forEach((b) => b.addEventListener("click", () => setInk(b)));
  let saved = null;
  try {
    saved = localStorage.getItem("cs-ink");
  } catch (e) {}
  if (inks.length) setInk(document.getElementById(saved) || inks[0]);

  /* ---------- venue labels ---------- */
  const JOURNALS = {
    "entertain. comput.": ["Entertainment Computing", "EC"],
    "entertainment computing": ["Entertainment Computing", "EC"],
    "j. syst. softw.": ["Journal of Systems and Software", "JSS"],
    "journal of systems and software": ["Journal of Systems and Software", "JSS"],
    "inf. softw. technol.": ["Information and Software Technology", "IST"],
    "information and software technology": ["Information and Software Technology", "IST"],
    "empir. softw. eng.": ["Empirical Software Engineering", "EMSE"],
    "empirical software engineering": ["Empirical Software Engineering", "EMSE"],
    "ieee trans. games": ["IEEE Transactions on Games", "ToG"],
    "ieee transactions on games": ["IEEE Transactions on Games", "ToG"],
    "acm comput. surv.": ["ACM Computing Surveys", "CSUR"],
    "acm computing surveys": ["ACM Computing Surveys", "CSUR"],
  };
  const PATTERNS = [
    [/Games and Software Engineering/i, "GAS@ICSE"],
    [/Mining Software Repositories/i, "MSR"],
    [/Automation of Software Test/i, "AST@ICSE"],
    [/Software Reliability Engineering Workshops/i, "ISSREW"],
    [/SERP4IoT|Software Engineering Research and Practices for the IoT/i, "SERP4IoT"],
    [/Conference on Games|\bCoG\b/i, "CoG"],
    [/ICEC|Entertainment Computing - ICEC/i, "ICEC"],
    [/Model Driven Engineering|MODELS/i, "MODELS"],
    [/Asia-Pacific Software Engineering/i, "APSEC"],
    [/Source Code Analysis and Manipulation/i, "SCAM"],
    [/Foundations of Digital Games/i, "FDG"],
    [/Artificial Intelligence and Interactive Digital Entertainment/i, "AIIDE"],
    [/CHI PLAY|Computer-Human Interaction in Play/i, "CHI PLAY"],
  ];
  function venueInfo(type, venue, abbr) {
    const v = String(venue || "");
    if (type === "article") {
      const j = JOURNALS[norm(v)];
      return { kind: "Journal", short: abbr || (j ? j[1] : v), full: j ? j[0] : v };
    }
    let short = abbr || "";
    if (!short)
      for (const [re, s] of PATTERNS)
        if (re.test(v)) {
          short = s;
          break;
        }
    if (!short) {
      const m = v.match(/,\s*([A-Za-z][\w@/.\- ]{1,24}?)\s+\d{4}\s*,/);
      short = m ? m[1] : v.split(",")[0];
    }
    const kind = /workshop/i.test(v) ? "Workshop" : "Conference";
    return { kind, short, full: v };
  }

  /* ---------- the codex (publications) ---------- */
  function decoratePub(el) {
    const info = venueInfo(el.dataset.type, el.dataset.venue, el.dataset.abbr);
    el.dataset.kind = info.kind;
    const s = $(".vt-short", el),
      k = $(".vt-kind", el);
    if (s && !s.textContent.trim()) s.textContent = info.short;
    if (k) k.textContent = info.kind;
    return info;
  }
  $$(".codex-card").forEach((c) => {
    const info = venueInfo(c.dataset.type, c.dataset.venue, c.dataset.abbr);
    const s = $(".vt-short", c);
    if (s && !s.textContent.trim()) s.textContent = info.short;
  });
  /* ---------- lab members (from #party-data) ---------- */
  const dataEl = $("#party-data");
  let raw = [];
  if (dataEl) {
    try {
      raw = JSON.parse(dataEl.textContent);
    } catch (e) {
      raw = [];
    }
  }
  const peopleUrl = (dataEl && dataEl.dataset.people) || "/party/";
  raw.forEach((p) => {
    p.name = (p.md.match(/^#\s+(.+)$/m) || [, p.id])[1].trim();
  });
  // True when a BibTeX author name refers to member m: an exact match on
  // bib_name (or the profile name), or the same first name plus a last name
  // that appears in the member's full name.
  const sameAuthor = (author, m) => {
    const target = norm(m.bib || m.name),
      tokens = target.split(/\s+/),
      n = norm(author),
      parts = n.split(/\s+/);
    return n === target || (parts[0] === tokens[0] && tokens.includes(parts[parts.length - 1]));
  };
  const memberOf = (author) => raw.find((m) => sameAuthor(author, m));
  const memberUrl = (m) => `${peopleUrl}#member-${m.id}`;

  const codex = $("#codex-list");
  if (codex) {
    const pubs = $$(".pub", codex);
    pubs.forEach(decoratePub);
    $$(".au .a", codex).forEach((a) => {
      const m = memberOf(a.dataset.n);
      if (!m) return;
      const link = document.createElement("a");
      link.className = "a member-link";
      link.href = memberUrl(m);
      link.title = `${m.name}: character sheet`;
      link.innerHTML = a.innerHTML;
      a.replaceWith(link);
    });
    const controls = $(".controls");
    controls.hidden = false;
    const q = $("#q"),
      chips = $$(".chip", controls),
      empty = $("#empty");
    let kind = "All";
    function apply() {
      const term = norm(q.value);
      let shown = 0;
      pubs.forEach((p) => {
        const hay = norm([p.dataset.title, p.dataset.authors, p.dataset.venue, $(".vt-short", p).textContent, p.dataset.year].join(" "));
        const ok = (kind === "All" || p.dataset.kind === kind) && (!term || hay.includes(term));
        p.closest("li").hidden = !ok;
        if (ok) shown++;
      });
      $$("h2.bibliography", codex).forEach((h) => {
        const ol = h.nextElementSibling;
        h.hidden = ol ? !$$("li", ol).some((li) => !li.hidden) : false;
      });
      empty.hidden = shown > 0;
    }
    chips.forEach((c) =>
      c.addEventListener("click", () => {
        kind = c.dataset.kind;
        chips.forEach((x) => x.setAttribute("aria-pressed", x === c));
        apply();
      })
    );
    q.addEventListener("input", apply);
    $("#reset").addEventListener("click", () => {
      q.value = "";
      chips[0].click();
      q.focus();
    });
  }

  /* ---------- the party ---------- */
  if (dataEl) {
    const CLASSES = { prof: ["Archmage", 20], phd: ["Wizard", 3], msc: ["Sorcerer", 2], ug: ["Apprentice", 1], staff: ["Artificer", 1] };
    const ABIL = ["Code", "Data", "Play", "Lore", "Quill", "Charm"];
    const party = raw.map((p) => {
      const name = p.name;
      const role = (p.md.match(/^>\s*(.+)$/m) || [, ""])[1].trim();
      let c = "ug";
      if (/professor/i.test(role)) c = "prof";
      else if (/ph\.?\s?d/i.test(role)) c = "phd";
      else if (/master/i.test(role)) c = "msc";
      else if (/assistant/i.test(role)) c = "staff";
      const rank = role.split(/\s+[·–—-]\s+/)[0];
      const mentor = (role.match(/co-supervised with\s+([^·]+)/i) || [, ""])[1].trim();
      const when = role.match(/\b(started|starting)\s+([A-Z][a-z]+\.?\s+\d{4})/i);
      const joined = when ? (/starting/i.test(when[1]) ? "Arriving " : "") + when[2] : "";
      const traits = [];
      if (mentor) traits.push("Allied mentor: " + mentor);
      if (/mitacs/i.test(role)) traits.push("Traveller from afar (Mitacs Globalink)");
      if (c === "prof") traits.push("Leads the Code & Sorcery Lab");
      const tmp = document.createElement("div");
      tmp.innerHTML = p.html;
      $$("h1", tmp).forEach((x) => x.remove());
      $$("blockquote", tmp).forEach((x) => x.remove());
      const quest = tmp.innerHTML.replace(/<!--[\s\S]*?-->/g, "").trim();
      return { ...p, name, role, c, rank, joined, traits, quest };
    });
    const spellsOf = (m) =>
      $$("#party-spells .pub")
        .filter((p) => (p.dataset.authors || "").split(";").some((a) => sameAuthor(a, m)))
        .map((p) => ({ el: p, info: venueInfo(p.dataset.type, p.dataset.venue, p.dataset.abbr) }));
    // Other lab members on the same paper, linked to their sheets.
    const alliesOf = (el, m) =>
      (el.dataset.authors || "")
        .split(";")
        .map(memberOf)
        .filter((x, i, arr) => x && x.id !== m.id && arr.indexOf(x) === i)
        .map((x) => `<a href="#member-${x.id}">${esc(x.name.split(" ")[0])}</a>`)
        .join(", ");
    const portrait = (m) =>
      m.img
        ? `<div class="duo"><img src="${esc(m.img)}" alt="${esc(m.name)}" width="320" height="320" loading="lazy"></div>`
        : `<div class="duo blank"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#crest"/></svg></div>`;
    const card = (m, href) => {
      const [cl, lv] = CLASSES[m.c];
      return `<a class="card member${m.alum ? " alum" : ""}" href="${href}">${portrait(m)}<span class="cls">${cl} · Lv ${lv}</span><h3>${esc(
        m.name
      )}</h3><span class="sub">${esc(m.rank)}</span><span class="go">Character sheet</span></a>`;
    };

    const preview = $("#party-preview");
    if (preview) {
      const cur = party.filter((m) => !m.alum && m.c !== "prof" && m.img);
      for (let i = cur.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cur[i], cur[j]] = [cur[j], cur[i]];
      }
      preview.innerHTML = cur
        .slice(0, +preview.dataset.count || 4)
        .map((m) => card(m, memberUrl(m)))
        .join("");
    }

    const roster = $("#roster");
    if (roster) {
      const groups = [
        ["The Guild Master", party.filter((m) => m.c === "prof")],
        ["Adventurers", party.filter((m) => m.c !== "prof" && !m.alum)],
        ["Hall of Legends · alumni", party.filter((m) => m.alum)],
      ];
      roster.innerHTML = groups
        .filter((g) => g[1].length)
        .map(
          ([t, ms]) =>
            `<div class="roster-group"><p class="label">${t}</p><div class="roster">${ms.map((m) => card(m, `#member-${m.id}`)).join("")}</div></div>`
        )
        .join("");
      const slot = $("#sheet-slot");
      function sheet(id) {
        const i = party.findIndex((m) => m.id === id);
        if (i < 0) {
          slot.innerHTML = "";
          return;
        }
        const m = party[i],
          [cl, lv] = CLASSES[m.c],
          sp = spellsOf(m);
        const prev = party[(i - 1 + party.length) % party.length],
          next = party[(i + 1) % party.length];
        const max = m.c === "prof" ? 5 : 50;
        const spells = sp.length
          ? `<ul class="spells">${sp
              .slice(0, max)
              .map(({ el, info }) => {
                const allies = alliesOf(el, m);
                return `<li><a href="${esc(el.dataset.link || "/codex/#" + el.id)}">${esc(el.dataset.title)}</a><span>${esc(info.short)} · ${esc(
                  el.dataset.year
                )}${allies ? ` · with ${allies}` : ""}</span></li>`;
              })
              .join("")}</ul>${
              sp.length > max ? `<p style="margin-top:8px"><a class="btn" href="/codex/">All ${sp.length} in the codex</a></p>` : ""
            }`
          : `<p class="ph">No spells inscribed in the codex yet.</p>`;
        slot.innerHTML = `<div class="sheet-wrap" id="sheet">
          <div class="sheet-nav"><a class="btn ghost" href="#party">Back to the party</a><span class="pair"><a class="btn ghost" href="#member-${
            prev.id
          }">Prev</a><a class="btn ghost" href="#member-${next.id}">Next</a></span></div>
          <article class="sheet" aria-label="Character sheet: ${esc(m.name)}">
            <span class="tag">Character sheet</span>
            <div class="sheet-top">
              <div class="sheet-name"><h2>${esc(m.name)}</h2><span class="lbl">Character name</span></div>
              <div class="fields">
                <div><b>${cl} ${lv}</b><span class="lbl">Class &amp; level</span></div>
                <div><b>${esc(m.rank || "—")}</b><span class="lbl">Rank</span></div>
                <div><b>Code &amp; Sorcery</b><span class="lbl">Guild</span></div>
                <div><b>${esc(m.joined || "—")}</b><span class="lbl">Joined the party</span></div>
                <div><b>${m.alum ? '<span class="stamp-alum">Legend</span>' : "Adventuring"}</b><span class="lbl">Status</span></div>
                <div><b>${sp.length}</b><span class="lbl">Spells in the codex</span></div>
              </div>
            </div>
            <div class="sheet-body">
              <div><div class="abilities">${ABIL.map(
                (a) => `<div class="ab"><span class="lbl">${a}</span><div class="score">?</div><span class="mod">+?</span></div>`
              ).join("")}</div><p class="ab-note">Scores not yet rolled</p></div>
              <div>
                <div class="portrait">${portrait(m)}<span class="lbl">Portrait</span></div>
                <div class="prof"><ul>${
                  m.traits.length ? m.traits.map((t) => `<li>${esc(t)}</li>`).join("") : '<li class="none">—</li>'
                }</ul><h4>Features &amp; traits</h4></div>
              </div>
              <div class="panels">
                <div class="panel">${
                  m.quest ? `<div class="quest-text">${m.quest}</div>` : '<p class="ph">This quest has not been written down yet.</p>'
                }<h4>Current quest</h4></div>
                <div class="panel">${spells}<h4>Spells cast · publications</h4></div>
              </div>
            </div>
          </article></div>`;
      }
      function route() {
        const h = location.hash.slice(1);
        if (h.startsWith("member-")) {
          sheet(h.slice(7));
          $("#sheet-slot").scrollIntoView();
        } else {
          slot.innerHTML = "";
        }
      }
      addEventListener("hashchange", route);
      route();
    }
  }

  /* ---------- training grounds ---------- */
  const src = $("#training-src"),
    terms = $("#terms");
  if (src && terms) {
    const rows = $$("li", src)
      .map((li) => {
        const t = li.textContent.trim();
        const m = t.match(/^(\S+(?:\s\S+)?)\s+-\s+(.*)\s+\((\w+)\s+(\d{4})\)\s*$/);
        if (!m) return null;
        const grad = /GRAD COURSE/i.test(m[2]);
        return { code: m[1].replace("-", " "), name: m[2].replace(/\s*-\s*GRAD COURSE/i, ""), term: `${m[3]} ${m[4]}`, grad };
      })
      .filter(Boolean);
    if (rows.length) {
      const ts = [...new Set(rows.map((r) => r.term))];
      terms.innerHTML = ts
        .map(
          (t) =>
            `<div class="term"><h3 class="lino">${esc(t)}</h3><ul class="courses">${rows
              .filter((r) => r.term === t)
              .map((r) => `<li class="course"><code>${esc(r.code)}</code><div><b>${esc(r.name)}</b>${r.grad ? "<em>Graduate</em>" : ""}</div></li>`)
              .join("")}</ul></div>`
        )
        .join("");
      src.hidden = true;
    }
  }
})();
