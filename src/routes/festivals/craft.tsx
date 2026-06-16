import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// 📸 Import รูปภาพทั้งหมดจากโฟลเดอร์ src/assets/Nancraft/ ตามรายการใหม่
import img5114 from "@/assets/Nancraft/MD3_5114.jpg";
import img5117 from "@/assets/Nancraft/MD3_5117.jpg";
import img5118 from "@/assets/Nancraft/MD3_5118.jpg";
import img5120 from "@/assets/Nancraft/MD3_5120.jpg";
import img5127 from "@/assets/Nancraft/MD3_5127.jpg";
import img5130 from "@/assets/Nancraft/MD3_5130.jpg";
import img5131 from "@/assets/Nancraft/MD3_5131.jpg";
import img5134 from "@/assets/Nancraft/MD3_5134.jpg";
import img5135 from "@/assets/Nancraft/MD3_5135.jpg";
import img5147 from "@/assets/Nancraft/MD3_5147.jpg";
import img5168 from "@/assets/Nancraft/MD3_5168.jpg";
import img5177 from "@/assets/Nancraft/MD3_5177.jpg";
import img5181 from "@/assets/Nancraft/MD3_5181.jpg";
import img5183 from "@/assets/Nancraft/MD3_5183.jpg";
import img5184 from "@/assets/Nancraft/MD3_5184.jpg";
import img5185 from "@/assets/Nancraft/MD3_5185.jpg";
import img5186 from "@/assets/Nancraft/MD3_5186.jpg";
import img5191 from "@/assets/Nancraft/MD3_5191.jpg";
import img5193 from "@/assets/Nancraft/MD3_5193.jpg";
import img5196 from "@/assets/Nancraft/MD3_5196.jpg";
import img5214 from "@/assets/Nancraft/MD3_5214.jpg";
import img5215 from "@/assets/Nancraft/MD3_5215.jpg";

export const Route = createFileRoute("/festivals/craft")({
  head: () => ({
    meta: [
      { title: "NAN Craft — ตลาดงานคราฟต์" },
      { name: "description", content: "เป็นพื้นที่แสดงงาน สินค้าและร้านค้าเพื่อผู้ประกอบการในจังหวัดน่านและประชาชนในพื้นที่" },
      { property: "og:title", content: "NAN Craft" },
      { property: "og:description", content: "ตลาดงานคราฟต์ งานฝีมือ และดนตรี ที่คาเฟ่สุดกองดี" },
    ],
  }),
  component: Craft,
});

function Craft() {
  // 📂 รวมอาเรย์รูปภาพทั้งหมดสำหรับทำอัลบั้มเปิดดู Lightbox
  const craftImages = [
    img5114, img5117, img5118, img5120, img5127, img5130, img5131, img5134,
    img5135, img5147, img5168, img5177, img5181, img5183, img5184, img5185,
    img5186, img5191, img5193, img5196, img5214, img5215
  ];

  // 🔍 State สำหรับจัดการเปิด-ปิด อัลบั้ม และเก็บ Index รูปภาพปัจจุบัน
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // ล็อคไม่ให้ event กดทะลุไปโดนกล่องรูปใหญ่ชิ้นหลัง
    setCurrentIndex((prev) => (prev === 0 ? craftImages.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // ล็อคไม่ให้ event กดทะลุไปโดนกล่องรูปใหญ่ชิ้นหลัง
    setCurrentIndex((prev) => (prev === craftImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHeader
        eyebrow="Handmade Market"
        title="NAN Craft"
        thaiTitle="ตลาดงานคราฟต์ · งานฝีมือ · ดนตรี"
        description="ตลาดคราฟต์ที่รวมศิลปินงานฝีมือ ดนตรีสด และร้านอาหารชุมชนไว้ในบรรยากาศคาเฟ่ในสวน"
      />
      
      <section className="py-16 bg-background">
        <div className="container-narrow">
          
          {/* 📝 ส่วนข้อความคำบรรยายรายละเอียดกิจกรรม Nan Craft ด้านบน */}
          <FadeIn>
            <div className="thai mb-12 max-w-4xl text-muted-foreground leading-relaxed text-base border-l-4 border-crimson pl-5 space-y-4">
              <p className="text-justify">
                <strong>Nan Craft</strong> คือ เป็นพื้นที่แสดงงาน สินค้าและร้านค้าเพื่อผู้ประกอบการในจังหวัดน่านและประชาชนในพื้นที่ซึ่งเน้นไปที่กลุ่มร้านค้าที่มีแนวคิดแปลกใหม่ ทันสมัยและมีรูปแบบการนำเสนอในแต่ละร้านที่ไม่ซ้ำกัน อาทิ งานคราฟต์/งานทำมือ, ของที่ระลึก เป็นต้น และร้านค้าของชาวบ้านพื้นเมืองที่พร้อมจะนำเสนอสินค้าของตนเอง
              </p>
              <p className="text-justify bg-muted/60 p-4 rounded-xl text-sm text-foreground">
                ✨ <strong>กิจกรรมต่างๆ มากมายภายในงาน:</strong> ไม่ว่าจะเป็น การ Workshop ทำสร้อยและเครื่องประดับจากหิน 
                มุมวาดรูประบายสี และมีสินค้า handmade ต่างๆ ให้เลือกซื้อ มีดนตรีสดให้รับฟัง นอกจากนี้ยังมีการนำเสนอผลงานจากกิจกรรม Nan Creator อีกด้วย
              </p>
            </div>
          </FadeIn>

          {/* 🛠️ Layout จัดวางคู่ขนานแบบแบ่งฝั่ง ซ้าย-ขวา */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* 📥 ฝั่งซ้าย: กล่องสรุปข้อมูลกิจกรรม PROJECT SCHEDULE */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 bg-navy text-white rounded-2xl p-8 shadow-md md:sticky md:top-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Sparkles size={14} /> PROJECT SCHEDULE
                </div>
                
                <h3 className="thai text-xl font-bold text-white leading-snug">
                  ชื่อกิจกรรม : <span className="text-gold block mt-1">Nan Craft</span>
                </h3>
                <p className="thai text-xs text-white/60 mt-1">(เทศกาลน่านคราฟต์)</p>
              </div>

              {/* วันเวลาจัดงาน และ สถานที่ตั้ง */}
              <div className="border-t border-white/10 pt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">กำหนดการ</div>
                    <div className="thai text-base font-medium text-white mt-0.5">
                      1 - 3 ธันวาคม 2566
                    </div>
                    <div className="text-xs text-gold/80 font-mono mt-0.5">
                      เวลา 16.00 - 22.00 น.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <MapPin className="text-crimson shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">สถานที่จัดกิจกรรม</div>
                    <div className="thai text-base font-medium text-white mt-0.5">
                      คาเฟ่ สุดกองดี
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🖼️ ฝั่งขวา: แสดงแกลเลอรีรูปภาพพร้อมปุ่มสไลด์ ซ้าย-ขวา ข้างรูปหลัก */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              {/* หัวข้อแกลเลอรี */}
              <div className="flex items-center gap-2 bg-muted p-3 rounded-xl border border-border">
                <div className="thai flex-1 flex items-center justify-center gap-2 text-sm font-medium text-navy">
                  <ImageIcon size={18} className="text-crimson" /> บรรยากาศงาน NAN Craft
                </div>
              </div>

              {/* กล่องแสดงผลรูปภาพพร้อมปุ่มควบคุมสไลด์ซ้าย-ขวา */}
              <div 
                onClick={() => openLightbox(currentIndex)}
                className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md cursor-pointer group relative"
              >
                {/* ปุ่มเลื่อนซ้ายบนหน้าหลัก */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"
                  title="รูปก่อนหน้า"
                >
                  <ChevronLeft size={20} />
                </button>

                <img 
                  src={craftImages[currentIndex]} 
                  alt={`Nan Craft Album Preview ${currentIndex + 1}`} 
                  className="w-full h-auto aspect-[4/3] object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* ปุ่มเลื่อนขวาบนหน้าหลัก */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"
                  title="รูปถัดไป"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* ป้ายบอกตำแหน่งรูปปัจจุบันที่มุมขวาล่าง */}
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 shadow-sm z-10">
                  <span>{currentIndex + 1} / {craftImages.length} Images</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🖼️ โครงสร้างไลท์บ็อกซ์ป็อปอัปขยายสไลด์รูปแบบสากล (Lightbox Modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          {/* ปุ่มปิดหน้าต่างโมดอล */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition bg-white/10 p-2.5 rounded-full z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* ปุ่มเลื่อนภาพย้อนกลับ (ฝั่งซ้าย) */}
          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={28} />
          </button>

          {/* บานกระจกกลางพรีวิวรูปภาพขนาดใหญ่ */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center px-4">
            <img 
              src={craftImages[currentIndex]} 
              alt={`Nan Craft Zoomed View ${currentIndex + 1}`} 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้ Lightbox ปิดเมื่อคลิกตัวรูป
            />
            {/* ตัวกำกับแสดงผลระบุเลขหน้าปัจจุบัน */}
            <div className="text-white/60 text-xs mt-5 tracking-widest font-mono bg-white/5 px-4 py-1.5 rounded-full">
              {currentIndex + 1} / {craftImages.length}
            </div>
          </div>

          {/* ปุ่มเลื่อนภาพไปข้างหน้า (ฝั่งขวา) */}
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