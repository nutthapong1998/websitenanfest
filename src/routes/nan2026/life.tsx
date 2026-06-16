import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import { 
  Leaf, 
  Calendar, 
  MapPin, 
  UtensilsCrossed, 
  Users, 
  Heart, 
  Sprout, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera,
  Sparkles,
  Droplets
} from "lucide-react";

// 📸 IMPORT IMAGES (ชุดเดิม)
import imgKul from "@/assets/Nanlife/TheMo-interview-kul-panyawong-content11.jpg";
import img1 from "@/assets/Nanlife/LINE_ALBUM_Nan Life_260316_7.jpg";
import img2 from "@/assets/Nanlife/LINE_ALBUM_Nan Life_260423_3.jpg";
import img3 from "@/assets/Nanlife/LINE_ALBUM_บ้านพี่จุ๋ม_260423_1.jpg";
import img4 from "@/assets/Nanlife/NFD2_210.JPG";
import img5 from "@/assets/Nanlife/NFD2_218.JPG";
import img6 from "@/assets/Nanlife/NFD2_221.JPG";
import img7 from "@/assets/Nanlife/NFD2_225.JPG";
import img8 from "@/assets/Nanlife/NFD2_307.JPG";
import img9 from "@/assets/Nanlife/NFD2_326.JPG";
import img10 from "@/assets/Nanlife/NFD2_334.JPG";
import img11 from "@/assets/Nanlife/NFD2_382.JPG";
import img12 from "@/assets/Nanlife/NFD3_017.JPG";
import img13 from "@/assets/Nanlife/NFD3_021.JPG";
import img14  from "@/assets/Nanlife/NFD3_036.JPG";
import img15 from "@/assets/Nanlife/NFD3_044.JPG";
import img16 from "@/assets/Nanlife/NFD3_056.JPG";
import img17 from "@/assets/Nanlife/NFD3_086.JPG";
import img18 from "@/assets/Nanlife/NFD3_167.JPG";
import img19 from "@/assets/Nanlife/NFD3_188.JPG";

// 📸 IMPORT IMAGES (ชุด Nanlife/2 ที่เพิ่มเข้ามาใหม่)
import imgNew1 from "@/assets/Nanlife/2/685734751_951409407793442_7575356458403775376_n.jpg";
import imgNew2 from "@/assets/Nanlife/2/685750536_951409454460104_2739187157053371604_n.jpg";
import imgNew3 from "@/assets/Nanlife/2/686479371_951406784460371_6532731325077926478_n.jpg";
import imgNew4 from "@/assets/Nanlife/2/686522978_951407424460307_8896724434753896888_n.jpg";
import imgNew5 from "@/assets/Nanlife/2/687023748_951409504460099_3852226243911007046_n.jpg";
import imgNew6 from "@/assets/Nanlife/2/687033810_951408197793563_2130229640900049571_n.jpg";
import imgNew7 from "@/assets/Nanlife/2/687034883_951408117793571_5726865166230519657_n.jpg";
import imgNew8 from "@/assets/Nanlife/2/687684963_951409491126767_6532386505527111060_n.jpg";
import imgNew9 from "@/assets/Nanlife/2/687714234_951406764460373_8301865864223664116_n.jpg";
import imgNew10 from "@/assets/Nanlife/2/687944086_951408217793561_5412097815300075324_n.jpg";
import imgNew11 from "@/assets/Nanlife/2/688676560_951407434460306_6784352456656564575_n.jpg";
import imgNew12 from "@/assets/Nanlife/2/688954494_951409527793430_8977612710743479307_n.jpg";
import imgNew13 from "@/assets/Nanlife/2/689106905_951406787793704_5541914818836802654_n.jpg";
import imgNew14 from "@/assets/Nanlife/2/689911432_951409361126780_7503666205280292427_n.jpg";
import imgNew15 from "@/assets/Nanlife/2/690634563_951406701127046_1399435538445629052_n.jpg";
import imgNew16 from "@/assets/Nanlife/2/690638794_951406761127040_1575054890734252753_n.jpg";
import imgNew17 from "@/assets/Nanlife/2/690665140_951407381126978_9152073278209043702_n.jpg";
import imgNew18 from "@/assets/Nanlife/2/690747148_951409247793458_2349677345528322545_n.jpg";
import imgNew19 from "@/assets/Nanlife/2/690782593_951409637793419_2218111142552301867_n.jpg";
import imgNew20 from "@/assets/Nanlife/2/690884127_951408207793562_7731812053607733998_n.jpg";
import imgNew21 from "@/assets/Nanlife/2/693413078_951407427793640_4147442668580466695_n.jpg";

export const Route = createFileRoute("/nan2026/life")({
  head: () => ({
    meta: [
      { title: "Nan Life : วิถีน่าน ร่วมสร้างชุมชนอารยะ — Nan Fest 2026" },
      { name: "description", content: "โครงการเกษตรศิลป์ พฤกษศาสตร์ลาบ และวิถีชีวิตชุมชนบ้านน้ำครกใหม่ น่านรอดด้วยวิถีน่าน" },
    ],
  }),
  component: NanLifePage,
});

function NanLifePage() {
  // รวมภาพชุดเดิม และภาพชุดใหม่เข้าด้วยกันใน Array
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19,
    imgNew1, imgNew2, imgNew3, imgNew4, imgNew5, imgNew6, imgNew7, imgNew8, imgNew9, imgNew10,
    imgNew11, imgNew12, imgNew13, imgNew14, imgNew15, imgNew16, imgNew17, imgNew18, imgNew19, imgNew20, imgNew21
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="pb-24 bg-background">
      <PageHeader
        eyebrow="Nan Fest 2026 · NAN Connecting the Community"
        title="Nan Life"
        thaiTitle="วิถีน่าน : ร่วมกันสร้างชุมชนอารยะ"
        description="การเดินทางของอาหารและวิถีเกษตรที่กลายเป็นงานศิลปะ เชื่อมโยงมิตรภาพและฟื้นฟูรากเหง้าวัฒนธรรมน่านให้เติบโตอย่างยั่งยืน"
      />

      <section className="py-12">
        <div className="container-narrow space-y-16">
          
          {/* 🗓️ กำหนดการ สถานที่ และข้อมูลแม่กุล */}
          <FadeIn>
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-gold grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 rounded-full">
                  <Leaf size={14} /> Agriculture & Culture
                </div>
                <h3 className="thai text-2xl md:text-3xl font-bold">
                  Nan Life วิถีน่าน <br />
                  <span className="text-gold text-xl md:text-2xl font-normal">(ร่วมกันสร้างชุมชนอารยะ)</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold shrink-0" size={20} />
                    <p className="thai text-lg">1 – 3 พฤษภาคม 2569</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-crimson shrink-0 mt-1" size={20} />
                    <p className="thai text-base leading-relaxed text-white/90">
                      บ้านศิลปะจุมพล อภิสุข ชุมชนบ้านน้ำครกใหม่ <br />
                      ต.กองควาย อ.เมืองน่าน จ.น่าน
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 👩‍🌾 ส่วนแสดงภาพและข้อมูลแม่กุล ปัญญาวงศ์ */}
              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gold/50 shrink-0 shadow-md">
                  <img 
                    src={imgKul} 
                    alt="แม่กุล ปัญญาวงศ์" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left md:text-center space-y-1">
                  <p className="thai text-xs text-gold font-bold italic uppercase tracking-wider">โครงการเกษตรศิลป์ นำโดย</p>
                  <p className="thai text-lg font-bold text-white">แม่กุล ปัญญาวงศ์</p>
                  <p className="thai text-xs text-white/60">แห่งชุมชนต้นน้ำน่าน (ชตน.)</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 🌿 แนวคิดหลัก */}
          <FadeIn>
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 text-navy">
                    <Sprout size={200} />
                </div>
                <div className="max-w-3xl space-y-6">
                    <h4 className="thai text-2xl font-bold text-navy flex items-center gap-3">
                        <Heart className="text-crimson" fill="currentColor" /> น่านรอดด้วยวิถีน่าน
                    </h4>
                    <p className="thai text-base text-muted-foreground leading-relaxed">
                        การนำเทศกาลน่านเข้ามาเป็นส่วนหนึ่งในการฟื้นฟูชุมชน ตั้งแต่ต้นน้ำ กลางน้ำ สู่ปลายน้ำ เพื่อแก้ปัญหาชุมชนที่มีหนี้สินและการทำเกษตรเชิงเดี่ยวที่ทำลายธรรมชาติ <strong>Nan Fest จับมือกับ Arayatime</strong> ออกแบบกิจกรรมที่ชุมชนบ้านน้ำครกใหม่ พื้นที่ปลายน้ำรูป "ครก" (ทะเลสาบรูปแอก) ที่มีระบบนิเวศสมบูรณ์ เพื่อให้ชุมชนกลับมาพึ่งพาตนเองและต่อยอดภูมิปัญญาท้องถิ่นด้วยความคิดสร้างสรรค์
                    </p>
                </div>
            </div>
          </FadeIn>

          {/* 🍱 กิจกรรมไฮไลท์ 4 อย่าง */}
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
                <div className="h-full bg-white border border-border rounded-3xl p-8 space-y-4 hover:shadow-md transition-all border-l-8 border-l-navy">
                    <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center text-navy">
                        <Leaf size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">พฤกษลาบ (Laab Botanic)</h5>
                    <p className="thai text-sm text-muted-foreground leading-relaxed">
                        ชมแปลงสาธิตพืชผักและสมุนไพรพื้นบ้านที่เชื่อมโยงกับเมนู "ลาบ" อาหารมื้อพิเศษที่เป็นตัวแทนมิตรภาพและความผูกพัน สื่อถึงรากวัฒนธรรมที่หล่อหลอมวิถีชีวิตอย่างยั่งยืน
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="h-full bg-white border border-border rounded-3xl p-8 space-y-4 hover:shadow-md transition-all border-l-8 border-l-crimson">
                    <div className="w-12 h-12 bg-crimson/10 rounded-xl flex items-center justify-center text-crimson">
                        <UtensilsCrossed size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">โชว์วิถีลาบ 4 ทีมชุมชน</h5>
                    <p className="thai text-sm text-muted-foreground leading-relaxed">
                        การประชันฝีมือการปรุงลาบตามสูตรเฉพาะของแต่ละครัวเรือน สะท้อนถึงความหลากหลายของภูมิปัญญาที่สืบทอดกันมา และความภาคภูมิใจในรสนิยมท้องถิ่น
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.3}>
                <div className="h-full bg-white border border-border rounded-3xl p-8 space-y-4 hover:shadow-md transition-all border-l-8 border-l-gold">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                        <Droplets size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">การชิม "ผักสูบ" และปลาเผา</h5>
                    <p className="thai text-sm text-muted-foreground leading-relaxed">
                        สัมผัสภูมิปัญญาการถอมอาหารของคนกองควาย นำผักกาดมาดอง ตากแห้ง และปรุงรส ทานคู่กับปลาเผาสดๆ จากบึง สื่อถึงความอุดมสมบูรณ์ของพื้นที่ปลายน้ำ
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.4}>
                <div className="h-full bg-white border border-border rounded-3xl p-8 space-y-4 hover:shadow-md transition-all border-l-8 border-l-teal-600">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                        <Users size={24} />
                    </div>
                    <h5 className="thai font-bold text-xl text-navy">การชิม "ขนมเกลือ" โบราณ</h5>
                    <p className="thai text-sm text-muted-foreground leading-relaxed">
                        ขนมพื้นบ้านโบราณที่สืบทอดกันมาหลายรุ่น มักทำรับประทานเป็นอาหารว่างในครอบครัว หรือใช้ในงานบุญและเทศกาลสำคัญ เป็นรสชาติแห่งความทรงจำของชาวน่าน
                    </p>
                </div>
            </FadeIn>
          </div>

          {/* 🖼️ แกลเลอรีภาพบรรยากาศ */}
          <FadeIn>
            <div className="pt-16 border-t border-border">
                <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="text-gold" />
                    <h3 className="thai text-2xl font-bold text-navy">Nan Life </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {allImages.map((img, index) => (
                        <div 
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer shadow-sm"
                        >
                            <img 
                                src={img} 
                                alt={`Nan Life Activity ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                loading="lazy" 
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/90 p-2 rounded-full shadow-lg">
                                    <Camera size={18} className="text-navy" />
                                </div>
                            </div>
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
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-white/10 p-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          <button 
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length); }}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4">
            <img 
              src={allImages[currentIndex]} 
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white/60 text-xs font-mono tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
                IMAGE {currentIndex + 1} / {allImages.length}
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition bg-white/5 p-4 rounded-full"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % allImages.length); }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}