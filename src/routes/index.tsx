import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react";
import logo from "@/assets/nanfest-logo.png";
import { FadeIn } from "@/components/site/FadeIn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAN FEST — Reconnecting & NAN Connecting the Community" },
      {
        name: "description",
        content:
          "NAN FEST — เทศกาลน่าน. เทศกาลวัฒนธรรมร่วมสมัยของจังหวัดน่าน ตั้งแต่ NAN Reconnecting 2024 สู่ NAN Connecting the Community 2026.",
      },
      { property: "og:title", content: "NAN FEST — Reconnecting" },
      {
        property: "og:description",
        content: "ปลุกความเป็นน่าน · เชื่อมโยงผู้คนและวัฒนธรรมเมืองน่าน",
      },
    ],
  }),
  component: Home,
});

const festivals2024 = [
  { to: "/festivals/food-map", title: "Nan Food Map", thai: "รวมจานเด็ดเมืองน่าน" },
  { to: "/festivals/scape", title: "Nan Scape", thai: "วาดเขียนเมืองน่าน" },
  { to: "/festivals/craft", title: "Nan Craft", thai: "ตลาดงานคราฟต์" },
  { to: "/festivals/creator", title: "Nan Creator", thai: "ม่วนคราฟต์" },
  { to: "/festivals/performative", title: "Nan Performative", thai: "ศิลปะการแสดง · เวียงสา" },
  // 🆕 แยก 3 รายการนี้ออกมาเป็นเมนูหลักในหน้าแรกเรียบร้อยครับ
  { to: "/cinema/film", title: "Nan Film", thai: "น่านกลางแปลง" },
  { to: "/cinema/short-film", title: "Nan Short Film", thai: "ประกวดหนังสั้นเมืองน่าน" },
  { to: "/cinema/music", title: "Nan Contemporary Music", thai: "ดนตรีร่วมสมัยเมืองน่าน" },
  // 📝 ปรับข้อมูลของตัว Showcase เดิมให้เหมาะสมขึ้นครับ
  { to: "/festivals/showcase", title: "Nan Showcase", thai: "นิทรรศการหลักประจำปี" },
] as const;

const festivals2026 = [
  { to: "/nan2026/scape", title: "Nan Scape", thai: "ภูมิทัศน์เมืองน่าน" },
  { to: "/nan2026/life", title: "Nan Life", thai: "วิถีชีวิตชาวน่าน" },
  { to: "/nan2026/photo", title: "Nan Photo", thai: "ภาพถ่ายเมืองน่าน" },
  { to: "/nan2026/idea-lab", title: "Nan Idea Lab", thai: "ห้องทดลองความคิด" },
  { to: "/nan2026/music", title: "Nan Music", thai: "ดนตรีเมืองน่าน" },
  { to: "/nan2026/noah", title: "Walking under Water", thai: "เดินใต้น้ำ" },
  { to: "/nan2026/noahofnan", title: "Noah of Nan", thai: "โนอาห์แห่งน่าน" },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--crimson) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--navy) 0, transparent 45%), radial-gradient(circle at 60% 30%, var(--gold) 0, transparent 35%)",
          }}
        />
        <div className="container-narrow grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow mb-6">Nan, Thailand · เทศกาลน่าน</div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-navy leading-[0.95] tracking-wide flex flex-wrap gap-x-4">
                <span>NAN</span>
                <span className="text-crimson">FEST</span>
              </h1>

              <div className="thai mt-5 text-xl md:text-2xl text-navy/80 font-medium">
                ปลุกความเป็นน่าน · เชื่อมโยงผู้คนและวัฒนธรรม
              </div>
              <p className="thai mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                จากปี 2024 สู่ 2026 — สองเทศกาลใหญ่ที่หลอมรวมอาหาร งานคราฟต์
                ภาพยนตร์ ดนตรี ภาพถ่าย และศิลปะการแสดง เพื่อสะท้อนตัวตน
                ของเมืองน่านในมุมร่วมสมัย
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={logo}
              alt="NAN FEST logo"
              className="w-64 md:w-[380px] drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="bg-navy text-secondary-foreground py-10">
        <div className="container-narrow flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm">
          <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-gold" /> 110 หมู่ 2 ตำบลฝายแก้ว อำเภอภูเพียง จังหวัดน่าน 55000</span>
        </div>
      </section>

      {/* 2024 PROGRAMS */}
      <FestivalSection
        eyebrow="Festival · 2024"
        title="NAN FEST Reconnecting 2024"
        thai="ปลุกความเป็นน่าน — โปรแกรมแรกของเทศกาล"
        accent="crimson"
        items={festivals2024}
      />

      {/* 2026 PROGRAMS */}
      <FestivalSection
        eyebrow="Festival · 2026"
        title="NAN FEST Connecting the Community 2026"
        thai="เชื่อมโยงผู้คน วัฒนธรรม และเมืองน่านในปี 2026"
        accent="navy"
        items={festivals2026}
      />

      {/* CTA */}
      <section className="container-narrow my-16">
        <FadeIn>
          <div className="rounded-2xl bg-gradient-to-br from-crimson to-navy text-primary-foreground p-10 md:p-16 text-center">
            <div className="eyebrow text-gold mb-4">ติดตามพวกเราได้ที่</div>
            <h3 className="text-3xl md:text-5xl">NANFEST 2027, to be continued...</h3>
            <p className="thai mt-4 max-w-xl mx-auto opacity-90">
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-navy px-8 py-3 rounded-md hover:bg-background transition-colors font-medium"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function FestivalSection({
  eyebrow,
  title,
  thai,
  accent,
  items,
}: {
  eyebrow: string;
  title: string;
  thai: string;
  accent: "crimson" | "navy";
  items: ReadonlyArray<{ to: string; title: string; thai: string }>;
}) {
  const bar = accent === "crimson" ? "bg-crimson" : "bg-navy";
  return (
    <section className="py-20 md:py-24">
      <div className="container-narrow">
        <FadeIn>
          <div className={`eyebrow ${accent === "crimson" ? "text-crimson" : "text-navy"}`}>{eyebrow}</div>
          <h2 className="text-3xl md:text-5xl text-navy mt-3">{title}</h2>
          <p className="thai mt-3 text-muted-foreground max-w-xl">{thai}</p>
        </FadeIn>
        {/* จัดกลุ่มแสดงผลอัตโนมัติเป็นระเบียบตามจำนวนกล่องที่เพิ่มขึ้น */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {items.map((p, i) => (
            <FadeIn key={p.to} delay={i * 0.05}>
              <Link
                to={p.to}
                className="group block bg-card border border-border rounded-xl p-6 h-44 relative overflow-hidden hover:border-crimson hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${bar} w-10 h-1 rounded-full mb-4`} />
                <div className="font-display text-2xl text-navy tracking-wider">{p.title}</div>
                <div className="thai text-sm text-muted-foreground mt-1">{p.thai}</div>
                <ArrowRight
                  size={18}
                  className="absolute bottom-5 right-5 text-navy group-hover:text-crimson group-hover:translate-x-1 transition-all"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}