# andreifedianov.com

Personal résumé site for Andrei Fedianov — a single-page, statically generated
site built with [Astro](https://astro.build/). Minimalist typographic design,
light/dark theme toggle, amber accent, print-friendly. Ships zero client-side
JavaScript apart from a tiny inline theme toggle.

## Stack

- **[Astro 5](https://astro.build/)** — static site generation
- **pnpm** — package manager
- Plain CSS with custom properties (light/dark theming); no CSS framework

## Getting started

```sh
pnpm install
pnpm dev        # dev server at http://localhost:4321
```

## Commands

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Start the dev server (`http://localhost:4321`)  |
| `pnpm build`        | Build the static site to `dist/`                |
| `pnpm preview`      | Serve the production build locally              |
| `pnpm format`       | Format `src/` with Prettier                     |
| `pnpm deploy`       | Build + deploy to the server over Tailscale     |
| `pnpm deploy:local` | Build + deploy to the server over the LAN       |

## Editing content

**All résumé content lives in [`src/data/resume.js`](src/data/resume.js)** —
exported as `profile`, `contact`, `experience`, `education`, and `skills`. It's
the single source of truth: edit that file to update the site. You never need to
touch markup for a content change.

The page is composed in `src/pages/index.astro` from section components in
`src/components/`, each of which reads from `resume.js`. Theme tokens live in
`src/styles/global.css` (light is the default; `:root[data-theme="dark"]`
overrides).

## Deployment

The site is served from a self-hosted **Unraid + nginx** box and deployed via
`rsync` over SSH (see [`scripts/deploy.sh`](scripts/deploy.sh)):

```sh
pnpm deploy         # -> Tailscale address
pnpm deploy:local   # -> LAN address (same box)
```

`DEPLOY_HOST` / `DEPLOY_PATH` are env-overridable. Deploys authenticate as
`root` over SSH, so a one-time `ssh root@<host>` (to accept the host key, and
ideally `ssh-copy-id` for passwordless deploys) is required first.

The previous AWS S3 hosting is parked under [`legacy/`](legacy/README.md).

---

Bootstrapped from [gatsby-starter-julia](https://github.com/niklasmtj/gatsby-starter-julia),
since fully rebuilt on Astro.
