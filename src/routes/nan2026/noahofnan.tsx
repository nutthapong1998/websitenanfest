import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { useState, useEffect, useMemo } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, X, Info, Target, Palette, Camera, BookOpen, Layers } from "lucide-react";

// =========================================================================
// 1. GLOB IMPORT รูปภาพทั้งหมดอัตโนมัติจากโฟลเดอร์ต่างๆ
// =========================================================================
const sImages = import.meta.glob("@/assets/s/*.{jpg,JPG,jpeg,JPEG,png,PNG}", { eager: true, import: "default" });
const noahImages = import.meta.glob("@/assets/noah/*.{jpg,JPG,jpeg,JPEG,png,PNG}", { eager: true, import: "default" });
const walkImages = import.meta.glob("@/assets/เดิน/*.{jpg,JPG,jpeg,JPEG,png,PNG}", { eager: true, import: "default" });
const artImages = import.meta.glob("@/assets/Art/*.{jpg,JPG,jpeg,JPEG,png,PNG}", { eager: true, import: "default" });

const imagePools = {
  s: sImages,
  noah: noahImages,
  walk: walkImages,
  art: artImages,
};

const getImgUrl = (path: string, type: keyof typeof imagePools) => {
  const fileName = path.split(/[/\\]/).pop();
  if (!fileName) return "";

  const pool = imagePools[type];
  const matchKey = Object.keys(pool).find(key => {
    const decodedKey = decodeURIComponent(key);
    return decodedKey.endsWith(`/${fileName}`);
  });

  return matchKey ? (pool[matchKey] as string) : "";
};

// =========================================================================
// 2. DATA MAPPING
// =========================================================================
const rawArtworksData = [
  {
    title: "การเรียนรู้ ศึกษาการอยู่อาศัย แบบเรือนแพ",
    artist: "กลุ่มอาสากอบกู้ภัยพิบัติ",
    artistImage: "",
    isFeatured: true,
    description: "ศึกษาการทำงานและการใช้งานของแพ ที่สามารถทำเป็นที่เก็บของใช้ต่างๆ ให้ทันท่วงทีหากน้ำท่วมแบบฉับพลัน",
    images: [
      getImgUrl("LINE_ALBUM_Shelter_260612_1.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_2.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_3.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_4.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_5.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_6.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_7.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_8.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_9.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_10.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_11.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_12.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_13.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_14.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_15.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_16.jpg", "walk"),
      getImgUrl("LINE_ALBUM_Shelter_260612_17.jpg", "walk"), getImgUrl("LINE_ALBUM_Shelter_260612_18.jpg", "walk")
    ].filter(Boolean)
  },
  {
    title: "สีสัน เสียง สายลม",
    artist: "นายวิชยา พัฒนเอี่ยม",
    artistImage: getImgUrl("1.png", "art"),
    isFeatured: true,
    description: "ผลงานศิลปะติดตั้งที่เล่นกับองค์ประกอบของธรรมชาติเมืองน่านเพื่อสร้างการรับรู้และตื่นตัว",
    images: [
      getImgUrl("NFD2_136.JPG", "s"), getImgUrl("NFD2_137.JPG", "s"), getImgUrl("NFD2_138.JPG", "s"),
      getImgUrl("NFD2_141.JPG", "s"), getImgUrl("NFD2_143 (1).JPG", "s"), getImgUrl("NFD2_143.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "บ้าน ชุมชนและสิ่งที่อยู่รอบตัว",
    artist: "นายวิชยา พัฒนะเอี่ยม",
    artistImage: getImgUrl("2.png", "art"),
    images: [
      getImgUrl("NFD2_130.JPG", "s"), getImgUrl("NANFEST_69.05.03-0025.JPG", "s"), getImgUrl("NANFEST_69.05.03-0058.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "บันทึกใต้นํ้า",
    artist: "นายวิชยา พัฒนะเอี่ยม",
    artistImage: getImgUrl("3.png", "art"),
    images: [
      getImgUrl("NANFEST_69.05.03-0061.JPG", "s"), getImgUrl("NANFEST_69.05.03-0063.JPG", "s"), getImgUrl("NANFEST_69.05.03-0081.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "ซื้ออากาศหายใจ ลมหายใจที่ต้องจ่าย",
    artist: "นายวิชยา พัฒนะเอี่ยม",
    artistImage: getImgUrl("4.png", "art"),
    images: [
      getImgUrl("NANFEST_69.05.03-0064.JPG", "s"), getImgUrl("NANFEST_69.05.03-0065.JPG", "s"),
      getImgUrl("NANFEST_69.05.03-0066.JPG", "s"), getImgUrl("NANFEST_69.05.03-0067.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "นิทรรศการสะท้อนภัยพิบัติ 01",
    artist: "นายศุภณัฐ ชะเมาะชาติ",
    artistImage: getImgUrl("5.png", "art"),
    images: [getImgUrl("NFD2_168.JPG", "s"), getImgUrl("NFD2_170.JPG", "s"), getImgUrl("NFD2_173.JPG", "s")].filter(Boolean)
  },
  {
    title: "นิทรรศการสะท้อนภัยพิบัติ 02",
    artist: "นายจาตุรันต์ จริยารัตนกูล",
    artistImage: getImgUrl("6.png", "art"),
    images: [
      getImgUrl("NFD2_186.JPG", "s"), getImgUrl("NFD2_187.JPG", "s"), getImgUrl("NFD2_188.JPG", "s"),
      getImgUrl("NFD2_189.JPG", "s"), getImgUrl("NFD2_190.JPG", "s"), getImgUrl("NFD2_191.JPG", "s"), getImgUrl("NFD2_192.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "โนอาห์",
    artist: "นายชัยณรงค์ คงสุข",
    artistImage: getImgUrl("7.png", "art"),
    images: [getImgUrl("NFD2_166.JPG", "s"), getImgUrl("NFD2_167.JPG", "s")].filter(Boolean)
  },
  {
    title: "แสงแห่งความหวัง",
    artist: "นายธนะชัย เตชา",
    artistImage: getImgUrl("8.png", "art"),
    images: [getImgUrl("NFD2_179.JPG", "s"), getImgUrl("NFD2_180.JPG", "s"), getImgUrl("NFD2_181.JPG", "s"), getImgUrl("NFD2_183.JPG", "s")].filter(Boolean)
  },
  {
    title: "บทสนทนาแห่งสายนํ้า",
    artist: "นายวณิชโรจน์ โพธิระหงส์",
    artistImage: getImgUrl("9.png", "art"),
    images: [getImgUrl("NANFEST_69.05.03-0090.JPG", "s")].filter(Boolean)
  },
  {
    title: "นํ้าเต้าปุง 2569",
    artist: "นายจักรกริช ฉิมนอก",
    artistImage: getImgUrl("10.png", "art"),
    images: [getImgUrl("NFD1_463.JPG", "s"), getImgUrl("NANFEST_69.05.03-0010.JPG", "s"), getImgUrl("NANFEST_69.05.03-0014.JPG", "s")].filter(Boolean)
  },
  {
    title: "เราเข้ากัน (ไม่) ได้",
    artist: "นายศุภณัฐ ชะเมาะชาติ",
    artistImage: getImgUrl("11.png", "art"),
    images: [getImgUrl("NANFEST_69.05.03-0093.JPG", "s"), getImgUrl("NANFEST_69.05.03-0098.JPG", "s")].filter(Boolean)
  },
  {
    title: "ฟ้าหลังฝน",
    artist: "นายจาตุรันต์ จริยารัตนกูล",
    artistImage: getImgUrl("12.png", "art"),
    images: [getImgUrl("NFD1_158.JPG", "s"), getImgUrl("NANFEST_69.05.03-0091.JPG", "s")].filter(Boolean)
  },
  {
    title: "รองลอยแห่งการเปลี่ยนผ่าน",
    artist: "นางสาวขวัญชนก วิริยศ",
    artistImage: getImgUrl("13.png", "art"),
    images: [
      getImgUrl("สกรีนช็อต 2026-06-14 115451.png", "s"),
      getImgUrl("สกรีนช็อต 2026-06-14 115458.png", "s"),
      getImgUrl("สกรีนช็อต 2026-06-14 115506.png", "s")
    ].filter(Boolean)
  },
  {
    title: "เสียงที่หายไปของป่า",
    artist: "นางสาวอาทิตยาภรณ์ ปานวน",
    artistImage: getImgUrl("14.png", "art"),
    images: [
      getImgUrl("NFD2_195.JPG", "s"), getImgUrl("NFD2_196.JPG", "s"), getImgUrl("NFD2_198.JPG", "s"),
      getImgUrl("NFD2_199.JPG", "s"), getImgUrl("NFD2_236.JPG", "s")
    ].filter(Boolean)
  },
  {
    title: "ลอยคอ",
    artist: "นายจาตุรันต์ จริยารัตนกูล",
    artistImage: getImgUrl("15.png", "art"),
    images: [getImgUrl("NFD2_239.JPG", "s"), getImgUrl("NFD2_242.JPG", "s")].filter(Boolean)
  },
  {
    title: "บ้านนํ้าครกใหม่ใหม่",
    artist: "นายนโรดม เขม้นเขตวิทย์",
    artistImage: getImgUrl("16.png", "art"),
    isFeatured: true,
    description: "กระบวนการสร้างความตระหนักรู้และการมีส่วนร่วมกับชุมชนบ้านน้ำครกใหม่ ผ่านสัญลักษณ์เชิงศิลป์",
    images: [
      getImgUrl("700063837_1649240022948784_8855980793384592313_n.jpg", "noah"),
      getImgUrl("700189208_1649238372948949_1067858183168299769_n.jpg", "noah"),
      getImgUrl("700235714_1649240029615450_3053190720079684482_n.jpg", "noah"),
      getImgUrl("700272498_1649239642948822_4761737750401671258_n.jpg", "noah"),
      getImgUrl("700285704_1649240496282070_281508804869821447_n.jpg", "noah"),
      getImgUrl("700325459_1649240026282117_7305625716299578246_n.jpg", "noah"),
      getImgUrl("700997889_1649240102948776_788095273462745662_n.jpg", "noah"),
      getImgUrl("701019908_1649240659615387_3177436330046397573_n.jpg", "noah"),
      getImgUrl("701123363_1649239206282199_1246081847020033353_n.jpg", "noah"),
      getImgUrl("701274162_1649240082948778_7600225052929526135_n.jpg", "noah"),
      getImgUrl("701296492_1649240692948717_2250481448668602562_n.jpg", "noah"),
      getImgUrl("701312365_1649240589615394_4937344697837518610_n.jpg", "noah"),
      getImgUrl("701370100_1649239346282185_3176509052048842976_n.jpg", "noah"),
      getImgUrl("701599263_1649239639615489_5826517496639322955_n.jpg", "noah"),
      getImgUrl("701658182_1649238529615600_2723270523236522355_n.jpg", "noah"),
      getImgUrl("702273620_1649239129615540_4646560934186015308_n.jpg", "noah")
    ].filter(Boolean)
  }
];

// คำนวณหาลำดับรูปภาพล่วงหน้า และผูก Index แบบถาวรเพื่อประสิทธิภาพที่ดีกว่าและป้องกันรูปซ้ำ
let currentGlobalIndex = 0;
const artworksData = rawArtworksData.map((item) => {
  const startIndex = currentGlobalIndex;
  currentGlobalIndex += item.images.length;
  return {
    ...item,
    globalStartIndex: startIndex,
  };
});

const flatImagesList = artworksData.reduce<string[]>((acc, item) => [...acc, ...item.images], []);

export const Route = createFileRoute("/nan2026/noahofnan")({
  head: () => ({
    meta: [
      { title: "Noah of Nan — Nan Fest 2026" },
      { name: "description", content: "โนอาห์ ฝ่านํ้าท่วม (Noah of Nan) — พื้นที่สร้างสรรค์และสื่อสารภัยพิบัติผ่านงานศิลปะเมืองน่าน" },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // เพิ่ม state สำหรับเก็บข้อมูลรูปผู้จัดทำที่จะเปิดดูใน Modal
  const [activeArtist, setActiveArtist] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setLightboxIndex(prev => (prev === 0 || prev === null ? flatImagesList.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setLightboxIndex(prev => (prev === flatImagesList.length - 1 || prev === null ? 0 : prev + 1));
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // คุมการ Scroll ของ Body เมื่อเปิด Modal ตัวใดตัวหนึ่งอยู่
  useEffect(() => {
    document.body.style.overflow = (lightboxIndex !== null || activeArtist !== null) ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxIndex, activeArtist]);

  const featuredArtworks = useMemo(() => artworksData.filter(art => art.isFeatured && art.images.length > 0), []);
  const normalArtworks = useMemo(() => artworksData.filter(art => !art.isFeatured && art.images.length > 0), []);

  return (
    <div className="pb-24 bg-background">
      {/* 1. HEADER */}
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Noah of Nan"
        thaiTitle="โนอาห์ ฝ่านํ้าท่วม"
        description="พื้นที่สร้างสรรค์และศิลปะจัดวางเพื่อการเรียนรู้และตระหนักภัยพิบัติอุทกภัยอย่างยั่งยืน"
      />

      {/* 2. BACKGROUND SECTION */}
      <section className="container-narrow py-12 border-b border-border">
        <FadeIn>
          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase tracking-wider">
                <Info size={16} />
                <span>Background & Significance</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-white">หลักการ และ เหตุผลความเป็นมา</h2>
              <div className="thai text-white/90 leading-relaxed text-sm md:text-base space-y-4 font-light">
                <p>
                  จังหวัดน่านเป็นพื้นที่ ที่ประสบอุทกภัยซํ้าซากเกือบทุกปี สาเหตุสําคัญมาจากภูมิประเทศที่มีลักษณะเป็นเขตที่ราบลุ่มเขาสูงชัน เมื่อมีฝนตกหนัก นํ้าป่าจะไหลหลากลงสู่แม่นํ้าน่านและลํานํ้าสาขา ก่อให้เกิดนํ้าท่วมฉับพลัน นํ้าป่าไหลหลาก และดินสไลด์ ส่งผลกระทบต่อชีวิตประชาชน บ้านเรือน ทรัพย์สิน เกษตรกรรม รวมถึงระบบเศรษฐกิจและสังคมในวงกว้าง
                </p>
                <p>
                  ที่ผ่านมา การจัดการภัยพิบัติส่วนใหญ่มักเป็นลักษณะการแก้ปัญหาเฉพาะหน้าเมื่อเกิดเหตุแล้ว ทําให้ไม่สามารถลดความเสียหายได้อย่างมีประสิทธิภาพ ดังนั้นการเตรียมความพร้อมเพื่อรับมือกก่อนเกิดภัยพิบัติจึงเป็นหัวใจสําคัญของการลดความสูญเสียและสร้างความเข้มแข็งให้แก่ชุมชน ซึ่งโครงการ <strong className="text-amber-300 font-medium">“โนอาห์ฝ่านํ้าท่วม (Noah of Nan)”</strong> ใช้สัญลักษณ์เรือโนอาห์เป็นแนวคิดหลักในการเตรียมพร้อมรับมืออุทกภัยจังหวัดน่าน
                </p>
                <p>
                  โดยบูรณาการทั้งการสร้างพื้นที่รองรับนํ้า ลดสิ่งกีดขวางทางนํ้า การจัดทําที่พักพิงปลอดภัยสําหรับคน และสัตว์ และการพัฒนาระบบแจ้งเตือนภัย ควบคู่กับการเสริมสร้างความรู้และการมีส่วนร่วมของประชาชน โดยมีการประยุกต์ใช้ศิลปะและความคิดสร้างสรรค์เป็นสื่อกลาง ถ่ายทอดองค์ความรู้และสร้างการตระหนักรู้ให้เข้าถึงง่ายและน่าสนใจเพื่อให้ชุมชนไม่เพียงแค่ “รู้และตระหนัก” แต่สามารถลงมือปฏิบัติ รับมือและปรับตัวได้จริงเพื่อการอยู่ร่วมกับนํ้าอย่างปลอดภัยและยั่งยืน
                </p>
                <p className="border-l-2 border-crimson pl-4 font-normal text-amber-200">
                  โครงการนี้ไม่ได้หยุดแค่การ “รู้แล้วตระหนัก” แต่ยกระดับไปถึงการ “รู้แล้วลงมือทํา” คือทําให้ประชาชนสามารถรับมือ โต้กลับและปรับตัวได้จริงในสถานการณ์อุทกภัยเพื่อให้จังหวัดน่านอยู่ร่วมกับนํ้าได้อย่างปลอดภัยและยั่งยืน
                </p>
              </div>

              {/* E-BOOK LINK */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-amber-300 font-mono flex items-center gap-1.5">
                    <BookOpen size={16} /> E-BOOK สรุปบทเรียนและจัดทำคู่มือ
                  </h4>
                  <p className="text-xs text-white/70 font-light">ฐานข้อมูลศิลปะเพื่อการจัดการภัยพิบัติ (Noah of Nan)</p>
                </div>
                <a
                  href="https://heyzine.com/flip-book/a3c08e7425.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-crimson hover:bg-crimson/95 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <BookOpen size={16} />
                  <span>เปิดอ่าน E-Book คู่มือระบบภัยพิบัติ</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. OBJECTIVES */}
      <section className="container-narrow py-12 border-b border-border">
        <FadeIn delay={0.1}>
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase tracking-wider">
              <Target size={16} />
              <span>Project Objectives</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-navy thai">วัตถุประสงค์โครงการ</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "เพื่อใช้ศิลปะเป็นเครื่องมือสื่อสารเรื่องภัยพิบัติ เพื่อถ่ายทอดข้อมูล ความรู้ และแนวทางการรับมือนํ้าท่วมให้ประชาชนเข้าใจง่าย ผ่านสื่อศิลป์ หลากหลายรูปแบบ เช่น จิตรรมฝาผนัง สื่อมัลติมีเดีย การแสดงหรือศิลปะจัดวาง",
                "ใช้ประสบการณ์จากภัยพิบัติสร้างการเรียนรู้เชิงสร้างสรรค์ โดยจัดเวิร์กช็อปและกิจกรรมศิลปะให้ชุมชน โดยเฉพาะเยาวชน ได้มีส่วนร่วมในการออกแบบสัญลักษณ์ป้ายสื่อสารหรือแผนที่นํ้าท่วมชุมชน เพื่อนําไปใช้จริงในสถานการณ์ภัยพิบัติ",
                "เชื่อมโยงศิลปะกับการสร้างความเข้มแข็งของชุมชน โดยใช้กระบวนการสร้างสรรค์เป็นเวทีให้ชุมชนแลกเปลี่ยนความคิดเห็น และร่วมออกแบบแนวทางรับมือภัยพิบัติ"
              ].map((text, i) => (
                <div key={i} className="bg-muted/40 border border-border p-5 rounded-2xl flex flex-col gap-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center font-mono text-xs font-bold">
                    0{i + 1}
                  </div>
                  <p className="thai text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. FEATURED ARTWORKS */}
      <section className="container-narrow py-16 space-y-20">
        <div className="flex items-center gap-2 text-crimson font-mono text-xs font-bold uppercase tracking-wider">
          <Palette size={16} />
          <span>Featured Masterpieces</span>
        </div>

        <div className="space-y-24">
          {featuredArtworks.map((art, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <FadeIn key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                {/* ฝั่งรูปภาพ Showcase ใหญ่ */}
                <div className="w-full lg:w-1/2 space-y-3">
                  <div 
                    onClick={() => setLightboxIndex(art.globalStartIndex)}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-md group cursor-pointer"
                  >
                    <img 
                      src={art.images[0]} 
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
                      <Camera size={20} className="mr-2" /> ดูผลงานทั้งหมดในชุดนี้
                    </div>
                    <div className="absolute top-3 right-3 bg-navy/80 text-white text-[10px] font-mono px-2 py-1 rounded-md backdrop-blur-sm">
                      Featured Work
                    </div>
                  </div>
                  
                  {/* รูปย่อย Preview ของคอลเลกชันเด่น */}
                  <div className="grid grid-cols-5 gap-2">
                    {art.images.slice(1, 6).map((img, subIdx) => {
                      const targetIdx = art.globalStartIndex + 1 + subIdx;
                      return (
                        <div 
                          key={subIdx}
                          onClick={() => setLightboxIndex(targetIdx)}
                          className="aspect-square rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <img src={img} alt="preview" className="w-full h-full object-cover" />
                        </div>
                      )
                    })}
                    {art.images.length > 6 && (
                      <div 
                        onClick={() => setLightboxIndex(art.globalStartIndex)}
                        className="aspect-square bg-navy text-white text-xs font-bold rounded-lg flex items-center justify-center cursor-pointer hover:bg-navy/90"
                      >
                        +{art.images.length - 6}
                      </div>
                    )}
                  </div>
                </div>

                {/* ฝั่งรายละเอียดข้อความ */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    {art.artistImage && (
                      <img 
                        src={art.artistImage} 
                        alt={art.artist} 
                        onClick={() => setActiveArtist({ name: art.artist, image: art.artistImage })}
                        className="w-14 h-20 rounded-xl object-cover border shadow-sm cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105" 
                        title="คลิกเพื่อดูรูปผู้จัดทำ"
                      />
                    )}
                    <div>
                      <span className="text-[11px] font-mono text-crimson font-bold uppercase tracking-wider block">ผู้จัดทำ</span>
                      <h5 className="text-sm font-bold text-navy thai">{art.artist}</h5>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy thai leading-tight">ผลงาน “{art.title}”</h3>
                  <p className="thai text-sm text-muted-foreground leading-relaxed">{art.description}</p>
                  
                  <button 
                    onClick={() => setLightboxIndex(art.globalStartIndex)}
                    className="inline-flex items-center gap-2 bg-navy text-white text-xs px-4 py-2.5 rounded-xl hover:bg-navy/90 transition-colors"
                  >
                    <Layers size={14} />
                    <span>เปิดดูแกลเลอรีเต็มรูปภาพ ({art.images.length} ภาพ)</span>
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 5. STANDARD EXHIBITION GRID */}
      <section className="bg-muted/30 border-y border-border py-16">
        <div className="container-narrow space-y-8">
          <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs font-bold uppercase tracking-wider">
            <Palette size={16} />
            <span>More Artworks Exhibition</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {normalArtworks.map((art, artIndex) => {
              return (
                <FadeIn key={artIndex} delay={0.05 * (artIndex % 3)} className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div className="p-4 space-y-3">
                    {/* ส่วนหัวการ์ดศิลปิน */}
                    <div className="flex items-center gap-2.5">
                      {art.artistImage ? (
                        <img 
                          src={art.artistImage} 
                          alt={art.artist} 
                          onClick={() => setActiveArtist({ name: art.artist, image: art.artistImage })}
                          className="w-10 h-14 rounded-lg object-cover border shadow-sm cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105" 
                          title="คลิกเพื่อดูรูปศิลปิน"
                        />
                      ) : (
                        <div className="w-10 h-14 rounded-lg bg-muted flex items-center justify-center text-muted-foreground border border-dashed"><Palette size={14} /></div>
                      )}
                      <div className="text-[11px] thai">
                        <span className="text-muted-foreground block">ศิลปิน</span>
                        <span className="font-medium text-navy">{art.artist}</span>
                      </div>
                    </div>

                    <h4 className="thai font-bold text-navy text-sm line-clamp-1">“{art.title}”</h4>
                  </div>

                  {/* ภาพหลักและ Overlay บอกจำนวน */}
                  <div 
                    onClick={() => setLightboxIndex(art.globalStartIndex)}
                    className="relative aspect-[4/3] w-full bg-muted overflow-hidden cursor-pointer group border-t border-border"
                  >
                    <img 
                      src={art.images[0]} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm text-white font-mono text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                      <Camera size={10} />
                      <span>{art.images.length} ภาพ</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX MODAL (รูปผลงาน) */}
      {lightboxIndex !== null && flatImagesList.length > 0 && (
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
              setLightboxIndex(prev => (prev === 0 ? flatImagesList.length - 1 : prev! - 1));
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
              src={flatImagesList[lightboxIndex]}
              alt="Noah of Nan Artwork Fullscreen"
              className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center space-y-1 max-w-xl px-4">
              <p className="text-white font-medium text-sm thai line-clamp-1">โนอาห์ ฝ่านํ้าท่วม (Noah of Nan)</p>
              <div className="text-xs text-white/50 font-mono">
                {lightboxIndex + 1} / {flatImagesList.length}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(prev => (prev === flatImagesList.length - 1 ? 0 : prev! + 1));
            }}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* 7. ARTIST IMAGE LIGHTBOX MODAL (รูปผู้จัดทำ) */}
      {activeArtist !== null && (
        <div
          onClick={() => setActiveArtist(null)}
          className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
        >
          <button
            onClick={() => setActiveArtist(null)}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full max-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-navy/90 border border-white/10 p-6 rounded-3xl shadow-2xl"
          >
            <img
              src={activeArtist.image}
              alt={activeArtist.name}
              className="max-w-full h-auto max-h-[55vh] object-contain rounded-2xl shadow-lg border border-white/5"
            />
            <div className="mt-4 text-center">
              <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-wider block mb-1">ผู้จัดทำ / ศิลปิน</span>
              <p className="text-white font-semibold text-base thai">{activeArtist.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}