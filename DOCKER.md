# Deploying with Docker + nginx + Cloudflare

This app is a **TanStack Start SSR** application that builds to a Cloudflare
Worker. This setup self-hosts it behind nginx with TLS terminated by your
**Cloudflare Origin Certificate**.

```
Internet ─▶ Cloudflare (proxied DNS) ─TLS─▶ nginx :443 ─┬─ /assets/* ─▶ static files (./dist/client)
                                                        └─ everything else ─▶ app :8787 (Worker SSR)
```

## Why this shape

Two things about this app drive the design:

1. **The build is ~6 GB** (it bundles a large media library). Building it
   *inside* Docker OOMs a normal Docker VM, so you build on the host and the
   container just runs the output.
2. **Many media files exceed Cloudflare Workers' 25 MiB-per-asset limit**
   (videos up to ~160 MB, audio up to ~110 MB). The Worker can't serve those, so
   **nginx serves all static files directly** (no size limit, with byte-range
   support for video/audio) and the **Worker handles SSR only**. The app
   container strips the asset binding from the generated config at startup.

> Note: because of (2), this app also can't be deployed to Cloudflare Workers
> as-is — the same 25 MiB limit applies there. To put it on Cloudflare you'd
> need to host those large media files elsewhere (R2, a CDN, etc.).

## 1. Add your Cloudflare Origin Certificate

See `certs/README.txt`. In short: Cloudflare Dashboard → your domain →
**SSL/TLS → Origin Server → Create Certificate**, then save the two files as:

```
certs/cloudflare-origin.pem
certs/cloudflare-origin.key
```

Set the Cloudflare SSL/TLS mode to **Full (strict)**.

## 2. Set your domain in nginx

Edit `nginx/conf.d/default.conf` and replace `example.com www.example.com`
on the `server_name` line with your real domain.

## 3. Build the app (on the host)

```bash
npm ci
npm run build        # produces ./dist  (run this on a machine with >=8 GB free RAM)
```

## 4. Run

```bash
docker compose up -d --build
```

Check it:

```bash
docker compose ps
docker compose logs -f app          # Worker should print "Ready on http://0.0.0.0:8787"
curl -k https://localhost/          # SSR HTML
```

## 5. Point DNS

In Cloudflare DNS, create an **A/AAAA record** for your domain → this server's
public IP, with the **proxy (orange cloud) enabled**. Open ports **80** and
**443** on the firewall.

## Updating after code changes

```bash
npm run build
docker compose restart app          # app re-reads ./dist on start
# (restart nginx too if client assets changed: docker compose restart nginx)
```

## Notes

- `./dist` is mounted into both containers: the app (Worker bundle, read-write so
  Wrangler can write its `.wrangler/` scratch dir) and nginx (`dist/client`,
  read-only, served as static files).
- `app` is not published to the host — only nginx reaches it over the internal
  `web` network.
- Real visitor IPs are restored from the `CF-Connecting-IP` header (see the
  `set_real_ip_from` block in the nginx config; update the ranges from
  https://www.cloudflare.com/ips/ if Cloudflare changes them).
- This setup runs the Worker via `wrangler dev` (the local `workerd` runtime).
  It needs no Cloudflare account, but it is the dev server — fine for a small
  self-hosted site, not a high-traffic origin.
