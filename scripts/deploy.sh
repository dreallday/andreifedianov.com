#!/usr/bin/env bash
# Build the site and rsync it to the Unraid nginx webroot.
# Host/path are overridable via env vars (see the deploy scripts in package.json).
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-root@REDACTED_HOST}"      # default: Tailscale
DEPLOY_PATH="${DEPLOY_PATH:-/mnt/user/appdata/nginx-af/www/}"

# Run from the repo root regardless of where the script is invoked.
cd "$(dirname "$0")/.."

echo "→ Building…"
pnpm build

echo "→ Deploying dist/ → ${DEPLOY_HOST}:${DEPLOY_PATH}"
rsync -avz --delete dist/ "${DEPLOY_HOST}:${DEPLOY_PATH}"

echo "✓ Deployed to ${DEPLOY_HOST}"
