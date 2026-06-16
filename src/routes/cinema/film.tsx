import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Image as ImageIcon, Film, Theater, Grid } from "lucide-react";

// 📸 1. กลุ่มรูปภาพบรรยากาศทั่วไป (สไลเดอร์)
import img1 from "@/assets/NanFilm/5E27B949-462C-4849-8B3E-A3FEAB3E7D41.jpg";
import img2 from "@/assets/NanFilm/6BE9D5B2-5D67-4B1A-8EE6-9E7108B04151.jpg";
import img3 from "@/assets/NanFilm/67E89118-C658-4001-99C5-F4094E5D6A58.jpg";
import img4 from "@/assets/NanFilm/417460118_362786283207051_7308190336067044926_n.jpg";
import img5 from "@/assets/NanFilm/422902211_356778773807802_6822957552867289018_n.jpg";
import img6 from "@/assets/NanFilm/425359348_357862137032799_8993225041763851318_n.jpg";
import img7 from "@/assets/NanFilm/425359417_357862160366130_3091302563539610145_n.jpg";
import img8 from "@/assets/NanFilm/425511224_358547706964242_3843632915595200043_n.jpg";
import img9 from "@/assets/NanFilm/425546472_358547670297579_2450909587277131293_n.jpg";
import img10 from "@/assets/NanFilm/425560951_358547666964246_534166677840388590_n.jpg";
import img13 from "@/assets/NanFilm/S__5505030.jpg";

// 🎨 2. กลุ่มภาพโปสเตอร์ / ป้ายประชาสัมพันธ์ หลัก
import posterGuerrilla from "@/assets/NanFilm/Final_ป้ายกองโจร.png";
import posterProgram from "@/assets/NanFilm/Final_ป้ายหนังโปรแกรมภาพ.png";

export const Route = createFileRoute("/cinema/film")({
  head: () => ({
    meta: [
      { title: "NAN Film — น่านกลางแปลง" },
      { name: "description", content: "เทศกาลฉายภาพยนตร์กลางแปลงริมแม่น้ำน่าน ตลอดเดือนกุมภาพันธ์" },
      { property: "og:title", content: "NAN Film — น่านกลางแปลง" },
      { property: "og:description", content: "ฉายภาพยนตร์กลางแปลง 24 เรื่อง ครบทุกรสชาติ" },
    ],
  }),
  component: FilmPage,
});

const movieThemes = [
  "สยองขวัญหรือหนังผี", "ตลก", "แอคชั่น/ตื่นเต้น/สืบสวน", 
  "รักโรแมนติก", "แฟนตาซี/ไซไฟ", "สารคดี", 
  "อะนิเมชั่น", "ดราม่า", "หนังสั้น Feel Good"
];

function FilmPage() {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img13];
  
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (imageArray: string[], index: number) => {
    setLightboxImages(imageArray);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHeader
        eyebrow="Outdoor Cinema"
        title="NAN Film"
        thaiTitle="น่านกลางแปลง"
        description="เทศกาลฉายภาพยนตร์ไทยร่วมสมัยริมน้ำน่าน ปลุกวิญญาณหนังกลางแปลงให้กลับมามีชีวิต"
      />

      <section className="py-16 bg-background">
        <div className="container-narrow space-y-16">
          
          {/* 🎬 Section 1: Objective & Intro */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-center border-b border-border pb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-crimson font-bold uppercase tracking-wider text-sm mb-4">
                  <Theater size={20} /> Objective
                </div>
                <h2 className="thai text-3xl font-bold text-navy mb-4 leading-tight">
                  กระตุ้นให้ชาวน่านออกมามีปฏิสัมพันธ์ <br />และสร้างสีสันให้เมืองด้วยแผ่นฟิล์ม
                </h2>
              </div>
              <p className="thai text-muted-foreground leading-relaxed">
                <strong>Nan Film</strong> คือ พื้นที่แห่งการพบปะผ่านการฉายภาพยนตร์กลางแปลง 
                เพื่อส่งเสริมให้คนในชุมชนได้ออกจากบ้านมาทำกิจกรรมร่วมกันริมแม่น้ำน่าน 
                สร้างบทสนทนาใหม่ๆ และแบ่งปันประสบการณ์ผ่านโลกแห่งภาพยนตร์ร่วมกัน
              </p>
            </div>
          </FadeIn>

          {/* 📢 1. ส่วนของแนวนอน: ป้ายหนังโปรแกรมภาพ */}
          <FadeIn>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <h3 className="thai text-base font-bold text-navy uppercase tracking-wider">
                  โปรแกรมฉายภาพยนตร์ประจำเทศกาล
                </h3>
              </div>
              
              <div 
                onClick={() => openLightbox([posterProgram], 0)}
                className="group relative overflow-hidden rounded-3xl border border-border shadow-md hover:shadow-2xl cursor-pointer bg-muted transition-all duration-300 w-full aspect-[16/9] md:aspect-[21/9]"
              >
                <img 
                  src={posterProgram} 
                  alt="Final ป้ายหนังโปรแกรมภาพ" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="thai text-white text-sm font-medium">🔍 คลิกเพื่อขยายดูตารางโปรแกรมฉายขนาดเต็ม</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 📥 2. ส่วนของแนวตั้ง: ป้ายกองโจร จัดวางคู่กับกล่องตารางเวลา */}
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            
            {/* ฝั่งซ้าย (4 คอลัมน์): ป้ายกองโจร (แนวตั้ง) */}
            <FadeIn className="md:col-span-4 flex">
              <div 
                onClick={() => openLightbox([posterGuerrilla], 0)}
                className="group relative overflow-hidden rounded-3xl border border-border shadow-md hover:shadow-xl cursor-pointer bg-muted transition-all duration-300 w-full min-h-[300px] md:min-h-full"
              >
                <img 
                  src={posterGuerrilla} 
                  alt="Final ป้ายกองโจร" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="thai text-white text-xs font-medium">🔍 ดูป้ายประชาสัมพันธ์</p>
                </div>
              </div>
            </FadeIn>

            {/* ฝั่งขวา (8 คอลัมน์): กล่องข้อมูล PROJECT SCHEDULE */}
            <FadeIn className="md:col-span-8 flex flex-col justify-center bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-gold">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Film size={14} /> Cinema Schedule
                </div>
                <h3 className="thai text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  Nan Film หนังกลางแปลง
                </h3>
                <p className="thai text-gold text-lg font-medium mb-6">(เทศกาลภาพยนตร์ไทยร่วมสมัย)</p>
              </div>

              <div className="space-y-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2.5 rounded-xl shrink-0">
                    <Calendar className="text-gold" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">วันจัดฉาย</div>
                    <div className="thai text-lg font-semibold text-white mt-1 leading-snug">
                      2-3, 9-10, 16-17, 23-25 กุมภาพันธ์ 2567
                    </div>
                    <div className="text-sm text-gold mt-1 font-mono italic">เริ่มฉายเวลา 18.30 น. เป็นต้นไป</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <div className="bg-crimson/20 p-2.5 rounded-xl shrink-0">
                    <MapPin className="text-crimson" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">สถานที่จัดงาน</div>
                    <div className="thai text-base font-medium text-white/90 mt-1 leading-relaxed">
                      ลานกิจกรรมชุมชนบ้านท่าล้อ ต.ฝายแก้ว อ.ภูเพียง จ.น่าน <br />
                      <span className="text-sm text-white/60">(บริเวณพิกัดริมแม่น้ำน่าน)</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <hr className="border-border" />

          {/* 🖼️ 3. ส่วนล่างสุด: แกลเลอรี Slider รูปภาพบรรยากาศทั่วไป และ แนวหนัง */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* ฝั่งซ้าย (7 คอลัมน์): สไลเดอร์ภาพบรรยากาศ */}
            <div className="md:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-navy font-semibold px-1">
                <ImageIcon size={16} className="text-crimson" /> ภาพบรรยากาศกิจกรรมในพื้นที่จริง
              </div>

              <div 
                onClick={() => openLightbox(galleryImages, currentIndex)}
                className="overflow-hidden rounded-3xl border-2 border-border bg-muted shadow-xl cursor-pointer group relative aspect-[16/10]"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(e); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-navy text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>

                <img 
                  src={galleryImages[currentIndex]} 
                  alt={`Nan Film Album Preview ${currentIndex + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(e); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-navy text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
                
                <div className="absolute bottom-6 right-6 bg-navy/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl text-xs font-mono tracking-wider shadow-xl border border-white/10">
                  {currentIndex + 1} / {galleryImages.length} บรรยากาศงาน
                </div>
              </div>
            </div>

            {/* ฝั่งขวา (5 คอลัมน์): ข้อมูลภาพยนตร์และธีมงาน (กล่องบอกข้อมูลนิ่ง ๆ ไม่มีการตอบสนอง) */}
            <div className="md:col-span-5 bg-muted/50 rounded-3xl p-6 border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Grid size={18} className="text-gold" />
                  <h4 className="thai text-lg font-bold text-navy">ข้อมูลภาพยนตร์และธีมงาน</h4>
                </div>
                <p className="thai text-sm text-muted-foreground mb-6 leading-relaxed">
                  เทศกาลนี้คัดสรรหน้ารวมกว่า <span className="text-navy font-bold">24 เรื่อง</span> มีทั้งภาพยนตร์ระดับตำนานและภาพยนตร์ร่วมสมัย โดยแบ่งธีมฉายสลับเปลี่ยนหมวนเวียนไปในแต่ละวัน:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {movieThemes.map((theme, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-border/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-crimson shrink-0" />
                    <span className="thai text-sm font-medium text-navy">ธีม{theme}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🖼 * Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {lightboxImages.length > 1 && (
            <button 
              className="absolute left-4 md:left-12 text-white/70 hover:text-white transition bg-white/10 p-4 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={40} />
            </button>
          )}

          <div className="max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
            <img 
              src={lightboxImages[currentIndex]} 
              alt="Expanded preview" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxImages.length > 1 && (
              <div className="text-white/60 text-sm mt-6 tracking-widest font-mono bg-white/5 px-6 py-2 rounded-full border border-white/10">
                IMAGE {currentIndex + 1} / {lightboxImages.length}
              </div>
            )}
          </div>

          {lightboxImages.length > 1 && (
            <button 
              className="absolute right-4 md:right-12 text-white/70 hover:text-white transition bg-white/10 p-4 rounded-full z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={40} />
            </button>
          )}
        </div>
      )}
    </>
  );
}