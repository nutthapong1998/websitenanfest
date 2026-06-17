#!/usr/bin/env bash
#
# บีบวิดีโอทั้งหมดใน src/assets ด้วย H.264 CRF 21 + faststart
# - คง path/ชื่อไฟล์เดิม แต่เซฟลงโฟลเดอร์ใหม่ dist-media/ (ไม่ทับต้นฉบับ)
# - faststart = ย้าย metadata ไว้หน้าไฟล์ → กดเล่นแล้วเริ่มทันที
#
# ใช้งาน:  ./scripts/compress-videos.sh
# ต้องมี ffmpeg:  brew install ffmpeg   (mac)  /  apt install ffmpeg (ubuntu)
#
set -euo pipefail

cd "$(dirname "$0")/.."

ASSETS_DIR="src/assets"
OUT_DIR="dist-media"          # ผลลัพธ์ที่บีบแล้ว (พร้อมอัปขึ้น R2)
CRF="${CRF:-21}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ERROR: ไม่พบ ffmpeg — ติดตั้งก่อน (brew install ffmpeg / apt install ffmpeg)" >&2
  exit 1
fi

echo "🎬 บีบวิดีโอ CRF=$CRF → $OUT_DIR/"
echo

# ถ้า bitrate รวมเกินค่านี้ (kbps) → re-encode บีบจริง, ไม่งั้นแค่ remux ใส่ faststart
THRESHOLD_KBPS="${THRESHOLD_KBPS:-4000}"

find "$ASSETS_DIR" -type f -iname "*.mp4" -print0 | while IFS= read -r -d '' src; do
  rel="${src#"$ASSETS_DIR/"}"          # path สัมพันธ์กับ assets (= R2 key)
  out="$OUT_DIR/$rel"
  mkdir -p "$(dirname "$out")"

  if [ -f "$out" ]; then
    echo "⏭️  ข้าม (มีอยู่แล้ว): $rel"
    continue
  fi

  # อ่าน bitrate รวมของไฟล์ (bps)
  br=$(ffprobe -v error -show_entries format=bit_rate -of default=nw=1:nk=1 "$src" 2>/dev/null || echo 0)
  br_kbps=$(( ${br:-0} / 1000 ))

  if [ "$br_kbps" -gt "$THRESHOLD_KBPS" ]; then
    # bitrate สูง → re-encode บีบ (CRF) + faststart
    echo "⚙️  บีบ (${br_kbps}kbps → CRF $CRF): $rel"
    ffmpeg -nostdin -y -loglevel error -stats -i "$src" \
      -c:v libx264 -crf "$CRF" -preset "${PRESET:-medium}" \
      -c:a aac -b:a 128k -movflags +faststart \
      "$out" </dev/null

    # ความปลอดภัย: ถ้าบีบแล้วดันใหญ่ขึ้น → ใช้ remux lossless แทน
    if [ "$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out")" -ge "$(stat -f%z "$src" 2>/dev/null || stat -c%s "$src")" ]; then
      echo "   ↩︎ บีบแล้วใหญ่ขึ้น → remux lossless แทน"
      ffmpeg -nostdin -y -loglevel error -i "$src" -c copy -movflags +faststart "$out" </dev/null
    fi
  else
    # bitrate ต่ำอยู่แล้ว → ไม่ re-encode แค่ remux ใส่ faststart (lossless, ได้ instant-play)
    echo "📦 remux faststart (${br_kbps}kbps, lossless): $rel"
    ffmpeg -nostdin -y -loglevel error -i "$src" -c copy -movflags +faststart "$out" </dev/null
  fi

  before=$(du -h "$src" | cut -f1)
  after=$(du -h "$out" | cut -f1)
  echo "   ✓ $before → $after"
done

echo
echo "✅ เสร็จแล้ว — ไฟล์ที่บีบอยู่ใน $OUT_DIR/"
echo "   เทียบขนาดรวม:"
echo "   ต้นฉบับ : $(find "$ASSETS_DIR" -iname '*.mp4' -exec du -ch {} + | tail -1 | cut -f1)"
echo "   บีบแล้ว : $(find "$OUT_DIR" -iname '*.mp4' -exec du -ch {} + 2>/dev/null | tail -1 | cut -f1)"
