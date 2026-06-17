# NAN FEST — เทศกาลน่าน

เว็บไซต์เทศกาลสร้างสรรค์จังหวัดน่าน (NAN FEST) — รวมงานด้านอาหาร งานคราฟต์ ภาพยนตร์ ดนตรี และศิลปะการแสดง
ครอบคลุมทั้ง **NAN Reconnecting 2024** และ **NAN Connecting the Community 2026**

## Tech Stack

| ส่วน | เทคโนโลยี |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React + SSR) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + Radix UI |
| Runtime / Deploy | [Cloudflare Workers](https://workers.cloudflare.com/) (Wrangler) |
| Media storage | [Cloudflare R2](https://developers.cloudflare.com/r2/) (วิดีโอ/เสียง/รูปหนัก) |

ต้องใช้ **Node.js 22+**

## เริ่มต้นใช้งาน

```bash
# 1. ติดตั้ง dependencies
npm ci

# 2. ตั้งค่า env (คัดลอกจากตัวอย่างแล้วแก้ค่า)
cp .env.example .env
#   แก้ VITE_R2_BASE ให้เป็น URL ของ R2 bucket (ดู R2.md)

# 3. รัน dev server
npm run dev
```

แล้วเปิด URL ที่ขึ้นใน terminal (ปกติ http://localhost:3000)

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ทำอะไร |
|---|---|
| `npm run dev` | รัน dev server (hot reload) |
| `npm run build` | build production → `dist/` |
| `npm run preview` | พรีวิว production build |
| `npm run lint` | ตรวจ ESLint |
| `npm run format` | จัดรูปแบบโค้ดด้วย Prettier |

## โครงสร้างโปรเจกต์

```
src/
├── routes/              # หน้าเว็บ (file-based routing)
│   ├── index.tsx        # หน้าแรก
│   ├── about.tsx        # เกี่ยวกับเรา
│   ├── contact.tsx      # ติดต่อ
│   ├── cinema/          # ภาพยนตร์ (film, short-film, music)
│   ├── festivals/       # เทศกาล 2024 (food-map, scape, craft, ...)
│   └── nan2026/         # เทศกาล 2026 (scape, life, photo, music, ...)
├── components/
│   ├── site/            # Header, Footer, PageHeader, FadeIn
│   └── ui/              # Radix UI components
├── lib/
│   └── media.ts         # helper mediaUrl() สร้าง URL ไฟล์จาก R2
└── assets/              # รูปภาพ (logo, รูปประกอบหน้าต่างๆ)
```

## ไฟล์ Media (Cloudflare R2)

ไฟล์หนัก (วิดีโอ เสียง และรูปบางส่วน) **ไม่เก็บใน repo** แต่เก็บบน Cloudflare R2
โค้ดอ้างอิงผ่าน helper `mediaUrl()` โดยตั้งค่า base URL ที่ `VITE_R2_BASE` ใน `.env`

```tsx
import { mediaUrl } from "@/lib/media";
<video src={mediaUrl("NanshortFilm/หนัง.mp4")} />
```

📄 วิธีตั้งค่า R2 bucket และอัปโหลดไฟล์ ดูที่ **[R2.md](R2.md)**

## Deploy ด้วย Docker

รันหลัง nginx + TLS บน Cloudflare Workers runtime (workerd)

```bash
npm run build              # build dist/ บน host ก่อน
docker compose up -d       # เสิร์ฟผ่าน nginx + worker
```

📄 รายละเอียดการ deploy ดูที่ **[DOCKER.md](DOCKER.md)**

## Environment Variables

| ตัวแปร | คำอธิบาย |
|---|---|
| `VITE_R2_BASE` | base URL ของ Cloudflare R2 bucket (เช่น `https://media.nanfest.com`) |

> ⚠️ `.env` ถูก gitignore ไว้ — เก็บค่าจริงในเครื่อง ใช้ `.env.example` เป็นแม่แบบ
