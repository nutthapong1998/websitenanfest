# syntax=docker/dockerfile:1
#
# Tiny runtime image: just Wrangler, which runs the prebuilt Cloudflare Worker
# on the local `workerd` runtime (no Cloudflare account needed).
#
# The app's build output (./dist) is NOT baked in — it's ~6 GB of bundled media
# assets, which OOMs an in-container `vite build`. Instead you build it on the
# host (`npm run build`) and mount ./dist into this container (see compose).
#
#   1. npm run build           # produces ./dist on your machine
#   2. docker compose up -d    # serves it behind nginx + TLS
#
FROM node:22-slim

WORKDIR /app
ENV NODE_ENV=production \
    WRANGLER_SEND_METRICS=false

RUN npm install -g wrangler@4.94.0

COPY app-entrypoint.sh /usr/local/bin/app-entrypoint.sh
RUN chmod +x /usr/local/bin/app-entrypoint.sh

EXPOSE 8787

# Strips the (oversized) asset binding, then runs the Worker for SSR on 0.0.0.0.
ENTRYPOINT ["/usr/local/bin/app-entrypoint.sh"]
