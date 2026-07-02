# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal **resume site** for Andrei Fedianov — a single-page, statically-generated site built with **Astro 5**. Minimalist typographic design, light/dark theme toggle, amber/gold accent. Zero client JS except a tiny inline theme toggle. Served as static files from a self-hosted **Unraid + nginx** box (reached over Tailscale or LAN). The site was previously hosted on AWS S3 — that Terraform is now parked under `legacy/` (see Deployment).

> History: this repo was previously a Gatsby v2 blog (`gatsby-starter-julia`). It was fully rebuilt as an Astro resume site. The original resume source lives in `raw/Andrei Fedianov - Resume 2026.pdf`.

## Commands

Uses **pnpm** (not npm/yarn).

- `pnpm dev` (or `pnpm start`) — dev server at `http://localhost:4321`
- `pnpm build` — static build to `dist/`
- `pnpm preview` — serve the production build locally
- `pnpm format` — Prettier over `src/**/*.{astro,js,css}`
- No test suite.

Native deps (`esbuild`, `sharp`) require build scripts, which pnpm blocks by default. They're allowlisted in `pnpm-workspace.yaml` under `allowBuilds` — if a fresh `pnpm install` warns about ignored builds, that file is why they should be enabled.

## Architecture

**All resume content lives in one file: `src/data/resume.js`** — exported as `profile`, `contact`, `experience`, `education`, `skills`. This is the single source of truth. To update the resume, edit this data file; you should never need to touch markup for a content change.

Rendering is a straight composition — `src/pages/index.astro` imports the layout and section components, each of which reads from `resume.js`:

- `src/layouts/Base.astro` — HTML shell, SEO/OpenGraph meta, inline favicon, and the **pre-paint theme script** (reads `localStorage.theme` or `prefers-color-scheme` and sets `data-theme` on `<html>` before first paint to avoid a flash).
- `src/components/Header.astro` — hero (name, title, tagline, summary, contact links) + the theme-toggle button and its click handler.
- `src/components/Experience.astro` — maps over `experience[]`; each role renders highlights + a `tech` tag list.
- `src/components/Skills.astro` — maps over `skills[]` groups.
- `src/components/Education.astro` — maps over `education[]`.
- `src/components/Footer.astro`.

### Styling

- `src/styles/global.css` holds theme tokens as CSS custom properties. Light is the `:root` default; `:root[data-theme="dark"]` overrides them. The amber accent (`--accent`) and the "highlighter marker" `.section-title` heading carry over the old site's DNA.
- Component-specific styles use Astro's scoped `<style>` blocks. Cross-theme rules inside a component reach the root via `:global(:root[data-theme="dark"])`.
- Layout pattern: sections are full-bleed (top border spans the viewport) with an inner `.wrap-inner` (`max-width: var(--maxw)`, centered) holding the content. There's a `@media print` block for clean printing.

## Deployment

The site deploys to a self-hosted **Unraid + nginx** box via `rsync` over **SSH** (not the SMB mount — the SMB `admin` user can't write the webroot). `scripts/deploy.sh` runs a fresh `pnpm build`, then `rsync -avz --delete dist/` into the nginx webroot `/mnt/user/appdata/nginx-af/www/`.

- `pnpm deploy` — deploy to the Tailscale address (`root@REDACTED_HOST`, the default)
- `pnpm deploy:local` — deploy to the LAN address (`root@REDACTED_HOST`); same box, same path

`DEPLOY_HOST` and `DEPLOY_PATH` are env-overridable (`deploy:local` just sets `DEPLOY_HOST`). Deploys authenticate as `root` over SSH, so a one-time `ssh root@<host>` (accept host key) — and ideally `ssh-copy-id` for passwordless — must be done first. rsync writes root-owned files at source perms (644/755), which nginx (running as `nobody`) can still read.

### Legacy AWS S3 hosting (parked)

The previous S3 static-website setup lives in `legacy/terraform/` and is dormant. **The S3 buckets still exist** — parking the code didn't remove them. To decommission, run `terraform destroy` from `legacy/terraform/` (needs `codemercenaries` AWS creds; remote state in `s3://REDACTED_STATE_BUCKET`). See `legacy/README.md`.

Code style (`.prettierrc`): **no semicolons, double quotes, 2-space indent, `es5` trailing commas, LF.**
