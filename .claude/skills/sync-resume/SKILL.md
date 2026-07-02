---
name: sync-resume
description: Update src/data/resume.js from the source résumé PDF (raw/Andrei Fedianov - Resume 2026.pdf). Use when the résumé PDF has been revised and the site's structured data needs to catch up — new or changed roles, bullet highlights, technologies, dates, locations, education, or skills. Triggers on "sync the resume", "update resume from the PDF", "the resume PDF changed", "pull in the new resume".
---

# Sync résumé data from the PDF

Bring `src/data/resume.js` (the site's single source of truth) into sync with the latest source résumé at `raw/Andrei Fedianov - Resume 2026.pdf`, applying any new or changed data **without clobbering site-only fields**.

## Procedure

1. **Read the source PDF** `raw/Andrei Fedianov - Resume 2026.pdf` with the Read tool (pass a page range, e.g. `pages: "1-5"`; it's ~2 pages). Extract every section: header/contact, each experience entry (company, location, role/title line, date range, bullet highlights, the "Major Technologies used" line), education, and skills groups.
2. **Read `src/data/resume.js`** to see the current structured data and its shape.
3. **Diff PDF → data.** Determine exactly what changed: added / removed / reworded roles, new or edited highlight bullets, changed tech lists, updated dates or locations, new education/certifications, changed skills.
4. **Apply the changes** to `src/data/resume.js`, preserving the export shape (`profile`, `contact`, `experience[]`, `education[]`, `skills[]`) and field names. Use targeted edits; don't rewrite the whole file.
5. **Verify:** run `pnpm build` (must succeed) and `pnpm format`. Optionally grep `dist/index.html` to confirm new content rendered and stale content is gone.
6. **Report** a concise, per-section summary of exactly what changed. Do **not** commit or deploy unless the user asks (their workflow is to commit explicitly).

## Field-mapping rules (important)

The PDF is **not** a 1:1 match for the data file — some fields are site-only and must be preserved:

- **`profile.title`, `profile.tagline`, `profile.summary`** — site-only copy. The PDF header has only the name + email, so there is nothing to map here. **Never overwrite these from the PDF.** Only touch them if the user explicitly asks.
- **`contact.linkedin`, `contact.github`** — site-only; the PDF lists only an email. Preserve them. Update `contact.email` only if it actually changed in the PDF.
- **`experience[].role`** — the job title/subtitle line (e.g. `Staff Backend Engineer — Contractor`). Use an em dash (`—`) to match existing style.
- **`experience[].highlights`** — the bullet list, verbatim from the PDF. Fix obvious PDF line-wrap artifacts (e.g. `inte- grations` → `integrations`, a hyphen split across lines). Preserve real punctuation (`&`, `/`, etc.).
- **`experience[].tech`** — the "Major Technologies used" line, split into an array of the individual items.
- **Mirror the PDF faithfully, including removals.** If the PDF drops a detail (a `(Remote)` tag, a bullet, a tech item), remove it from the data too — but call out every removal in the summary so the user can object.
- `experience[]` stays reverse-chronological, matching the PDF order.
- Watch for renames: a company/role can change between revisions (e.g. a project name becoming the employer). Update `company`/`role` accordingly rather than adding a duplicate entry.

## Style

Match `.prettierrc`: **no semicolons, double quotes, 2-space indent, es5 trailing commas, LF.** Running `pnpm format` after the edits enforces this.
