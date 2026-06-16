import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Sparkles, 
  Compass, 
  Smile, 
  Music, 
  Film, 
  Map, 
  Palette, 
  Tv, 
  GraduationCap,
  Heart,
  Users
} from "lucide-react";

// 📸 IMPORT IMAGE HERO
import aboutHeroImg from "@/assets/299554181_113834508097119_6183629739230151501_n.jpg";

// 👥 IMPORT TEAM & ADVISORY IMAGES
import teamImg from "@/assets/logo/คณะทำงาน.png";
import teamSupportImg from "@/assets/logo/Team SUPPORT.png"; // เพิ่ม Import รูปภาพ Team SUPPORT
import advisoryImg from "@/assets/logo/คณะกรรมการและที่ปรึกษา.png";

// 🤝 IMPORT PARTNER LOGOS (1 - 45)
import logo1 from "@/assets/logo/1.png";
import logo2 from "@/assets/logo/2.png";
import logo9 from "@/assets/logo/9.PNG";
import logo10 from "@/assets/logo/10.png";
import logo3 from "@/assets/logo/3-removebg-preview.png";
import logo4_removebg from "@/assets/logo/4-removebg-preview.png";
import logo4 from "@/assets/logo/4.png";
import logo5 from "@/assets/logo/5-removebg-preview.png";
import logo6 from "@/assets/logo/6.png";
import logo7 from "@/assets/logo/7.png";
import logo8 from "@/assets/logo/8.png";


import logo11 from "@/assets/logo/11.png";
import logo12 from "@/assets/logo/12.png";
import logo13 from "@/assets/logo/13.png";
import logo14_2 from "@/assets/logo/14 (2).png";
import logo14 from "@/assets/logo/14.png";
import logo15 from "@/assets/logo/15.png";
import logo16 from "@/assets/logo/16.png";
import logo17 from "@/assets/logo/17.png";
import logo18 from "@/assets/logo/18.png";
import logo19 from "@/assets/logo/19.png";
import logo20 from "@/assets/logo/20.png";
import logo21 from "@/assets/logo/21.png";
import logo22 from "@/assets/logo/22.png";
import logo23 from "@/assets/logo/23.jpeg";
import logo24 from "@/assets/logo/24.jpg";
import logo25 from "@/assets/logo/25.PNG";
import logo26_2 from "@/assets/logo/26 (2).png";
import logo26 from "@/assets/logo/26.png";
import logo27 from "@/assets/logo/27.jpg";
import logo28 from "@/assets/logo/28.jpg";
import logo29 from "@/assets/logo/29.png";
import logo30 from "@/assets/logo/30.png";
import logo31 from "@/assets/logo/31.png";
import logo33 from "@/assets/logo/33.jpg";
import logo34 from "@/assets/logo/34.png";
import logo35 from "@/assets/logo/35.png";
import logo36 from "@/assets/logo/36.png";
import logo37 from "@/assets/logo/37.png";
import logo38 from "@/assets/logo/38.png";
import logo39 from "@/assets/logo/39.png";
import logo40 from "@/assets/logo/40.png";
import logo41 from "@/assets/logo/41.png";
import logo42 from "@/assets/logo/42.png";
import logo43 from "@/assets/logo/43.png";
import logo44 from "@/assets/logo/44.png";
import logo45 from "@/assets/logo/45.png";
import logo46 from "@/assets/logo/ไดคัตLOGO.png";
import logo47 from "@/assets/logo/Logo13.png";
import logo48 from "@/assets/logo/TCDC_logo.gif";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NAN FEST & SALAKUD" },
      { name: "description", content: "เรื่องราวของ บริษัท สล่ากึ๊ด จำกัด และเทศกาลน่าน NAN FEST — ปลุกความเป็นน่าน ให้คนน่านเริ่มกลับมาใช้ชีวิตชุมชนนอกบ้าน" },
      { property: "og:title", content: "About Us — NAN FEST" },
      { property: "og:description", content: "ปลุกความเป็นน่าน — เพื่อให้น่านเป็นเมืองแห่งการสร้างสรรค์อย่างต่อเนื่อง" },
    ],
  }),
  component: About,
});

// อาร์เรย์เก็บ Path รูปภาพโลโก้ทั้งหมดเพื่อใช้ map วนลูปแสดงผล
const partnerLogos = [
  logo1, logo2,logo9,logo3,logo4, logo10,logo4_removebg , logo5, logo6,logo48,logo47, logo7, logo8, 
   logo11, logo12, logo13, logo14_2, logo38,logo14, logo15, logo16, logo17, logo18,
  logo19, logo21, logo22, logo23, logo24, logo25, logo26_2,  logo27,
  logo28, logo29, logo30, logo31, logo33, logo34, logo35, logo36, logo37, 
  logo39, logo40, logo41, logo42, logo43, logo44, logo45 ,logo46,logo20,
];

// ข้อมูล 11 กิจกรรมและแพลตฟอร์มสร้างสรรค์
const creativeProjects = [
  {
    title: "เทศกาลน่าน (NAN FEST)",
    desc: "เทศกาลที่เป็นมากกว่าเทศกาล แต่หมายรวมถึงการรวมตัวกันของเหล่าผู้คน ที่มาสร้างสรรค์ผลงานในทุกรูปแบบ",
    icon: Sparkles,
    color: "border-l-navy text-navy bg-navy/5",
  },
  {
    title: "กึ๊ดสเปซ (Playground)",
    desc: "พื้นที่สร้างสรรค์ให้เยาวชนในจังหวัดน่าน ได้มาปล่อยของหรือปล่อยพลังอย่างไร้ขีดจำกัด",
    icon: Smile,
    color: "border-l-crimson text-crimson bg-crimson/5",
  },
  {
    title: "สรรพยศิลป์ (ART-PANACEA)",
    desc: "การทำโรงพยาบาลเป็นพื้นที่สุนทรียศิลป์ ทำให้การมาโรงพยาบาลเป็นมากกว่าการรักษาทางกาย แต่สามารถรักษาโรคทางใจได้ด้วย",
    icon: Heart,
    color: "border-l-teal-600 text-teal-600 bg-teal-50",
  },
  {
    title: "NAN CREATOR",
    desc: "บ่มเพาะความคิด การออกแบบที่นอกกรอบ สร้างแรงบันดาลใจจุดประกายภายในเพื่อการสร้างสรรค์เมืองอย่างมีรากเหง้า",
    icon: Lightbulb,
    color: "border-l-gold text-gold bg-gold/5",
  },
  {
    title: "NAN PERFORMATIVE",
    desc: "การเรียบเรียงผลงานเพอร์ฟอร์เมตีฟของชาวบ้านทั้งในเชิงช่างและการแสดง ดนตรี ร้อง รำ เล่าเรื่อง ผสมผสานกับพื้นที่และการออกแบบสมัยใหม่ให้เสมือนเป็นการเล่าเรื่องให้เกิดภาพจำแก่ชุมชน",
    icon: Compass,
    color: "border-l-indigo-600 text-indigo-600 bg-indigo-50",
  },
  {
    title: "NAN CONTEMPORARY MUSIC",
    desc: "กิจกรรมที่รวมความหลากหลายทางวัฒนธรรม สามารถอยู่ด้วยกันได้อย่างสร้างสรรค์และมีความสุข โดยใช้การจัดแสดงการบรรเลงดนตรีร่วมสมัยแบบเต็มรูปแบบ บทเพลงของหนุ่มสาวชนเผ่าผสมผสานกับแนวดนตรีร่วมสมัย อาทิ ต่อล้อต่อเสียง, จ๊อยจอย, คอนเสิร์ต นั่งเล่น on the road เป็นต้น",
    icon: Music,
    color: "border-l-purple-600 text-purple-600 bg-purple-50",
  },
  {
    title: "น่านกลางแปลง (NAN FILM)",
    desc: "การนำภาพยนตร์ในอดีตมาฉายในรูปแบบหนังกลางแปลง ให้คนในจังหวัดน่านได้รับชม ทำให้เกิดการกระตุ้นให้ผู้คนออกมาทำกิจกรรมและมีปฏิสัมพันธ์กันมากขึ้น",
    icon: Film,
    color: "border-l-orange-600 text-orange-600 bg-orange-50",
  },
  {
    title: "NAN SCAPE",
    desc: "การเอาศิลปินออกมาจากสตูดิโอให้มาสัมผัสกับวิถีชีวิตและทำให้เกิดปฏิสัมพันธ์ระหว่างคนน่านด้วยกัน รวมทั้งการบันทึกเรื่องราว อาคารบ้านเรือนในรูปแบบของศิลปะหรือทัศนศิลป์และการจัดวางเชิงสร้างสรรค์",
    icon: Map,
    color: "border-l-emerald-600 text-emerald-600 bg-emerald-50",
  },
  {
    title: "เหม๊าะกะ (Nan Food Map)",
    desc: "การตามหา “จานเด็ด” ของเมืองน่าน เพื่อรวบรวมเมนูอาหารที่พลาดไม่ได้โดยใช้ Digital Platform เป็นการเพิ่มโอกาสให้ผู้ชมได้เข้าถึงเมนูที่ไม่ได้อยู่ในร้านค้าได้มากยิ่งขึ้น",
    icon: Tv,
    color: "border-l-pink-600 text-pink-600 bg-pink-50",
  },
  {
    title: "NAN CRAFT",
    desc: "พื้นที่แสดงงาน สินค้าและร้านค้า ซึ่งมุ่งเน้นไปที่กลุ่มร้านค้าที่มีแนวคิดแปลกใหม่ทันสมัยและมีรูปแบบในแต่ละร้านที่ไม่ซ้ำกัน โดยใช้พื้นที่ของ Café Soodgongdee ในการจัดกิจกรรมนี้ในทุกๆ ปี",
    icon: Palette,
    color: "border-l-cyan-600 text-cyan-600 bg-cyan-50",
  },
  {
    title: "PERFORMANCE ART",
    desc: "เปิดพื้นที่ให้ศิลปะการแสดงสดของศิลปินชาวไทยและต่างประเทศ ให้คนน่านได้รับชมและสัมผัสกับงานศิลปะในแขนงนี้",
    icon: Compass,
    color: "border-l-rose-600 text-rose-600 bg-rose-50",
  },
];

function About() {
  return (
    <div className="pb-24 bg-background">
      <PageHeader
        eyebrow="About Us"
        title="NAN FEST"
        thaiTitle="คือ คน คือ เวลา คือ เผ่าพันธุ์"
        description="เทศกาลน่าน คือพื้นที่กลางที่ชวนคนน่านกลับมาใช้ชีวิตชุมชนนอกบ้าน ผ่านศิลปะ อาหาร งานคราฟต์ ภาพยนตร์ และดนตรี"
      />

      {/* 🌟 SECTION 1: วิสัยทัศน์หลัก */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <FadeIn className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="thai text-2xl md:text-3xl font-bold text-navy leading-snug">
              ปลุกความเป็นน่าน ให้คนน่านเริ่มกลับมาใช้ชีวิตชุมชนนอกบ้าน
            </h2>
            <p className="thai text-base md:text-lg text-muted-foreground leading-loose">
              ผ่านกิจกรรมหลากหลายรูปแบบ ทั้งอาหารท้องถิ่น งานหัตถกรรม ศิลปะการแสดง ภาพยนตร์ และดนตรีร่วมสมัย 
              เพื่อเชื่อมโยงผู้คน ศิลปิน และนักสร้างสรรค์เข้าด้วยกัน สร้างบทสนทนาใหม่ระหว่างมรดกทางวัฒนธรรมกับความร่วมสมัย 
              เพื่อให้น่านเป็นเมืองแห่งการสร้างสรรค์อย่างต่อเนื่อง
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 🏢 SECTION 2: บริษัท สล่ากึ๊ด จำกัด */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container-narrow space-y-12">
          
          <div className="flex flex-col items-center text-center">
            <FadeIn className="mb-6 max-w-[240px] w-full px-2">
              <div className="rounded-2xl overflow-hidden bg-white p-4 border border-border/60 shadow-sm aspect-square flex items-center justify-center">
                <img 
                  src={aboutHeroImg} 
                  alt="บริษัท สล่ากึ๊ด จำกัด Logo" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </FadeIn>

            <FadeIn className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-crimson bg-crimson/10 px-3 py-1 rounded-full mb-2">
                <Building2 size={12} /> Social Enterprise
              </div>
              <h2 className="thai text-3xl font-bold text-navy">บริษัท สล่ากึ๊ด จำกัด</h2>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-mono">SALAKUD CO.,LTD.</p>
              <p className="thai text-sm text-gold font-medium mt-1">ก่อตั้งเมื่อเดือน มิถุนายน พ.ศ. 2567</p>
              <p className="thai max-w-2xl mx-auto text-base text-foreground pt-4 leading-relaxed font-medium">
                บริษัท สล่ากึ๊ด จำกัด เป็นองค์การธุรกิจที่มีเป้าหมายทางสังคมอย่างชัดเจนและแน่วแน่
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 bg-navy/10 text-navy rounded-2xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="thai font-bold text-xl text-navy">เราทำอะไร (ประเด็นสังคม)</h3>
              <p className="thai text-sm text-muted-foreground leading-relaxed">
                เราร่วมทำงานในประเด็นทางสังคม โดยใช้ศิลปวัฒนธรรมเป็นกุญแจแห่งการสร้างสรรค์ของคนรุ่นใหม่ 
                อย่างมีปฏิสัมพันธ์กับวิถีดั้งเดิมที่ต่อเนื่องมาในวันนี้ ก่อให้เกิดการเปลี่ยนแปลงอย่างเป็นรากฐานทางสังคมได้อย่างยั่งยืน
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-2xl flex items-center justify-center">
                <Palette size={24} />
              </div>
              <h3 className="thai font-bold text-xl text-navy">เราทำอะไร (เครื่องมือ)</h3>
              <p className="thai text-sm text-muted-foreground leading-relaxed">
                สล่ากึ๊ด ใช้ความเชี่ยวชาญทางการจัดการ และศิลปะ ในการสร้างสุนทรียะ 
                สร้างสรรค์นวัตกรรม สื่อสร้างสรรค์ ผลงานศิลปะในเชิงสังคม
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h3 className="thai font-bold text-xl text-navy">เรามุ่งหวัง</h3>
              <p className="thai text-sm text-muted-foreground leading-relaxed">
                สล่ากึ๊ด จะสร้างคนให้พร้อมจะเติบโตอย่างงดงาม 
                เราจึงร่วมทำงานให้เป็นรากฐานหรือสร้างตัวอย่างการเปลี่ยนแปลงในสังคม
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 SECTION 3: Creative Initiatives */}
      <section className="py-16 border-t border-border">
        <div className="container-narrow space-y-12">
          <FadeIn className="text-center space-y-3">
            <h2 className="thai text-3xl font-bold text-navy">Creative Initiatives</h2>
            <p className="thai text-sm text-muted-foreground max-w-xl mx-auto">
              การจัดกระบวนงาน เทศกาล และพื้นที่ทดลองสร้างสรรค์เพื่อเชื่อมมรดกทางวัฒนธรรมเข้ากับโลกสมัยใหม่
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className={`h-full bg-white border border-border rounded-2xl p-6 space-y-4 hover:shadow-md transition-all border-l-4 ${project.color}`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-border/60 shadow-sm">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="thai font-bold text-lg text-navy">{project.title}</h3>
                    <p className="thai text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}

            <FadeIn delay={0.5}>
              <div className="h-full bg-white border border-border rounded-2xl p-6 space-y-4 hover:shadow-md transition-all border-l-4 border-l-slate-600 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-border/60 shadow-sm text-slate-600">
                  <GraduationCap size={20} />
                </div>
                <h3 className="thai font-bold text-lg text-navy">WORKSHOP, SEMINAR, EXHIBITION</h3>
                <div className="thai text-xs md:text-sm text-muted-foreground leading-relaxed space-y-2">
                  <p>• <strong>ม่วน นัน สัน เล่า (NAN SHORT FILM):</strong> อบรมการทำหนังสั้นผ่านผู้กำกับที่มีชื่อเสียง</p>
                  <p>• <strong>เสวนา ฮูปแต้มเมืองน่าน:</strong> แลกเปลี่ยนที่มาของเมืองน่านผ่านจิตรกรรมฝาผนัง</p>
                  <p>• <strong>Wall OF THEP:</strong> นิทรรศการ ผนังเทพ</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🤝 SECTION 4: PARTNERS */}
      <section className="py-16 border-t border-border bg-muted/40">
        <div className="container-narrow">
          <FadeIn>
            <div className="eyebrow text-center">Partners & Collaborators</div>
            <h2 className="text-3xl md:text-4xl text-navy text-center mt-3">Made with Community</h2>
          </FadeIn>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-12">
            {partnerLogos.map((logoUrl, i) => (
              <FadeIn key={i} delay={(i % 10) * 0.03}>
                <div className="aspect-video bg-white border border-border rounded-xl flex items-center justify-center p-3 shadow-sm hover:border-gold/50 hover:shadow-md transition-all duration-300">
                  <img 
                    src={logoUrl} 
                    alt={`Partner Logo ${i + 1}`} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 👥 SECTION 5: TEAM & ADVISORY */}
      <section className="py-16 border-t border-border bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          <FadeIn className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-navy bg-navy/10 px-3 py-1 rounded-full">
              <Users size={12} /> People Behind
            </div>
            <h2 className="thai text-3xl font-bold text-navy">คณะทำงานและผู้บริหาร</h2>
            <p className="thai text-sm text-muted-foreground max-w-xl mx-auto">
              บุคคลสำคัญที่คอยขับเคลื่อน นวัตกรรม สื่อสร้างสรรค์ และกิจกรรมเพื่อขับเคลื่อนจังหวัดน่าน
            </p>
          </FadeIn>

          <div className="space-y-12">
            {/* คณะทำงาน */}
            <FadeIn delay={0.1} className="space-y-4">
              <h3 className="thai font-bold text-xl text-center text-navy md:text-left border-b pb-2 border-border">
                คณะทำงาน
              </h3>
              <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm bg-muted/10 p-2">
                <img 
                  src={teamImg} 
                  alt="คณะทำงาน" 
                  className="w-full h-auto object-cover rounded-2xl" 
                />
              </div>
            </FadeIn>

            {/* Team SUPPORT (แทรกอยู่ตรงกลางเรียบร้อย) */}
            <FadeIn delay={0.15} className="space-y-4">
              <h3 className="thai font-bold text-xl text-center text-navy md:text-left border-b pb-2 border-border">
                Team SUPPORT
              </h3>
              <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm bg-muted/10 p-2">
                <img 
                  src={teamSupportImg} 
                  alt="Team SUPPORT" 
                  className="w-full h-auto object-cover rounded-2xl" 
                />
              </div>
            </FadeIn>

            {/* คณะกรรมการและที่ปรึกษา */}
            <FadeIn delay={0.2} className="space-y-4">
              <h3 className="thai font-bold text-xl text-center text-navy md:text-left border-b pb-2 border-border">
                คณะกรรมการและที่ปรึกษา
              </h3>
              <div className="rounded-3xl overflow-hidden border border-border/60 shadow-sm bg-muted/10 p-2">
                <img 
                  src={advisoryImg} 
                  alt="คณะกรรมการและที่ปรึกษา" 
                  className="w-full h-auto object-cover rounded-2xl" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}