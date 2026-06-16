#!/usr/bin/env bash
#
# อัปโหลดไฟล์ media (วิดีโอ + เสียง) จาก src/assets ขึ้น Cloudflare R2
# โดยใช้ "path ที่สัมพันธ์กับ src/assets" เป็น object key
# ซึ่งตรงกับที่ mediaUrl() ในโค้ดใช้อ้างอิงพอดี
#
# ต้องมี wrangler ติดตั้งและ login ก่อน:  wrangler login
#
# ใช้งาน:  BUCKET=nanfest-media ./scripts/upload-media-to-r2.sh
#
set -euo pipefail

BUCKET="${BUCKET:-nanfest-media}"
ASSETS_DIR="src/assets"

cd "$(dirname "$0")/.."

if ! command -v wrangler >/dev/null 2>&1; then
  echo "ERROR: ไม่พบ wrangler — ติดตั้งด้วย  npm i -g wrangler  แล้ว  wrangler login" >&2
  exit 1
fi

# โฟลเดอร์รูปที่อ้างด้วย string path ใน Showcase2026.tsx (ต้องอยู่บน R2 ถึงจะขึ้นตอน production)
IMAGE_DIRS="Nanfestshowcase2026 jaiban Nanlife sp"

echo "📦 Bucket: $BUCKET"

upload() {
  local file="$1"
  local key="${file#"$ASSETS_DIR/"}"      # path สัมพันธ์กับ src/assets = R2 object key
  echo "⬆️  $key"
  wrangler r2 object put "$BUCKET/$key" --file="$file" --remote
}

# 1) วิดีโอ + เสียง (ทุกโฟลเดอร์)
echo "🎬 อัปวิดีโอ + เสียง ..."
find "$ASSETS_DIR" -type f \
  \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.webm" -o -iname "*.wav" \) \
  -print0 | while IFS= read -r -d '' file; do upload "$file"; done

# 2) รูปจากโฟลเดอร์ที่ Showcase2026 อ้างแบบ string path
echo "🖼️  อัปรูปของ Showcase2026 ..."
for dir in $IMAGE_DIRS; do
  [ -d "$ASSETS_DIR/$dir" ] || continue
  find "$ASSETS_DIR/$dir" -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
    -print0 | while IFS= read -r -d '' file; do upload "$file"; done
done

echo
echo "✅ อัปโหลดเสร็จแล้ว"
