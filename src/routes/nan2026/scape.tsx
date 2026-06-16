import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { useState, useEffect } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, X, Layers } from "lucide-react";

// ==========================================
// 1. IMPORT รูปภาพตามโครงสร้างโฟลเดอร์ที่มีอยู่
// ==========================================

// กิจกรรมที่ 1: ศิลปะการแสดงสด (Performance Art) - ยกตัวอย่างภาพหลักๆ เพื่อไม่ให้ไฟล์โค้ดแน่นเกินไป
import wd1_007 from "@/assets/prem/WD1_007.JPG";
import wd1_010 from "@/assets/prem/WD1_010.JPG";
import wd1_012_1 from "@/assets/prem/WD1_012 (1).JPG";
import wd1_012 from "@/assets/prem/WD1_012.JPG";
import wd1_014 from "@/assets/prem/WD1_014.JPG";
import wd1_019 from "@/assets/prem/WD1_019.JPG";
import wd1_021 from "@/assets/prem/WD1_021.JPG";
import wd1_022 from "@/assets/prem/WD1_022.JPG";
// (หมายเหตุ: คุณสามารถเพิ่ม Import รูปภาพที่เหลือของ WD1, WD2, WD3 เข้าไปในอาเรย์ด้านล่างได้ตามสะดวก)

// กิจกรรมที่ 2: เวทีแลกเปลี่ยนศิลปินท้องถิ่นกับศิลปินนานาชาติ
import screenshot_111850 from "@/assets/prem/สกรีนช็อต 2026-06-12 111850.png";

// กิจกรรมที่ 3: การอ่านบทกวี หัวข้อกวี ใต้น้ำมีแสงแดด
import poem_0083 from "@/assets/กวี/NANFEST_69.05.03-0083.JPG";
import poem_0096 from "@/assets/กวี/NANFEST_69.05.03-0096.JPG";
import poem_0106 from "@/assets/กวี/NANFEST_69.05.03-0106.JPG";
import poem_0125 from "@/assets/กวี/NANFEST_69.05.03-0125.JPG";
import poem_0148 from "@/assets/กวี/NANFEST_69.05.03-0148.JPG";

// กิจกรรมที่ 4: Installation บนแพไม้ไผ่
import bamboo_0090 from "@/assets/NanShowDay3.2/NANFEST_69.05.03-0090.JPG";
import bamboo_0093 from "@/assets/NanShowDay3.2/NANFEST_69.05.03-0093.JPG";
import bamboo_158 from "@/assets/NanShowDay3.2/NFD1_158.JPG";
import bamboo_463 from "@/assets/NanShowDay3.2/NFD1_463.JPG";

// กิจกรรมที่ 5: การเดินเล่นภายในชุมชนและทำกิจกรรม workshop ร่วมกับชุมชน
import walk_1 from "@/assets/เดิน/LINE_ALBUM_ลงชุมชนบ้านน้ำครกครั้งที่ 2 (22 jan 26)_260612_1.jpg";
import walk_2 from "@/assets/เดิน/LINE_ALBUM_ลงชุมชนบ้านน้ำครกครั้งที่ 2 (22 jan 26)_260612_2.jpg";
import walk_3 from "@/assets/เดิน/LINE_ALBUM_ลงชุมชนบ้านน้ำครกครั้งที่ 2 (22 jan 26)_260612_3.jpg";
import walk_4 from "@/assets/เดิน/LINE_ALBUM_ลงชุมชนบ้านน้ำครกครั้งที่ 2 (22 jan 26)_260612_4.jpg";
import walk_5 from "@/assets/เดิน/LINE_ALBUM_ลงชุมชนบ้านน้ำครกครั้งที่ 2 (22 jan 26)_260612_5.jpg";

// กิจกรรมที่ 6: แพยายเตียมฝ่าน้ำท่วม
import shelter_1 from "@/assets/เดิน/LINE_ALBUM_Shelter_260612_1.jpg";
import shelter_2 from "@/assets/เดิน/LINE_ALBUM_Shelter_260612_2.jpg";
import shelter_7 from "@/assets/เดิน/LINE_ALBUM_Shelter_260612_7.jpg"; // ภาพ 3D จำลอง
import shelter_9 from "@/assets/เดิน/LINE_ALBUM_Shelter_260612_9.jpg"; // ภาพแพจริง

// กิจกรรมที่ 7: นิทรรศการบ้านร้าง (ย่อยออกเป็น 3 นิทรรศการย่อยอยู่ในกลุ่มเดียวกัน)
import empty_101 from "@/assets/บ้านร้าง/NFD2_101.JPG";
import empty_103 from "@/assets/บ้านร้าง/NFD2_103.JPG";
import empty_271 from "@/assets/บ้านร้าง/NFD2_271.JPG";
import empty_277 from "@/assets/บ้านร้าง/NFD2_277.JPG";
import empty_245 from "@/assets/บ้านร้าง/NFD2_245.JPG";
import empty_239 from "@/assets/บ้านร้าง/NFD2_239.JPG";

export const Route = createFileRoute("/nan2026/scape")({
  head: () => ({
    meta: [
      { title: "Nan Scape — Nan Fest 2026" },
      { name: "description", content: "Nan Scape : Walking under Water (เดินเล่นใต้น้ำ) — ภูมิทัศน์เมืองน่านในมุมมองใหม่" },
    ],
  }),
  component: NanScapePage,
});

// อินเตอร์เฟสสำหรับโมเดลโครงสร้างข้อมูลกิจกรรม
interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  extraContent?: React.ReactNode; // สำหรับใส่รายชื่อศิลปินหรือข้อมูลย่อยเพิ่มเติม
}

function NanScapePage() {
  // สเตตสำหรับควบคุมแกลเลอรีรูปเต็ม (Lightbox)
  const [lightbox, setLightbox] = useState<{ activityId: number; imgIndex: number } | null>(null);

  // อาร์เรย์เก็บข้อมูล 8 กิจกรรมหลักของโครงการ Walking under Water
  const activities: Activity[] = [
    {
      id: 1,
      title: "ศิลปะการแสดงสด (Performance Art)",
      date: "6 – 8 กุมภาพันธ์ 2569",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "การแลกเปลี่ยนศิลปินจากประเทศไทย ประเทศจีน และประเทศสวิตเซอร์แลนด์ในพื้นที่หมู่บ้านน้ำครกใหม่ และธรรมชาติริมหนองน้ำครก ภายใต้หัวข้อที่ได้รับแรงบันดาลใจจากระดับน้ำท่วมสูงเลยหัว เป็นการเผชิญชีวิตคนต้นน้ำแบบชาวน่าน น้ำท่วมเป็นภาวะตามธรรมชาติของคนต้นน้ำ เรียนรู้ที่จะอยู่กับน้ำ ไม่ยอมให้น้ำท่วมเป็นภัยพิบัติอีกต่อไป ซึ่งกิจกรรมนี้ได้รับความร่วมมือจากโรงเรียนบ้านน้ำครกใหม่ให้นักเรียนมาร่วมสร้างสรรค์งานการแสดงสดร่วมกับศิลปินระดับโลกอีกด้วย",
      images: [wd1_007, wd1_010, wd1_012_1, wd1_012, wd1_014, wd1_019, wd1_021, wd1_022],
      extraContent: (
        <div className="mt-4 grid gap-3 text-xs bg-navy/5 p-4 rounded-xl border border-navy/10 thai">
          <p className="font-semibold text-navy">รายชื่อศิลปินผู้เข้าร่วมการแสดงสด:</p>
          <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
            <li><strong className="text-navy">ประเทศจีน (เมืองอู่ฮั่น):</strong> Pan Chennong, Cheng Zhiyuan, Fanxi Wang, T.K.K, Yilina</li>
            <li><strong className="text-navy">ประเทศสวิตเซอร์แลนด์ (Pro Helvetia):</strong> Valerian Maly, Klara Schilliger</li>
            <li><strong className="text-navy">ประเทศไทย (กลุ่มจรัล):</strong> ชมพูนุช พุทธา, อนุชา เหมมาลา, อนุชิต เหมมาลา, Xuan Liu</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "เวทีแลกเปลี่ยนศิลปินท้องถิ่นกับศิลปินนานาชาติ",
      date: "5 - 9 กุมภาพันธ์ 2569",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "จัดขึ้นเพื่อเชื่อมโยงความแตกต่างหลากหลายของภาษา วิถีชีวิตและวัฒนธรรม ผ่านศิลปะการแสดงร่วมสมัยที่ไร้พรมแดน ทำให้เกิดการแลกเปลี่ยนเทคนิค วิธีการสร้างสรรค์ และแบ่งปันเรื่องราวของจิตวิญญาณ รากเหง้าดั้งเดิม ตลอดจนมุมมองที่มีต่อโลกใบนี้ เป็นการสร้างเครือข่ายสร้างสรรค์เพื่อก้าวไปสู่ระดับสากลโดยรักษาอัตลักษณ์ของน่านเอาไว้อย่างครบถ้วน",
      images: [screenshot_111850],
    },
    {
      id: 3,
      title: "การอ่านบทกวีจากกวีไทยและกวีน่าน หัวข้อ \"กวี ใต้น้ำมีแสงแดด\"",
      date: "งาน NAN FEST Showcase 2026 (1 – 3 พฤษภาคม 2569 เวลา 16.30 – 18.00 น.)",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "เพื่อต้องการสร้างบรรยากาศแห่ง 'ความสุข' และจุดประกายแห่งความหวังภายใต้ภาวะเผชิญหน้ากับน้ำท่วมใหญ่ซ้ำซาก บทกวีทำให้ผู้ฟังได้ตื่นรู้และจินตนาการไปกับภาษาอันสละสลวยและงดงามเหนือขอบเขตข้อจำกัดของภัยธรรมชาติ",
      images: [poem_0083, poem_0096, poem_0106, poem_0125, poem_0148],
      extraContent: (
        <div className="mt-3 text-xs bg-navy/5 p-4 rounded-xl border border-navy/10 thai space-y-1">
          <p className="font-semibold text-navy">รายชื่อกวีชั้นนำผู้ร่วมอ่านบทกวี:</p>
          <p className="text-muted-foreground"><span className="text-navy font-medium">1 พ.ค.:</span> เมธา เมธี, วรพจน์ พันธ์พงศ์, ชิน ล่องน่าน, บินหลาชัย, สมพงษ์ ทวี</p>
          <p className="text-muted-foreground"><span className="text-navy font-medium">2 พ.ค.:</span> ทักษณะและนันทพล จันทรางศุ, จักรกริช ฉิมนอก, วรัญญู อั๋นประเสริฐ, ประพันธ์ สุนทรฐิติ, บินหลาชัย, สหายหมอก, ใหญ่ วันออก, ตุ๊ก วัชระ, สุวัฒน์ อาวุธ</p>
          <p className="text-muted-foreground"><span className="text-navy font-medium">3 พ.ค.:</span> เมธา เมธี, บินหลาชัย, จักรกริช ฉิมนอก, วรัญญู อั๋นประเสริฐ</p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Installation บนแพไม้ไผ่",
      date: "งาน NAN FEST Showcase 2026 (1 – 3 พฤษภาคม 2569 เวลา 9.00 – 21.00 น.)",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "โครงสร้างแพไม้ไผ่ที่ผ่านฝีมืออันคุ้นเคยของคนในพื้นที่ นำมาสร้างสรรค์ร่วมกับงานศิลปะสื่อจัดวางเพื่อส่งต่อแรงบันดาลใจ ให้ชาวบ้านได้เห็นแนวทางและรูปแบบสถาปัตยกรรมทางเลือกที่จะช่วยบรรเทาและลดมูลค่าความสูญเสียเมื่อเกิดอุทกภัยฉับพลัน",
      images: [bamboo_0090, bamboo_0093, bamboo_158, bamboo_463],
      extraContent: (
        <p className="mt-2 text-xs text-muted-foreground thai">
          <span className="font-semibold text-navy">จัดแสดงผลงานโดยศิลปิน 4 ท่าน:</span> นายวณิชโรจน์ โพธิระหงส์, นายจักรกริช ฉิมนอก, นายศุภณัฐ ชะเมาะชาติ และ นายจาตุรันต์ จริยารัตนกูล
        </p>
      ),
    },
    {
      id: 5,
      title: "การเดินเล่นภายในชุมชนและทำกิจกรรม workshop ร่วมกับชุมชน",
      date: "5 - 9 กุมภาพันธ์ 2569",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "การให้ศิลปินทั้งไทยและต่างชาติลงพื้นที่ เพื่อทำความรู้จัก เรียนรู้ประวัติศาสตร์ วัฒนธรรม รวมถึงสถาปัตยกรรมพื้นถิ่นดั้งเดิมอย่างลึกซึ้ง ก่อให้เกิดการเชื่อมโยงทางจิตวิญญาณระหว่างตัวศิลปินและคนในพื้นที่ ก่อนถ่ายทอดเรื่องราวเหล่านั้นออกมาผ่านภาษาภาพและการแสดงสด",
      images: [walk_1, walk_2, walk_3, walk_4, walk_5],
    },
    {
      id: 6,
      title: "แพยายเตียมฝ่าน้ำท่วม (Floating Shelter)",
      date: "เดือนเมษายน - เดือนพฤษภาคม 2569",
      location: "ชุมชนบ้านน้ำครกใหม่ อำเภอเมืองน่าน จังหวัดน่าน (และบ้านยายเตียม อ.ท่าวังผา)",
      description: "บ้านแพต้นแบบสู้น้ำท่วมสำหรับ 'ยายเตียม' ผู้ประกอบอาชีพจักสานหมวกไม้ไผ่ที่สูญเสียทรัพย์สินและเครื่องมือทำกินทั้งหมดไปกับเหตุการณ์น้ำท่วมมิดหลังคาในปี 2567 โครงการนี้ถูกออกแบบร่วมกันโดยกลุ่มสถานิกเพื่อกู้ภัยพิบัติ (D4D-Design For Disasters) และทีมงานน่านเฟส เพื่อเป็นโมเดลที่อยู่อาศัยที่สามารถลอยตัวขึ้นตามระดับน้ำ ช่วยปกป้องชีวิตและทรัพย์สินของกลุ่มเปราะบางในชุมชนได้อย่างทันท่วงที",
      images: [shelter_1, shelter_2, shelter_7, shelter_9],
    },
    {
      id: 7,
      title: "นิทรรศการบ้านร้าง (Abandoned House Exhibition)",
      date: "เดือนเมษายน - เดือนพฤษภาคม 2569",
      location: "ชุมชนบ้านน้ำครกใหม่ ตำบลกองควาย อำเภอเมืองน่าน จังหวัดน่าน",
      description: "การเปลี่ยนบ้านร้างในชุมชนที่เคยไร้ค่าและเต็มไปด้วยร่องรอยคราบน้ำท่วม ให้กลายเป็นพื้นที่ทางศิลปะที่สะสมชั้นประวัติศาสตร์ ความทรงจำ และบาดแผลทางสังคม ผ่าน 3 นิทรรศการย่อยที่ร้อยเรียงกันอย่างทรงพลัง",
      images: [empty_101, empty_103, empty_271, empty_277, empty_245, empty_239],
      extraContent: (
        <div className="mt-3 space-y-3 text-xs bg-navy/5 p-4 rounded-xl border border-navy/10 thai">
          <div>
            <span className="font-bold text-navy block">1. นิทรรศการเด็กบ้านป่า (อ.จักรพันธ์ สุวรรณพาณิชย์ และ เด็กๆ บ้านน้ำครกใหม่):</span>
            <span className="text-muted-foreground text-[11px]">บอกเล่าเรื่องราวการอยู่ร่วมกับป่าและสายน้ำผ่านตัวละครตุ๊กตาเปเปอร์มาเช่ สะท้อนแนวคิดการออกแบบสถาปัตยกรรมเพื่อปรับตัวเข้าหาธรรมชาติ</span>
          </div>
          <div>
            <span className="font-bold text-navy block">2. นิทรรศการแขกแก้วมาเยือน (ดร.จักรกริช ฉิมนอก และ กลุ่มศิลปินเชียงราย 20 ท่าน):</span>
            <span className="text-muted-foreground text-[11px]">ร่วมเปิดบทสนทนาฟื้นชีวิตจิตวิญญาณแห่งความทรงจำระหว่าง 'คน-สถานที่-เวลา' ในฐานะผู้มาเยือนคนพิเศษ</span>
          </div>
          <div>
            <span className="font-bold text-navy block">3. นิทรรศการหัวโอ้ หัวเรือ และ  นิทรรศการลอยคอ (อ.จาตุรันต์ จริยารัตนกูล):</span>
            <span className="text-muted-foreground text-[11px]">สะท้อนสัญลักษณ์ 'หัวเรือเมืองน่าน' ที่นำพาศิลปะมาขับเคลื่อนชุมชน พร้อมผลงาน 'ลอยคอ' ชวนตั้งคำถามถึงวิกฤต climate crisis ที่ทุกคนกำลังเผชิญร่วมกัน</span>
          </div>
        </div>
      ),
    },
  ];

  // คอมโพเนนต์ย่อยสำหรับจัดการ "รูปภาพเดี่ยวที่มีปุ่มสไลด์ซ้าย-ขวาในตัว" ของแต่ละกิจกรรม
  const ImageSlider = ({ activity }: { activity: Activity }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === activity.images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? activity.images.length - 1 : prev - 1));
    };

    return (
      <div 
        onClick={() => setLightbox({ activityId: activity.id, imgIndex: currentIndex })}
        className="overflow-hidden rounded-2xl border border-border shadow-md group cursor-zoom-in relative aspect-[4/3] w-full bg-muted"
      >
        <img 
          src={activity.images[currentIndex]} 
          alt={`${activity.title} view`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* แสดงปุ่มลูกศรควบคุมเมื่อมีรูปภาพมากกว่า 1 รูป */}
        {activity.images.length > 1 && (
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
            
            {/* ป้ายบอกลำดับภาพเล็กๆ มุมขวาบนกรอบรูป */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-full">
              {currentIndex + 1} / {activity.images.length}
            </div>
          </>
        )}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 text-navy text-[11px] px-3 py-1 rounded-full font-medium shadow-sm thai opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          คลิกเพื่อขยายรูปเต็มหน้าจอ
        </div>
      </div>
    );
  };

  // ดักจับปุ่มบนคีย์บอร์ดสำหรับ Lightbox แบบเต็มจอ
  useEffect(() => {
    if (!lightbox) return;
    const activeActivity = activities.find(a => a.id === lightbox.activityId);
    if (!activeActivity) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightbox(prev => ({
          ...prev!,
          imgIndex: prev!.imgIndex === 0 ? activeActivity.images.length - 1 : prev!.imgIndex - 1
        }));
      }
      if (e.key === "ArrowRight") {
        setLightbox(prev => ({
          ...prev!,
          imgIndex: prev!.imgIndex === activeActivity.images.length - 1 ? 0 : prev!.imgIndex + 1
        }));
      }
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  // ป้องกันการ Scroll หน้าหลักเมื่อเปิดรูปภาพใหญ่
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightbox]);

  const currentLightboxActivity = lightbox ? activities.find(a => a.id === lightbox.activityId) : null;

  return (
    <>
      {/* 2. HEADER ส่วนหัวของหน้าเว็บ */}
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Nan Scape"
        thaiTitle="ภูมิทัศน์เมืองน่าน"
        description="สำรวจภูมิทัศน์และวิถีชีวิตชาวน่านต้นน้ำผ่านสายตาศิลปินและชุมชนในนิทรรศการและเทศกาลศิลปะร่วมสมัย"
      />

      {/* 3. ส่วนเนื้อหาภาพรวมโครงการ (Introduction) */}
      <section className="container-narrow py-12 border-b border-border">
        <FadeIn>
          <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
              <Layers size={240} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="eyebrow text-secondary-foreground text-crimson font-semibold tracking-wider">Highlight Project</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 font-mono text-white Thai">Nan Scape : Walking under Water (เดินเล่นใต้น้ำ)</h2>
              <p className="thai text-white/90 mt-4 leading-relaxed text-sm md:text-base">
                Walking under Water (เดินเล่นใต้น้ำ) คือการสร้างพื้นที่แห่งความสุขและกำลังใจแก่ประชาชนหลังวิกฤตน้ำท่วม โดยการ เชื่อมโยงศิลปินไทยและนานาชาติเพื่อแลกเปลี่ยนเรียนรู้ สามารถที่จะยกระดับจังหวัดน่านให้เป็นศูนย์กลางศิลปะแสดงสดร่วมสมัยนานาชาติ รวมทั้งส่งเสริมการท่องเที่ยวเชิงสร้างสรรค์และเศรษฐกิจ Economic economic economic Ekonom Ekonom ฐานราก ที่สำคัญคือสามารถที่จะสะท้อนปัญหาสิ่งแวดล้อม
                <span className="text-secondary font-semibold text-amber-300"> climate crisis</span> ผ่านพลังศิลปะ กิจกรรมภายในงาน ทั้งหมด 8 กิจกรรม โดยมีรายละเอียดดังนี้
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/10 text-white">
                ✨ รวมกิจกรรมขับเคลื่อนชุมชนและศิลปะทั้งหมด 8 กิจกรรม ด้านล่างนี้
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. รายการรายละเอียดกิจกรรมทั้ง 8 รายการ */}
      <section className="container-narrow py-16 space-y-24">
        {activities.map((activity, index) => {
          // ใช้การสลับฝั่งภาพซ้าย-ขวา (Even/Odd) เพื่อความสวยงามในระดับสายตา
          const isEven = index % 2 === 0;

          return (
            <div 
              key={activity.id} 
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? "" : "md:direction-rtl"}`}
            >
              {/* รายละเอียดเนื้อหาข้อมูล */}
              <FadeIn delay={0.1} className={`md:col-span-7 space-y-4 ${isEven ? "" : "md:order-2"}`}>
                <div className="space-y-1">
                  <div className="text-crimson font-mono font-bold text-xs uppercase tracking-wider Thai">Activity 0{activity.id}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy thai">{activity.title}</h3>
                </div>

                {/* กล่องรายละเอียด กำหนดการ / สถานที่ */}
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-muted-foreground border-y border-border py-2.5">
                  <div className="flex items-center gap-1.5 text-navy Thai">
                    <Calendar size={14} className="text-crimson" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-navy max-w-md Thai">
                    <MapPin size={14} className="text-crimson shrink-0 mt-0.5" />
                    <span className="thai text-[11px] leading-tight">{activity.location}</span>
                  </div>
                </div>

                <p className="thai text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                
                {activity.extraContent && activity.extraContent}
              </FadeIn>

              {/* ส่วนรูปภาพที่มาพร้อมปุ่มสไลด์ในตัว */}
              <FadeIn delay={0.2} className={`md:col-span-5 ${isEven ? "" : "md:order-1"}`}>
                <ImageSlider activity={activity} />
              </FadeIn>
            </div>
          );
        })}
      </section>

      {/* 5. LIGHTBOX MODAL (หน้าต่างขยายภาพเต็มจอพร้อมปุ่มควบคุม) */}
      {lightbox !== null && currentLightboxActivity && (
        <div 
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none animate-fade-in"
        >
          {/* ปุ่มปิดมุมขวาบน */}
          <button 
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* ปุ่มลูกศรย้อนกลับ (ซ้าย) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(prev => ({
                ...prev!,
                imgIndex: prev!.imgIndex === 0 ? currentLightboxActivity.images.length - 1 : prev!.imgIndex - 1
              }));
            }}
            className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* โครงสร้างรูปภาพใหญ่ตรงกลางโมดอล */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
          >
            <img 
              src={currentLightboxActivity.images[lightbox.imgIndex]} 
              alt={`${currentLightboxActivity.title} fullscreen`} 
              className="max-w-full h-auto max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="mt-4 text-center space-y-1 max-w-xl px-4">
              <p className="text-white font-medium text-sm thai line-clamp-1">{currentLightboxActivity.title}</p>
              <div className="text-xs text-white/50 font-mono">
                {lightbox.imgIndex + 1} / {currentLightboxActivity.images.length}
              </div>
            </div>
          </div>

          {/* ปุ่มลูกศรถัดไป (ขวา) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(prev => ({
                ...prev!,
                imgIndex: prev!.imgIndex === currentLightboxActivity.images.length - 1 ? 0 : prev!.imgIndex + 1
              }));
            }}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}