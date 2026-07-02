#!/usr/bin/env bash
# Build the site and rsync it to the nginx webroot.
# Real host addresses live in a gitignored .env.deploy (see .env.deploy.example).
set -euo pipefail

# Run from the repo root regardless of where the script is invoked.
cd "$(dirname "$0")/.."

# Load local, gitignored deploy config if present.
if [ -f .env.deploy ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env.deploy
  set +a
fi

if [ "${DEPLOY_LOCAL:-}" = "1" ]; then
  HOST="${DEPLOY_HOST_LOCAL:-}"
else
  HOST="${DEPLOY_HOST:-}"
fi
DEPLOY_PATH="${DEPLOY_PATH:-/mnt/user/appdata/nginx-af/www/}"

if [ -z "$HOST" ]; then
  echo "✗ Deploy host not set. Copy .env.deploy.example to .env.deploy and fill it in." >&2
  exit 1
fi

echo "→ Building…"
pnpm build

echo "→ Deploying dist/ → ${HOST}:${DEPLOY_PATH}"
rsync -avz --delete dist/ "${HOST}:${DEPLOY_PATH}"

echo "✓ Deployed to ${HOST}"
