import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/nanfest-logo.svg";

const reconnecting2024 = [
  { to: "/festivals/food-map", label: "Nan Food Map" },
  { to: "/festivals/scape", label: "Nan Scape" },
  { to: "/festivals/creator", label: "Nan Creator" },
  { to: "/festivals/craft", label: "Nan Craft" },
  { to: "/festivals/performative", label: "Nan Performance Art" },
  { to: "/cinema/film", label: "Nan Film" },
  { to: "/cinema/short-film", label: "Nan Short Film" },
  { to: "/cinema/music", label: " Nan Contemporary Music" },
  { to: "/festivals/showcase", label: "Nan FEST Showcase2024" },
] as const;

// 📝 ย้าย Noah of Nan มาอยู่ใต้ Nan Scape พร้อมใส่ property 'indent' เพื่อจัดย่อหน้า
const connecting2026 = [
  { to: "/nan2026/scape", label: "Nan Scape" },
  { to: "/nan2026/noah", label: "- Walking under Water", indent: true },
  { to: "/nan2026/noahofnan", label: "- Noah of Nan", indent: true },
  { to: "/nan2026/life", label: "Nan Life" },
  { to: "/nan2026/photo", label: "Nan Photo" },
  { to: "/nan2026/idea-lab", label: "Nan Idea Lab" },
  { to: "/nan2026/music", label: "Nan  Music" },
  { to: "/nan2026/Showcase2026", label: "Nan  Fest Showcase2026" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ฟังก์ชันสำหรับสั่งเลื่อนหน้าจอขึ้นไปด้านบนสุดแบบนุ่มนวล
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        {/* ผูก onClick ให้โลโก้ด้านซ้าย เมื่อคลิกแล้วเลื่อนขึ้นบนสุด */}
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
          <img src={logo} alt="NAN FEST" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="leading-none">
            <div className="font-display text-lg md:text-xl tracking-widest text-navy">NAN FEST</div>
            <div className="thai text-[10px] md:text-xs text-muted-foreground">เทศกาลน่าน</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
          <FestivalsDropdown />
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-1 text-sm">
            <MobileLink 
              to="/" 
              onClick={() => {
                setOpen(false);
                scrollToTop();
              }}
            >
              Home
            </MobileLink>
            
            <div className="pt-3 pb-1 eyebrow text-crimson">NAN Reconnecting 2024</div>
            {reconnecting2024.map((f) => (
              <MobileLink key={f.to} to={f.to} onClick={() => setOpen(false)} indent={"indent" in f && f.indent}>
                {f.label}
              </MobileLink>
            ))}
            
            <div className="pt-3 pb-1 eyebrow text-crimson">NAN Connecting the Community 2026</div>
            {connecting2026.map((f) => (
              <MobileLink key={f.to} to={f.to} onClick={() => setOpen(false)} indent={"indent" in f && f.indent}>
                {f.label}
              </MobileLink>
            ))}
            
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-3 py-2 rounded-md text-navy hover:text-crimson transition-colors"
      activeProps={{ className: "px-3 py-2 rounded-md text-crimson" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function FestivalsDropdown() {
  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-md text-navy hover:text-crimson transition-colors inline-flex items-center gap-1">
        Festivals <ChevronDown size={14} />
      </button>
      <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute right-0 top-full pt-2">
        <div className="min-w-[520px] bg-card border border-border rounded-lg shadow-xl p-5 grid grid-cols-2 gap-6">
          <div>
            <div className="eyebrow text-crimson mb-3">NAN FEST Reconnecting 2024</div>
            <div className="flex flex-col">
              {reconnecting2024.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`block py-1.5 text-sm text-navy hover:text-crimson transition-colors ${
                    "indent" in it && it.indent ? "pl-4 text-muted-foreground" : ""
                  }`}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow text-crimson mb-3">NAN FEST Connecting the Community 2026</div>
            <div className="flex flex-col">
              {connecting2026.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`block py-1.5 text-sm text-navy hover:text-crimson transition-colors ${
                    "indent" in it && it.indent ? "pl-4 text-muted-foreground" : ""
                  }`}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  to,
  children,
  onClick,
  indent,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  indent?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-navy hover:bg-muted hover:text-crimson transition-colors ${
        indent ? "pl-8 text-muted-foreground" : ""
      }`}
    >
      {children}
    </Link>
  );
}