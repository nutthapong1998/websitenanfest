#!/bin/sh
set -e

CFG=/app/dist/server/wrangler.json
RUNTIME=/app/dist/server/wrangler.runtime.json

if [ ! -f "$CFG" ]; then
  echo "ERROR: $CFG not found." >&2
  echo "Build the app on the host first:  npm run build" >&2
  exit 1
fi

# Strip the static-assets binding from the generated Worker config.
# This app bundles media files (videos/audio/large PNGs) that exceed Cloudflare
# Workers' 25 MiB-per-asset limit, so the Worker can't serve them. Instead, nginx
# serves everything under ./dist/client directly (no size limit) and the Worker
# handles SSR only.
node -e '
  const fs = require("fs");
  const cfg = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
  delete cfg.assets;
  fs.writeFileSync(process.argv[2], JSON.stringify(cfg, null, 2));
' "$CFG" "$RUNTIME"

exec wrangler dev --config "$RUNTIME" --ip 0.0.0.0 --port 8787
