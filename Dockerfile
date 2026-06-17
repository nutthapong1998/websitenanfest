# syntax=docker/dockerfile:1
#
# Multi-stage build — build จะเกิด "ในตัว Docker" ทั้งหมด ไม่ต้อง npm run build บน host
#
# เป็นไปได้เพราะไฟล์ media หนัก (วิดีโอ/เสียง/รูปใหญ่) ถูกย้ายไป Cloudflare R2 แล้ว
# (ดู R2.md) เหลือ source + รูป ES-import ที่ vite ยัง bundle ได้โดยไม่ OOM
#
#   docker compose up -d --build      # build + รัน ในคำสั่งเดียว
#
# ─────────────────────────────────────────────────────────────────────────
# Stage 1: builder — ติดตั้ง deps แล้ว build เป็น ./dist
# ─────────────────────────────────────────────────────────────────────────
FROM node:22-slim AS builder
WORKDIR /app

# ติดตั้ง dependencies (cache layer แยกจาก source เพื่อให้ rebuild เร็ว)
COPY package.json package-lock.json ./
RUN npm ci

# VITE_R2_BASE ต้องมีตอน build เพราะถูกฝังเข้า client bundle
ARG VITE_R2_BASE
ENV VITE_R2_BASE=$VITE_R2_BASE

# build (เพิ่ม heap กัน OOM เผื่อรูปเยอะ)
COPY . .
RUN NODE_OPTIONS=--max-old-space-size=4096 npm run build

# ─────────────────────────────────────────────────────────────────────────
# Stage 2: app — runtime ของ Worker (SSR) ผ่าน wrangler / workerd
# ─────────────────────────────────────────────────────────────────────────
FROM node:22-slim AS app
WORKDIR /app
ENV NODE_ENV=production \
    WRANGLER_SEND_METRICS=false

RUN npm install -g wrangler@4.94.0

COPY app-entrypoint.sh /usr/local/bin/app-entrypoint.sh
RUN chmod +x /usr/local/bin/app-entrypoint.sh

# เอา build output จาก builder มาใส่ในตัว image เลย (ไม่ต้อง mount จาก host)
COPY --from=builder /app/dist ./dist

EXPOSE 8787
# Strips the (oversized) asset binding, then runs the Worker for SSR on 0.0.0.0.
ENTRYPOINT ["/usr/local/bin/app-entrypoint.sh"]

# ─────────────────────────────────────────────────────────────────────────
# Stage 3: web — nginx เสิร์ฟไฟล์ static (dist/client) ที่ build แล้ว
# ─────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS web
# ไฟล์ static ถูก bake เข้า image (nginx conf + certs ยัง mount จาก compose)
COPY --from=builder /app/dist/client /usr/share/nginx/html
