import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { 
  Lightbulb, 
  Calendar, 
  MapPin, 
  Box, 
  Smartphone, 
  Zap, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Search, 
  Utensils, 
  Clock,
  Sparkles,
  QrCode
} from "lucide-react";

// 👤 IMPORT GUEST SPEAKER IMAGE
import guestSpeakerImg from "@/assets/Nanidealab/กัลยา โกวิทวิสิทธิ์.png";

// 📸 IMPORT WORKSHOP 1 IMAGES
import ws1 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_3.jpg";
import ws2 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_5.jpg";
import ws3 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_6.jpg";
import ws4 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_7.jpg";
import ws5 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_8.jpg";
import ws6 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_10.jpg";
import ws7 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_11.jpg";
import ws8 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_12.jpg";
import ws9 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_14.jpg";
import ws10 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_16.jpg";
import ws11 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_30.jpg";
import ws12 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_31.jpg";
import ws13 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_33.jpg";
import ws14 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_34.jpg";
import ws15 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_36.jpg";
import ws16 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_40.jpg";
import ws17 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_42.jpg";
import ws18 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_43.jpg";
import ws19 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_46.jpg";
import ws20 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_48.jpg";
import ws21 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_51.jpg";
import ws22 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_54.jpg";
import ws23 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_55.jpg";
import ws24 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_56.jpg";
import ws25 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_61.jpg";
import ws26 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_64.jpg";
import ws27 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_66.jpg";
import ws28 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_67.jpg";
import ws29 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_72.jpg";
import ws30 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_73.jpg";
import ws31 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_75.jpg";
import ws32 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_76.jpg";
import ws33 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_77.jpg";
import ws34 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_78.jpg";
import ws35 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_82.jpg";
import ws36 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_84.jpg";
import ws37 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_90.jpg";
import ws38 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_96.jpg";
import ws39 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_99.jpg";
import ws40 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_102.jpg";
import ws41 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_107.jpg";
import ws42 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_108.jpg";
import ws43 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_111.jpg";
import ws44 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_125.jpg";
import ws45 from "@/assets/Nanidealab/LINE_ALBUM_Workshop paper mache_260611_128.jpg";

// 📸 IMPORT SHOWCASE IMAGES (8 ภาพแยก)
import sc1 from "@/assets/Nanidealab/NFD2_432.JPG";
import sc2 from "@/assets/Nanidealab/NFD2_440.JPG";
import sc3 from "@/assets/Nanidealab/NFD2_441.JPG";
import sc4 from "@/assets/Nanidealab/NFD2_442.JPG";
import sc5 from "@/assets/Nanidealab/NFD2_443.JPG";
import sc6 from "@/assets/Nanidealab/NFD2_444.JPG";
import sc7 from "@/assets/Nanidealab/NFD2_464.JPG";
import sc8 from "@/assets/Nanidealab/NFD2_468.JPG";

// 📸 IMPORT WORKSHOP 2 IMAGES
import w2_1 from "@/assets/W2/20260421144552.png";
import w2_2 from "@/assets/W2/20260421144633.png";
import w2_3 from "@/assets/W2/IMG_4762.JPG";
import w2_4 from "@/assets/W2/IMG_4775.JPG";
import w2_5 from "@/assets/W2/IMG_4777.JPG";
import w2_6 from "@/assets/W2/IMG_4778.JPG";
import w2_7 from "@/assets/W2/IMG_4782.JPG";
import w2_8 from "@/assets/W2/IMG_4784.JPG";
import w2_9 from "@/assets/W2/IMG_4786.JPG";
import w2_10 from "@/assets/W2/IMG_4788.JPG";
import w2_11 from "@/assets/W2/IMG_4789.JPG";
import w2_12 from "@/assets/W2/IMG_4819.JPG";
import w2_13 from "@/assets/W2/IMG_4823.JPG";
import w2_14 from "@/assets/W2/IMG_4829.JPG";
import w2_15 from "@/assets/W2/IMG_4831.JPG";
import w2_16 from "@/assets/W2/IMG_4832.JPG";
import w2_17 from "@/assets/W2/IMG_4881.JPG";

// --- AR & 3D Scan Results ---
import arResult1 from "@/assets/Nanidealab/20260421144903.png";
import arResult2 from "@/assets/Nanidealab/20260421145107.png";
import arResult3 from "@/assets/Nanidealab/20260421145341.png";
import arResult4 from "@/assets/Nanidealab/20260421145354.png";
import arResult5 from "@/assets/Nanidealab/20260421151032.png";
import arResult6 from "@/assets/Nanidealab/20260421151350.png";
import arResult7 from "@/assets/Nanidealab/20260421151404.png";

// --- QR Codes (Styly) ---
import qr1 from "@/assets/Nanidealab/Anda’s Purple Swamphen_0.png";
import qr2 from "@/assets/Nanidealab/Baikhao's Purple Swamphen_0.png";
import qr3 from "@/assets/Nanidealab/Baiyok’s Purple Swamphen_0.png";
import qr4 from "@/assets/Nanidealab/Big-c’s Purple Swamphen_0.png";
import qr5 from "@/assets/Nanidealab/Case’s Purple Swamphen_0.png";

export const Route = createFileRoute("/nan2026/idea-lab")({
  head: () => ({
    meta: [
      { title: "Nan Idea Lab : Storytelling — Nan Fest 2026" },
      { name: "description", content: "ห้องทดลองความคิดและการเล่าเรื่องชุมชนผ่านเทคโนโลยี AR และ 3D Scan โดยความร่วมมือกับ FabCafe Bangkok" },
    ],
  }),
  component: NanIdeaLabPage,
});

function NanIdeaLabPage() {
  const workshopImages = [
    ws1, ws2, ws3, ws4, ws5, ws6, ws7, ws8, ws9, ws10, 
    ws11, ws12, ws13, ws14, ws15, ws16, ws17, ws18, ws19, ws20, 
    ws21, ws22, ws23, ws24, ws25, ws26, ws27, ws28, ws29, ws30, 
    ws31, ws32, ws33, ws34, ws35, ws36, ws37, ws38, ws39, ws40, 
    ws41, ws42, ws43, ws44, ws45
  ];

  const workshop2Images = [
    w2_1, w2_2, w2_3, w2_4, w2_5, w2_6, w2_7, w2_8, w2_9, w2_10,
    w2_11, w2_12, w2_13, w2_14, w2_15, w2_16, w2_17
  ];

  const showcaseImages = [sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8];
  
  const artImages = [arResult1, arResult2, arResult3, arResult4, arResult5, arResult6, arResult7];

  const arQrs = [
    { qr: qr1, name: "Anda's Project" },
    { qr: qr2, name: "Baikhao's Project" },
    { qr: qr3, name: "Baiyok's Project" },
    { qr: qr4, name: "Big-C's Project" },
    { qr: qr5, name: "Case's Project" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setImagesList(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="pb-24 bg-background">
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Nan Idea Lab"
        thaiTitle="ห้องทดลองความคิด"
        description="พื้นที่จุดประกายการพัฒนาเมืองน่านผ่านพลังของคนรุ่นใหม่ โดยการผสานทุนทางวัฒนธรรมดั้งเดิมเข้ากับเทคโนโลยีแห่งอนาคต"
      />

      <section className="py-12">
        <div className="container-narrow space-y-20">
          
          {/* 🗓️ กำหนดการและสถานที่ */}
          <FadeIn>
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-gold grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full">
                  <Lightbulb size={14} /> Storytelling Workshop
                </div>
                <h3 className="thai text-2xl md:text-3xl font-bold">
                  Nan Idea Lab : Storytelling <br />
                  <span className="text-gold text-xl md:text-2xl font-normal">(กิจกรรมน่านไอเดียแล็บ)</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-gold shrink-0 mt-1" size={20} />
                    <div className="thai text-lg">
                      <p>Workshop: 21 เมษายน 2569</p>
                      <p className="text-white/60 text-base">Showcase: 1 – 3 พฤษภาคม 2569</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-crimson shrink-0 mt-1" size={20} />
                    <p className="thai text-base leading-relaxed text-white/90">
                      ชุมชนบ้านน้ำครกใหม่ ต.กองควาย <br />
                      อ.เมืองน่าน จ.น่าน
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 👤 ส่วนแสดงผลวิทยากร */}
              <div className="md:col-span-5 flex flex-col items-center justify-center border-l border-white/10 pl-8 hidden md:flex">
                <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center gap-5 border border-white/5 shadow-inner w-full max-w-sm text-center">
                    <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-gold/50 shrink-0 bg-navy shadow-lg">
                        <img 
                          src={guestSpeakerImg} 
                          alt="คุณกัลยา โกวิทวิสิทธิ์" 
                          className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-1.5 flex flex-col items-center">
                        <p className="thai text-xs text-gold font-bold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full">Guest Speaker</p>
                        <p className="thai text-base font-semibold text-white">คุณกัลยา โกวิทวิสิทธิ์</p>
                        <p className="thai text-xs text-white/70 leading-normal max-w-[200px]">ผู้ร่วมก่อตั้ง FabCafe Bangkok</p>
                    </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 🔍 บทนำกิจกรรม */}
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h4 className="thai text-2xl font-bold text-navy">เปลี่ยน "ไอเดียเล็กๆ" เป็นพลังขับเคลื่อนเมือง</h4>
                    <p className="thai text-sm text-muted-foreground leading-relaxed">
                        <strong>"Nan Idea lab"</strong> คือพื้นที่สำหรับคนรุ่นใหม่และคนทุกกลุ่มในจังหวัดน่านที่อยากเห็นบ้านเกิดพัฒนาอย่างสร้างสรรค์ ชุมชนบ้านน้ำครกใหม่ไม่ใช่เพียงผู้รับ แต่คือเจ้าของไอเดียร่วมที่แลกเปลี่ยนและต่อยอดแนวคิด เพื่อให้ไอเดียเหล่านั้นนำไปใช้ได้จริงในพื้นที่ โดยใช้เครื่องมือการเล่าเรื่องผ่านแผนที่ชุมชนในมุมมองใหม่
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center space-y-2 border border-border">
                        <Search size={24} className="text-crimson" />
                        <span className="thai text-xs font-bold">สำรวจ</span>
                    </div>
                    <div className="bg-muted aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center space-y-2 border border-border">
                        <Zap size={24} className="text-gold" />
                        <span className="thai text-xs font-bold">สร้างสรรค์</span>
                    </div>
                    <div className="bg-muted aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center space-y-2 border border-border">
                        <Smartphone size={24} className="text-navy" />
                        <span className="thai text-xs font-bold">เทคโนโลยี</span>
                    </div>
                </div>
            </div>
          </FadeIn>

          {/* 📌 3 หัวข้อการเล่าเรื่อง */}
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
                <div className="bg-card border border-border rounded-3xl p-8 h-full space-y-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center text-navy">
                        <MapPin size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">MYSTERY</h5>
                    <p className="thai text-xs text-muted-foreground">ปักหมุดบ้านร้างและเรื่องราวลึกลับที่ซ่อนอยู่ในตรอกซอกซอยของชุมชน</p>
                </div>
            </FadeIn>
            <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-3xl p-8 h-full space-y-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson">
                        <Clock size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">TIME</h5>
                    <p className="thai text-xs text-muted-foreground">ดอกไม้ที่แปรเปลี่ยนตามฤดูกาล บันทึกกาลเวลาที่หมุนเวียนผ่านพรรณไม้ในหมู่บ้าน</p>
                </div>
            </FadeIn>
            <FadeIn delay={0.3}>
                <div className="bg-card border border-border rounded-3xl p-8 h-full space-y-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                        <Utensils size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">FOOD</h5>
                    <p className="thai text-xs text-muted-foreground">แหล่งอาหารที่เป็นปากท้องของชุมชน ตั้งแต่สวนผักหลังบ้านไปจนถึงสำรับบนโต๊ะอาหาร</p>
                </div>
            </FadeIn>
          </div>

          {/* 🎨 ส่วนที่ 1: 3D Scan Artwork Gallery */}
          <FadeIn>
            <div className="pt-16 border-t border-border space-y-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h3 className="thai text-3xl font-bold text-navy flex items-center justify-center gap-3">
                        <Box className="text-gold" /> 3D Scan Artwork Gallery
                    </h3>
                    <p className="thai text-sm text-muted-foreground">
                        จินตนาการสร้างสรรค์ของเด็กๆ ในชุมชนที่ถูกแปลงโฉมให้อยู่ในรูปแบบดิจิทัลแอนิเมชันสามมิติผ่านการสแกนด้วยเทคโนโลยี 3D Scan
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artImages.map((img, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm group relative aspect-video bg-muted">
                            <img src={img} alt={`3D Art Content ${idx + 1}`} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button onClick={() => openLightbox(artImages, idx)} className="bg-white text-navy p-3 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs uppercase px-4">
                                    <Camera size={16} /> ดูภาพขยาย
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </FadeIn>

          {/* 📱 ส่วนที่ 2: AR Experience Directory */}
          <FadeIn>
            <div className="pt-16 border-t border-border space-y-8">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h3 className="thai text-3xl font-bold text-navy flex items-center justify-center gap-3">
                        <QrCode className="text-crimson" /> Interactive AR QR Codes
                    </h3>
                    <p className="thai text-sm text-muted-foreground">
                        เปิดแอปพลิเคชัน <strong>STYLY</strong> บนสมาร์ตโฟนของคุณแล้วสแกน QR Code ด้านล่างนี้ เพื่อสัมผัสและเปิดรับประสบการณ์โลกเสมือนจริง (Augmented Reality)
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {arQrs.map((item, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => openLightbox(arQrs.map(q => q.qr), idx)}
                          className="bg-muted/30 border border-border rounded-2xl p-5 flex flex-col items-center text-center space-y-4 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                        >
                            <div className="w-full aspect-square bg-white p-2 rounded-xl border border-border shadow-inner overflow-hidden relative">
                                <img 
                                  src={item.qr} 
                                  alt={`QR Code for ${item.name}`} 
                                  className="w-full h-full object-contain transition duration-300 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="thai text-[10px] bg-white/90 text-navy px-2 py-1 rounded-md shadow-sm font-semibold">กดขยาย</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="thai text-sm font-bold text-navy group-hover:text-crimson transition-colors">{item.name}</p>
                                <p className="thai text-[10px] text-muted-foreground uppercase tracking-wider">Scan or Tap to Zoom</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </FadeIn>

          {/* 🖼️ Workshop 1 Gallery */}
          <FadeIn>
            <div className="pt-16 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-gold" />
                        <h3 className="thai text-2xl font-bold text-navy">Workshop 1</h3>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {workshopImages.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => openLightbox(workshopImages, index)}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm"
                        >
                            <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
          </FadeIn>

          {/* 🖼️ Workshop 2 Gallery (อยู่ล่าง Workshop 1) */}
          <FadeIn>
            <div className="pt-16 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-crimson" />
                        <h3 className="thai text-2xl font-bold text-navy">Workshop 2</h3>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {workshop2Images.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => openLightbox(workshop2Images, index)}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm"
                        >
                            <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
          </FadeIn>

          {/* 🖼️ วัน SHOW CASE NAN IDEA LAB */}
          <FadeIn>
            <div className="pt-16 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-gold" />
                        <h3 className="thai text-2xl font-bold text-navy">วัน SHOW CASE NAN IDEA LAB</h3>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {showcaseImages.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => openLightbox(showcaseImages, index)}
                            className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm"
                        >
                            <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 p-2 rounded-full" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>

          <button className="absolute left-4 md:left-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full" onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length); }}>
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4">
            <img 
              src={imagesList[currentIndex]} 
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button className="absolute right-4 md:right-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full" onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % imagesList.length); }}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}