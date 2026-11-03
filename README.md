# Code & Sorcery Lab — website

Source for [cslab.quest](https://cslab.quest), the site of the Code & Sorcery Lab (Empirical Game Research) at Ontario Tech University.

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio) theme (v0.14.7) and deployed to the `gh-pages` branch by GitHub Actions. The front end is a custom sword-and-sorcery zine theme layered on top of al-folio (see [Front end](#front-end)).

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

## Contributing content

Lab members are welcome to add posts, projects and their own profile.

1. Create a branch from `main`.
2. Make the change, then preview it with `docker compose up`.
3. Run `npx prettier . --write`.
4. Open a pull request. Merging to `main` deploys the site.

Every image or file you reference must be committed with your change. A
missing file builds without an error but shows as a broken image.

### Add a post

Create `_posts/YYYY-MM-DD-slug.md`. The URL becomes `/dispatches/YYYY/slug/`, and
the `date` field should match the date in the filename.

```yaml
---
layout: post
title: Your title
date: 2026-01-01
description: One sentence, shown on the blog card.
tags: news
author: your-id
thumbnail: assets/posts/your-slug/pic.jpg
---
```

- **Images and PDFs:** put them in `assets/posts/your-slug/` and insert images with
  `{% include figure.liquid path="assets/posts/your-slug/pic.jpg" alt="What the image shows" caption="Optional caption." %}`.
  Always write an `alt`. Responsive `.webp` variants are generated at build
  time for anything under `assets/img/` and `assets/posts/`.
- **Videos:** embed them with `{% include youtube.liquid id="VIDEO_ID" width="560" height="315" %}`.
- **Links to files:** use `{{ '/assets/posts/your-slug/file.pdf' | relative_url }}`.
- **Images from other sites:** avoid hotlinking them. Download them into the post folder instead.
- **Author:** `author` is an id from `_data/authors.yml`. Add yourself there
  (`your-id: { name: Your Name }`) the first time you write a post. Use
  several ids separated by spaces for co-authors.
- **Tags:** the existing ones are `news`, `opinion`, `review`, `tech`, `gamedev`,
  `gameindustry` and `discussion`. Adding a new one means adding it to `display_tags` in
  `_config.yml` so it appears on the blog page.

### Add a project

Create `_projects/slug.md`. The URL becomes `/quests/slug/`.

```yaml
---
layout: page
title: "Short, plain title"
description: "One sentence on the question the project asks."
category: "llm npcs"
importance: 1
---
Two or three short paragraphs: the problem, what we are doing, and what is open.
```

`category` must be one of the `display_categories` in `_pages/projects.md`:
`llm npcs`, `playtesting agents`, `game software engineering`,
`engines and performance` or `generative content`. A project without one of
these categories does not appear on the projects page. `importance` orders the
cards within a category, lowest first. Do not put blog posts in `_projects/`.

### Add or update a team member

1. Create `_pages/students/about_firstname.md`:

   ```markdown
   # Full Name

   > Master's student · started September 2026 · co-supervised with Name (Institution)

   One short paragraph about your research.

   ### Research interests

   - ...

   ### Current project

   - **Thesis:** title
   ```

   Keep the role line in that format, with parts separated by `·`. It is the
   one line shown for everyone. Anything inside `<!-- -->` stays in the file
   but is not published.

2. Add a square photo, ideally 800×800, to `assets/img/`.
3. Add an entry to the `profiles` list in `_pages/profiles.md`, in the right
   group:

   ```yaml
   - image: firstname.jpg
     content: students/about_firstname.md
   ```

   `section:` on the first person of a group starts a new heading. When
   someone finishes, add `graduated: true`. Keep their entry rather than
   deleting it. If your name in BibTeX differs from the `# Full Name` line,
   add `bib_name: Name As In DBLP` so your papers appear on your character
   sheet. An optional `traits:` list adds lines under "Features & traits",
   and `links:` (each with `name:` and `url:`) adds a "Portals" panel.

   The character sheet is built from the profile file: the role line sets the
   class, "co-supervised with" sets the mentor, "Mitacs" adds a trait, and
   your papers become the spells.

### Publications

`_bibliography/my.bib` is synced weekly from DBLP (see Automation). New
papers arrive as a pull request, so most of the time there is nothing to do.

- **Papers DBLP does not have yet:** add the BibTeX entry by hand. The sync
  only appends entries, so manual entries and hand-added fields are never
  overwritten.
- **Featuring a paper:** add `selected = {true}` to show it on the home page
  and mark it "Selected" in the Codex.
- **Hiding a paper:** add `hidden = {true}`. Keep the entry rather than
  deleting it, or the DBLP sync will add it back.
- **Other useful fields:** `pdf`, `code` and `arxiv`.
- **Author names:** write them exactly as on DBLP, so the same person is
  matched across papers.

### Teaching

Edit the list in `_pages/teaching.md`, newest first, one course per line:

```markdown
- CSCI 4160U - Game Development (Fall 2026)
```

## Front end

The site uses a zine theme. Menu names map to pages as follows:

| Menu       | URL            | Layout       | Content                |
| ---------- | -------------- | ------------ | ---------------------- |
| Cover      | `/`            | `cover`      | `_pages/about.md`      |
| Codex      | `/codex/`      | `codex`      | `_bibliography/my.bib` |
| Quests     | `/quests/`     | `quests`     | `_projects/`           |
| Dispatches | `/dispatches/` | `dispatches` | `_posts/`              |
| Party      | `/party/`      | `party`      | `_pages/profiles.md`   |
| Training   | `/training/`   | `training`   | `_pages/teaching.md`   |

Posts and projects use `post` and `page`; both render in the zine style.

- **Cover text:** edit the front matter of `_pages/about.md` (`issue`,
  `cover_photo`, `areas`, `next_issue`) and its body (the welcome).
- **Theme files:** `_layouts/zine*.liquid`, `_includes/zine/`,
  `assets/zine/zine.css` and `assets/zine/zine.js`. The CSS lives outside
  `assets/css/` so the deploy's PurgeCSS step leaves it alone.
- Old URLs (`/publications/`, `/blog/…`, `/people/`, …) redirect to the new
  ones via `_plugins/zine-redirects.rb`.
- `mockups/` holds standalone HTML drafts and is not part of the build.

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
