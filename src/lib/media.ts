// สร้าง URL ของไฟล์ media (วิดีโอ/เสียง) ที่เก็บไว้บน Cloudflare R2
//
// ตั้งค่า base URL ผ่าน env var `VITE_R2_BASE` (ดู .env / .env.example)
//   เช่น  VITE_R2_BASE=https://media.nanfest.com
//
// ถ้าไม่ได้ตั้ง VITE_R2_BASE จะ fallback เป็น path แบบ relative ("/...")
// ทำให้ยังรันได้ตอน dev ถ้าวางไฟล์ไว้ใน public/ ชั่วคราว
const R2_BASE = (import.meta.env.VITE_R2_BASE ?? "").replace(/\/+$/, "");

/**
 * แปลง path ของไฟล์ใน R2 ให้เป็น URL เต็มที่ใช้กับ <video>/<audio> ได้
 * รองรับชื่อไฟล์ภาษาไทย/มีช่องว่าง (encode ให้อัตโนมัติทีละ segment)
 *
 * @example mediaUrl("NanshortFilm/ทางกลับบ้าน น่าน.mp4")
 *   => "https://media.nanfest.com/NanshortFilm/%E0%B8%97%E0%B8%B2..."
 */
export function mediaUrl(path: string): string {
  const clean = path
    .replace(/^\/+/, "") // ตัด "/" นำหน้า
    .replace(/^src\/assets\//, ""); // ตัด prefix "src/assets/" ถ้ามี (รองรับ path เดิมแบบ /src/assets/...)
  const encoded = clean.split("/").map(encodeURIComponent).join("/");
  return R2_BASE ? `${R2_BASE}/${encoded}` : `/${encoded}`;
}
