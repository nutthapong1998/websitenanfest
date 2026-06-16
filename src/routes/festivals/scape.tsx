import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon, Paintbrush } from "lucide-react";

// 📸 Import รูปภาพตามชุดจริงในโค้ดของคุณ
import scapeImg1 from "@/assets/IMG_5005.png";
import scapeImg2 from "@/assets/IMG_5243.JPG";
import scapeImg3 from "@/assets/MD3_4784.jpg";
import scapeImg4 from "@/assets/MD3_4833.jpg";

import scapeImg7 from "@/assets/MDF_8520.jpg";
import scapeImg8 from "@/assets/Ns1.jpg";
import scapeImg9 from "@/assets/Ns2.jpg";
import scapeImg10 from "@/assets/Ns3.jpg";
import scapeImg11 from "@/assets/Ns4.jpg";
import scapeImg12 from "@/assets/Ns5.jpg";
import scapeImg13 from "@/assets/Ns6.jpg";
import scapeImg14 from "@/assets/Ns7.jpg";
import scapeImg15 from "@/assets/Ns8.jpg";
import scapeImg16 from "@/assets/Ns9.jpg";
import scapeImg17 from "@/assets/Ns10.jpg";
import scapeImg18 from "@/assets/Ns11.jpg";
import scapeImg19 from "@/assets/Ns12.jpg";
import scapeImg20 from "@/assets/Ns13.jpg";
import scapeImg21 from "@/assets/Ns14.jpg";
import scapeImg22 from "@/assets/Ns15.jpg";
import scapeImg23 from "@/assets/Ns16.jpg";
import scapeImg24 from "@/assets/Ns17.jpg";
import scapeImg25 from "@/assets/Ns18.jpg";
import scapeImg26 from "@/assets/Ns19.jpg";
import scapeImg27 from "@/assets/Ns20.jpg";
import scapeImg28 from "@/assets/Ns21.jpg";
import scapeImg29 from "@/assets/Ns22.jpg";
import scapeImg30 from "@/assets/Ns23.jpg";
import scapeImg31 from "@/assets/Ns24.jpg";
import scapeImg32 from "@/assets/Ns25.jpg";
import scapeImg33 from "@/assets/Ns26.jpg";
import scapeImg34 from "@/assets/Ns27.jpg";
import scapeImg35 from "@/assets/Ns28.jpg";
import scapeImg36 from "@/assets/Ns29.jpg";
import scapeImg37 from "@/assets/Ns30.jpg";
import scapeImg38 from "@/assets/Ns31.jpg";
import scapeImg39 from "@/assets/Ns32.jpg";
import scapeImg40 from "@/assets/Ns33.jpg";    
import scapeImg41 from "@/assets/Ns34.jpg";
import scapeImg42 from "@/assets/Ns35.jpg";
import scapeImg43 from "@/assets/Ns36.jpg";
import scapeImg44 from "@/assets/Ns37.jpg";
import scapeImg45 from "@/assets/Ns38.jpg";
import scapeImg46 from "@/assets/Ns39.jpg";
import scapeImg47 from "@/assets/Ns40.jpg";
import scapeImg48 from "@/assets/Ns41.jpg";
import scapeImg49 from "@/assets/Ns42.jpg";
import scapeImg50 from "@/assets/Ns43.jpg"; 
import scapeImg51 from "@/assets/Ns44.jpg";
import scapeImg52 from "@/assets/Ns45.jpg";

export const Route = createFileRoute("/festivals/scape")({
  head: () => ({
    meta: [
      { title: "NAN Scape — วาดเขียนเมืองน่าน" },
      { name: "description", content: "กิจกรรมสร้างสรรค์ผลงานศิลปะที่ได้รับแรงบันดาลใจจากสถานที่ต่างๆในตัวเมืองจังหวัดน่านและอำเภอเวียงสา" },
      { property: "og:title", content: "NAN Scape" },
      { property: "og:description", content: "วาดเขียนเมืองน่าน จิตรกรรม และกวี ณ หออัตลักษณ์นครน่าน" },
    ],
  }),
  component: Scape,
});

function Scape() {
  // 📂 จัดกลุ่มแยกประเภทรูปภาพอย่างชัดเจน
  const categoryImages = {
    atmosphere: [scapeImg1, scapeImg2, scapeImg3, scapeImg4, scapeImg7], // 1. กลุ่มภาพบรรยากาศ
    artworks: [scapeImg8, scapeImg9, scapeImg10, scapeImg11, scapeImg12, scapeImg13, scapeImg14, scapeImg15, scapeImg16, scapeImg17, scapeImg18, scapeImg19, scapeImg20, scapeImg21, scapeImg22, scapeImg23, scapeImg24, scapeImg25, scapeImg26, scapeImg27, scapeImg28, scapeImg29, scapeImg30, scapeImg31, scapeImg32,scapeImg33,scapeImg34,scapeImg35,scapeImg36,scapeImg37,scapeImg38,scapeImg39,scapeImg40,scapeImg41,scapeImg42,scapeImg43,scapeImg44,scapeImg45,scapeImg46,scapeImg47,scapeImg48,scapeImg49,scapeImg50,scapeImg51,scapeImg52],    // 2. กลุ่มภาพผลงานศิลปิน
  };

  // 📑 State สำหรับสลับประเภทแท็บ (ค่าเริ่มต้นคือ บรรยากาศ: 'atmosphere')
  const [activeTab, setActiveTab] = useState<"atmosphere" | "artworks">("atmosphere");

  // 🔍 State สำหรับจัดการระบบสไลด์ภาพ Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ดึงกลุ่มรูปภาพปัจจุบันตามหมวดที่เลือกมาใช้งาน
  const currentImages = categoryImages[activeTab];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // ล็อค event ไม่ให้ไปสะกิดสั่งเปิดหน้าต่างโหมด Lightbox ด้านหลัง
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // ล็อค event ไม่ให้ไปสะกิดสั่งเปิดหน้าต่างโหมด Lightbox ด้านหลัง
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHeader
        eyebrow=""
        title="Nan Scape"
        thaiTitle="วาดเขียนเมืองน่าน · จิตรกรรม · กวี"
        description="วาดเขียนเมืองน่าน จิตรกรรมและกวี"
      />
      
      <section className="py-16 bg-background">
        <div className="container-narrow">
          
          <FadeIn>
            <div className="thai mb-12 max-w-4xl text-muted-foreground leading-relaxed text-base border-l-4 border-crimson pl-5">
              <p className="text-justify">
                <strong>Nan Scape</strong> คือ กิจกรรมที่เชิญชวนศิลปินมากกว่า 30 ชีวิต มาสร้างสรรค์ผลงานศิลปะที่ได้รับแรงบันดาลใจจากสถานที่ต่างๆในตัวเมืองจังหวัดน่าน
                และอำเภอเวียงสา เช่น ทิวทัศน์เมือง ตลาด ท้องถนน อาคารบ้านเรือน ฯลฯ เพื่อเป็นการบันทึกอาคารบ้านเรือนในรูปแบบศิลปะ หรือทัศนศิลป์ เชิง
                สร้างสรรค์ นอกจากนี้ยังทำให้เกิดปฏิสัมพันธ์ระหว่างคนน่านด้วยกัน และคนน่านกับศิลปิน
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* 📥 ฝั่งซ้าย: กล่องตารางข้อมูลกิจกรรม PROJECT SCHEDULE */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 bg-navy text-white rounded-2xl p-8 shadow-md md:sticky md:top-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Sparkles size={14} /> PROJECT SCHEDULE
                </div>
                
                <h3 className="thai text-xl font-bold text-white leading-snug">
                  ชื่อกิจกรรม : <span className="text-gold block mt-1">Nan Scape</span>
                </h3>
                <p className="thai text-xs text-white/60 mt-1">(วาดเขียนเมืองน่าน จิตรกรรมและกวี)</p>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar size={14} /> กำหนดการ
                </div>
                
                <div className="space-y-4 thai text-sm text-white/90">
                  <div className="flex flex-col border-b border-white/5 pb-2">
                    <span className="font-semibold text-white">1. ศิลปินลงพื้นที่ทำงาน</span>
                    <span className="text-gold/80 text-xs mt-0.5">16 - 23 ตุลาคม 2566</span>
                  </div>
                  <div className="flex flex-col border-b border-white/5 pb-2">
                    <span className="font-semibold text-white">2. วันเปิดนิทรรศการ</span>
                    <span className="text-gold/80 text-xs mt-0.5">11 พฤศจิกายน 2566 เวลา 15.00 - 19.00 น.</span>
                  </div>
                  <div className="flex flex-col border-b border-white/5 pb-2">
                    <span className="font-semibold text-white">3. ช่วงจัดแสดงผลงาน</span>
                    <span className="text-gold/80 text-xs mt-0.5">พฤศจิกายน 2566 - 29 กุมภาพันธ์ 2567</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-5 mt-2">
                  <MapPin className="text-crimson shrink-0 mt-0.5" size={18} />
                  <div className="w-full">
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mb-2">สถานที่จัดกิจกรรม</div>
                    <ul className="thai text-xs font-medium text-white/90 space-y-2.5 list-decimal list-inside leading-relaxed">
                      <li className="pl-1">พื้นที่ทำงานของศิลปินจำนวน 20 จุดในเขตเมืองน่านและอำเภอเวียงสา</li>
                      <li className="pl-1">เปิดนิทรรศการและจัดแสดงผลงานที่ห้องนิทรรศการชั้น 1 หออัตลักษณ์นครน่าน</li>
                      <li className="pl-1">วันงาน NAN FEST RECONNECTING ณ ข่วงเมืองสา อำเภอเวียงสา จังหวัดน่าน</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 🖼️ ฝั่งขวา: แสดงระบบปุ่มแท็บแบ่งหมวดหมู่ และโชว์ภาพพร้อมปุ่มกดสไลด์ซ้าย-ขวา */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              {/* ปุ่มสลับแท็บ บรรยากาศ / ผลงานศิลปิน */}
              <div className="flex gap-2 bg-muted p-1 rounded-xl border border-border">
                <button
                  onClick={() => { setActiveTab("atmosphere"); setCurrentIndex(0); }}
                  className={`thai flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    activeTab === "atmosphere"
                      ? "bg-navy text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <ImageIcon size={16} /> บรรยากาศกิจกรรม
                </button>
                <button
                  onClick={() => { setActiveTab("artworks"); setCurrentIndex(0); }}
                  className={`thai flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    activeTab === "artworks"
                      ? "bg-navy text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Paintbrush size={16} /> ผลงานของศิลปิน
                </button>
              </div>

              {/* แสดงผลเป็นรูปภาพเดี่ยว พร้อมมีลูกศรกดเปลี่ยนภาพทางด้านซ้ายและขวา */}
              <div 
                onClick={() => openLightbox(currentIndex)}
                className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md cursor-pointer group relative"
              >
                {/* ปุ่มควบคุมเลื่อนรูปถอยหลัง (ซ้าย) */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                  title="รูปก่อนหน้า"
                >
                  <ChevronLeft size={22} />
                </button>

                <img 
                  src={currentImages[currentIndex]} 
                  alt={`Nan Scape Display ${activeTab} ${currentIndex + 1}`} 
                  className="w-full h-auto aspect-[4/3] object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* ปุ่มควบคุมเลื่อนรูปไปข้างหน้า (ขวา) */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                  title="รูปถัดไป"
                >
                  <ChevronRight size={22} />
                </button>
                
                {/* เลเยอร์ครอบบอกจำนวนรูปภาพ ณ ปัจจุบัน */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 shadow-sm z-10">
                  <span>{currentIndex + 1} / {currentImages.length} Images</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🖼️ ระบบป็อปอัปสไลด์ภาพในอัลบั้มเมื่อคลิกรูปขยาย (Lightbox Modal) */}
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

          {/* ปุ่มเลื่อนซ้าย */}
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={28} />
          </button>

          {/* ตู้แสดงผลรูปภาพขนาดใหญ่ */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center px-4">
            <img 
              src={currentImages[currentIndex]} 
              alt={`Nan Scape Active View ${currentIndex + 1}`} 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            {/* ตัวเลขสถานะอัลบั้มรูปปัจจุบัน */}
            <div className="text-white/60 text-xs mt-5 tracking-widest font-mono bg-white/5 px-4 py-1.5 rounded-full flex flex-col items-center gap-1">
              <span className="thai text-[11px] text-gold font-sans font-medium">
                หมวด: {activeTab === "atmosphere" ? "บรรยากาศกิจกรรม" : "ผลงานของศิลปิน"}
              </span>
              <span>{currentIndex + 1} / {currentImages.length}</span>
            </div>
          </div>

          {/* ปุ่มเลื่อนขวา */}
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