import { Link } from "@tanstack/react-router";
import logo from "@/assets/nanfest-logo.png";
import { VisitorCounter } from "./VisitorCounter"; // 📍 1. เพิ่มการ Import คอมโพเนนต์นับยอดวิว (เช็ค Path ให้ตรงกับโฟลเดอร์จริงของคุณ)

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      {/* 1. ปรับแก้ md:grid-cols-4 เป็น md:grid-cols-3 เพื่อให้แบ่ง 3 คอลัมน์พอดี */}
      <div className="container-narrow py-12 grid gap-10 md:grid-cols-3">
        
        {/* คอลัมน์ที่ 1 (ฝั่งซ้าย): โลโก้และคำอธิบาย ขยายกว้าง 2 ส่วนเท่าเดิม */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NAN FEST" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display text-xl tracking-widest text-navy">NAN FEST</div>
              <div className="thai text-xs text-muted-foreground">เทศกาลน่าน </div>
            </div>
          </div>
          <p className="thai mt-4 text-sm text-muted-foreground max-w-md">
            ปลุกความเป็นน่าน — เมืองแห่งการสร้างสรรค์ผ่านอาหาร งานคราฟท์
            ภาพยนตร์ ดนตรี และศิลปะการแสดง
          </p>
        </div>

        {/* คอลัมน์ที่ 2 (ฝั่งขวาสุด): บล็อก Explore ที่ย้ายมาแทนที่ Festivals และลบบล็อก Festivals เดิมออกแล้ว */}
        <div>
          <div className="eyebrow mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-crimson">About Us</Link></li>
            <li><Link to="/festivals/showcase" className="hover:text-crimson">Showcase</Link></li>
            <li><Link to="/contact" className="hover:text-crimson">Contact</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} NAN FEST. All rights reserved.</div>
          
          {/* 📍 2. แทรกกล่องยอดผู้เข้าชมไว้บริเวณตรงกลางของแถบล่างสุด */}
          <VisitorCounter />

          <div className="thai">น่าน · Thailand</div>
        </div>
      </div>
    </footer>
  );
}