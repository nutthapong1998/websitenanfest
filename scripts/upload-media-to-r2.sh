#!/usr/bin/env bash
#
# อัปโหลดไฟล์ media ขึ้น Cloudflare R2 โดยใช้ "path ที่สัมพันธ์กับ src/assets"
# เป็น object key — ตรงกับที่ mediaUrl() ในโค้ดอ้างอิงพอดี
#
#   - วิดีโอ : อัปจาก dist-media/ (ไฟล์ที่บีบแล้วด้วย compress-videos.sh)
#   - เสียง  : อัปจาก src/assets/ (.wav)
#   - รูป    : อัปจาก src/assets/ เฉพาะโฟลเดอร์ที่ Showcase2026 อ้างแบบ string path
#
# ต้องมี wrangler ติดตั้งและ login ก่อน:  wrangler login
# ใช้งาน:  BUCKET=nanfest-media ./scripts/upload-media-to-r2.sh
#
set -euo pipefail

BUCKET="${BUCKET:-nanfest-media}"
ASSETS_DIR="src/assets"
VIDEO_DIR="dist-media"        # ผลลัพธ์จาก compress-videos.sh

cd "$(dirname "$0")/.."

if ! command -v wrangler >/dev/null 2>&1; then
  echo "ERROR: ไม่พบ wrangler — ติดตั้งด้วย  npm i -g wrangler  แล้ว  wrangler login" >&2
  exit 1
fi

# โฟลเดอร์รูปที่อ้างด้วย string path ใน Showcase2026.tsx (ต้องอยู่บน R2 ถึงจะขึ้นตอน production)
IMAGE_DIRS="Nanfestshowcase2026 jaiban Nanlife sp"

echo "📦 Bucket: $BUCKET"

# upload <file> <base_dir>  — key = path ของ file เทียบกับ base_dir
upload() {
  local file="$1" base="$2"
  local key="${file#"$base/"}"
  echo "⬆️  $key"
  wrangler r2 object put "$BUCKET/$key" --file="$file" --remote
}

# 1) วิดีโอ — จาก dist-media/ (บีบแล้ว)
if [ -d "$VIDEO_DIR" ]; then
  echo "🎬 อัปวิดีโอ (บีบแล้ว) จาก $VIDEO_DIR/ ..."
  find "$VIDEO_DIR" -type f \
    \( -iname "*.mp4" -o -iname "*.mov" -o -iname "*.webm" \) \
    -print0 | while IFS= read -r -d '' file; do upload "$file" "$VIDEO_DIR"; done
else
  echo "⚠️  ไม่พบ $VIDEO_DIR/ — รัน ./scripts/compress-videos.sh ก่อนเพื่อบีบวิดีโอ" >&2
fi

# 2) เสียง — จาก src/assets/ (.wav)
echo "🎵 อัปเสียง (.wav) จาก $ASSETS_DIR/ ..."
find "$ASSETS_DIR" -type f -iname "*.wav" \
  -print0 | while IFS= read -r -d '' file; do upload "$file" "$ASSETS_DIR"; done

# 3) รูปของ Showcase2026 — จาก src/assets/
echo "🖼️  อัปรูปของ Showcase2026 จาก $ASSETS_DIR/ ..."
for dir in $IMAGE_DIRS; do
  [ -d "$ASSETS_DIR/$dir" ] || continue
  find "$ASSETS_DIR/$dir" -type f \
    \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
    -print0 | while IFS= read -r -d '' file; do upload "$file" "$ASSETS_DIR"; done
done

echo
echo "✅ อัปโหลดเสร็จแล้ว"
