import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { ChevronLeft, ChevronRight, Music as MusicIcon, X, ZoomIn, ZoomOut, RotateCw, Play } from "lucide-react";

// เรียกใช้พาร์ทไฟล์ภาพจริงที่อยู่ในเครื่องของคุณ
import music1 from "../../assets/NanMusic1.jpg";
import music2 from "../../assets/NanMusic2.jpg";
import music3 from "../../assets/NanMusic3.jpg";
import music4 from "../../assets/NanMusic4.jpg";
import music5 from "../../assets/NanMusic5.jpg";
import music6 from "../../assets/NanMusic6.jpg";
import music7 from "../../assets/NanMusic7.jpg";
import music8 from "../../assets/NanMusic8.jpg";
import music9 from "../../assets/NanMusic9.jpg";
import music10 from "../../assets/NanMusic10.jpg";
import music11 from "../../assets/NanMusic11.jpg";    

// ไฟล์วิดีโอ — เก็บบน Cloudflare R2 (ดู src/lib/media.ts)
import { mediaUrl } from "@/lib/media";
const nanVideo = mediaUrl("Nan Contemporary Music _ จ๊อย จอย.mp4");

export const Route = createFileRoute("/cinema/music")({
  head: () => ({
    meta: [
      { title: "Nan Contemporary Music — เทศกาลดนตรีร่วมสมัย + ชนเผ่าน่าน" },
      { name: "description", content: "Contemporary and indigenous music of Nan." },
      { property: "og:title", content: "Nan Contemporary Music" },
      { property: "og:description", content: "เทศกาลดนตรีร่วมสมัย + ชนเผ่าน่าน" },
    ],
  }),
  component: Music,
});

// รวบรวมกลุ่มรูปภาพงานเทศกาลดนตรี (ไม่มีวิดีโอมาปนแล้ว)
const musicImages = [
  { src: music1, alt: "Nan Music Performance 1" },
  { src: music2, alt: "Nan Music Performance 2" },
  { src: music3, alt: "Nan Music Performance 3" },
  { src: music4, alt: "Nan Music Performance 4" },
  { src: music5, alt: "Nan Music Performance 5" },
  { src: music6, alt: "Nan Music Performance 6" },
  { src: music7, alt: "Nan Music Performance 7" },
  { src: music8, alt: "Nan Music Performance 8" },
  { src: music9, alt: "Nan Music Performance 9" },
  { src: music10, alt: "Nan Music Performance 10" },
  { src: music11, alt: "Nan Music Performance 11" },
];

function Music() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // State สำหรับควบคุม Lightbox ของรูปภาพ
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  // State สำหรับควบคุมการเล่นวิดีโอไฮไลท์ในเว็บ
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ฟังก์ชันสกรอลล์แถบภาพ ซ้าย-ขวา
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // เปิด Lightbox รูปภาพ
  const openLightbox = (src: string) => {
    setActiveImage(src);
    setScale(1); 
    setRotation(0); 
  };

  // ปิด Lightbox รูปภาพ
  const closeLightbox = () => {
    setActiveImage(null);
  };

  // ฟังก์ชันจัดระดับการซูมภาพ
  const handleZoom = (type: "in" | "out") => {
    setScale((prev) => {
      if (type === "in") return Math.min(prev + 0.25, 3);
      return Math.max(prev - 0.25, 0.5);
    });
  };

  // ฟังก์ชันหมุนรูปภาพ
  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  // ฟังก์ชันควบคุมการเล่นวิดีโอในส่วน Feature Section
  const togglePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="ร่วมสมัย × พื้นเมือง"
        title="Nan Contemporary Music"
        thaiTitle="เทศกาลดนตรีร่วมสมัยและชาติพันธุ์"
        description="เวทีดนตรีที่นำดนตรีร่วมสมัยมาเจอกับเสียงดนตรีของกลุ่มชาติพันธุ์ในจังหวัดน่าน"
      />
      
      {/* 🎬 SECTION 1: พื้นที่จัดวางวิดีโอไฮไลท์ดนตรีสดแบบเหมาะสมและเป็นสัดส่วน */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container-narrow">
          <FadeIn>
            <div className="mb-6 flex items-center gap-2">
              <div className="p-2 bg-crimson text-white rounded-lg shadow-sm">
                <Play size={16} fill="currentColor" />
              </div>
              <h3 className="thai text-xl font-bold text-navy">
                วิดีโอบรรยากาศการแสดงดนตรีสด
              </h3>
            </div>
            
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl bg-black border border-border group">
              <video
                ref={videoRef}
                src={nanVideo}
                controls={isVideoPlaying}
                className="w-full h-full object-contain"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
              
              {/* หน้าปกม่านบังและปุ่ม Play หน้าต่างแรกก่อนกดเล่น */}
              {!isVideoPlaying && (
                <div 
                  onClick={togglePlayVideo}
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-300 hover:bg-black/30"
                >
                  <div className="p-5 bg-crimson text-white rounded-full shadow-2xl transition-transform duration-300 transform group-hover:scale-110 mb-3">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                  <span className="thai text-white font-medium text-sm drop-shadow-md bg-black/50 px-4 py-1.5 rounded-full border border-white/10">
                    คลิกเพื่อรับชมดนตรี: Nan Contemporary Music _ จ๊อย จอย
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 📸 SECTION 2: สไลด์แสดงรูปภาพบรรยากาศกิจกรรมงานทั้งหมด */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container-narrow">
          
          {/* ส่วนหัวของแกลเลอรีภาพและปุ่มเลื่อนซ้าย-ขวา */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-crimson/10 text-crimson rounded-lg">
                <MusicIcon size={20} />
              </div>
              <h3 className="thai text-xl font-bold text-navy">
                ประมวลภาพบรรยากาศเทศกาลดนตรี
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted hover:text-crimson transition-colors shadow-sm"
                aria-label="เลื่อนไปทางซ้าย"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 rounded-full border border-border bg-card hover:bg-muted hover:text-crimson transition-colors shadow-sm"
                aria-label="เลื่อนไปทางขวา"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ตู้สไลด์แกลเลอรีภาพนิ่ง */}
          <FadeIn>
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {musicImages.map((image, index) => (
                <div
                  key={index}
                  className="w-[85vw] sm:w-[450px] shrink-0 snap-start cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm aspect-[4/3] group relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white thai text-sm font-medium">
                      คลิกเพื่อเปิดดูรูปและซูมขยาย
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <div className="thai text-center text-xs text-muted-foreground mt-4">
            * สามารถใช้เมาส์คลิกปุ่มลูกศร หรือปัดหน้าจอเพื่อเลื่อนภาพ และคลิกที่รูปภาพเพื่อเข้าสู่โหมดซูมเต็มจอได้
          </div>

        </div>
      </section>

      {/* 🔍 ม่าน Overlay ป๊อปอัพขยายรูปภาพ (Lightbox Modal) */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm select-none animate-in fade-in duration-200">
          
          {/* แถบเครื่องมือควบคุมการซูม/หมุน/ปิด */}
          <div className="absolute top-4 right-4 md:right-8 flex items-center gap-3 z-50 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
            <button
              onClick={() => handleZoom("in")}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="ซูมเข้า"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={() => handleZoom("out")}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="ซูมออก"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleRotate}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="หมุนรูปภาพ"
            >
              <RotateCw size={18} />
            </button>
            <div className="w-[1px] h-5 bg-white/20 mx-1" />
            <button
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-crimson hover:bg-white/10 rounded-lg transition-colors"
              title="ปิดหน้าต่าง"
            >
              <X size={20} />
            </button>
          </div>

          {/* พื้นที่แกนกลางส่องภาพพร้อมคำนวณเอฟเฟกต์ซูม */}
          <div className="w-full h-full flex items-center justify-center overflow-auto pointer-events-none">
            <div 
              className="transition-transform duration-200 ease-out pointer-events-auto"
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
              }}
            >
              <img
                src={activeImage}
                alt="Expanded View"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="absolute bottom-6 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/5 thai">
            ระดับการซูม: {Math.round(scale * 100)}% {scale !== 1 && "(ขยับเมาส์หรือใช้ทัชแพดเพื่อขยับดูรายละเอียดได้)"}
          </div>
        </div>
      )}
    </>
  );
}