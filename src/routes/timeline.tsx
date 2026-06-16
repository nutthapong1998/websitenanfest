import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — NAN FEST" },
      { name: "description", content: "The full NAN FEST cycle from September 2025 to March 2026." },
      { property: "og:title", content: "NAN FEST Timeline" },
      { property: "og:description", content: "ไทม์ไลน์เทศกาลน่าน Sept 2025 – Mar 2026" },
    ],
  }),
  component: TimelinePage,
});

const events = [
  { date: "Sept 2025", title: "NAN Scape opens",       thai: "เปิดโปรแกรม NAN Scape ที่ Nan Arts Gallery", color: "bg-navy" },
  { date: "Oct 2025",  title: "NAN Craft begins",      thai: "ตลาดงานคราฟต์ที่ Sud Kong Dee Cafe เริ่มขึ้น", color: "bg-gold" },
  { date: "Nov 2025",  title: "NAN Performative",      thai: "เวิร์กชอปศิลปะการแสดงที่เวียงสา", color: "bg-crimson" },
  { date: "Dec 2025",  title: "NAN Food Map launch",   thai: "เปิดตัวแผนที่อาหารน่าน #เหม๊าะกะ", color: "bg-crimson" },
  { date: "Jan 2026",  title: "Short Film Lab",        thai: "เวิร์กชอปหนังสั้นกับสมาคมผู้กำกับฯ", color: "bg-navy" },
  { date: "Feb 2026",  title: "น่านกลางแปลง",          thai: "ภาพยนตร์กลางแปลง 2 – 25 กุมภาพันธ์", color: "bg-gold" },
  { date: "1 – 3 Mar 2026", title: "NAN FEST Showcase", thai: "Showcase 3 วันปิดท้ายเทศกาล", color: "bg-crimson" },
];

function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Timeline"
        title="The Festival Cycle"
        thaiTitle="ไทม์ไลน์เทศกาลน่าน · Sept 2025 — Mar 2026"
        description="ไทม์ไลน์รวมทุกโปรแกรมตลอด 6 เดือน ของ NAN FEST"
      />
      <section className="py-20">
        <div className="container-narrow relative">
          {/* spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <ol className="space-y-12">
            {events.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <FadeIn key={e.date} delay={i * 0.05}>
                  <li className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center ${right ? "" : ""}`}>
                    <span className={`absolute left-2 md:left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full ${e.color} ring-4 ring-background`} />
                    <div className={`${right ? "md:col-start-2" : ""} md:order-${right ? 2 : 1}`}>
                      <div className={`bg-card border border-border rounded-xl p-6 ${right ? "md:ml-6" : "md:mr-6"}`}>
                        <div className="text-xs uppercase tracking-widest text-crimson font-semibold">{e.date}</div>
                        <div className="text-xl text-navy mt-2 font-medium">{e.title}</div>
                        <div className="thai text-sm text-muted-foreground mt-1">{e.thai}</div>
                      </div>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
