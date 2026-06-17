# Deploying with Docker + nginx + Cloudflare

This app is a **TanStack Start SSR** application that builds to a Cloudflare
Worker. This setup self-hosts it behind nginx with TLS terminated by your
**Cloudflare Origin Certificate**.

```
Internet ─▶ Cloudflare (proxied DNS) ─TLS─▶ nginx :443 ─┬─ /assets/* ─▶ static files (dist/client)
                                                        └─ everything else ─▶ app :8787 (Worker SSR)
```

## Why this shape

1. **Build เกิดในตัว Docker** (multi-stage build) — ไม่ต้อง `npm run build` บน host
   อีกต่อไป ทำได้เพราะไฟล์ media หนักถูกย้ายไป Cloudflare R2 แล้ว (ดู [R2.md](R2.md))
   build context จึงเล็กพอที่ `vite build` ไม่ OOM
2. nginx เสิร์ฟไฟล์ static ตรงๆ (รองรับ byte-range สำหรับวิดีโอ/เสียง) และ
   **Worker ทำแค่ SSR** — app container strip asset binding ออกจาก config ตอน start

> ทั้ง dist/client (static) และ dist/server (worker) ถูก build แล้ว **bake เข้า image**
> ตอน `docker compose build` ไม่มีการ mount `./dist` จาก host อีกแล้ว

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

## 3. ตั้งค่า R2 base URL

แก้ไฟล์ `.env` ให้ `VITE_R2_BASE` ชี้ไป R2 bucket ของคุณ (ดู [R2.md](R2.md)):

```bash
VITE_R2_BASE=https://media.nanfest.com
```

> compose จะอ่าน `.env` แล้วส่งค่านี้เป็น **build arg** เพื่อฝังเข้า client bundle
> (ค่านี้ต้องมีตอน build ไม่ใช่ตอน runtime)

## 4. Build + Run

```bash
docker compose up -d --build
```

คำสั่งเดียวจบ — build dist ในตัว Docker แล้วรันทั้ง nginx + worker

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
git pull                            # เอาโค้ดล่าสุด
docker compose up -d --build        # build ใหม่ + restart ในคำสั่งเดียว
```

ไม่ต้องลง Node.js บน server แล้ว — Docker จัดการ build ให้ทั้งหมด

## Notes

- **Build ใน Docker ใช้ RAM พอควร** (vite bundle รูป ES-import ~1GB) แนะนำให้
  Docker VM มี RAM อย่างน้อย ~4–6GB ถ้า build แล้วโดน kill (OOM) ให้เพิ่ม RAM
  ที่ Docker Desktop → Settings → Resources หรือเพิ่ม swap บน server
- `app` is not published to the host — only nginx reaches it over the internal
  `web` network.
- Real visitor IPs are restored from the `CF-Connecting-IP` header (see the
  `set_real_ip_from` block in the nginx config; update the ranges from
  https://www.cloudflare.com/ips/ if Cloudflare changes them).
- This setup runs the Worker via `wrangler dev` (the local `workerd` runtime).
  It needs no Cloudflare account, but it is the dev server — fine for a small
  self-hosted site, not a high-traffic origin.
