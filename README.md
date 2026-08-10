# Code & Sorcery Lab — website

Source for [cpoli.live](https://cpoli.live), the site of the Code & Sorcery Lab (Empirical Game Research) at Ontario Tech University.

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.14.7) and deployed to the `gh-pages` branch by GitHub Actions.

## Running it locally

```bash
docker compose up
```

Then open <http://localhost:8080>. The container rebuilds on save. Changes to `_config.yml` need a restart.

## Where things live

| Path                   | What it holds                                                |
| ---------------------- | ------------------------------------------------------------ |
| `_posts/`              | Blog posts and news. Filename must be `YYYY-MM-DD-slug.md`.  |
| `_pages/`              | Top-level pages. `students/` holds one file per team member. |
| `_projects/`           | Project cards shown on the projects page.                    |
| `_bibliography/my.bib` | Publications, synced weekly from DBLP.                       |
| `_data/socials.yml`    | Contact links and profile IDs.                               |
| `assets/posts/<slug>/` | Images and files for one post, kept together.                |

## Adding a post

Create `_posts/YYYY-MM-DD-slug.md`:

```yaml
---
layout: post
title: Your title
date: 2026-01-01
description: One sentence, shown on the blog card.
tags: news
thumbnail: assets/posts/your-slug/pic.jpg
---
```

Put images and PDFs in `assets/posts/your-slug/` and reference them with
`{% include figure.liquid path="assets/posts/your-slug/pic.jpg" %}`. Responsive
`.webp` variants are generated at build time for anything under `assets/img/`
and `assets/posts/`.

Existing tags: `news`, `opinion`, `review`, `tech`, `gamedev`, `gameindustry`,
`discussion`. Adding a new one means adding it to `display_tags` in `_config.yml`
so it appears on the blog page.

## Adding a team member

Add a file to `_pages/students/` and an entry to the `profiles` list in
`_pages/profiles.md`.

## Automation

| Workflow                  | What it does                                                   |
| ------------------------- | -------------------------------------------------------------- |
| `deploy.yml`              | Builds and publishes to `gh-pages` on push to `main`.          |
| `update-publications.yml` | Weekly DBLP sync; opens a PR when new papers appear.           |
| `update-citations.yml`    | Refreshes Google Scholar citation counts.                      |
| `prettier.yml`            | Formatting check. Run `npx prettier . --write` before pushing. |
| `broken-links-site.yml`   | Link check against the deployed site.                          |
| `axe.yml`, `codeql.yml`   | Accessibility and code scanning.                               |

Prettier is pinned to the version in `package.json`; CI resolves it from
`package-lock.json`, so use `npm ci` rather than installing a newer release.

## License

[MIT](LICENSE), inherited from al-folio.
