import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { Camera, Calendar, MapPin, Music, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

// 📸 IMPORT รูปภาพปก/แกลเลอรีหลัก
import main1 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_2.jpg";
import main2 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_12.jpg";
import main3 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_13.jpg";
import main4 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_29.jpg";
import main5 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_31.jpg";
import main6 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_32.jpg";
import main7 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_39.jpg";
import main8 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_44.jpg";
import main9 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_64.jpg";
import main10 from "@/assets/Nanmusic/LINE_ALBUM_Nan music 05 mar 2026_260509_67.jpg";

// 📸 IMPORT รูปภาพช่วงที่ 1
import sec1_1 from "@/assets/Nanmusic/NFD1_783.JPG";
import sec1_2 from "@/assets/Nanmusic/NFD1_785.JPG";
import sec1_3 from "@/assets/Nanmusic/NFD1_786.JPG";
import sec1_4 from "@/assets/Nanmusic/NFD1_793.JPG";

// 📸 IMPORT รูปภาพช่วงที่ 2
import sec2_1 from "@/assets/Nanmusic/NFD1_812.JPG";
import sec2_2 from "@/assets/Nanmusic/NFD1_818.JPG";
import sec2_3 from "@/assets/Nanmusic/NFD1_823.JPG";
import sec2_4 from "@/assets/Nanmusic/NFD1_825.JPG";
import sec2_5 from "@/assets/Nanmusic/NFD1_827.JPG";
import sec2_6 from "@/assets/Nanmusic/NFD1_849.JPG";

// 📸 IMPORT รูปภาพช่วงที่ 3 (แยกตามลำดับเพลง)
import r1_1 from "@/assets/Nanmusic/NFD1_827.JPG";
import r1_2 from "@/assets/Nanmusic/NFD1_849.JPG";
import r1_3 from "@/assets/Nanmusic/NFD1_851.JPG";
import r1_4 from "@/assets/Nanmusic/NFD1_896.JPG";
import r1_5 from "@/assets/Nanmusic/NFD1_899.JPG";

import r2_1 from "@/assets/Nanmusic/NFD1_908.JPG";
import r2_2 from "@/assets/Nanmusic/NFD1_924.JPG";
import r2_3 from "@/assets/Nanmusic/NFD1_938.JPG";
import r2_4 from "@/assets/Nanmusic/NFD1_943.JPG";
import r2_5 from "@/assets/Nanmusic/NFD1_965.JPG";
import r2_6 from "@/assets/Nanmusic/NFD1_966.JPG";

import r3_1 from "@/assets/Nanmusic/NFD1_970.JPG";
import r3_2 from "@/assets/Nanmusic/NFD1_981.JPG";
import r3_3 from "@/assets/Nanmusic/NFD1_983.JPG";
import r3_4 from "@/assets/Nanmusic/NFD1_985.JPG";
import r3_5 from "@/assets/Nanmusic/NFD1_990.JPG";
import r3_6 from "@/assets/Nanmusic/NFD1_1009.JPG";
import r3_7 from "@/assets/Nanmusic/NFD1_1013.JPG";
import r3_8 from "@/assets/Nanmusic/NFD1_1015.JPG";

import r4_1 from "@/assets/Nanmusic/NFD1_948.JPG";
import r4_2 from "@/assets/Nanmusic/NFD1_959.JPG";
import r4_3 from "@/assets/Nanmusic/NFD1_962.JPG";

import r5_1 from "@/assets/Nanmusic/NFD1_828.JPG";
import r5_2 from "@/assets/Nanmusic/NFD1_833.JPG";
import r5_3 from "@/assets/Nanmusic/NFD1_849.JPG";
import r5_4 from "@/assets/Nanmusic/NFD1_851 (2).JPG";
import r5_5 from "@/assets/Nanmusic/NFD1_899.JPG";

import r6_1 from "@/assets/Nanmusic/NFD1_1009.JPG";
import r6_2 from "@/assets/Nanmusic/NFD1_966.JPG";
import r6_3 from "@/assets/Nanmusic/NFD1_1015.JPG";
import r6_4 from "@/assets/Nanmusic/NFD1_943.JPG";
import r6_5 from "@/assets/Nanmusic/NFD1_962.JPG";
import r6_6 from "@/assets/Nanmusic/NFD1_899.JPG";
import r6_7 from "@/assets/Nanmusic/NFD1_924.JPG";
import r6_8 from "@/assets/Nanmusic/NFD1_828.JPG";
import r6_9 from "@/assets/Nanmusic/NFD1_851 (2).JPG";
import r6_10 from "@/assets/Nanmusic/NFD1_818.JPG";
import r6_11 from "@/assets/Nanmusic/NFD1_825.JPG";

// 🎵 ไฟล์เสียงเพลง — เก็บบน Cloudflare R2 (ดู src/lib/media.ts)
import { mediaUrl } from "@/lib/media";
const audioMien = mediaUrl("Nanmusic/ฟ้อนเมี่ยน Master.wav");
const audioTaiLue = mediaUrl("Nanmusic/ไทลื้อ Master.wav");
const audioThepThida = mediaUrl("Nanmusic/เทพธิดาดอย Master.wav");
const audioLongNan = mediaUrl("Nanmusic/ล่องน่าน Master.wav");
const audioStarNan = mediaUrl("Nanmusic/ดาวน่านอยู่น่าน Master.wav");
const audioRainbowBridge = mediaUrl("Nanmusic/สะพานสายรุ้ง Master.wav");

export const Route = createFileRoute("/nan2026/music")({
  head: () => ({
    meta: [
      { title: "Nan Music : สายรุ้งแห่งขุนเขา — Nan Fest 2026" },
      { name: "description", content: "การแสดงดนตรีของชนเผ่าและชาติพันธุ์ในจังหวัดน่าน ร้อยเรียงเรื่องราววัฒนธรรมผ่านทำนองร่วมสมัย" },
    ],
  }),
  component: NanMusicPage,
});

function NanMusicPage() {
  const mainGallery = [main1, main2, main3, main4, main5, main6, main7, main8, main9, main10];

  // คลังรูปของแต่ละเพลงในกลุ่มสายรุ้งแห่งขุนเขา
  const mienImages = [r1_1, r1_2, r1_3, r1_4, r1_5];
  const taiLueImages = [r2_1, r2_2, r2_3, r2_4, r2_5, r2_6];
  const mhongImages = [r3_1, r3_2, r3_3, r3_4, r3_5, r3_6, r3_7, r3_8];
  const longNanImages = [r4_1, r4_2, r4_3];
  const starNanImages = [r5_1, r5_2, r5_3, r5_4, r5_5];
  const rainbowImages = [r6_1, r6_2, r6_3, r6_4, r6_5, r6_6, r6_7, r6_8, r6_9, r6_10, r6_11];

  // State สำหรับคุม Lightbox รูปภาพ
  const [isOpen, setIsOpen] = useState(false);
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setImagesList(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imagesList.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="pb-24 bg-background">
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Nan Music"
        thaiTitle="สายรุ้งแห่งขุนเขา"
        description="การแสดงดนตรีของชนเผ่าและชาติพันธุ์ในจังหวัดน่าน ร้อยเรียงเรื่องราวและทำนองที่ถักทอขึ้นด้วยหยาดเหงื่อและใจเพื่อส่งต่อความงดงามแห่งอัตลักษณ์ขุนเขา"
      />

      <section className="py-12">
        <div className="container-narrow space-y-16">
          
          {/* 🗓️ กำหนดการแสดงหลัก */}
          <FadeIn>
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-gold grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full mb-6">
                  <Music size={14} /> NAN FEST Showcase 2026
                </div>
                <h3 className="thai text-2xl md:text-3xl font-bold mb-6">
                  การแสดงดนตรีของชนเผ่าและชาติพันธุ์ในจังหวัดน่าน <br />
                  <span className="text-gold text-xl md:text-2xl font-normal">(ร้อยเรียงท่วงทำนองเชื่อมสัมพันธ์ 3 ชุดการแสดง)</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold" size={20} />
                    <p className="thai text-lg">1 พฤษภาคม 2569 | เวลา 19.00 – 21.00 น.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-crimson shrink-0 mt-1" size={20} />
                    <p className="thai text-base leading-relaxed text-white/90">
                      ริมหนองน้ำครก ชุมชนบ้านน้ำครกใหม่ <br />
                      ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-center border-l border-white/10 pl-8 hidden md:flex">
                <p className="thai text-sm text-white/70 italic leading-relaxed">
                  "ทุกเสียงดนตรี ทุกคำร้อง และทุกท่วงท่าฟ้อนรำที่ร้อยเรียงขึ้นด้วยความตั้งใจ พร้อมแล้วที่จะเปลี่ยนเป็นพลังอันยิ่งใหญ่ เพื่อส่งต่อความอบอุ่นและตราตรึงในใจผู้ฟังทุกคน"
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 🖼️ แกลเลอรีภาพรวมบรรยากาศการซ้อม */}
          <FadeIn>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-navy">
                <Sparkles size={20} className="text-gold" />
                <h4 className="thai font-bold text-xl">ภาพบรรยากาศการฝึกซ้อมและกิจกรรม Nan Music</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {mainGallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(mainGallery, idx)}
                    className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm"
                  >
                    <img src={img} alt="บรรยากาศซ้อมดนตรี" className="w-full h-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <Camera size={18} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 🎼 ส่วนรายละเอียดโปรแกรมทั้ง 3 ช่วง */}
          <div className="space-y-16 pt-8 border-t border-border">
            
            {/* ช่วงที่ 1 */}
            <FadeIn>
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow-sm border-l-8 border-l-crimson">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-crimson uppercase tracking-widest block">PART 1</span>
                  <h3 className="thai text-2xl font-bold text-navy">ช่วงที่ 1 : การขับซอล่องน่าน จากชิน ล่องน่านและชิตแม่น้ำ</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground thai text-sm leading-relaxed">
                  <p>
                    การขับซอของ <strong>ชิน ล่องน่าน</strong> มักจะหยิบเอาเรื่องราวของบริบทของพื้นที่และผู้คนที่อยู่ตรงหน้ามาเป็นส่วนหนึ่งของบทเพลง บทซอจึงกลายเป็นการสนทนาที่มาจากชีวิตของคนในชุมชน สอดคล้องกับวิถีความเป็นอยู่ ส่งต่อลักษณ์ท้องถิ่นที่ยังคงมีอยู่ในปัจจุบัน การใช้เสียงโทนต่ำและเครื่องดนตรีประจำตัว คือ ปีณ ทำให้ผู้ฟังเกิดความรู้สึกร่วมกับบทซอ โดยในงานครั้งนี้ ได้หยิบยกเรื่องราวและวิถีชีวิตจริงของชาวบ้านในหมู่บ้านน้ำครกใหม่มาเรียบเรียงร้อยร่วมกันอย่างสนุกสนาน
                  </p>
                  <p>
                    <strong>ชิน ล่องน่าน (อินสาน ศิลปินพื้นบ้านรุ่นใหม่)</strong> ผู้สืบทอดมรดก "จั้งซอ" แห่งเมืองน่าน นำเสนอผลงานเพลงพื้นบ้านประยุกต์ร่วมสมัยผสมผสานเครื่องดนตรีสากล ถ่ายทอดประเด็นวัฒนธรรมและสังคมผ่านสโลแกน <em>"จั้งซอเสียงต่ำชิน ล่องน่าน ดีดปีณเสียงยานอินสานบ้านส้อ บ่หล่อแต่ผ่อบ่ก้าย"</em> ร่วมกับ <strong>ครูชิต แม่น้ำ (วิชิต เรศมณเทียร)</strong> ศิลปินตำบลปอน อ.ทุ่งช้าง ผู้กลับมาสร้างคุณประโยชน์และเปิดสอนดนตรีให้แก่เด็กๆ ในบ้านเกิดจนกำเนิดเป็นวงดนตรีเด็กในนาม "ดนตรีปอน"
                  </p>
                </div>
                {/* คลังภาพ ช่วงที่ 1 */}
                <div className="grid grid-cols-4 gap-3 pt-4">
                  {[sec1_1, sec1_2, sec1_3, sec1_4].map((img, index, arr) => (
                    <div key={index} onClick={() => openLightbox(arr, index)} className="cursor-pointer overflow-hidden rounded-xl aspect-[4/3] bg-muted border border-border group relative shadow-sm">
                      <img src={img} alt="ชิน ล่องน่าน และครูชิต" className="w-full h-full object-cover transition group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* ช่วงที่ 2 */}
            <FadeIn>
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-6 shadow-sm border-l-8 border-l-navy">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-navy uppercase tracking-widest block">PART 2</span>
                  <h3 className="thai text-2xl font-bold text-navy">ช่วงที่ 2 : การแสดงดนตรีจากเด็กๆ บ้านปอน และ ครูชิต</h3>
                </div>
                <p className="thai text-sm text-muted-foreground leading-relaxed max-w-4xl">
                  การแสดงดนตรีชุดนี้เป็นการถ่ายทอดศักยภาพอันมหัศจรรย์ของเด็ก ๆ บ้านปอน ที่ใช้ระยะเวลาฝึกซ้อมเพียง 1 ปีเศษ ๆ เท่านั้นหลังจากครูชิต แม่น้ำ ย้ายกลับคืนสู่บ้านเกิดและชักชวนเยาวชนมาร่วมใจสร้างสรรค์ใช้เวลาว่างให้เป็นประโยชน์ เพลงแต่ละถ้อยคำซ่อนความภาคภูมิใจในรากเหง้าของตนเองอย่างมั่นคงแข็งแรง และสะท้อนให้เห็นชัดเจนว่าวัฒนธรรมพื้นบ้านสามารถงอกเงยและพัฒนาควบคู่ไปพร้อมกับการเปลี่ยนแปลงของโลกสมัยใหม่ได้อย่างลงตัวบนพื้นที่สร้างสรรค์แห่งนี้
                </p>
                {/* คลังภาพ ช่วงที่ 2 */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 pt-2">
                  {[sec2_1, sec2_2, sec2_3, sec2_4, sec2_5, sec2_6].map((img, index, arr) => (
                    <div key={index} onClick={() => openLightbox(arr, index)} className="cursor-pointer overflow-hidden rounded-xl aspect-[4/3] bg-muted border border-border group relative shadow-sm">
                      <img src={img} alt="ดนตรีเด็กบ้านปอน" className="w-full h-full object-cover transition group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* ช่วงที่ 3 (สายรุ้งแห่งขุนเขา - แทรกลิสต์เพลงบล็อกดาวน์โหลด + คลังภาพใต้เนื้อหา) */}
            <FadeIn>
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-8 shadow-sm border-l-8 border-l-gold">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold uppercase tracking-widest block">PART 3</span>
                  <h3 className="thai text-2xl font-bold text-navy">ช่วงที่ 3 : สายรุ้งแห่งขุนเขา (มหกรรมดนตรีชนเผ่าแห่งน่าน)</h3>
                  <p className="thai text-sm text-muted-foreground max-w-4xl">
                    การเดินทางของเสียงเพลงที่รวบรวมศิลปะ วัฒนธรรม และวิถีชีวิตดั้งเดิมของกลุ่มชาติพันธุ์ในเมืองน่าน ถ่ายทอดอัตลักษณ์เฉพาะถิ่นผ่านเครื่องดนตรี ท่วงทำนอง และภาษาดั้งเดิม เรียบเรียงและประพันธ์ขึ้นใหม่ทั้งหมด 6 บทเพลงพิเศษ:
                  </p>
                </div>

                {/* ลำดับเพลงมิวสิกเพลเยอร์ */}
                <div className="space-y-6">
                  
                  {/* เพลงที่ 1 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">01</span>
                          <span>เพลงฟ้อนเมี่ยน</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 7:45 นาที (เพลงเปิดวงไม่มีรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        สำเนียงชาวเมี่ยน (เย้า) เครื่องเงินลายปักปักเสื้อสีแดงดำอันโดดเด่น แม้วันจริงจะพบปัญหาขัดข้องของตัวแทนนักแสดง แต่ท่วงทำนองชุดนี้ได้รับความอนุเคราะห์สานต่อข้อมูลจากมหาวิทยาลัยพะเยามาบรรเลงอย่างสมเกียรติ
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioMien} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 1 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {mienImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(mienImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="ฟ้อนเมี่ยน" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* เพลงที่ 2 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">02</span>
                          <span>เพลงฟ้อนไทลื้อ</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 6:11 นาที (โรงเรียนเฉลิมพระเกียรติรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        กลุ่มผู้มีต้นกำเนิดจากสิบสองปันนา เชี่ยวชาญการถักทอผ้าลายละเอียดสีสันวิจิตร เอกลักษณ์สถาปัตยกรรมวิหารและภาษาพุทธผสมผีที่งดงามและเข้มแข็ง
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioTaiLue} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 2 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {taiLueImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(taiLueImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="ฟ้อนไทลื้อ" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* เพลงที่ 3 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">03</span>
                          <span>เทพธิดาดอย (กลุ่มชาติพันธุ์ม้ง)</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 7:25 นาที (โรงเรียนเฉลิมพระเกียรติรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        ประพันธ์คำร้องโดย วราห์ วรเวช นำมาเรียบเรียงเสียงประสานร่วมสมัยใหม่ ขับร้องโดย นิว นพวรรณ ผสานท่ารำงดงามสดใสจากเยาวชนมัธยมพระราชทานเฉลิมพระเกียรติ
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioThepThida} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 3 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {mhongImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(mhongImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="เทพธิดาดอย" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* เพลงที่ 4 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">04</span>
                          <span>เพลงล่องน่าน</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 9:01 นาที (เพลงขับร้องไม่มีรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        ตำนานซอล่องแพย้ายเมืองของปู่คำมาและย่าคำบี้แต่โบราณกาล ถ่ายทอดทำนองแห่งความระลึกถึงบ้านและสายน้ำโดย ชิน ล่องน่าน คนรุ่นใหม่ผู้รับช่วงสืบทอดอย่างจริงใจ
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioLongNan} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 4 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {longNanImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(longNanImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="ล่องน่าน" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* เพลงที่ 5 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">05</span>
                          <span>เพลงดาวน่าน</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 5:06 นาที (โรงเรียนบ้านปอนรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        บทเพลงจากแรงบันดาลใจแรกคืนรังของครูชิต แม่น้ำ ขับร้องด้วยเสียงใสของ นิว นพวรรณ เล่าถึงฝุ่นดวงดาวแสนล้านดวงที่รวมกลุ่มเผ่าชนอาศัย ณ ปลายฟ้าเมืองน่านอย่างผาสุก
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioStarNan} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 5 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {starNanImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(starNanImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="ดาวน่าน" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* เพลงที่ 6 */}
                  <div className="p-5 rounded-2xl border border-border bg-background/60 space-y-4">
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-4 space-y-1">
                        <div className="flex items-center gap-2 font-bold text-navy thai text-base">
                          <span className="text-xs font-mono text-muted-foreground">06</span>
                          <span>เพลงสะพานสายรุ้ง</span>
                        </div>
                        <span className="text-xs text-muted-foreground block font-mono">ความยาวเพลง 6:27 นาที (ทุกกลุ่มชาติพันธุ์ร่วมรำประกอบ)</span>
                      </div>
                      <div className="md:col-span-5 text-xs thai text-muted-foreground leading-normal">
                        ผลงานอมตะของน้าต้อม วงสองวัย ต้นแบบแรงบันดาลใจการทำดนตรีเยาวชนของครูชิต เป็นการรวมพลังสรุปยอดเขาเชิญชวนทุกกลุ่มคนจับมือก้าวข้ามเส้นแบ่งกั้นอย่างงดงาม
                      </div>
                      <div className="md:col-span-3 flex items-center justify-end">
                        <audio src={audioRainbowBridge} controls controlsList="nodownload" onContextMenu={handleContextMenu} className="w-full max-w-[220px] h-8 text-xs" />
                      </div>
                    </div>
                    {/* 🖼️ ภาพประกอบประจำเพลงที่ 6 */}
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-dashed border-border">
                      {rainbowImages.map((img, idx) => (
                        <div key={idx} onClick={() => openLightbox(rainbowImages, idx)} className="w-20 h-16 md:w-24 md:h-20 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-muted border border-border group">
                          <img src={img} alt="สะพานสายรุ้ง" className="w-full h-full object-cover transition group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* 📍 LIGHTBOX MODAL */}
      {isOpen && imagesList.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 p-2 rounded-full" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>

          {imagesList.length > 1 && (
            <button className="absolute left-4 md:left-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4">
            <img src={imagesList[currentIndex]} className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl select-none" onClick={(e) => e.stopPropagation()} />
            <div className="text-white/60 text-xs font-mono tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
              IMAGE {currentIndex + 1} / {imagesList.length}
            </div>
          </div>

          {imagesList.length > 1 && (
            <button className="absolute right-4 md:right-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full" onClick={nextImage}>
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}