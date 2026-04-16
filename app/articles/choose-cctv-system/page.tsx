import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const faqItems = [
  {
    question: "บ้าน 2 ชั้น ควรติดกล้องกี่ตัวถึงจะพอ?",
    answer:
      "โดยทั่วไปเริ่มที่ 4-6 ตัว ครอบคลุมหน้าบ้าน หลังบ้าน ทางเข้า และบริเวณจอดรถ แต่จำนวนจริงควรขึ้นกับมุมอับและพฤติกรรมการใช้งานของผู้อยู่อาศัย"
  },
  {
    question: "กล้อง 2MP ยังใช้ได้ไหมในปี 2026?",
    answer:
      "ยังใช้ได้ในบางจุดที่ไม่ต้องการรายละเอียดสูง แต่หากต้องการอ่านป้ายทะเบียนหรือจับใบหน้าในระยะไกล แนะนำเริ่มที่ 4MP หรือ 5MP เพื่อคุณภาพภาพที่ชัดกว่า"
  },
  {
    question: "ควรเก็บภาพย้อนหลังอย่างน้อยกี่วัน?",
    answer:
      "ใช้งานบ้านพักอาศัยแนะนำอย่างน้อย 15-30 วัน ส่วนร้านค้าและธุรกิจที่มีความเสี่ยงสูงควรวางแผน 30-90 วันขึ้นไปตามนโยบายและข้อกำหนดภายใน"
  },
  {
    question: "อินเทอร์เน็ตช้า มีผลกับกล้องไหม?",
    answer:
      "มีผลเฉพาะการดูผ่านมือถือจากนอกสถานที่ หากดูผ่านจอภายในที่เชื่อมระบบเดียวกันจะยังลื่นได้ โดยควรแยกเครือข่ายกล้องออกจากเครือข่ายใช้งานทั่วไป"
  }
];

export const metadata: Metadata = {
  title: "วิธีเลือกกล้องวงจรปิด CCTV 2026 | คู่มือเลือก กล้อง ความละเอียด เลนส์ บ้าน ร้านค้า",
  description:
    "คู่มือเลือก CCTV ฉบับสมบูรณ์ 2026 - วิธีเลือกกล้องวงจรปิดให้เหมาะกับบ้านและร้านค้า ตั้งแต่ความละเอียด (MP) เลนส์ ประเภทกล้อง เครื่องบันทึก HDD งบประมาณ การติดตั้ง และ FAQ แบบใช้งานจริง",
  keywords: [
    "วิธีเลือกกล้องวงจรปิด",
    "เลือก CCTV",
    "กล้องวงจรปิดบ้าน",
    "กล้องวงจรปิดร้านค้า",
    "กล้อง CCTV ความละเอียด",
    "เลนส์กล้องวงจรปิด",
    "ประเภทกล้อง CCTV",
    "ติดตั้ง CCTV",
    "ราคา CCTV",
    "เครื่องบันทึก CCTV",
    "HDD วงจรปิด",
    "วิธีติดตั้งกล้องวงจรปิด",
    "2MP 4MP 5MP CCTV",
    "Dome Camera Bullet Camera",
    "ColorVu Starlight CCTV",
    "มุมกล้อง varifocal",
    "ระบบบันทึก CCTV",
    "การเลือกจุดติดตั้ง",
    "งบประมาณ CCTV",
    "หน้าบ้าน หลังบ้าน ลานจอดรถ"
  ],
  alternates: {
    canonical: "https://kpavance.pages.dev/articles/choose-cctv-system"
  },
  openGraph: {
    type: "article",
    title: "เลือก CCTV แบบไหนให้เหมาะ? คู่มือ 2026",
    description:
      "คู่มือเลือกกล้องวงจรปิด CCTV ที่สมบูรณ์ครบถ้วน - เรียนรู้เรื่องความละเอียด MP เลนส์ ประเภทกล้อง เครื่องบันทึก และงบประมาณที่เหมาะสม พร้อมตารางเปรียบเทียบและ FAQ ตอบคำถาม",
    url: "https://kpavance.pages.dev/articles/choose-cctv-system",
    images: [siteConfig.ogImage],
    authors: [siteConfig.name],
    publishedTime: "2026-04-15T00:00:00+07:00",
    modifiedTime: "2026-04-16T00:00:00+07:00"
  },
  twitter: {
    card: "summary_large_image",
    title: "คู่มือเลือก CCTV สำหรับบ้าน & ร้านค้า 2026",
    description:
      "วิธีเลือกกล้องวงจรปิดให้ดี ครบเรื่องความละเอียด เลนส์ ประเภท เครื่องบันทึก และราคา พร้อม FAQ จากผู้เชี่ยวชาญ",
    images: [siteConfig.ogImage]
  }
};

export default function ChooseCctvSystemArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "วิธีเลือกกล้องวงจรปิด CCTV 2026 | คู่มือเลือก กล้อง ความละเอียด เลนส์ บ้าน ร้านค้า",
    alternativeHeadline: "คู่มือการเลือกกล้องวงจรปิด CCTV ให้เหมาะกับบ้านและร้านค้า",
    description:
      "คู่มือเลือก CCTV ฉบับสมบูรณ์ 2026 - วิธีเลือกกล้องวงจรปิด ความละเอียด MP เลนส์ ประเภทกล้อง เครื่องบันทึก HDD และงบประมาณที่เหมาะสม",
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: "2026-04-15T00:00:00+07:00",
    dateModified: "2026-04-16T00:00:00+07:00",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/choose-cctv-system`
    },
    articleSection: "คู่มือ CCTV",
    keywords: "วิธีเลือก CCTV, กล้องวงจรปิด, ความละเอียด MP, เลนส์, ประเภทกล้อง, เครื่องบันทึก, งบประมาณ",
    wordCount: 2500,
    timeRequired: "PT8M"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "วิธีเลือกกล้องวงจรปิด CCTV สำหรับบ้านและร้านค้า",
    description: "ขั้นตอนเลือกกล้องวงจรปิด CCTV ให้เหมาะกับความต้องการ บ้าน หรือร้านค้า",
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`
    },
    estimatedCost: {
      "@type": "PriceSpecification",
      priceCurrency: "THB",
      price: "15000-50000"
    },
    totalTime: "PT8M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "เริ่มจากเป้าหมายก่อนเลือกอุปกรณ์",
        text: "ก่อนดูสเปก ควรถามให้ชัดว่าต้องการป้องกันอะไร เช่น กันขโมย, ตรวจสอบพนักงาน, ดูลูกค้าหน้าร้าน"
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "เลือกความละเอียดให้เหมาะกับระยะจริง",
        text: "เลือกระหว่าง 2MP (ดูภาพรวม), 4MP (สมดุล), หรือ 5MP-8MP (ดูรายละเอียดชัด) ขึ้นกับความต้องการ"
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "อย่ามองข้ามเลนส์และมุมภาพ",
        text: "เลนส์ 2.8mm สำหรับมุมกว้าง, 4mm สำหรับมุมแคบ, varifocal สำหรับปรับได้"
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "เลือกประเภทกล้องตามสภาพแวดล้อม",
        text: "Dome สำหรับภายใน, Bullet สำหรับภายนอก, PTZ สำหรับพื้นที่กว้าง, ColorVu สำหรับแสงน้อย"
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "วางแผนเครื่องบันทึกและพื้นที่เก็บข้อมูล",
        text: "บ้าน 2-4TB สำหรับ 15-30 วัน, ร้านค้า 4-8TB สำหรับ 30 วันขึ้นไป"
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "วางแผนงบประมาณทั้งระบบ",
        text: "รวมกล้อง, เดินสาย, อุปกรณ์เครือข่าย, HDD, ค่าแรงติดตั้ง และบริการหลังการขาย"
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "ตรวจสอบเช็กลิสต์ก่อนตัดสินใจ",
        text: "มีแปลนหน้างาน, กำหนดระยะเวลาดูย้อนหลัง, ยืนยันการรับประกัน, ดูตัวอย่างผลงาน"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "บทความ",
        item: `${siteConfig.url}/articles`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "วิธีเลือก CCTV",
        item: `${siteConfig.url}/articles/choose-cctv-system`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <article className="wrapper py-16 md:py-24">
      <header className="glass-card">
        <p className="text-xs uppercase tracking-[0.2em] text-leaf">คู่มือ CCTV | วิธีเลือก</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight text-ink md:text-5xl">
          วิธีเลือกกล้องวงจรปิด CCTV ให้เหมาะกับบ้านและร้านค้า ปี 2026
        </h1>
        <p className="mt-4 text-sm text-ink/70">
          เผยแพร่วันที่ 15 เมษายน 2026 • อัปเดตปรับปรุง 16 เมษายน 2026 • ใช้เวลาอ่าน 8 นาที • เขียนโดย {siteConfig.shortName}
        </p>
        <p className="mt-5 text-base leading-relaxed text-ink/80">
          <strong>คู่มือการเลือกกล้องวงจรปิด</strong> ให้ติดตั้งแบบคุ้มค่าและใช้ได้จริง สิ่งสำคัญไม่ใช่แค่เลือกยี่ห้อดัง แต่ต้องเลือกให้ตรงหน้างานจริง บทความนี้สรุปแบบใช้งานได้ทันที ตั้งแต่การกำหนด<strong>เป้าหมายการใช้งาน</strong>, <strong>เลือกความละเอียด (MP)</strong>, <strong>เลนส์</strong>, <strong>ประเภทกล้อง</strong>, <strong>ระบบบันทึก</strong> ไปจนถึง<strong>งบประมาณที่ควรเตรียม</strong>
        </p>
      </header>

      <section className="mt-8 space-y-6">
        <div className="glass-card">
          <h2 className="text-2xl text-ink">1. เริ่มจากเป้าหมายก่อนเลือกอุปกรณ์</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            ก่อนดูสเปก ควรถามให้ชัดว่าต้องการป้องกันอะไร เช่น กันขโมย, ตรวจสอบพนักงาน, ดูลูกค้าหน้าร้าน,
            หรือเก็บหลักฐานกรณีเหตุไม่คาดคิด เพราะแต่ละเป้าหมายใช้มุมกล้องและความละเอียดต่างกัน
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>บ้านพักอาศัย: เน้นประตูเข้าออก ลานจอดรถ และมุมอับรอบบ้าน</li>
            <li>ร้านค้า: เน้นเคาน์เตอร์แคชเชียร์ จุดรับเงิน และทางเข้าออกลูกค้า</li>
            <li>โกดัง/โรงงาน: เน้นพื้นที่เก็บสินค้า ทางขนส่ง และจุดเสี่ยงภัยสูง</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">2. เลือกความละเอียดให้เหมาะกับระยะจริง</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            ภาพชัดขึ้นไม่ได้หมายความว่าต้องแพงเสมอไป แต่ต้องเหมาะกับระยะและสิ่งที่ต้องการเห็น
            ถ้าต้องอ่านป้ายทะเบียนหรือจับใบหน้าไกล แนะนำ 4MP ขึ้นไป
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-leaf/20">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-mist">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">ความละเอียด</th>
                  <th className="px-4 py-3 font-semibold text-ink">เหมาะกับ</th>
                  <th className="px-4 py-3 font-semibold text-ink">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-leaf/20 bg-white">
                  <td className="px-4 py-3 text-ink/80">2MP</td>
                  <td className="px-4 py-3 text-ink/80">ดูภาพรวมพื้นที่</td>
                  <td className="px-4 py-3 text-ink/80">งบประหยัด แต่รายละเอียดจำกัด</td>
                </tr>
                <tr className="border-t border-leaf/20 bg-white">
                  <td className="px-4 py-3 text-ink/80">4MP</td>
                  <td className="px-4 py-3 text-ink/80">บ้านและร้านค้าทั่วไป</td>
                  <td className="px-4 py-3 text-ink/80">สมดุลด้านราคาและความคมชัด</td>
                </tr>
                <tr className="border-t border-leaf/20 bg-white">
                  <td className="px-4 py-3 text-ink/80">5MP-8MP</td>
                  <td className="px-4 py-3 text-ink/80">พื้นที่ที่ต้องการหลักฐานชัด</td>
                  <td className="px-4 py-3 text-ink/80">ใช้พื้นที่เก็บข้อมูลมากขึ้น</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">3. อย่ามองข้ามเลนส์และมุมภาพ</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            เลนส์มีผลโดยตรงกับมุมที่เห็น หากเลือกไม่ถูกจะได้ภาพชัดแต่ไม่ตรงจุดสำคัญ
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>เลนส์ 2.8mm: มุมกว้าง เหมาะภาพรวมหน้าอาคาร/หน้าร้าน</li>
            <li>เลนส์ 4mm: มุมแคบลง เหมาะดูจุดเฉพาะ เช่น ประตูหรือเคาน์เตอร์</li>
            <li>เลนส์ varifocal: ปรับมุมได้ เหมาะหน้างานที่ต้องจูนละเอียด</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">4. ประเภทกล้องที่ควรเลือกตามสภาพแวดล้อม</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>Dome Camera: เหมาะภายในอาคาร ภาพดูเรียบร้อยและกลมกลืนกับตกแต่ง</li>
            <li>Bullet Camera: เหมาะภายนอกอาคาร ชี้ทิศทางชัดเจนและกันน้ำได้ดี</li>
            <li>PTZ Camera: หมุน/ซูมได้ เหมาะพื้นที่กว้างที่ต้องควบคุมระยะไกล</li>
            <li>ColorVu/Starlight: เหมาะจุดแสงน้อย ต้องการภาพกลางคืนแบบสี</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">5. เครื่องบันทึกและพื้นที่เก็บข้อมูล</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            ระบบที่ดีต้องดูย้อนหลังได้ตามต้องการ หากวาง HDD ต่ำเกินไป ภาพจะทับเร็วและใช้งานจริงไม่ได้
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>บ้านพักอาศัย: เริ่มต้น HDD 2TB-4TB สำหรับ 15-30 วัน</li>
            <li>ร้านค้า: แนะนำ 4TB-8TB สำหรับ 30 วันขึ้นไป</li>
            <li>ธุรกิจขนาดกลาง: วางแผน 30-90 วันตามนโยบายตรวจสอบย้อนหลัง</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">6. งบประมาณที่ควรวางแผนแบบใช้งานจริง</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            งบควรคิดรวมทั้งระบบ ไม่ใช่ราคากล้องอย่างเดียว ต้องรวมเดินสาย, อุปกรณ์เครือข่าย, HDD,
            ค่าแรงติดตั้ง และบริการหลังการขาย
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>แพ็กเริ่มต้นบ้านขนาดเล็ก 4 จุด: เน้นความคุ้มค่าและมุมครบ</li>
            <li>ร้านค้า 6-8 จุด: เพิ่มความละเอียดและคุณภาพกลางคืน</li>
            <li>โรงงาน/โกดัง: ออกแบบเฉพาะหน้างานและวางระบบเครือข่ายแยก</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">7. เช็กลิสต์ก่อนตัดสินใจติดตั้ง</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/80">
            <li>มีแปลนหรือภาพหน้างานเพื่อวิเคราะห์มุมกล้องจริง</li>
            <li>กำหนดระยะเวลาที่ต้องการดูย้อนหลังให้ชัด</li>
            <li>ยืนยันการรับประกันอุปกรณ์และงานติดตั้ง</li>
            <li>ขอดูตัวอย่างผลงานหน้างานประเภทเดียวกัน</li>
            <li>ตรวจสอบการตั้งค่าดูผ่านมือถือก่อนส่งมอบงาน</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl text-ink">คำถามที่พบบ่อย (FAQ)</h2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-xl border border-leaf/20 bg-white p-4">
                <h3 className="text-base font-semibold text-ink">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card bg-gradient-to-r from-mist to-white">
          <h2 className="text-2xl text-ink">ปรึกษาแผนติดตั้งให้เหมาะกับพื้นที่ของคุณ</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            ถ้าต้องการให้ทีมช่วยประเมินจุดติดตั้งและงบประมาณแบบตรงหน้างาน ติดต่อทีม KP ADvance ได้ทันที
            เราช่วยออกแบบระบบให้เหมาะกับการใช้งานจริง ไม่ยัดอุปกรณ์เกินจำเป็น
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="cta-btn">
              ขอคำปรึกษาฟรี
            </Link>
            <a
              href="tel:0936942456"
              className="inline-flex items-center justify-center rounded-full border border-leaf/45 bg-white px-6 py-3 font-display text-sm font-semibold tracking-wide text-ink transition hover:border-moss hover:text-moss"
            >
              โทร 093-694-2456
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}

