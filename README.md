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

## Scripts (ใน `scripts/`)

bash script ช่วยจัดการ media ก่อนนำขึ้น R2 — รันจาก root ของโปรเจกต์

### 🎬 `compress-videos.sh` — บีบวิดีโอ

บีบวิดีโอทุกไฟล์ใน `src/assets` แล้วเซฟลง `dist-media/` (ไม่ทับต้นฉบับ)
ฉลาดพอที่จะ **re-encode เฉพาะไฟล์ bitrate สูง** ส่วนไฟล์ที่บีบมาดีแล้วจะแค่ remux ใส่ `faststart` (lossless + กดเล่นแล้วเริ่มทันที)

```bash
./scripts/compress-videos.sh
```

ต้องมี **ffmpeg** (`brew install ffmpeg` / `apt install ffmpeg`)

ปรับแต่งผ่าน env var (ไม่ใส่ก็ใช้ค่า default):
| ตัวแปร | default | ความหมาย |
|---|---|---|
| `CRF` | `21` | คุณภาพ re-encode (ยิ่งน้อยยิ่งคมแต่ไฟล์ใหญ่) |
| `PRESET` | `medium` | ความเร็ว/อัตราบีบของ x264 |
| `THRESHOLD_KBPS` | `4000` | bitrate ที่เกินค่านี้ถึงจะ re-encode |

```bash
CRF=23 PRESET=slow ./scripts/compress-videos.sh   # ตัวอย่างปรับค่า
```

### ☁️ `upload-media-to-r2.sh` — อัป media ขึ้น R2

อัปวิดีโอ (จาก `dist-media/`), เสียง และรูปของ Showcase2026 (จาก `src/assets/`)
ขึ้น R2 โดยใช้ path เป็น object key ให้ตรงกับ `mediaUrl()` ในโค้ด

```bash
# ติดตั้ง + login wrangler ก่อน (ครั้งเดียว)
npm i -g wrangler && wrangler login

# อัปขึ้น bucket (ระบุชื่อ bucket ผ่าน BUCKET)
BUCKET=nanfest-media ./scripts/upload-media-to-r2.sh
```

| ตัวแปร | default | ความหมาย |
|---|---|---|
| `BUCKET` | `nanfest-media` | ชื่อ R2 bucket ปลายทาง |

> ลำดับที่ถูกต้อง: `compress-videos.sh` ก่อน → แล้วค่อย `upload-media-to-r2.sh`
> (ดูขั้นตอนเต็มใน **[R2.md](R2.md)**)

## Deploy ด้วย Docker

รันหลัง nginx + TLS บน Cloudflare Workers runtime (workerd) — build เกิดในตัว Docker (ไม่ต้อง `npm run build` บน host)

```bash
docker compose up -d --build   # รอบแรก + ทุกครั้งที่แก้โค้ด (rebuild image)
docker compose up -d           # แค่ start ตอนไม่ได้แก้โค้ด (เช่นหลัง down/reboot)
docker compose down            # หยุดและลบ container
```

> ⚠️ โค้ดถูก bake เข้า image ตอน build — **แก้โค้ดแล้วต้องใส่ `--build` เสมอ** ไม่งั้นจะได้ image (โค้ด) เก่า

📄 รายละเอียดการ deploy ดูที่ **[DOCKER.md](DOCKER.md)**

## Deploy บน Ubuntu Server (clone ไป `/opt/nanfestwebsite`)

ขั้นตอนเต็มสำหรับติดตั้งครั้งแรกบน Ubuntu (22.04/24.04)

### 1. ติดตั้ง Docker + git

```bash
sudo apt-get update
sudo apt-get install -y git ca-certificates curl

# Docker Engine + Compose plugin (official)
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER       # ให้รัน docker ได้โดยไม่ต้อง sudo
# ออกจาก ssh แล้ว login ใหม่ 1 ครั้ง เพื่อให้กลุ่ม docker มีผล
```

### 2. Login GitHub (เลือกวิธีใดวิธีหนึ่ง)

โปรเจกต์เป็น repo ส่วนตัว ต้อง auth ก่อน clone

**วิธี ก) GitHub CLI (ง่ายสุด — ตั้ง credential ให้ git อัตโนมัติ)**
```bash
# ติดตั้ง gh
sudo apt-get install -y gh        # ถ้าไม่มี: ดู https://cli.github.com
gh auth login
#   เลือก: GitHub.com → HTTPS → Login with a web browser (หรือ paste token)
```

**วิธี ข) Personal Access Token (PAT) + จำรหัสไว้**
```bash
# สร้าง token: GitHub → Settings → Developer settings →
#   Personal access tokens → Fine-grained → ให้สิทธิ์ repo "websitenanfest" (Contents: Read)
git config --global credential.helper store   # จำ credential หลัง login ครั้งแรก
# ตอน git clone/pull จะถาม Username = ชื่อ GitHub, Password = วาง PAT (ไม่ใช่รหัสผ่านบัญชี)
```

### 3. Clone โปรเจกต์ไป `/opt/nanfestwebsite`

```bash
sudo mkdir -p /opt/nanfestwebsite
sudo chown $USER:$USER /opt/nanfestwebsite          # ให้ user ปัจจุบันเป็นเจ้าของ
git clone https://github.com/nutthapong1998/websitenanfest.git /opt/nanfestwebsite
cd /opt/nanfestwebsite
```

### 4. ตั้งค่าก่อนรัน

```bash
cp .env.example .env
nano .env                       # ใส่ VITE_R2_BASE = URL ของ R2 bucket (ดู R2.md)

# ใส่ Cloudflare Origin Certificate (ดู DOCKER.md ข้อ 1)
#   certs/cloudflare-origin.pem , certs/cloudflare-origin.key
# แก้ domain ใน nginx/conf.d/default.conf (server_name)
```

### 5. รัน

```bash
docker compose up -d --build
docker compose ps               # เช็กว่า container ขึ้นทั้ง app + nginx
docker compose logs -f app      # ดู log (ควรขึ้น Ready on http://0.0.0.0:8787)
```

### 6. อัปเดตเป็นเวอร์ชันใหม่ (หลังมีการแก้โค้ดบน GitHub)

```bash
cd /opt/nanfestwebsite
git pull                        # ดึงโค้ดล่าสุด
docker compose up -d --build    # build ใหม่ + restart (ต้องมี --build เพราะโค้ด bake เข้า image)
```

> ถ้า `git pull` ติด conflict กับไฟล์ที่แก้ในเครื่อง (เช่น `.env` — แต่อันนี้ gitignore อยู่แล้ว)
> ให้เช็ก `git status` ก่อน ปกติ `.env`/`certs` ถูก ignore จึงไม่ชนกับ pull

## Environment Variables

| ตัวแปร | คำอธิบาย |
|---|---|
| `VITE_R2_BASE` | base URL ของ Cloudflare R2 bucket (เช่น `https://media.nanfest.com`) |

> ⚠️ `.env` ถูก gitignore ไว้ — เก็บค่าจริงในเครื่อง ใช้ `.env.example` เป็นแม่แบบ
