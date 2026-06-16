import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Camera, Calendar, MapPin, User, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// 📸 Import รูปภาพศิลปินเจ้าของผลงาน (แก้ไขเส้นทางเป็นพิมพ์เล็ก nanphoto)
import artistKritthee from "@/assets/Nanphoto/NANFEST_69.05.03-0358.JPG";
import artistWichaya from "@/assets/Nanphoto/NANFEST_69.05.03-0360.JPG";

// 📸 Import รูปภาพผลงานนิทรรศการ (แก้ไขเส้นทางเป็นพิมพ์เล็ก nanphoto)
import img1 from "@/assets/Nanphoto/NFD1_024.JPG";
import img2 from "@/assets/Nanphoto/NFD1_025.JPG";
import img3 from "@/assets/Nanphoto/NFD1_027.JPG";
import img4 from "@/assets/Nanphoto/NFD1_032.JPG";
import img5 from "@/assets/Nanphoto/NFD1_037.JPG";
import img6 from "@/assets/Nanphoto/NFD1_040.JPG";
import img7 from "@/assets/Nanphoto/NFD1_043.JPG";
import img8 from "@/assets/Nanphoto/NFD1_044.JPG";
import img9 from "@/assets/Nanphoto/NFD1_059.JPG";
import img10 from "@/assets/Nanphoto/NFD1_064.JPG";
import img11 from "@/assets/Nanphoto/NFD2_413.JPG";
import img12 from "@/assets/Nanphoto/NFD2_420.JPG";
import img13 from "@/assets/Nanphoto/NFD2_422.JPG";

export const Route = createFileRoute("/nan2026/photo")({
  head: () => ({
    meta: [
      { title: "Nan Photo : Reading Through Camera — Nan Fest 2026" },
      { name: "description", content: "นิทรรศการภาพถ่าย อ่านด้วยกล้อง เล่าด้วยภาพ 100 ภาพ โดยศิลปินน่าน วิชยา พัฒนะเอี่ยม และ กฤตธี ม่วงมี" },
    ],
  }),
  component: NanPhotoPage,
});

function NanPhotoPage() {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
  
  // State สำหรับ Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Nan Photo"
        thaiTitle="อ่านด้วยกล้อง เล่าด้วยภาพ"
        description="นิทรรศการภาพถ่ายที่เล่าเรื่องของน่านผ่านมุมมองที่แตกต่าง โดยศิลปินท้องถิ่นที่ถ่ายทอดความหมายของชีวิต สิ่งแวดล้อม และดวงดาว"
      />

      <section className="py-12 bg-background">
        <div className="container-narrow space-y-16">
          
          {/* 🗓️ ส่วนข้อมูลกำหนดการ */}
          <FadeIn>
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-gold grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Camera size={14} /> Exhibition Schedule
                </div>
                <h3 className="thai text-2xl md:text-3xl font-bold mb-6">
                  Reading Through Camera <br />
                  <span className="text-gold">(อ่านด้วยกล้อง เล่าด้วยภาพ 100 ภาพ)</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold" size={20} />
                    <p className="thai text-lg">1 – 3 พฤษภาคม 2569</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-crimson shrink-0 mt-1" size={20} />
                    <p className="thai text-base leading-relaxed text-white/90">
                      บ้านศิลปะจุมพล อภิสุข ชุมชนบ้านน้ำครกใหม่ <br />
                      ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 flex items-center justify-center border-l border-white/10 pl-8 hidden md:flex">
                <p className="thai text-sm text-white/60 italic leading-relaxed text-center">
                  "ถ่ายทอดน่านในแบบที่แตกต่างจากเดิม <br /> 
                  ให้ผู้ชมนิทรรศการได้เห็นน่านในมุมมอง <br />
                  ที่อาจจะยังไม่เคยเห็นมาก่อน"
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 🎨 ส่วนแนวคิดของศิลปิน (Artist Concepts) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* ศิลปินท่านที่ 1: วิชยา พัฒนะเอี่ยม */}
            <FadeIn delay={0.1}>
              <div className="h-full bg-card border border-border rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all border-l-8 border-l-crimson flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-border bg-muted shadow-sm">
                  <img 
                    src={artistWichaya} 
                    alt="วิชยา พัฒนะเอี่ยม" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-crimson">
                    <User size={18} />
                    <span className="thai font-bold text-base">วิชยา พัฒนะเอี่ยม</span>
                  </div>
                  <h4 className="thai text-lg font-bold text-navy leading-tight">
                    มนุษย์คือผู้สร้าง ผู้ทำลาย และผู้ถูกทำลาย
                  </h4>
                  <p className="thai text-sm text-muted-foreground leading-relaxed">
                    ภาพถ่ายสื่อผสมผสานที่สะท้อนความสัมพันธ์ระหว่างมนุษย์ สิ่งแวดล้อม และภัยพิบัติ 
                    ผ่านการซ้อนทับ of ภาพเมือง คราบน้ำ คราบดิน และใบหน้าของผู้คน เพื่อบันทึกความทรงจำ 
                    ที่ยังคงเหลือและตั้งคำถามว่ามนุษย์จะอยู่ร่วมกับธรรมชาติอย่างไร
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* ศิลปินท่านที่ 2: กฤตธี ม่วงมี */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-card border border-border rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all border-l-8 border-l-navy flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-border bg-muted shadow-sm">
                  <img 
                    src={artistKritthee} 
                    alt="กฤตธี ม่วงมี" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-navy">
                    <User size={18} />
                    <span className="thai font-bold text-base">กฤตธี ม่วงมี</span>
                  </div>
                  <h4 className="thai text-lg font-bold text-navy leading-tight">
                    ด้วยวิถี และ ดวงดาว
                  </h4>
                  <p className="thai text-sm text-muted-foreground leading-relaxed">
                    ภาพถ่ายวิถีชีวิตของผู้คนในหมู่บ้านน้ำครก ภายใต้ท้องฟ้าที่เต็มไปด้วยดวงดาว 
                    เพื่อสะท้อนว่า “ฟ้ามืด” ไม่เพียงความงาม แต่คือทรัพยากรที่ควรได้รับการอนุรักษ์ 
                    และอาจเป็นอีกหนึ่งแนวทางของการท่องเที่ยวในน่าน
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 🖼️ แกลเลอรีภาพผลงาน */}
          <FadeIn>
            <div className="pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-gold" />
                <h3 className="thai text-2xl font-bold text-navy">Exhibition Gallery</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer"
                  >
                    <img 
                      src={img} 
                      alt={`Nan Photo Artwork ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="bg-white/90 p-2 rounded-full shadow-lg">
                          <Camera size={20} className="text-navy" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 📍 LIGHTBOX MODAL */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 p-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          <button 
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4">
            <img 
              src={allImages[currentIndex]} 
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white/60 text-xs font-mono tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
                IMAGE {currentIndex + 1} / {allImages.length}
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}