import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ChefHat, Store, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";
import img01 from "@/assets/food/01-swedish-meatball.png";
import img02 from "@/assets/food/02-khao-moo-krob.png";
import img03 from "@/assets/food/03-gang-pu-chaplu.png";
import img04 from "@/assets/food/04-naem-nueng-khai.png";
import img05 from "@/assets/food/05-yam-praisanee.png";
import img06 from "@/assets/food/06-brownie-cheese.png";
import img07 from "@/assets/food/07-penne-pesto.png";
import img08  from "@/assets/food/08-chang-nan-puff.png";
import img09 from "@/assets/food/09-gai-pad-kaolad.png";
import img10 from "@/assets/food/10-pizza-namprik-ong.png";
import img11 from "@/assets/food/11-capellini-shrimp.png";
import img12 from "@/assets/food/12-sappali.png";
import img13 from "@/assets/food/13-mee-yok.png";
import img14 from "@/assets/food/14-pad-thai-boran.png";
import img15 from "@/assets/food/15-pad-thai-kakmoo.png";
import img16 from "@/assets/food/16-tam-phai-bong.png";
import img17 from "@/assets/food/17-namprik-pla-tu.png";
import img18 from "@/assets/food/18-khanom-jeen.png";
import img19 from "@/assets/food/19-ko-maprao-itim.png";
import img20 from "@/assets/food/20-bamee-keng-yam.png";
import img21 from "@/assets/food/21-dried-banana-bagel-photo.png";

export const Route = createFileRoute("/festivals/food-map")({
  head: () => ({
    meta: [
      { title: "NAN Food Map — รวมจานเด็ดเมืองน่าน" },
      { name: "description", content: "NAN Food Map — explore signature dishes and beloved local restaurants across Nan." },
      { property: "og:title", content: "NAN Food Map — เหม๊าะกะ" },
      { property: "og:description", content: "รวมจานเด็ดเมืองน่าน #เหม๊าะกะ" },
    ],
  }),
  component: FoodMap,
});

type Dish = {
  menu: string;
  chef: string;
  restaurant: string;
  maps?: string;
  note?: string;
  image?: string;
};

const googleMapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const dishes: Dish[] = [
  { menu: "Swedish Meat Ball", chef: "แววดาว ณ ราช", restaurant: "น่านสเต็กเฮ้าส์ & พิซซ่า", maps: googleMapsSearch("น่านสเต็กเฮ้าส์ & พิซซ่า Nan Thailand"), image: img01 },
  { menu: "ข้าวหมูกรอบ", chef: "นันทนา ธรรมสานุกุล", restaurant: "ร้านอาหารเมืองตรัง", maps: "https://maps.app.goo.gl/aMBR2R4D3EeXPGL49?g_st=ic", image: img02 },
  { menu: "แกงปูใบชะพลู", chef: "อรรถวัตน์ ทองชัยประสิทธิ์", restaurant: "Gin Restaurant", maps: googleMapsSearch("Gin Restaurant Nan Thailand"), image: img03 },
  { menu: "แหนมนึ่งหน้าไข่", chef: "พรรณทิพย์ เขื่อนขันธ์", restaurant: "ยายทอง (กาดข่วงเมืองน่าน)", maps: googleMapsSearch("ยายทอง กาดข่วงเมืองน่าน Nan Thailand"), image: img04 },
  { menu: "ยำไปรษณีย์", chef: "พงษ์พรรณ สิงห์โต", restaurant: "ก๊วยจั๊บแม่ (โก๊ะ เลิศรส)", maps: googleMapsSearch("ก๊วยจั๊บแม่ โก๊ะ เลิศรส Nan Thailand"), image: img05 },
  { menu: "บราวนี่ชีส", chef: "ณัฐพล โลนันท์", restaurant: "Nomwan at Nan", maps: googleMapsSearch("Nomwan at Nan Thailand"), image: img06 },
  { menu: "Penne Pesto Sauce", chef: "อัตพร อยู่ขำ", restaurant: "Roadstaurant by ปั้นสุข", maps: googleMapsSearch("Roadstaurant by ปั้นสุข Nan Thailand"), image: img07 },
  { menu: "จ๊างน่าน พัฟ", chef: "มลาพร ไกรทอง", restaurant: "จ๊างน่าน", maps: googleMapsSearch("จ๊างน่าน Nan Thailand"), image: img08 },
  { menu: "ไก่ผัดเกาลัดเมือง", chef: "สกุลชัย ยี่เถาะ", restaurant: "ร้านแบมบูซี๊ด", maps: googleMapsSearch("ร้านแบมบูซี๊ด Nan Thailand"), image: img09 },
  { menu: "พิซซ่าหน้าน้ำพริกอ่อง", chef: "ศิวะเทพ สลีอ่อน", restaurant: "DEAR RIVER CAFE", maps: googleMapsSearch("DEAR RIVER CAFE Nan Thailand"), image: img10 },
  { menu: "คาเปลลินี่ มันกุ้งแม่น้ำ", chef: "อรุณศักดิ์ คำแสน", restaurant: "Season The Craft", maps: googleMapsSearch("Season The Craft Nan Thailand"), image: img11 },
  { menu: "สับปะหลี้", chef: "อานนท์ ยะตัน", restaurant: "Voila nirvanan", maps: googleMapsSearch("Voila nirvanan Nan Thailand"), image: img12 },
  { menu: "บะหมี่หยกหมูกรอบ", chef: "เณริกา ยาแก้ว", restaurant: "Cafe' Soodgongdee", maps: googleMapsSearch("Cafe' Soodgongdee Nan Thailand"), image: img13 },
  { menu: "ผัดไทโบราณ", chef: "ประทีป บริรักษ์ตังสกุล", restaurant: "ตั้ง บ้วน เฮง", maps: googleMapsSearch("ตั้ง บ้วน เฮง Nan Thailand"), image: img14 },
  { menu: "ผัดไทกากหมู", chef: "วรุฒ มงมาตร", restaurant: "เปิงใจ๋", note: "Event only", image: img15 },
  { menu: "ตำไผ่บงหวาน", chef: "กฤติญาณี ปัญญา", restaurant: "เฮือนข้าวหน๋ม", note: "Event only", image: img16 },
  { menu: "น้ำพริกคั่วปลาทูสูตรมะแขว่น", chef: "ชาคริสก์ บู่แก้ว", restaurant: "ครัวครูคริส", maps: googleMapsSearch("ครัวครูคริส Nan Thailand"), image: img17 },
  { menu: "ขนมจีนน้ำเงี้ยว", chef: "ศศิวิมล จัดสวย", restaurant: "ร้านในเวียง น้ำเงี้ยว ข้าวซอย", maps: googleMapsSearch("ร้านในเวียง น้ำเงี้ยว ข้าวซอย Nan Thailand"), image: img18 },
  { menu: "โค-มะพร้าว-ไอติม", chef: "กรรณิกา สองสีขวา", restaurant: "ขนมบ้านยายภรณ์", maps: googleMapsSearch("ขนมบ้านยายภรณ์ Nan Thailand"), image: img19 },
  { menu: "บะหมี่เข่งยำ", chef: "นายวัชระ เจษฎารมย์", restaurant: "ร้านป้าตุ๋ย ท่าวังผา", image: img20 },
  { menu: "Dried Banana Bagel", chef: "ศิวพร กันยะจันทร์", restaurant: "@Piccolo cafe.Nan", maps: googleMapsSearch("Piccolo cafe Nan Thailand"), image: img21 },
];

const isThai = (s: string) => /[\u0E00-\u0E7F]/.test(s);

function FoodMap() {
  const [activePreview, setActivePreview] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (activePreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePreview]);

  return (
    <>
      <PageHeader
        eyebrow="NAN Food Map"
        title="เหม๊าะกะ"
        thaiTitle="รวมจานเด็ดเมืองน่าน #เหม๊าะกะ"
        description="แผนที่อาหารเมืองน่าน รวมจานเด็ดและร้านที่คนน่านอยากแนะนำ คลิกเพื่อเปิดเส้นทางใน Google Maps"
      />
      <section className="py-16 md:py-20">
        <div className="container-narrow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dishes.map((d, i) => (
            <FadeIn key={d.menu} delay={(i % 8) * 0.04}>
              <article className="group h-full bg-white rounded-2xl border border-border shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_-12px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
                {d.image ? (
                  <div 
                    onClick={() => d.image && setActivePreview({ src: d.image, alt: d.menu })}
                    className="relative aspect-square overflow-hidden bg-muted cursor-zoom-in"
                    title="คลิกเพื่อดูรูปอาหารขนาดใหญ่"
                  >
                    <img
                      src={d.image}
                      alt={d.menu}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-2 bg-gradient-to-r from-crimson via-gold to-navy" />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="eyebrow text-[10px]">Signature Menu</div>
                  <h3
                    className={`mt-2 text-2xl leading-tight font-bold text-crimson group-hover:text-navy transition-colors ${
                      isThai(d.menu) ? "thai" : "font-display tracking-wide"
                    }`}
                  >
                    {d.menu}
                  </h3>

                  <div className="mt-5 space-y-2.5 text-sm flex-1">
                    <div className="flex items-start gap-2.5">
                      <Store size={15} className="text-navy mt-0.5 shrink-0" />
                      <span className="thai text-navy font-medium">{d.restaurant}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChefHat size={15} className="text-muted-foreground mt-0.5 shrink-0" />
                      <span className="thai text-muted-foreground italic">เชฟ {d.chef}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border">
                    {d.maps ? (
                      <a
                        href={d.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md border-2 border-crimson text-crimson font-medium text-sm hover:bg-crimson hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        <MapPin size={15} /> View on Google Maps
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-gold/15 text-navy font-medium text-sm">
                        <MapPin size={15} /> {d.note ?? "Event only"}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Modal Pop-up สำหรับแสดงรูปภาพขนาดใหญ่ */}
      {activePreview && (
        <div 
          onClick={() => setActivePreview(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity animate-fade-in cursor-zoom-out"
        >
          <button 
            onClick={() => setActivePreview(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4 animate-scale-up"
          >
            <img 
              src={activePreview.src} 
              alt={activePreview.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="thai text-white font-medium text-lg text-center bg-black/40 px-4 py-1.5 rounded-full">
              {activePreview.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}