import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
// ไฟล์วิดีโอ — เก็บบน Cloudflare R2 (ดู src/lib/media.ts)
import { mediaUrl } from '@/lib/media'

export const Route = createFileRoute('/nan2026/Showcase2026')({
  component: RouteComponent,
})

interface GallerySection {
  title: string
  images: string[]
}

interface DayData {
  title: string
  paragraphs: string[]
  galleries: GallerySection[]
}

function RouteComponent() {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // วิดีโอรวม 3 วันที่ต้องการให้เด่นที่สุด
  const mainOverviewVideo = {
    src: mediaUrl('sp/NANFESTSHOWCASE 2026.mp4'),
    title: 'วิดีโอภาพรวมเทศกาลน่านสร้างสรรค์ (รวมทั้ง 3 วัน)',
  }

  const highlights = [
    { day: 1, src: mediaUrl('Nanfestshowcase2026/ไฮไลท์ น่านเฟส EP1.mp4'), label: 'ไฮไลท์ น่านเฟส EP 1' },
    { day: 2, src: mediaUrl('Nanfestshowcase2026/ไฮไลท์ น่านเฟส EP2.mp4'), label: 'ไฮไลท์ น่านเฟส EP 2' },
    { day: 3, src: mediaUrl('Nanfestshowcase2026/ไฮไลท์ น่านเฟส EP 3.mp4'), label: 'ไฮไลท์ น่านเฟส EP 3' },
  ]

  const galleryData: Record<'day1' | 'day2' | 'day3', DayData> = {
    day1: {
      title: 'บรรยากาศก่อนเข้าสู่พิธีเปิดและกิจกรรมสร้างสรรค์',
      paragraphs: [
        'บรรยากาศภายในงาน วันที่ 1 พฤษภาคม 2569 ก่อนเข้าสู่พิธีเปิดเทศกาลน่าน (Nan Fest 2026) อย่างเป็นทางการ ภายในชุมชนเต็มไปด้วยกิจกรรมสร้างสรรค์ที่เปิดโอกาสให้ประชาชน เยาวชน และเครือข่ายในพื้นที่ได้เข้ามามีส่วนร่วมตลอดทั้งวัน โดยในช่วงเช้า สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์ (CEA) สำนักภาคเหนือ ได้จัดกิจกรรม Workshop “เมืองในฝันเพื่อรับมือกับภัยพิบัติอย่างสร้างสรรค์” เพื่อชวนคนในชุมชนร่วมแลกเปลี่ยนความคิดเห็นและออกแบบแนวทางการเตรียมความพร้อมรับมือภัยพิบัติ ผ่านกระบวนการตั้งคำถาม การพูดคุย และกิจกรรมเวิร์กชอปในพื้นที่ชุมชนบ้านปอน อำเภอเมืองน่าน และชุมชนน้ำครกใหม่ กิจกรรมดังกล่าวมีวัตถุประสงค์เพื่อสร้างความตระหนักรู้เกี่ยวกับสถานการณ์ภัยพิบัติที่มีแนวโน้มเกิดขึ้นบ่อยและรุนแรงมากขึ้นในอนาคต โดยอาศัยความร่วมมือจากเครือข่ายนักออกแบบ สถาปนิก และภาคประชาชนจากจังหวัดน่านและจังหวัดเชียงใหม่',
        'นอกเหนือจากนี้ ภายในงานยังมีกิจกรรมชมแปลงสาธิต “สวนพฤกษลาบ” ณ บ้านศิลปะ จุมพล อภิสุข ซึ่งเป็นพื้นที่เรียนรู้ด้านพืชพื้นถิ่นและภูมิปัญญาชุมชนที่ได้รับความสนใจจากผู้เข้าร่วมงานเป็นอย่างมาก ในช่วงบ่าย ได้มีการจัดการแข่งขัน “สเก็ตเรือน่าน” รอบคัดเลือก บริเวณถนนริมหนองน้ำครกใหม่ ท่ามกลางบรรยากาศที่เต็มไปด้วยความสนุกสนานและเสียงเชียร์จากประชาชนในพื้นที่ ขณะเดียวกัน ยังมีการอ่านบทกวี “ใต้น้ำมีแสงแดด” บนแพยายเตียมที่ลอยอยู่บริเวณหนองน้ำครก สร้างบรรยากาศทางศิลปะและวรรณกรรมที่สอดคล้องกับวิถีชีวิตและภูมิทัศน์ของชุมชน',
        'after พิธีเปิดเทศกาลน่านอย่างเป็นทางการ ภายในงานยังมีการแสดงฟ้อนต้อนรับ การเสวนาในหัวข้อ “สายน้ำชื่อดวงตะวัน” จากหน่วยงานและเครือข่ายด้านวัฒนธรรมและสร้างสรรค์ รวมถึงการแสดงดนตรี “Nan Music : สายรุ้งแห่งขุนเขา” ที่ถ่ายทอดเรื่องราวทางวัฒนธรรม กลุ่มชาติพันธุ์ และพลังสร้างสรรค์ของเมืองน่าน ผ่านบทเพลงและศิลปะร่วมสมัย ท่ามกลางบรรยากาศอบอุ่นและการมีส่วนร่วมของผู้เข้าร่วมงานจากหลากหลายภาคส่วน'
      ],
      galleries: [
        {
          title: 'กิจกรรม Workshop “เมืองในฝันเพื่อรับมือกับภัยพิบัติอย่างสร้างสรรค์” & แข่งสเก็ตเรือน่าน รอบคัดเลือก',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD1_248.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_273.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_286.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_316.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_328.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_338.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_383.JPG',
            '/src/assets/jaiban/NFD2_002.JPG',
            '/src/assets/jaiban/NFD2_004.JPG',
            '/src/assets/jaiban/NFD2_005.JPG',
            '/src/assets/jaiban/NFD2_006.JPG',
            '/src/assets/jaiban/NFD2_007.JPG',
            '/src/assets/jaiban/NFD2_011.JPG',
            '/src/assets/jaiban/NFD2_015.JPG',
            '/src/assets/jaiban/NFD2_016.JPG',
            '/src/assets/jaiban/NFD2_021.JPG',
            '/src/assets/jaiban/NFD2_030.JPG',
            '/src/assets/jaiban/NFD2_032.JPG',
            '/src/assets/jaiban/NFD2_034.JPG',
            '/src/assets/jaiban/NFD2_041.JPG',
            '/src/assets/jaiban/NFD2_048.JPG',
            '/src/assets/jaiban/NFD2_050 (1).JPG',
            '/src/assets/jaiban/NFD2_050.JPG',
            '/src/assets/jaiban/NFD2_052.JPG',
            '/src/assets/jaiban/NFD2_064.JPG',
            '/src/assets/jaiban/NFD2_069.JPG',
            '/src/assets/jaiban/NFD2_071.JPG',
            '/src/assets/jaiban/NFD2_075.JPG',
            '/src/assets/jaiban/NFD2_082.JPG',
            '/src/assets/jaiban/NFD2_083.JPG',
            '/src/assets/jaiban/NFD2_087.JPG',
            '/src/assets/jaiban/NFD2_092.JPG'
          ]
        },
        {
          title: 'รูปบรรยากาศการอ่านบทกวี “ใต้น้ำมีแสงแดด”',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0083.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0096.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0106.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0125.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0148.JPG',
          ]
        },
        {
          title: 'รูปพิธีเปิดเทศกาลน่าน',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD1_581.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_584.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_587.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_592.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_602.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_630.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_634.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_650.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_651.JPG',
            '/src/assets/Nanfestshowcase2026/NFD1_663.JPG',
            '/src/assets/Nanlife/NFD2_520.JPG',
          ]
        }
      ]
    },
    day2: {
      title: 'เปิดบ้านหอศิลป์ แลกเปลี่ยนแนวคิดภัยพิบัติ และพลังสร้างสรรค์จากชุมชน',
      paragraphs: [
        'กิจกรรม “เปิดบ้านหอศิลป์จุมพล อภิสุข” และนิทรรศการศิลปะร่วมสมัย “โนอาห์ ฝ่าน้ำท่วม” ซึ่งได้รับการสนับสนุนจาก สำนักงานศิลปวัฒนธรรมร่วมสมัย (สศร.) เป็นการรวมพลังของศิลปินกว่า 20 คน ถ่ายทอดเรื่องราวการอยู่ร่วมกับน้ำอย่างสร้างสรรค์ ผ่านผลงานศิลปะหลากหลายรูปแบบ อาทิ จิตกรม ภาพถ่าย ศิลปะจัดวาง บทกวี และศิลปะการแสดง ภายใต้แนวคิด “โนอาห์ ฝ่าน้ำท่วม” เพื่อสร้างความตระหนักรู้เรื่องการเตรียมพร้อมรับมืออุทกภัยในพื้นที่จังหวัดน่าน พร้อมเปิดโอกาสให้ประชาชนและผู้เข้าร่วมงานได้เดินชมนิทรรศการและเรียนรู้การใช้ศิลปะเป็นสื่อกลางในการเชื่อมโยงชุมชนและสร้างความยั่งยืนร่วมกัน และภายในพื้นที่เดียวกันยังมีพิธีเปิดกิจกรรม “Nan Life วิถีน่าน : น่านรอด” โดยมีตัวแทนจากทั้ง 15 อำเภอของจังหวัดน่าน เข้าร่วมสะท้อนอัตลักษณ์ วิถีชีวิต วัฒนธรรม และพลังของชุมชนท้องถิ่น ผ่านกิจกรรมสร้างสรรค์ที่เชื่อมโยงผู้คน ศิลปะ และวิถีชีวิตร่วมสมัยของเมืองน่านเข้าด้วยกัน',
        'บรรยากาศกิจกรรมในวันที่ 2 ของเทศกาลน่าน (Nan Fest 2026) เต็มไปด้วยกิจกรรมสร้างสรรค์ที่เชื่อมโยงศิลปะ วัฒนธรรม และการเรียนรู้ร่วมกับชุมชน ในช่วงเช้า สำนักงานส่งเสริมเศรษฐกิจสร้างสรรค์ (CEA) สำนักภาคเหนือ ได้จัดกิจกรรม Workshop “เมืองในฝันเพื่อรับมือกับภัยพิบัติอย่างสร้างสรรค์” ต่อเนื่องเป็นวันที่ 2 เพื่อถอดบทเรียนและแลกเปลี่ยนแนวทางการรับมือภัยพิบัติร่วมกับชุมชนและเยาวชนในพื้นที่',
        'กิจกรรมช่วงเย็น เริ่มจากการอ่านบทกวี “ที่ใต้น้ำ มีแสงแดด” การแสดงดนตรีจากเด็กชุมชนบ้านน้ำครกใหม่ รวมถึงการแสดงดนตรีจากวง “Ho Sounds” และ “นิยมใจ” สร้างบรรยากาศสนุกสนานให้แก่ผู้เข้าร่วม ภายในงานยังมีกิจกรรม Nan Life : ชีวิตที่มีสุข นำเสนอแนวคิดการพึ่งพาตนเองและการจัดการพื้นที่อย่างยั่งยืน ตลอดจนกิจกรรม Nan Idea Lab : Storytelling ที่เปิดพื้นที่ให้เด็กและเยาวชนถ่ายทอดเรื่องราวและมุมมองจากการสำรวจชุมชนบ้านน้ำครกใหม่ และส่งท้ายกิจกรรมวันที่ 2 ด้วยการแสดงดนตรีจากวงคลีโพ ซึ่งมีผลตอบรับจากชุมชน คนในจังหวัดน่าน และทุกภาคส่วนเป็นอย่างดี'
      ],
      galleries: [
        {
          title: 'เปิดบ้านหอศิลป์จุมพล อภิสุข & นิทรรศการ “โนอาห์ ฝ่าน้ำท่วม” / กิจกรรม Nan Life วิถีน่าน : น่านรอด',
          images: [
            '/src/assets/Nanlife/NFD2_210.JPG',
            '/src/assets/Nanlife/NFD2_218.JPG',
            '/src/assets/Nanlife/NFD2_221.JPG',
            '/src/assets/Nanlife/NFD2_225.JPG',
            '/src/assets/Nanlife/NFD2_307.JPG',
            '/src/assets/Nanlife/NFD2_326.JPG',
            '/src/assets/Nanlife/NFD2_334.JPG',
            '/src/assets/Nanlife/NFD2_382.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรีจากเด็กชุมชนบ้านน้ำครกใหม่',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD2_494.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_510.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรี “กลุ่มดนตรี Ho Sounds”',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD2_554.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_558.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_562.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_563.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_568.JPG',
          ]
        },
        {
          title: 'NAN LIFE : ชีวิตที่มีสุข โดย กุล ปัญญาวงค์',
          images: [
            '/src/assets/Nanfestshowcase2026/สกรีนช็อต 2026-06-12 023753.png',
            '/src/assets/Nanfestshowcase2026/สกรีนช็อต 2026-06-12 023803.png',
          ]
        },
        {
          title: 'การแสดงดนตรี “นิยมใจ”',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD2_602.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_608.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_610.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_611.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_615.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_616.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรี “คลีโพ”',
          images: [
            '/src/assets/Nanfestshowcase2026/NFD2_618.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_620.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_622.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_623.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_625.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_630.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_635.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_640.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_643.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_645.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_650.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_652.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_662.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_663.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_664.JPG',
            '/src/assets/Nanfestshowcase2026/NFD2_666.JPG',
          ]
        }
      ]
    },
    day3: {
      title: 'ส่งท้ายเทศกาลแห่งความอบอุ่น ประชันรสชาติ และเชื่อมโยงชุมชน',
      paragraphs: [
        'บรรยากาศกิจกรรมในวันสุดท้ายของเทศกาลน่าน (Nan Fest 2026) เต็มไปด้วยความอบอุ่นและการมีส่วนร่วมของชาวบ้านในชุมชนบ้านน้ำครกใหม่ โดยเริ่มต้นด้วยกิจกรรมประชันลาบ จากคนในหมู่บ้านน้ำครกใหม่ ตัดสินโดยผู้เข้าร่วมชิม และเลือกสัญชาติที่ใช่ ต่อด้วยการอ่านบทกวี “ที่ใต้น้ำมีแสงแดด” ซึ่งสะท้อนเรื่องราว ความทรงจำ และความสัมพันธ์ระหว่างผู้คนกับสายน้ำของชุมชนบ้านน้ำครกใหม่',
        'ภายในงานมีการแสดงดนตรีจากศิลปิน “ชินพลพัฒน์” และ “ชาย ชื่อกานต์” ที่ร่วมสร้างบรรยากาศทางดนตรีอย่างใกล้ชิดและเป็นกันเอง พร้อมกิจกรรม “Nan Photo : Reading Through Camera” ที่นำเสนอการเล่าเรื่องผ่านภาพถ่าย และกิจกรรม “Nan Scape : Walking under Water” โดย จุมพล อภิสุข ซึ่งสะท้อนมุมมองต่อพื้นที่ ชุมชน และการอยู่ร่วมกับสายน้ำผ่านงานศิลปะร่วมสมัย ก่อนปิดท้ายเทศกาลด้วยการแสดงดนตรีจาก “วงนั่งเล่น” ท่ามกลางบรรยากาศแห่งการพบปะ แลกเปลี่ยน และเชื่อมโยงผู้คน เรื่องราว และพื้นที่ ตามแนวคิดของงาน “Nan Fest 2026 : Connecting the Community”'
      ],
      galleries: [
        {
          title: 'กิจกรรมประชันลาบ',
          images: [
            '/src/assets/Nanlife/NFD3_017.JPG',
            '/src/assets/Nanlife/NFD3_021.JPG',
            '/src/assets/Nanlife/NFD3_036.JPG',
            '/src/assets/Nanlife/NFD3_044.JPG',
            '/src/assets/Nanlife/NFD3_056.JPG',
            '/src/assets/Nanlife/NFD3_086.JPG',
            '/src/assets/Nanlife/NFD3_167.JPG',
            '/src/assets/Nanlife/NFD3_188.JPG',
          ]
        },
        {
          title: 'กิจกรรมแข่งขัน กีฬาเปตอง',
          images: [
            '/src/assets/sp/S__8904734_0.jpg',
            '/src/assets/sp/S__8904735_0.jpg',
            '/src/assets/sp/S__8904736_0.jpg',
          ]
        },
        {
          title: 'นิทรรศการ ใจบ้าน',
          images: [
            '/src/assets/jaiban/685678893_944784001673940_6577077929538670667_n.jpg',
            '/src/assets/jaiban/686213892_944783918340615_3205938275152428034_n.jpg',
            '/src/assets/jaiban/686501977_944784015007272_1806172478282415528_n.jpg',
            '/src/assets/jaiban/686820743_944784011673939_7864802563125896493_n.jpg',
            '/src/assets/jaiban/687677313_944783915007282_590180329314869904_n.jpg',
            '/src/assets/jaiban/687708473_944783998340607_8665050511542464112_n.jpg',
            '/src/assets/jaiban/687923983_944783978340609_2131531581407075167_n.jpg',
            '/src/assets/jaiban/689892910_944784005007273_3966840287385659895_n.jpg'
          ]
        },
        {
          title: 'การอ่านบทกวี “ที่ใต้น้ำมีแสงแดด”',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0083.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0096.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0106.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0125.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0148.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรี “ชินพลพัฒน์”',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0304.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0306.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0309.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0313.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0314.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0316.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0317.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0318.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0319.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0321.JPG',
          ]
        },
        {
          title: 'Nan Photo : Reading Through Camera',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0355.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0356.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0358.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0362.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0364.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0365.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0369.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0372.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรี “ชาย ชื่อกานต์”',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0373.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0375.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0377.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0381.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0384.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0387.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0395.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0419.JPG',
          ]
        },
        {
          title: 'Nan Scape : Walking under Water โดย จุมพล อภิสุข',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0475.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0477.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0483.JPG',
          ]
        },
        {
          title: 'การแสดงดนตรี “วงนั่งเล่น”',
          images: [
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0531.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0532.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0542.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0544.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0558.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0570.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0571 (1).JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0571.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0576.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0597.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0609.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0620.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0638.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0640.JPG',
            '/src/assets/Nanfestshowcase2026/NANFEST_69.05.03-0667.JPG',
          ]
        }
      ]
    }
  }

  const currentTabData = galleryData[`day${activeTab}`]

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] antialiased font-sans selection:bg-red-50 selection:text-red-600">
      
      {/* === HERO BANNER (ตามสไตล์ภาพที่ 2: พื้นหลังขาวคลีน ตัวอักษรสีน้ำเงินเข้มและแดง) === */}
      <div className="bg-white pt-16 pb-10 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
            PROJECT SCHEDULE
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] uppercase">
            NAN FEST SHOWCASE 2026
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-[#E11D48] tracking-wide">
            น่านโชว์เคสและนิทรรศการสร้างสรรค์
          </h2>
          <p className="text-[#64748B] text-sm md:text-base max-w-3xl font-normal leading-relaxed pt-2">
            ประมวลภาพกิจกรรมและตารางงานเทศกาลสร้างสรรค์ 3 วันเต็ม อัดแน่นด้วยกิจกรรมล่องน่าน โชว์เคสทางวัฒนธรรม และร้านค้าชุมชน เชื่อมโยงผู้คน ศิลปะ วัฒนธรรม และวิถีชีวิตร่วมสมัยอย่างยั่งยืน
          </p>
        </div>
      </div>

      {/* === STICKY NAVIGATION & TAB PATTERN (เน้นสีกรอบแดง/เทาเรียบหรู) === */}
      <div className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex bg-[#F1F5F9] p-1 rounded-xl max-w-2xl border border-gray-200">
            {([1, 2, 3] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className={`flex-1 py-2.5 text-center text-xs md:text-sm font-bold rounded-lg transition-all duration-200 ${
                  activeTab === day
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/60'
                }`}
              >
                วันที่ {day} พฤษภาคม 2569
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === TWO-COLUMN MAIN CONTENT AREA === */}
      <main className="max-w-7xl mx-auto px-6 mt-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* [LEFT COLUMN]: Info, Meta, and Video Highlights */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-[220px]">
            
            {/* Event Meta Card */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">ระยะเวลาจัดงาน</span>
                <p className="text-[#0F172A] font-bold text-sm">09.00 – 21.00 น.</p>
                <p className="text-[#E11D48] font-extrabold text-sm">1 – 3 พฤษภาคม 2569</p>
              </div>
              <div className="space-y-1 sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">สถานที่จัดงาน</span>
                <p className="text-[#0F172A] font-bold text-sm">ชุมชนบ้านน้ำครกใหม่</p>
                <p className="text-[#475569] text-xs leading-relaxed">ต.กองควาย อ.เมืองน่าน จ.น่าน</p>
              </div>
            </section>

            {/* Article Content */}
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-widest block mb-1">Concept Day {activeTab}</span>
                <h2 className="text-base md:text-lg font-bold text-[#0F172A] leading-snug">
                  {currentTabData.title}
                </h2>
              </div>
              <div className="space-y-4 max-h-[300px] lg:max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                {currentTabData.paragraphs.map((p, index) => (
                  <p key={index} className="text-[#334155] leading-relaxed text-xs md:text-sm text-justify indent-8 tracking-wide">
                    {p}
                  </p>
                ))}
              </div>
            </article>

            {/* Secondary Video Highlights (Per Day) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#E11D48] rounded-full"></div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  วิดีโอไฮไลท์ประจำวัน
                </h2>
              </div>
              
              {highlights.filter(v => v.day === activeTab).map((video) => (
                <div key={video.src} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="p-3 bg-[#F8F9FA] border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-bold text-[#334155] text-xs">{video.label}</h3>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-white text-[#64748B] rounded border border-gray-200">
                      Day {video.day}
                    </span>
                  </div>
                  <div className="aspect-video bg-black">
                    <video controls className="w-full h-full object-cover">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* [RIGHT COLUMN]: Featured Main Video & Image Galleries */}
          <div className="lg:col-span-7 space-y-6">

            {/* === FEATURED MAIN OVERVIEW VIDEO (สไตล์ภาพที่ 2 มีแท็กสีน้ำเงินเข้ม FEATURED VIDEO) === */}
            <section className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-[#0F172A] text-white rounded uppercase tracking-wider">
                    FEATURED VIDEO
                  </span>
                  <h2 className="text-xs md:text-sm font-bold text-[#0F172A] tracking-tight">
                    {mainOverviewVideo.title}
                  </h2>
                </div>
              </div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md">
                <video controls className="w-full h-full object-cover">
                  <source src={mainOverviewVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
            
            {/* Image Exhibition Galleries */}
            {currentTabData.galleries.map((section, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                  <div className="w-1 h-3 bg-[#E11D48]"></div>
                  <h3 className="text-xs md:text-sm font-bold text-[#0F172A] tracking-tight">
                    {section.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {section.images.map((imgSrc, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(imgSrc)}
                      className="aspect-square bg-[#F8F9FA] rounded-lg overflow-hidden group relative border border-gray-200 cursor-pointer shadow-sm"
                    >
                      <img
                        src={mediaUrl(imgSrc)}
                        alt={section.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold bg-[#0F172A]/90 backdrop-blur-sm px-2.5 py-1.5 rounded border border-white/10 tracking-wide">
                          ขยายรูปภาพ
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-12 text-center text-xs">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="font-bold text-white tracking-wider text-sm">NAN FEST SHOWCASE 2026</p>
          <p className="text-[#64748B]">© 2026 NAN FEST. All Rights Reserved. Connecting the Community.</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button
              className="absolute -top-12 right-0 text-gray-400 hover:text-white bg-white/10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border border-white/10 text-sm font-bold"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              ✕
            </button>
            <img
              src={mediaUrl(selectedImage)}
              alt="Exhibition gallery preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}