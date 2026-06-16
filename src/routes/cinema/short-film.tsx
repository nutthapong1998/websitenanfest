import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon, ThumbsUp, Video, Users } from "lucide-react";

// 📍 แก้ไขส่วน Import: ชี้ Path ไปที่โฟลเดอร์ "NanshortFilm" ตามโครงสร้างจริง
// 📸 รูปภาพบรรยากาศ (แก้ไข @assets/ เป็น @assets/NanshortFilm/)
import sfImg1 from "@/assets/NanshortFilm/MD3_5611.jpg"; 
import sfImg2 from "@/assets/NanshortFilm/MD3_5616.jpg";
import sfImg3 from "@/assets/NanshortFilm/MD3_5624.jpg";
import sfImg4 from "@/assets/NanshortFilm/MD3_5625.jpg";
import sfImg5 from "@/assets/NanshortFilm/MD3_5628.jpg";
import sfImg6 from "@/assets/NanshortFilm/MD3_5630.jpg";
import sfImg7 from "@/assets/NanshortFilm/MD3_5638.jpg";
import sfImg8 from "@/assets/NanshortFilm/MD3_5646.jpg";
import sfImg9 from "@/assets/NanshortFilm/MD3_5652.jpg";
import sfImg10 from "@/assets/NanshortFilm/MD3_5667.jpg";
import sfImg11 from "@/assets/NanshortFilm/MD3_5684.jpg";
import sfImg12 from "@/assets/NanshortFilm/MD3_5697.jpg";
import sfImg13 from "@/assets/NanshortFilm/MD3_5722.jpg";
import sfImg14 from "@/assets/NanshortFilm/MD3_5726.jpg";
import sfImg15 from "@/assets/NanshortFilm/MD3_5765.jpg";

// 🎬 วิดีโอหนังสั้น 5 เรื่อง — เก็บบน Cloudflare R2 (ดู src/lib/media.ts)
import { mediaUrl } from "@/lib/media";
const video1 = mediaUrl("NanshortFilm/ทางกลับบ้าน น่าน.mp4");
const video2 = mediaUrl("NanshortFilm/ภาพยนตร์สั้น ข้าวหลามเจอนี่ ทีมเมืองสวดแชนแนล.mp4");
const video3 = mediaUrl("NanshortFilm/ภาพยนตร์สั้น ปริศนาคำขอมหัศจรรย์ ทีมหนองบัวฟิล์ม.mp4");
const video4 = mediaUrl("NanshortFilm/ภาพยนตร์สั้น เมืองอวนของคุณยาย ทีมโรงเรียนบ้านน้ำยาว.mp4");
const video5 = mediaUrl("NanshortFilm/สารคดี ไกไหม เมื่อคำว่าไก ไม่ใช่ระยะทาง ทีม KIDS ดีย์ ฟิลม์.mp4");

// 👤 รูปภาพผู้กำกับ / วิทยากร (Path ถูกต้องอยู่แล้ว)
import mentor1 from "@/assets/NanshortFilm/คุณนนทรี นิมิตบุตร.png";
import mentor2 from "@/assets/NanshortFilm/คุณสันติ แต้พานิช.png";
import mentor3 from "@/assets/NanshortFilm/คุณอุษา มานิตานนท์.png";
import mentor4 from "@/assets/NanshortFilm/คุณณัฐปคัลภ์ เข็มขาว.png";

export const Route = createFileRoute("/cinema/short-film")({
  head: () => ({
    meta: [
      { title: "NAN Short Film — เเวิร์กชอปหนังสั้น" },
      { name: "description", content: "Nan Short Film workshop - STORY TELNO ม่วน มัน สัน เล่า" },
      { property: "og:title", content: "NAN Short Film" },
      { property: "og:description", content: "อบรมเวิร์กชอปหนังสั้นร่วมกับผู้กำกับที่มากประสบการณ์" },
    ],
  }),
  component: ShortFilm,
});

function ShortFilm() {
  // 📂 อาเรย์รูปภาพบรรยากาศอบรมทั้งหมด
  const images = [
    sfImg1, sfImg2, sfImg3, sfImg4, sfImg5, sfImg6, sfImg7, sfImg8, 
    sfImg9, sfImg10, sfImg11, sfImg12, sfImg13, sfImg14, sfImg15
  ];

  // 🎞️ ข้อมูลภาพยนตร์สั้นทั้งหมด
  const movies = [
    { src: video1, title: "ทางกลับบ้าน น่าน", team: "Nan Short Film Project" },
    { src: video2, title: "ภาพยนตร์สั้น ข้าวหลามเจอนี่", team: "ทีมเมืองสวดแวดแชนแนล" },
    { src: video3, title: "ภาพยนตร์สั้น ปริศนาคำขอมหัศจรรย์", team: "ทีมหนองบัวฟิล์ม" },
    { src: video4, title: "ภาพยนตร์สั้น เมืองอวนของคุณยาย", team: "ทีมโรงเรียนบ้านน้ำยาว" },
    { src: video5, title: "สารคดี ไกไหม เมื่อคำว่าไก ไม่ใช่ระยะทาง", team: "ทีม KIDS ดีย์ ฟิลม์" },
  ];

  // 👤 อาเรย์ข้อมูลรายชื่อผู้กำกับและวิทยากร (📍 เอาสีขาวดำออก: ใช้ภาพสีตามต้นฉบับ)
  const mentors = [
    { name: "คุณนนทรีย์ นิมิบุตร", role: "ผู้กำกับภาพยนตร์", img: mentor1 },
    { name: "คุณสันติ แต้พานิช", role: "ผู้กำกับภาพยนตร์สารคดี", img: mentor2 },
    { name: "คุณอุษา มานิตานนท์", role: "ผู้กำกับภาพยนตร์สื่อโฆษณา", img: mentor3 },
    { name: "คุณณัฐปคัลภ์ เข็มขาว", role: "ผู้กำกับภาพยนตร์สั้น", img: mentor4 },
  ];

  // 🔍 State ควบคุมการแสดงผล Lightbox ของรูปภาพ
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔍 State ควบคุมตัวเลือกดูคลิปวิดีโอ
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <PageHeader
        eyebrow="Nan Fest Reconnecting2024"
        title="NAN Short Film"
        thaiTitle="ม่วน นัน สัน เล่า"
        description="เวิร์กชอปหนังสั้นร่วมกับสมาคมผู้กำกับภาพยนตร์ไทย อบรมกระบวนการเล่าเรื่องและการผลิตหนังครบวงจร"
      />
      
      <section className="py-16 bg-background">
        <div className="container-narrow">
          
          {/* 📝 แบนเนอร์ข้อมูลหลักและทีมที่ได้รับคัดเลือก */}
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-navy to-crimson text-white p-8 md:p-12 shadow-md mb-12">
              <div className="eyebrow text-gold font-semibold uppercase tracking-widest text-xs">Collaboration Workshop</div>
              
              <h3 className="thai text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
                Nan Short film ( Reconnecting )
              </h3>
              
              <p className="thai text-base md:text-lg text-white/95 max-w-3xl leading-relaxed mb-6 border-b border-white/10 pb-6">
                กิจกรรมอบรมการผลิตภาพยนตร์สั้นและสารคดี ม่วน มัน สัน เล่า ( Story Telno ) อบรมพื้นฐานการเล่าเรื่อง โครงสร้างบท การกำกับ การผลิต จนถึง Pre-production และ Post-production โดยผู้กำกับมากประสบการณ์
              </p>

              <div className="flex flex-wrap items-center gap-2 bg-black/20 rounded-xl p-4 border border-white/5 text-gold text-xs uppercase tracking-wider font-semibold">
                <ThumbsUp size={14} className="text-gold" /> ทีมที่ได้รับคัดเลือก: 4 ทีม
              </div>
              <div className="thai mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 list-decimal list-inside leading-relaxed pl-1">
                <li> Kids ดีย์ฟิล์ม กับผลงาน "สารคดี ไก(ล) ไหม"</li>
                <li> โรงเรียนบ้านน้ำยาว กับผลงาน "สารคดี กระชิบรักจากตายาย"</li>
                <li> เมืองสวดแวดแชนแนล กับผลงาน "ข้าวหลามเจอนี่"</li>
                <li>หนองบัวฟิล์ม กับผลงาน "ภาพยนตร์สั้น ปริศนาคำขอมหัศจรรย์"</li>
              </div>
            </div>
          </FadeIn>

          {/* 👤 ส่วนผู้กำกับและวิทยากร (📍 แก้ไขสไตล์: เอาสีขาวดำออก และเพิ่ม Hover Pop Effect) */}
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-2 bg-muted p-3 rounded-xl border border-border mb-8">
                <div className="thai flex-1 flex items-center justify-center gap-2 text-sm font-medium text-navy">
                  <Users size={18} className="text-crimson" /> ผู้กำกับและวิทยากรประจำเวิร์กชอป (Mentors)
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mentors.map((mentor, idx) => (
                  // 📍 เพิ่ม 'hover:-translate-y-2 hover:shadow-lg' เพื่อให้ภาพ Pop ขึ้นเมื่อลากเมาส์ผ่าน
                  <div key={idx} className="bg-card border border-border rounded-xl p-4 text-center shadow-sm transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-muted border border-border/50">
                      <img 
                        src={mentor.img} 
                        alt={mentor.name} 
                        // 📍 เอาคลาส 'grayscale' และ 'group-hover:grayscale-0' ออก เพื่อแสดงภาพสีตามต้นฉบับ
                        className="w-full h-full object-cover transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="thai font-bold text-navy text-sm md:text-base leading-tight">
                      {mentor.name}
                    </h4>
                    <p className="thai text-xs text-muted-foreground mt-1">
                      {mentor.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* layout แสดงผลแบ่งคอลัมน์ */}
          <div className="grid md:grid-cols-12 gap-8 items-start mb-16">
            
            {/* 📥 ฝั่งซ้าย: กล่องตารางข้อมูลกิจกรรมสีน้ำเงิน */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 bg-navy text-white rounded-2xl p-8 shadow-md md:sticky md:top-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Sparkles size={14} /> PROJECT SCHEDULE
                </div>
                
                <h3 className="thai text-xl font-bold text-white leading-snug">
                  ชื่อกิจกรรม : <span className="text-gold block mt-1">Nan Short film</span>
                </h3>
                <p className="thai text-xs text-white/60 mt-1">(🟣 ม่วน นัน สัน เล่า)</p>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Calendar className="text-gold shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">กำหนดการ</div>
                    <div className="thai text-base font-medium text-white mt-0.5">
                      20 - 21 มกราคม 2567
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <MapPin className="text-crimson shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">สถานที่จัดกิจกรรม</div>
                    <div className="thai text-base font-medium text-white mt-0.5 leading-relaxed">
                      ห้องน่านนิทรรศน์ หออัตลักษณ์นครน่าน<br />
                      จ.น่าน
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🖼️ ฝั่งขวา: แกลเลอรีรูปภาพบรรยากาศ */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              <div className="flex items-center gap-2 bg-muted p-3 rounded-xl border border-border">
                <div className="thai flex-1 flex items-center justify-center gap-2 text-sm font-medium text-navy">
                  <ImageIcon size={18} className="text-crimson" /> บรรยากาศการอบรมหนังสั้น
                </div>
              </div>

              {/* Slider รูปพรีวิวตัวเดี่ยว */}
              <div 
                onClick={() => openLightbox(currentIndex)}
                className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md cursor-pointer group relative"
              >
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                >
                  <ChevronLeft size={22} />
                </button>

                <img 
                  src={images[currentIndex]} 
                  alt={`Nan Short Film Display ${currentIndex + 1}`} 
                  className="w-full h-auto aspect-[4/3] object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 backdrop-blur-sm text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                >
                  <ChevronRight size={22} />
                </button>
                
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 shadow-sm z-10">
                  <span>{currentIndex + 1} / {images.length} Images</span>
                </div>
              </div>
            </div>

          </div>

          {/* 🎬 ส่วนแสดงผล: โซนฉายวิดีโอหนังสั้น 5 เรื่อง */}
          <FadeIn>
            <div className="border-t border-border pt-12">
              <div className="flex items-center gap-2 bg-muted p-3 rounded-xl border border-border mb-6">
                <div className="thai flex-1 flex items-center justify-center gap-2 text-sm font-medium text-navy">
                  <Video size={18} className="text-crimson" /> ผลงานหนังสั้นที่ได้รับคัดเลือก (Short Films)
                </div>
              </div>

              {/* Slider โครงสร้าง Video Player เลื่อนซ้าย-ขวา */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-lg aspect-video max-w-4xl mx-auto group">
                
                {/* ปุ่มเลื่อนคลิปก่อนหน้า */}
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* ตัวเล่นวิดีโอที่ปิดการดาวน์โหลด (controlsList="nodownload" และล็อกการคลิกขวา) */}
                <video
                  key={movies[currentVideoIndex].src}
                  src={movies[currentVideoIndex].src}
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain"
                />

                {/* ปุ่มเลื่อนคลิปถัดไป */}
                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>

                {/* ตัวเลขลำดับคลิปมุมขวาบน */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono z-10">
                  {currentVideoIndex + 1} / {movies.length} Films
                </div>
              </div>

              {/* รายละเอียดชื่อเรื่องของแต่ละหนังใต้ตัวเล่น */}
              <div className="text-center mt-5 max-w-2xl mx-auto px-4">
                <h4 className="thai text-lg md:text-xl font-bold text-navy leading-snug">
                  {movies[currentVideoIndex].title}
                </h4>
                <p className="thai text-xs md:text-sm text-muted-foreground mt-1">
                  ผลงานจาก: {movies[currentVideoIndex].team}
                </p>
              </div>

              {/* แถบจุดกลมเล็กๆ บอกสถานะแสดงวิดีโอ (Dots Navigation) */}
              <div className="flex justify-center gap-2 mt-4">
                {movies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentVideoIndex ? "bg-crimson w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* 🖼️ Lightbox Modal ของรูปภาพบรรยากาศ */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition bg-white/10 p-2.5 rounded-full z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition bg-white/10 p-3 rounded-full z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center px-4">
            <img 
              src={images[currentIndex]} 
              alt={`Nan Short Film Active ${currentIndex + 1}`} 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white/60 text-xs mt-5 tracking-widest font-mono bg-white/5 px-4 py-1.5 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

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