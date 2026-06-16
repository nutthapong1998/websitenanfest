import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter() {
  const [count, setCount] = useState<number>(201356);

  useEffect(() => {
    // ฐานยอดเข้าชมเดิมที่ตั้งไว้
    const BASE_COUNT = 201356;
    
    // ดึงค่าการเข้าชมจำลองที่สะสมใน Browser ของแต่ละเครื่อง
    const localVisit = localStorage.getItem("site_visits");
    let currentLocalCount = localVisit ? parseInt(localVisit, 10) : 0;

    if (!localVisit) {
      // ถ้าเป็นการเข้าชมครั้งแรกของเครื่องนี้ ให้บวกเพิ่ม 1
      currentLocalCount = 1;
      localStorage.setItem("site_visits", "1");
    } else {
      // ถ้าเคยเข้าแล้ว ในเซสชันใหม่ (เช่น รีเฟรชหน้าเว็บ) สามารถตั้งให้เพิ่มขึ้นได้
      currentLocalCount += 1;
      localStorage.setItem("site_visits", currentLocalCount.toString());
    }

    // แสดงผลยอดรวม = ยอดฐานเดิม + ยอดชมใหม่ที่เกิดขึ้นบนหน้าเว็บ
    setCount(BASE_COUNT + currentLocalCount);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-muted/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border w-fit text-xs font-mono text-muted-foreground shadow-sm">
      <Eye size={14} className="text-navy animate-pulse" />
      <span>ยอดผู้เข้าชมเว็บไซต์:</span>
      <span className="font-bold text-navy font-sans text-sm">
        {count.toLocaleString()}
      </span>
      <span>ครั้ง</span>
    </div>
  );
}