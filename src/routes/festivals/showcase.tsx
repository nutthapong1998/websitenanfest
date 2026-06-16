import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";

// 🎬 วิดีโอหลักไฮไลท์เทศกาล — เก็บบน Cloudflare R2 (ดู src/lib/media.ts)
import { mediaUrl } from "@/lib/media";
const showcaseVideo = mediaUrl("NanshowD3/Nanfest Showcase.mp4");

// 📸 Import รูปภาพกลุ่มที่ 1: ล่องน่าน (Day 1)
import d1_1 from "@/assets/NanShowD1/430882309_374253632060316_6939392725551749206_n.jpg";
import d1_2 from "@/assets/NanShowD1/431008062_374253552060324_5490343043483897871_n.jpg";
import d1_3 from "@/assets/NanShowD1/431338316_25327582600188609_5985642270207716946_n.jpg";
import d1_4 from "@/assets/NanShowD1/431384051_25327583306855205_8536502679758274841_n.jpg";
import d1_5 from "@/assets/NanShowD1/431571804_25327582560188613_1703228716573312803_n.jpg";
import d1_6 from "@/assets/NanShowD1/MD3_6415.jpg";
import d1_7 from "@/assets/NanShowD1/MD3_6433.jpg";
import d1_8 from "@/assets/NanShowD1/MD3_6507.jpg";
import d1_9 from "@/assets/NanShowD1/MDF_9739.jpg";

// 📸 Import รูปภาพกลุ่มที่ 2: โชว์เคส (Day 2)
import d2_1 from "@/assets/NanShowD2/7W1A4055.jpg";
import d2_2 from "@/assets/NanShowD2/429557987_713537937617835_2002106259031680068_n.jpg";
import d2_3 from "@/assets/NanShowD2/429919354_10160510286233929_3557926930862164256_n.jpg";
import d2_4 from "@/assets/NanShowD2/430550734_10160510285933929_4712586480530284384_n.jpg";
import d2_5 from "@/assets/NanShowD2/430977969_25327587830188086_5033757034546874991_n.jpg";
import d2_6 from "@/assets/NanShowD2/431297834_25327588096854726_4563441310439342430_n.jpg";
import d2_7 from "@/assets/NanShowD2/431407802_25327588380188031_7588745406090765817_n.jpg";
import d2_8 from "@/assets/NanShowD2/MD3_6530.jpg";

// 📸 Import รูปภาพกลุ่มที่ 3: ชาติพันธุ์ (Day 3)
import d3_1 from "@/assets/NanshowD3/429556902_732340969010157_7994473785487737071_n.jpg";
import d3_2 from "@/assets/NanshowD3/429560943_732340335676887_8483407717224698834_n.jpg";
import d3_3 from "@/assets/NanshowD3/429565749_732340589010195_781045323135462834_n.jpg";
import d3_4 from "@/assets/NanshowD3/429579085_732340285676892_4720739294116648541_n.jpg";
import d3_5 from "@/assets/NanshowD3/429652836_732340519010202_4019388728376392905_n.jpg";
import d3_6 from "@/assets/NanshowD3/430477467_732340125676908_6576713907346561842_n.jpg";
import d3_7 from "@/assets/NanshowD3/MD3_6883.jpg";
import d3_8 from "@/assets/NanshowD3/MDF_0037.jpg";
import d3_9 from "@/assets/NanshowD3/MDF_0126.jpg";
import d3_10 from "@/assets/NanshowD3/MDF_0200.jpg";
import d3_11 from "@/assets/NanshowD3/MDF_9949.jpg";
import d3_12 from "@/assets/NanshowD3/MDF_9986.jpg";
import d3_13 from "@/assets/NanshowD3/สำเนาของ MDF_0171.jpg";

// 📸 Import รูปภาพกลุ่มที่ 3.1 & 3.2: บูทร้านค้าและนิทรรศการ
import d3_1_1 from "@/assets/NanshowD3.1/429558489_731765692401018_1278833684684821842_n.jpg";
import d3_1_3 from "@/assets/NanshowD3.1/430910585_25327562680190601_1602445093723493334_n.jpg";
import d3_1_4 from "@/assets/NanshowD3.1/431014650_25327581783522024_286523650660785809_n.jpg";
import d3_1_5 from "@/assets/NanshowD3.1/431035722_25327582246855311_8632941939127417038_n.jpg";
import d3_1_6 from "@/assets/NanshowD3.1/LINE_ALBUM_จ๊างน่าน_240309_4.jpg";
import d3_1_7 from "@/assets/NanshowD3.1/LINE_ALBUM_จ๊างน่าน_240309_5.jpg";
import d3_1_8 from "@/assets/NanshowD3.1/MD3_6379.jpg";
import d3_1_9 from "@/assets/NanshowD3.1/MD3_6553.jpg";
import d3_1_10 from "@/assets/NanshowD3.1/MDF_9585.jpg";
// 3.2
import d3_2_1 from "@/assets/NanShowDay3.2/175112_0.jpg";

import d3_2_3 from "@/assets/NanShowDay3.2/MD3_6339.jpg";
import d3_2_4 from "@/assets/NanShowDay3.2/MDF_9589.jpg";
import d3_2_5 from "@/assets/NanShowDay3.2/MDF_9605.jpg";
import d3_2_6 from "@/assets/NanShowDay3.2/MDF_9617.jpg";
import d3_2_7 from "@/assets/NanShowDay3.2/MDF_9624.jpg";
import d3_2_8 from "@/assets/NanShowDay3.2/MDF_9652.jpg";
import d3_2_9 from "@/assets/NanShowDay3.2/MDF_9668.jpg";
import d3_2_10 from "@/assets/NanShowDay3.2/MDF_9671.jpg";
import d3_2_11 from "@/assets/NanShowDay3.2/MDF_9781.jpg";
import d3_2_12 from "@/assets/NanShowDay3.2/MDF_9787.jpg";
import d3_2_13 from "@/assets/NanShowDay3.2/MDF_9791.jpg";
import d3_2_14 from "@/assets/NanShowDay3.2/MDF_9830.jpg";
import d3_2_15 from "@/assets/NanShowDay3.2/MDF_9840.jpg";

export const Route = createFileRoute("/festivals/showcase")({
  head: () => ({
    meta: [
      { title: "NAN FEST Showcase — 1–3 March 2024" },
      { name: "description", content: "เทศกาลน่านโชว์เคส นิทรรศการ ศิลปะวัฒนธรรม ดนตรีชาติพันธุ์ และบูทร้านค้าสร้างสรรค์ ณ ข่วงเมืองสา" },
      { property: "og:title", content: "NAN FEST Showcase 2024" },
      { property: "og:description", content: "สัมผัสเสน่ห์เมืองสร้างสรรค์ กิจกรรมล่องน่าน โชว์เคส และวิถีชาติพันธุ์ร่วมสมัย" },
    ],
  }),
  component: Showcase,
});

type ProjectSchedule = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationDetail?: string;
  images: string[];
};

const schedules: ProjectSchedule[] = [
  {
    id: "sch-1",
    title: "ล่องน่าน",
    date: "1 มีนาคม 2567",
    time: "16.00 - 21.00 น.",
    location: "ข่วงเมืองสา อ.เวียงสา จ.น่าน",
    images: [d1_1, d1_2, d1_3, d1_4, d1_5, d1_6, d1_7, d1_8, d1_9],
  },
  {
    id: "sch-2",
    title: "โชว์เคส",
    date: "2 มีนาคม 2567",
    time: "16.00 - 21.00 น.",
    location: "ข่วงเมืองสา อ.เวียงสา จ.น่าน",
    images: [d2_1, d2_2, d2_3, d2_4, d2_5, d2_6, d2_7, d2_8],
  },
  {
    id: "sch-3",
    title: "ชาติพันธุ์",
    date: "3 มีนาคม 2567",
    time: "16.00 - 21.00 น.",
    location: "ข่วงเมืองสา อ.เวียงสา จ.น่าน",
    images: [d3_1, d3_2, d3_3, d3_4, d3_5, d3_6, d3_7, d3_8, d3_9, d3_10, d3_11, d3_12, d3_13],
  },
  {
    id: "sch-3.1",
    title: "บูทร้านค้าและนิทรรศการ",
    date: "3 มีนาคม 2567",
    time: "16.00 - 21.00 น.",
    location: "ข่วงเมืองสา อ.เวียงสา จ.น่าน",
    locationDetail: "ร้านจ๊างน่าน นิทรรศการ “ช้าง”",
    images: [
      d3_1_1,  d3_1_3, d3_1_4, d3_1_5, d3_1_6, d3_1_7, d3_1_8, d3_1_9, d3_1_10,
      d3_2_1,  d3_2_3, d3_2_4, d3_2_5, d3_2_6, d3_2_7, d3_2_8, d3_2_9, d3_2_10,
      d3_2_1, d3_2_12, d3_2_13, d3_2_14, d3_2_15
    ],
  },
];

function Showcase() {
  const [currentIndices, setCurrentIndices] = useState<Record<string, number>>({
    "sch-1": 0,
    "sch-2": 0,
    "sch-3": 0,
    "sch-3.1": 0,
  });

  const [lightbox, setLightbox] = useState<{ isOpen: boolean; group: string[]; index: number }>({
    isOpen: false,
    group: [],
    index: 0,
  });

  const handlePrevPreview = (schId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndices((prev) => ({
      ...prev,
      [schId]: prev[schId] === 0 ? max - 1 : prev[schId] - 1,
    }));
  };

  const handleNextPreview = (schId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndices((prev) => ({
      ...prev,
      [schId]: prev[schId] === max - 1 ? 0 : prev[schId] + 1,
    }));
  };

  const openLightbox = (images: string[], idx: number) => {
    setLightbox({ isOpen: true, group: images, index: idx });
  };

  return (
    <>
      <PageHeader
        eyebrow="PROJECT SCHEDULE"
        title="NAN FEST Showcase 2024"
        thaiTitle="น่านโชว์เคสและนิทรรศการสร้างสรรค์"
        description="ประมวลภาพกิจกรรมและตารางงานเทศกาลสร้างสรรค์เวียงสา 3 วันเต็ม อัดแน่นด้วยกิจกรรมล่องน่าน โชว์เคสทางวัฒนธรรม และร้านค้าชุมชน"
      />

      {/* 🎬 1. Section ด้านบนสุด: วิดีโอไฮไลท์เทศกาล (Nanfest Showcase.mp4) */}
      <section className="pt-12 bg-background">
        <div className="container-narrow">
          <FadeIn delay={0.02}>
            <div className="relative w-full aspect-video md:max-h-[520px] rounded-3xl overflow-hidden shadow-lg border border-border bg-black group">
              <video
                src={showcaseVideo}
                className="w-full h-full object-cover"
                controls
                controlsList="nodownload" // ❌ ปิดปุ่มดาวน์โหลดของ Browser ตัวเล่นหลัก
                onContextMenu={(e) => e.preventDefault()} // ❌ ป้องกันการคลิกขวาแล้วเลือกเซฟวิดีโอ
                loop
                playsInline
                // โน้ต: นำ attribute "muted" ออกเพื่อให้เปิดลำโพงส่งเสียงทันทีเมื่อกดเล่น 🔊
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-bold tracking-widest uppercase select-none border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                Featured Video
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🗓️ 2. Section ตารางกิจกรรมเดิม */}
      <section className="py-16 bg-background">
        <div className="container-narrow space-y-12">
          {schedules.map((schedule, index) => {
            const currentImgIdx = currentIndices[schedule.id] || 0;
            const currentImg = schedule.images[currentImgIdx];

            return (
              <FadeIn key={schedule.id} delay={(index + 1) * 0.05}>
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 grid md:grid-cols-12 gap-0">
                  
                  {/* 📝 ฝั่งซ้าย (6 คอลัมน์): กล่องข้อความกิจกรรม */}
                  <div className="md:col-span-6 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-crimson bg-crimson/10 px-3 py-1 rounded-full">
                        PROJECT SCHEDULE {schedule.id.replace("sch-", "")}
                      </div>

                      <div>
                        <h3 className="thai text-2xl md:text-3xl font-extrabold text-navy tracking-tight leading-tight">
                          กิจกรรม {schedule.title}
                        </h3>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="bg-muted p-2 rounded-lg shrink-0">
                            <Calendar size={18} className="text-navy" />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70">กำหนดการ</p>
                            <p className="thai text-sm font-semibold text-navy">{schedule.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="bg-muted p-2 rounded-lg shrink-0">
                            <Clock size={18} className="text-gold" />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70">เวลาจัดกิจกรรม</p>
                            <p className="thai text-sm font-medium text-navy">{schedule.time}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 text-muted-foreground">
                          <div className="bg-muted p-2 rounded-lg shrink-0 mt-0.5">
                            <MapPin size={18} className="text-crimson" />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground/70">สถานที่จัดกิจกรรม</p>
                            <p className="thai text-sm font-medium text-navy leading-relaxed">{schedule.location}</p>
                            {schedule.locationDetail && (
                              <p className="thai text-xs text-crimson font-medium mt-0.5">{schedule.locationDetail}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 md:pt-0 flex items-center gap-2 text-xs font-medium text-muted-foreground/80">
                      <ImageIcon size={14} className="text-navy" />
                      <span>มีรูปภาพทั้งหมด {schedule.images.length} ภาพในกิจกรรมนี้</span>
                    </div>
                  </div>

                  {/* 🖼️ ฝั่งขวา (6 คอลัมน์): แกลเลอรีสไลด์พรีวิวประจำกิจกรรม */}
                  <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto bg-muted min-h-[300px] group">
                    <button
                      onClick={(e) => handlePrevPreview(schedule.id, schedule.images.length, e)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-navy text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div 
                      onClick={() => openLightbox(schedule.images, currentImgIdx)}
                      className="w-full h-full cursor-zoom-in overflow-hidden"
                    >
                      <img 
                        src={currentImg} 
                        alt={`Preview ${schedule.title}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <button
                      onClick={(e) => handleNextPreview(schedule.id, schedule.images.length, e)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-navy text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[11px] font-mono shadow-md border border-white/10 select-none z-10">
                      {currentImgIdx + 1} / {schedule.images.length} บรรยากาศงาน
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 🖼️ Lightbox Modal ใหญ่สำหรับขยายชมรูปแบบจุใจ */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in backdrop-blur-md"
          onClick={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
          >
            <X size={24} />
          </button>

          {lightbox.group.length > 1 && (
            <button 
              className="absolute left-4 md:left-12 text-white/70 hover:text-white transition bg-white/10 p-4 rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(prev => ({
                  ...prev,
                  index: prev.index === 0 ? prev.group.length - 1 : prev.index - 1
                }));
              }}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
            <img 
              src={lightbox.group[lightbox.index]} 
              alt="Expanded view" 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white/60 text-xs mt-4 tracking-widest font-mono bg-white/5 px-5 py-2 rounded-full border border-white/10">
              IMAGE {lightbox.index + 1} / {lightbox.group.length}
            </div>
          </div>

          {lightbox.group.length > 1 && (
            <button 
              className="absolute right-4 md:right-12 text-white/70 hover:text-white transition bg-white/10 p-4 rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(prev => ({
                  ...prev,
                  index: prev.index === prev.group.length - 1 ? 0 : prev.index + 1
                }));
              }}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </>
  );
}