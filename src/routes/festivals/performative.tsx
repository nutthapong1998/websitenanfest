import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// 📸 Import รูปภาพใหม่ทั้ง 7 รูปจากโฟลเดอร์ assets
import perfImg1 from "@/assets/S__23724038_0.jpg";
import perfImg2 from "@/assets/3536171_0.jpg";
import perfImg3 from "@/assets/S__23724040_0.jpg";
import perfImg4 from "@/assets/429574434_732340645676856_659987981429985105_n.jpg";
import perfImg5 from "@/assets/429585041_732340272343560_5702110781794894455_n.jpg";
import perfImg6 from "@/assets/MD3_6649.jpg";
import perfImg7 from "@/assets/MD3_6663.jpg";

export const Route = createFileRoute("/festivals/performative")({
  head: () => ({
    meta: [
      { title: "NAN PERFORMANCE ART" },
      { name: "description", content: "โครงการสร้างสรรค์ผลงานศิลปะการแสดงสด (Performances Art) เทศกาลน่าน" },
      { property: "og:title", content: "NAN FEST PERFORMANCE ART" },
      { property: "og:description", content: "โครงการสร้างสรรค์ผลงานศิลปะการแสดงสด (Performances Art)" },
    ],
  }),
  component: Performative,
});

function Performative() {
  // 💾 สร้าง Array รวมรูปภาพเพื่อใช้จัดการสถานะสไลด์อัลบั้ม
  const images = [perfImg1, perfImg2, perfImg3, perfImg4, perfImg5, perfImg6, perfImg7];
  
  // 🔍 State สำหรับคุมการเปิด/ปิด Lightbox และเก็บ Index ของภาพปัจจุบัน
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🖱️ ฟังก์ชันเปิดอัลบั้มเมื่อคลิกที่รูป
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // ⬅️ ฟังก์ชันเลื่อนไปรูปก่อนหน้า
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // กันไม่ให้ตัวป็อปอัปเปิดหรือปิดซ้อนเวลาคลิกปุ่มลูกศร
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ➡️ ฟังก์ชันเลื่อนไปรูปถัดไป
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // กันไม่ให้ตัวป็อปอัปเปิดหรือปิดซ้อนเวลาคลิกปุ่มลูกศร
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHeader
        eyebrow=""
        title="NAN PERFORMANCE ART"
        thaiTitle="ศิลปะการแสดงสด"
        description="โครงการสร้างสรรค์ผลงานศิลปะการแสดงสด เพื่อถ่ายทอดอัตลักษณ์และความเป็นน่านผ่านศิลปินร่วมสมัย"
      />

      <section className="py-16 bg-background">
        <div className="container-narrow">
          
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* 📥 ฝั่งซ้าย: กล่องข้อมูลรายละเอียดกิจกรรม PROJECT SCHEDULE */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 bg-navy text-white rounded-2xl p-8 shadow-md md:sticky md:top-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Sparkles size={14} /> PROJECT SCHEDULE
                </div>
                
                <h3 className="thai text-xl font-bold text-white leading-snug">
                  ชื่อกิจกรรม : <span className="text-gold block mt-1">Performances Art</span>
                </h3>
                <p className="thai text-xs text-white/60 mt-1">(โครงการสร้างสรรค์ผลงานศิลปะการแสดงสด)</p>
              </div>

              {/* กำหนดการจัดกิจกรรม */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar size={14} /> กำหนดการ
                </div>
                
                <div className="space-y-3 thai text-sm">
                  <div className="flex flex-col border-b border-white/5 pb-2">
                    <span className="font-semibold text-white">2 กุมภาพันธ์ 2567</span>
                    <span className="text-white/50 text-xs my-0.5">และ</span>
                    <span className="font-semibold text-white">3 มีนาคม 2567</span>
                  </div>
                </div>

                {/* สถานที่จัดกิจกรรม */}
                <div className="flex items-start gap-3 border-t border-white/10 pt-4 mt-2">
                  <MapPin className="text-crimson shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mb-1">สถานที่จัดกิจกรรม</div>
                    <div className="thai text-sm font-medium text-white leading-relaxed">
                      ข่วงน้อย อ.เมืองน่าน และ<br />
                      ข่วงเมืองสา อ.เวียงสา จ.น่าน
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🖼️ ฝั่งขวา: แสดงรูปแกลเลอรีภาพเดี่ยวขนาดใหญ่พร้อมปุ่มเลื่อน ซ้าย-ขวา แบบเดียวกับ Nanscape */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              {/* หัวข้อแกลเลอรี */}
              <div className="flex items-center gap-2 bg-muted p-3 rounded-xl border border-border">
                <div className="thai flex-1 flex items-center justify-center gap-2 text-sm font-medium text-navy">
                  <ImageIcon size={18} className="text-crimson" /> ภาพบรรยากาศ NAN PERFORMANCE ART
                </div>
              </div>

              {/* กล่องแสดงรูปภาพกรอบเดี่ยว (คลิกเปิด Lightbox ตาม Index จริงได้) */}
              <div 
                onClick={() => openLightbox(currentIndex)}
                className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md cursor-pointer group relative"
              >
                {/* ปุ่มเลื่อนรูปย้อนกลับ (ซ้าย) */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                  title="รูปก่อนหน้า"
                >
                  <ChevronLeft size={22} />
                </button>

                <img 
                  src={images[currentIndex]} 
                  alt={`Performance Art Display ${currentIndex + 1}`} 
                  className="w-full h-auto aspect-[4/3] object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* ปุ่มเลื่อนรูปไปข้างหน้า (ขวา) */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                  title="รูปถัดไป"
                >
                  <ChevronRight size={22} />
                </button>
                
                {/* ตัวกำกับจำนวนรูปภาพมุมขวาล่าง */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 shadow-sm z-10">
                  <span>{currentIndex + 1} / {images.length} Images</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🖼️ ล็อบบี้อัลบั้มรูปภาพ (Lightbox Modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          {/* ปุ่มปิด (X) */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition bg-white/10 p-2.5 rounded-full z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* ปุ่มเลื่อนซ้าย (Prev) */}
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={28} />
          </button>

          {/* ตัวแสดงรูปภาพขนาดเต็ม */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center px-4">
            <img 
              src={images[currentIndex]} 
              alt={`Performance Art Active View ${currentIndex + 1}`} 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} // กันตัวป็อปอัปปิดเมื่อกดที่ตัวเนื้อภาพ
            />
            {/* ตัวเลขบอกจำนวนหน้าอัลบั้ม เช่น 1 / 7 */}
            <div className="text-white/60 text-xs mt-5 tracking-widest font-mono bg-white/5 px-4 py-1.5 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* ปุ่มเลื่อนขวา (Next) */}
          <button 
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={nextImage}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}