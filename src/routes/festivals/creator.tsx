import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { Calendar, Lightbulb, Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"; // 📍 1. Import ไอคอน X, Chevron เพิ่ม
import { useState } from "react"; // 📍 2. Import useState สำหรับจัดการ State ของ Lightbox

// Import รูปภาพบรรยากาศ WorkShop
import img7345 from "@/assets/NanCreator/IMG_7345.JPG";
import img7389 from "@/assets/NanCreator/IMG_7389.JPG";
import img7396 from "@/assets/NanCreator/IMG_7396.JPG";
import img7403 from "@/assets/NanCreator/IMG_7403.JPG";
import img7414 from "@/assets/NanCreator/IMG_7414.JPG";
import img7443 from "@/assets/NanCreator/IMG_7443.JPG";
import img7452 from "@/assets/NanCreator/IMG_7452.JPG";
import img7455 from "@/assets/NanCreator/IMG_7455.JPG";
import img7468 from "@/assets/NanCreator/IMG_7468.JPG";
import img7469 from "@/assets/NanCreator/IMG_7469.JPG";
import img7470 from "@/assets/NanCreator/IMG_7470.JPG";
import img7471 from "@/assets/NanCreator/IMG_7471.JPG";
import img7492 from "@/assets/NanCreator/IMG_7492.JPG";
import img7493 from "@/assets/NanCreator/IMG_7493.JPG";
import img7494 from "@/assets/NanCreator/IMG_7494.JPG";
import img7495 from "@/assets/NanCreator/IMG_7495.JPG";
import img7501 from "@/assets/NanCreator/IMG_7501.JPG";
import img7503 from "@/assets/NanCreator/IMG_7503.JPG";
import img7511 from "@/assets/NanCreator/IMG_7511.JPG";
import img7512 from "@/assets/NanCreator/IMG_7512.JPG";
import img7517 from "@/assets/NanCreator/IMG_7517.JPG";
import mdf8677 from "@/assets/NanCreator/MDF_8677.jpg";
import mdf8680 from "@/assets/NanCreator/MDF_8680.jpg";
import mdf8686 from "@/assets/NanCreator/MDF_8686.jpg";
import mdf8688 from "@/assets/NanCreator/MDF_8688.jpg";
import mdf8694 from "@/assets/NanCreator/MDF_8694.jpg";
import mdf8700 from "@/assets/NanCreator/MDF_8700.jpg";
import mdf8707 from "@/assets/NanCreator/MDF_8707.jpg";
import mdf8710 from "@/assets/NanCreator/MDF_8710.jpg";
import mdf8711 from "@/assets/NanCreator/MDF_8711.jpg";
import mdf8713 from "@/assets/NanCreator/MDF_8713.jpg";
import mdf8714 from "@/assets/NanCreator/MDF_8714.jpg";
import mdf8715 from "@/assets/NanCreator/MDF_8715.jpg";
import mdf8722 from "@/assets/NanCreator/MDF_8722.jpg";
import mdf8726 from "@/assets/NanCreator/MDF_8726.jpg";
import mdf8733 from "@/assets/NanCreator/MDF_8733.jpg";
import mdf8741 from "@/assets/NanCreator/MDF_8741.jpg";
import mdf8743 from "@/assets/NanCreator/MDF_8743.jpg";
import mdf8746 from "@/assets/NanCreator/MDF_8746.jpg";
import mdf8757 from "@/assets/NanCreator/MDF_8757.jpg";
import mdf8770 from "@/assets/NanCreator/MDF_8770.jpg";
import mdf8772 from "@/assets/NanCreator/MDF_8772.jpg";

// Import รูปภาพผลงานสร้างสรรค์
import mdf9597 from "@/assets/NanCreator/MDF_9597.jpg";
import mdf9598 from "@/assets/NanCreator/MDF_9598.jpg";
import mdf9599 from "@/assets/NanCreator/MDF_9599.jpg";
import mdf9601 from "@/assets/NanCreator/MDF_9601.jpg";
import mdf9603 from "@/assets/NanCreator/MDF_9603.jpg";
import mdf9605 from "@/assets/NanCreator/MDF_9605.jpg";
import mdf9607 from "@/assets/NanCreator/MDF_9607.jpg";
import mdf9609 from "@/assets/NanCreator/MDF_9609.jpg";
import mdf9631 from "@/assets/NanCreator/MDF_9631.jpg";
import mdf9649 from "@/assets/NanCreator/MDF_9649.jpg";
import mdf9651 from "@/assets/NanCreator/MDF_9651.jpg";
import mdf9653 from "@/assets/NanCreator/MDF_9653.jpg";
import mdf9656 from "@/assets/NanCreator/MDF_9656.jpg";
import mdf9657 from "@/assets/NanCreator/MDF_9657.jpg";
import mdf9659 from "@/assets/NanCreator/MDF_9659.jpg";
import mdf9660 from "@/assets/NanCreator/MDF_9660.jpg";
import mdf9709 from "@/assets/NanCreator/MDF_9709.jpg";

export const Route = createFileRoute("/festivals/creator")({
  component: NanCreator,
});

function NanCreator() {
  // รวมลิสต์รูปบรรยากาศ
  const workshopImages = [
    img7345, img7389, img7396, img7403, img7414, img7443, img7452, img7455,
    img7468, img7469, img7470, img7471, img7492, img7493, img7494, img7495,
    img7501, img7503, img7511, img7512, img7517, mdf8677, mdf8680, mdf8686,
    mdf8688, mdf8694, mdf8700, mdf8707, mdf8710, mdf8711, mdf8713, mdf8714,
    mdf8715, mdf8722, mdf8726, mdf8733, mdf8741, mdf8743, mdf8746, mdf8757,
    mdf8770, mdf8772
  ];

  // รวมลิสต์รูปผลงาน
  const artworkImages = [
    mdf9597, mdf9598, mdf9599, mdf9601, mdf9603, mdf9605, mdf9607, mdf9609,
    mdf9631, mdf9649, mdf9651, mdf9653, mdf9656, mdf9657, mdf9659, mdf9660,
    
  ];

  // 📍 3. State สำหรับจัดการ Lightbox
  // เก็บข้อมูล: กลุ่มรูปภาพที่กำลังดูอยู่, ดัชนีรูปภาพปัจจุบัน, สถานะเปิด/ปิด
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageGroup: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    imageGroup: [],
    currentIndex: 0,
  });

  // ฟังก์ชันเปิด Lightbox
  const openLightbox = (group: string[], index: number) => {
    setLightbox({
      isOpen: true,
      imageGroup: group,
      currentIndex: index,
    });
  };

  // ฟังก์ชันปิด Lightbox
  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  // ฟังก์ชันดูรูปถัดไป
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // ป้องกันไม่ให้คลิกโดนพื้นหลังแล้วปิด
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.imageGroup.length, // วนกลับไปรูปแรกถ้าถึงรูปสุดท้าย
    }));
  };

  // ฟังก์ชันดูรูปก่อนหน้า
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.imageGroup.length) % prev.imageGroup.length, // วนไปรูปสุดท้ายถ้าถอยจากรูปแรก
    }));
  };

  return (
    <div className="pb-24">
      {/* ส่วนหัวของหน้าเว็บ */}
      <PageHeader
        eyebrow="NAN FEST RECONNECTING 2024"
        title="Nan Creator"
        thaiTitle="พื้นที่นักสร้างสรรค์เมืองน่าน"
        description="การนำความคิดสร้างสรรค์และเรื่องราวของท้องถิ่นมาต่อยอดสร้างคุณค่าและมูลค่าใหม่"
      />

      {/* SECTION 1: บทนำแนวคิดกิจกรรม */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex p-3 bg-crimson/10 text-crimson rounded-full mb-4">
                <Sparkles size={24} />
              </div>
              <h2 className="thai text-2xl font-bold text-navy mb-4">
                เปลี่ยน "ความม่วน" ให้เป็นมูลค่าใหม่
              </h2>
              <p className="thai text-lg text-foreground/90 leading-relaxed">
                <span className="font-bold text-crimson">Nan Creator</span> คือโปรเจกต์สร้างสรรค์ที่มุ่งเน้นการนำ 
                <span className="bg-yellow-100 px-1 font-semibold text-navy">"ความม่วน"</span> 
                มาใช้เป็นสารตั้งต้นหลักในการขับเคลื่อนเพื่อสร้างมูลค่าใหม่ให้กับงานหัตถกรรมคราฟต์ (Crafts) ของเมืองน่าน 
                โดยออกแบบรูปแบบกระบวนการจัดกิจกรรมในลักษณะเวิร์กชอปไอเดียเข้มข้น (Ideation Format)
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: แผนงานจัดกิจกรรม (IDEATION 2 DAYS) */}
      <section className="py-16">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <div className="p-2 bg-navy text-white rounded-lg">
                <Calendar size={18} />
              </div>
              <h3 className="thai text-xl font-bold text-navy">
                รายละเอียดกิจกรรมเวิร์กชอป (IDEATION 2 วัน)
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* วันที่ 1 */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
                  <span className="font-display font-bold tracking-wider text-crimson text-sm">DAY 1</span>
                  <span className="thai text-xs font-mono bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                    28 พฤศจิกายน
                  </span>
                </div>
                <h4 className="thai font-bold text-navy text-base mb-3 flex items-center gap-2">
                  <Lightbulb size={16} className="text-amber-500" />
                  Asset Recap & Creative Thinking
                </h4>
                <ul className="thai text-sm text-muted-foreground space-y-2.5 list-disc pl-4">
                  <li><span className="font-semibold text-foreground">RECAP ข้อมูลของ ASSET:</span> ถอดบทเรียนแกนหลักที่เป็นหัวเรือน่าน</li>
                  <li>ทำความเข้าใจนิยามลึกซึ้งของคำว่า <span className="text-navy font-semibold">"ม่วน"</span> ในมิติต่างๆ</li>
                  <li>เรียนรู้กระบวนการคิดสร้างสรรค์โดยอิงแนวทาง <span className="font-semibold text-navy font-mono">Bisociative Thinking</span> มาประยุกต์ใช้</li>
                  <li>ปิดท้ายวันด้วยกิจกรรมระดมความคิดและค้นหาความเป็นไปได้ใหม่ๆ ร่วมกัน</li>
                </ul>
              </div>

              {/* วันที่ 2 */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
                  <span className="font-display font-bold tracking-wider text-crimson text-sm">DAY 2</span>
                  <span className="thai text-xs font-mono bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
                    29 พฤศจิกายน
                  </span>
                </div>
                <h4 className="thai font-bold text-navy text-base mb-3 flex items-center gap-2">
                  <Sparkles size={16} className="text-crimson" />
                  Market Scalability & High Impact Pitching
                </h4>
                <ul className="thai text-sm text-muted-foreground space-y-2.5 list-disc pl-4">
                  <li>เรียนรู้และเจาะลึกมุมมองทางด้านการตลาด ตลอดจนความสำคัญของ <span className="font-semibold text-foreground">"มูลค่าการออกแบบ"</span></li>
                  <li><span className="font-semibold text-foreground">Scalability Pattern:</span> มุ่งเน้นการนำรูปแบบโมเดลขยายตลาดในปัจจุบันมาปรับใช้ เพื่อต่อยอดไอเดียงานคราฟต์ที่คิดค้นขึ้นมา</li>
                  <li>จัดเตรียมและฝึกฝนการนำเสนอแนวคิดโครงงานที่มีศักยภาพสูงสุด เพื่อสร้างสภาวะ <span className="font-bold text-navy font-mono">IMPACT</span> ในวงกว้าง</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: ภาพบรรยากาศเวิร์กชอป */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-navy text-white rounded-lg">
                <ImageIcon size={18} />
              </div>
              <h3 className="thai text-xl font-bold text-navy">ภาพบรรยากาศการจัดงานเวิร์กชอป</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {workshopImages.map((src, index) => (
                <div 
                  key={`workshop-${index}`} 
                  className="group aspect-square overflow-hidden rounded-lg border border-border bg-card shadow-sm cursor-pointer" // 📍 4. เพิ่ม cursor-pointer
                  onClick={() => openLightbox(workshopImages, index)} // 📍 5. เพิ่ม event onClick เปิด Lightbox
                >
                  <img
                    src={src}
                    alt={`บรรยากาศเวิร์กชอป ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4: แกลเลอรีผลงานสร้างสรรค์ */}
      <section className="py-16">
        <div className="container-narrow">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-crimson text-white rounded-lg">
                <Sparkles size={18} />
              </div>
              <h3 className="thai text-xl font-bold text-navy">ผลงานการดีไซน์และสร้างสรรค์ที่เกิดขึ้น</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {artworkImages.map((src, index) => (
                <div 
                  key={`artwork-${index}`} 
                  className="group aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-sm cursor-pointer" // 📍 6. เพิ่ม cursor-pointer
                  onClick={() => openLightbox(artworkImages, index)} // 📍 7. เพิ่ม event onClick เปิด Lightbox
                >
                  <img
                    src={src}
                    alt={`ผลงานสร้างสรรค์ ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 📍 8. SECTION LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox} // คลิกพื้นหลังเพื่อปิด
        >
          {/* ปุ่มปิด (X) */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-black/50 p-2 rounded-full"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* ปุ่มลูกศรกดดูรูปก่อนหน้า */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition bg-black/30 p-3 rounded-full hover:bg-black/50"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          {/* รูปภาพขยายใหญ่ */}
          <FadeIn className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4">
            <img 
              src={lightbox.imageGroup[lightbox.currentIndex]} 
              alt={`Expanded view ${lightbox.currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} // คลิกตัวรูปภาพไม่ต้องปิด
            />
            {/* ตัวเลขบอกลำดับรูปภาพ */}
            <div className="thai text-xs text-white/60 font-mono tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
                IMAGE {lightbox.currentIndex + 1} / {lightbox.imageGroup.length}
            </div>
          </FadeIn>

          {/* ปุ่มลูกศรกดดูรูปถัดไป */}
          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition bg-black/30 p-3 rounded-full hover:bg-black/50"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}