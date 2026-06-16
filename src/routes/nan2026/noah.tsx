import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { useState, useEffect } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, X, Layers, Users, Camera, Sparkles, Sliders } from "lucide-react";

// =========================================================================
// 1. IMPORT รูปภาพทั้งหมดจากโฟลเดอร์ assets/prem อัตโนมัติด้วย Vite Glob Import
// =========================================================================
const globImages = import.meta.glob("@/assets/prem/*.{jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  import: "default",
});

// ลิสต์ภาพต้นฉบับทั้งหมดที่มีอยู่ในโฟลเดอร์
const allActivityImages = Object.values(globImages) as string[];

export const Route = createFileRoute("/nan2026/noah")({
  head: () => ({
    meta: [
      { title: "Walking under Water — Nan Fest 2026" },
      { name: "description", content: "Walking under Water : เดินเล่นใต้น้ำ — พื้นที่สร้างสรรค์และศิลปะร่วมสมัยเมืองน่าน" },
    ],
  }),
  component: WalkingUnderWaterPage,
});

function WalkingUnderWaterPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // State สำหรับเก็บกลุ่มภาพสุ่ม 30 รูป และกลุ่มภาพเดี่ยวๆ ที่เหลือ
  const [randomSnapshot, setRandomSnapshot] = useState<string[]>([]);
  const [remainingImages, setRemainingImages] = useState<string[]>([]);

  // -------------------------------------------------------------------------
  // Logic การสุ่มภาพ 30 รูปออกจากกลุ่มภาพทั้งหมดเมื่อ Mount คอมโพเนนต์
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (allActivityImages.length === 0) return;

    // ทำการตักสับไพ่ (Shuffle) รูปภาพทั้งหมดแบบสุ่ม
    const shuffled = [...allActivityImages].sort(() => 0.5 - Math.random());
    
    // ดึงออกมา 30 รูปแรกเพื่อทำสไลด์เลื่อน
    const selectedRandom = shuffled.slice(0, Math.min(30, shuffled.length));
    // ภาพที่เหลือจะถูกนำไปโชว์แบบเดี่ยวๆ ด้านล่าง (ไม่ซ้ำกับข้างบน)
    const selectedRemaining = shuffled.slice(selectedRandom.length);

    setRandomSnapshot(selectedRandom);
    setRemainingImages(selectedRemaining);
  }, []);

  // คอมโพเนนต์ย่อยสำหรับควบคุมภาพ Slider ด้านบนสุด (สไลด์หลักประจำหน้า)
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === allActivityImages.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? allActivityImages.length - 1 : prev - 1));
    };

    if (allActivityImages.length === 0) {
      return (
        <div className="flex items-center justify-center rounded-2xl border border-dashed border-border aspect-[4/3] w-full bg-muted text-muted-foreground text-xs">
          ไม่พบรูปภาพในโฟลเดอร์ assets/prem
        </div>
      );
    }

    return (
      <div 
        onClick={() => {
          // ค้นหาตำแหน่ง Index จริงจากอาร์เรย์หลักเพื่อเปิด Lightbox
          const realIndex = allActivityImages.indexOf(allActivityImages[currentIndex]);
          if (realIndex !== -1) setLightboxIndex(realIndex);
        }}
        className="overflow-hidden rounded-2xl border border-border shadow-md group cursor-zoom-in relative aspect-[4/3] w-full bg-muted"
      >
        <img 
          src={allActivityImages[currentIndex]} 
          alt="ศิลปะการแสดงสด Performance Art view" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {allActivityImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 text-navy backdrop-blur-sm shadow-sm hover:bg-crimson hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 text-navy backdrop-blur-sm shadow-sm hover:bg-crimson hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
            
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-full">
              {currentIndex + 1} / {allActivityImages.length}
            </div>
          </>
        )}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 text-navy text-[11px] px-3 py-1 rounded-full font-medium shadow-sm thai opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          คลิกเพื่อขยายรูปเต็มหน้าจอ
        </div>
      </div>
    );
  };

  // ควบคุม Lightbox ด้วย Keyboard
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex(prev => (prev === 0 ? allActivityImages.length - 1 : prev! - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex(prev => (prev === allActivityImages.length - 1 ? 0 : prev! + 1));
      }
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // ป้องกันการเลื่อนหน้าจอพื้นหลังหลังเปิด Lightbox
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxIndex]);

  return (
    <div className="pb-24 bg-background">
      {/* 2. HEADER ส่วนหัวของหน้าเว็บ */}
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Walking under Water"
        thaiTitle="เดินเล่นใต้น้ำ"
        description="การสร้างพื้นที่แห่งความสุขและส่งมอบกำลังใจแก่ประชาชนหลังวิกฤตมหาอุทกภัย"
      />

      {/* 3. ภาพรวมโครงการ (Introduction) */}
      <section className="container-narrow py-12 border-b border-border">
        <FadeIn>
          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
              <Layers size={240} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="eyebrow text-crimson font-semibold tracking-wider">Highlight Project</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 font-mono text-white">Walking under Water (เดินเล่นใต้น้ำ)</h2>
              <p className="thai text-white/90 mt-4 leading-relaxed text-sm md:text-base">
                คือการสร้างพื้นที่แห่งความสุขและกำลังใจแก่ประชาชนหลังวิกฤตน้ำท่วม 
                โดยการเชื่อมโยงศิลปินไทยและนานาชาติเพื่อแลกเปลี่ยนเรียนรู้ 
                สามารถที่จะยกระดับจังหวัดน่านให้เป็นศูนย์กลางศิลปะแสดงสดร่วมสมัยนานาชาติ 
                รวมทั้งส่งเสริมการท่องเที่ยวเชิงสร้างสรรค์และเศรษฐกิจฐานราก 
                ที่สำคัญคือสามารถที่จะสะท้อนปัญหาสิ่งแวดล้อมและ <span className="text-amber-300 font-semibold">Climate Crisis</span> ผ่านพลังศิลปะ
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-crimson mb-3">กิจกรรมภายในงานทั้งหมด 8 กิจกรรม:</p>
                <ol className="grid sm:grid-cols-2 gap-2 text-xs text-white/80 thai list-decimal pl-4">
                  <li className="font-medium text-amber-200">ศิลปะการแสดงสด (Performance Art)</li>
                  <li>เวทีแลกเปลี่ยนศิลปินท้องถิ่นกับศิลปินนานาชาติ</li>
                  <li>การอ่านบทกวีจากกวีไทยและกวีน่าน หัวข้อ "กวี ใต้น้ำมีแสงแดด"</li>
                  <li>Installation บนแพไม้ไผ่</li>
                  <li>การเดินเล่นภายในชุมชนและทำกิจกรรม workshop ร่วมกับชุมชน</li>
                  <li>แพยายเตียมฝ่าน้ำท่วม</li>
                  <li>นิทรรศการบ้านร้าง</li>
                  <li>การวาดภาพเหมือนคนในชุมชนบ้านน้ำครกใหม่</li>
                </ol>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. รายละเอียดเจาะลึกกิจกรรมที่ 1 */}
      <section className="container-narrow py-16 border-b border-border">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <FadeIn delay={0.1} className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <div className="text-crimson font-mono font-bold text-xs uppercase tracking-wider">Activity 01</div>
              <h3 className="text-xl md:text-2xl font-bold text-navy thai">ศิลปะการแสดงสด (Performance Art)</h3>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-muted-foreground border-y border-border py-2.5">
              <div className="flex items-center gap-1.5 text-navy">
                <Calendar size={14} className="text-crimson" />
                <span>6 – 8 กุมภาพันธ์ 2569</span>
              </div>
              <div className="flex items-start gap-1.5 text-navy max-w-md">
                <MapPin size={14} className="text-crimson shrink-0 mt-0.5" />
                <span className="thai text-[11px] leading-tight">ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน</span>
              </div>
            </div>

            <p className="thai text-sm text-muted-foreground leading-relaxed">
              การแลกเปลี่ยนศิลปินจากประเทศไทย ประเทศจีน และประเทศสวิตเซอร์แลนด์ในพื้นที่หมู่บ้านน้ำครกใหม่ 
              และธรรมชาติริมหนองน้ำครก ภายใต้หัวข้อที่ได้รับแรงบันดาลใจจากระดับน้ำท่วมสูงเลยหัว 
              เป็นการเผชิญชีวิตคนต้นน้ำแบบชาวน่าน น้ำท่วมเป็นภาวะตามธรรมชาติของคนต้นน้ำ เรียนรู้ที่จะอยู่กับน้ำ 
              ไม่ยอมให้น้ำท่วมเป็นภัยพิบัติอีกต่อไป โดยในกิจกรรมนี้ได้รับความร่วมมือจากโรงเรียนบ้านน้ำครกใหม่
              ที่ให้นักเรียนมาร่วมกิจกรรมการแสดงสดร่วมกับศิลปินจากประเทศสวิตเซอร์แลนด์อีกด้วย
            </p>

            <div className="mt-4 grid gap-3 text-xs bg-navy/5 p-4 rounded-xl border border-navy/10 thai">
              <div className="flex items-center gap-1.5 font-bold text-navy border-b border-navy/10 pb-1.5 mb-1">
                <Users size={14} className="text-crimson" />
                <span>รายชื่อศิลปินจาก 3 ประเทศที่เข้าร่วมการแสดงสด</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-navy block sm:inline">🇨🇳 ประเทศจีน (เมืองอู่ฮั่น):</strong>{" "}
                  Pan Chennong, Cheng Zhiyuan, Fanxi Wang, T.K.K, Yilina (รวม 5 ท่าน)
                </li>
                <li>
                  <strong className="text-navy block sm:inline">🇨🇭 ประเทศสวิตเซอร์แลนด์:</strong>{" "}
                  Valerian Maly, Klara Schilliger (ได้รับการสนับสนุนจาก Pro Helvetia - Swiss Arts Council)
                </li>
                <li>
                  <strong className="text-navy block sm:inline">🇹🇭 ประเทศประเทศไทย (กลุ่มจรัล):</strong>{" "}
                  ชมพูนุช พุทธา, อนุชา เหมมาลา, อนุชิต เหมมาลา, Xuan Liu (รวม 4 ท่าน)
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-5">
            <ImageSlider />
          </FadeIn>
        </div>
      </section>

      {/* 📌 [โซนใหม่ที่เพิ่ม] 5. แถบสไลด์แนวนอน สุ่มรูปภาพ 30 รูปที่ไม่ซ้ำด้านล่าง */}
      {randomSnapshot.length > 0 && (
        <section className="py-12 bg-muted/40 border-b border-border overflow-hidden">
          <div className="container-narrow mb-6">
            <FadeIn>
              <div className="flex items-center gap-3">
                <Sliders className="text-crimson" size={22} />
                <h3 className="thai text-xl font-bold text-navy">ภาพบรรยากาศ ({randomSnapshot.length} รูป)</h3>
              </div>
              <p className="text-muted-foreground text-xs thai mt-1">สามารถเลื่อนสไลด์ดูรูปภาพแนวนอนเพิ่มเติมได้</p>
            </FadeIn>
          </div>

          <div className="flex gap-4 overflow-x-auto px-4 md:px-[calc((100vw-768px)/2)] scrollbar-thin pb-4 snap-x snap-mandatory">
            {randomSnapshot.map((img, index) => (
              <div
                key={`random-${index}`}
                onClick={() => {
                  const realIndex = allActivityImages.indexOf(img);
                  if (realIndex !== -1) setLightboxIndex(realIndex);
                }}
                className="snap-start shrink-0 w-64 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm bg-muted cursor-zoom-in relative group transition-transform duration-300 hover:shadow-md"
              >
                <img
                  src={img}
                  alt={`Random atmosphere ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Camera size={12} /> ขยายรูปภาพ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 📸 6. แกลเลอรีภาพบรรยากาศที่เหลือเดี่ยวๆ (ไม่ซ้ำกับสไลด์สุ่มด้านบน) */}
      <section className="container-narrow py-16">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="text-amber-500 animate-pulse" size={24} />
              <h3 className="thai text-2xl font-bold text-navy">ภาพบรรยากาศเดี่ยวอื่นๆ ทั้งหมด</h3>
            </div>
            <div className="text-xs text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
              REMAINING: {remainingImages.length} IMAGES
            </div>
          </div>
          
          {remainingImages.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-12">ไม่มีรูปภาพอื่นเพิ่มเติม</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {remainingImages.map((img, index) => (
                <div 
                  key={`remaining-${index}`}
                  onClick={() => {
                    const realIndex = allActivityImages.indexOf(img);
                    if (realIndex !== -1) setLightboxIndex(realIndex);
                  }}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img 
                    src={img} 
                    alt={`Walking under Water Activity ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Camera size={18} className="text-navy" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </section>

      {/* 📍 7. LIGHTBOX MODAL */}
      {lightboxIndex !== null && allActivityImages.length > 0 && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
        >
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(prev => (prev === 0 ? allActivityImages.length - 1 : prev! - 1));
            }}
            className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
          >
            <img 
              src={allActivityImages[lightboxIndex]} 
              alt="ศิลปะการแสดงสด Fullscreen" 
              className="max-w-full h-auto max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="mt-4 text-center space-y-1 max-w-xl px-4">
              <p className="text-white font-medium text-sm thai line-clamp-1">ศิลปะการแสดงสด (Performance Art)</p>
              <div className="text-xs text-white/50 font-mono">
                {lightboxIndex + 1} / {allActivityImages.length}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(prev => (prev === allActivityImages.length - 1 ? 0 : prev! + 1));
            }}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}