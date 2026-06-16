import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, X, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

// ดึงรูปภาพทีมงานเข้ามาใช้งานในหน้าคอนแทค
import contactTeamImg from "@/assets/contact-team.jpg";
import contactAdditionalImg from "@/assets/MDF_9757.jpg"; // ภาพที่สองสำหรับสไลด์ด้านใน

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NAN FEST" },
      { name: "description", content: "ติดต่อทีมงาน NAN FEST" },
    ],
  }),
  component: ContactPage,
});

function Item({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 grid place-items-center rounded-full bg-navy text-secondary-foreground shrink-0 group-hover:bg-crimson transition-colors">
        {icon}
      </div>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="thai text-navy mt-1">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
}

function ContactPage() {
  // มัดรวมรูปภาพเข้าด้วยกันเป็นอาเรย์อัลบั้ม
  const contactImages = [contactTeamImg, contactAdditionalImg];
  
  // ใช้เก็บค่า Index ของรูปที่แสดงอยู่บนหน้าเว็บหลักปัจจุบัน
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // ใช้เก็บค่า Index ของรูปที่เปิดอยู่บนหน้าต่างเต็มจอ (null = ปิดอยู่)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ฟังก์ชันกดเลื่อนภาพบนหน้าเว็บหลัก (ก่อนเปิดเต็มจอ)
  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation(); // กันไม่ให้ไปคลิกโดน container หลักที่เปิด modal
    setCurrentIndex((prev) => (prev === contactImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation(); // กันไม่ให้ไปคลิกโดน container หลักที่เปิด modal
    setCurrentIndex((prev) => (prev === 0 ? contactImages.length - 1 : prev - 1));
  };

  // ฟังก์ชันกดเลื่อนไปภาพก่อนหน้า (ขณะเปิดเต็มจอ)
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === 0 ? contactImages.length - 1 : prev! - 1));
    }
  };

  // ฟังก์ชันกดเลื่อนไปภาพถัดไป (ขณะเปิดเต็มจอ)
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((prev) => (prev === contactImages.length - 1 ? 0 : prev! + 1));
    }
  };

  // ดักจับการกดปุ่มบนคีย์บอร์ด (ลูกศร ซ้าย-ขวา และปุ่ม Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowLeft") setActiveIndex((prev) => (prev === 0 ? contactImages.length - 1 : prev! - 1));
      if (e.key === "ArrowRight") setActiveIndex((prev) => (prev === contactImages.length - 1 ? 0 : prev! + 1));
      if (e.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // ป้องกันไม่ให้หน้าเว็บเลื่อนขึ้นลงได้เมื่อเปิดหน้าต่างดูรูปเต็ม
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeIndex]);

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" thaiTitle="ติดต่อเรา" />
      <section className="container-narrow py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ฝั่งซ้าย: ข้อมูลติดต่อ */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <Item icon={<Mail size={18} />} label="Email" value="nanfestofficial@gmail.com" />
              <Item icon={<MapPin size={18} />} label="Address" value="110 หมู่ 2 ตำบลฝายแก้ว อำเภอภูเพียง จังหวัดน่าน 55000" />
              <Item icon={<Youtube size={18} />} 
                label="YouTube"
                value="NAN FEST"
                href="https://www.youtube.com/@NANFEST"
              />
              <Item 
                icon={<Facebook size={18} />} 
                label="Social Media" 
                value="NAN FEST" 
                href="https://www.facebook.com/nanfestofficial" 
              />
            </div>
          </FadeIn>

          {/* ฝั่งขวา: กรอบรูปเดี่ยวแบบมีปุ่มกดสลับสไลด์ซ้าย-ขวา */}
          <FadeIn delay={0.25}>
            <div 
              onClick={() => setActiveIndex(currentIndex)}
              className="overflow-hidden rounded-2xl border border-border shadow-md group cursor-zoom-in relative aspect-[4/3] w-full"
            >
              <img 
                src={contactImages[currentIndex]} 
                alt={`NAN FEST Gallery Preview`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* ปุ่มสลับรูปไปทางซ้าย (แสดงตลอดบนโมบาย, ซ่อนและ Fade In ขึ้นมาเมื่อ Hover บนเดสก์ท็อป) */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 text-navy backdrop-blur-sm shadow-sm hover:bg-crimson hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              {/* ปุ่มสลับรูปไปทางขวา */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 text-navy backdrop-blur-sm shadow-sm hover:bg-crimson hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>

              {/* Overlay ข้อความอธิบายด้านล่างรูปภาพ */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 text-navy text-xs px-3 py-1.5 rounded-full font-medium shadow-sm thai opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                คลิกเพื่อดูรูปใหญ่ ({currentIndex + 1}/{contactImages.length})
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* หน้าต่างขยายรูปเต็มแบบมีปุ่มเลื่อนอัลบั้ม */}
      {activeIndex !== null && (
        <div 
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 select-none animate-fade-in"
        >
          {/* ปุ่มปิดมุมขวาบน */}
          <button 
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          {/* ปุ่มลูกศรซ้ายเต็มจอ */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* ตัวโครงรูปภาพขนาดใหญ่ */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center rounded-xl overflow-hidden"
          >
            <img 
              src={contactImages[activeIndex]} 
              alt={`NAN FEST Gallery Fullscreen ${activeIndex + 1}`} 
              className="w-full h-full object-contain max-h-[80vh] rounded-lg"
            />
            
            {/* ตัวนับเลขบอกตำแหน่งภาพ */}
            <div className="mt-3 text-sm text-white/60 font-mono">
              {activeIndex + 1} / {contactImages.length}
            </div>
          </div>

          {/* ปุ่มลูกศรขวาเต็มจอ */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}