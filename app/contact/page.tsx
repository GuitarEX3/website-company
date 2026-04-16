import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/data/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ผลงานและติดต่อ",
  description:
    "ชมผลงานติดตั้งจริงและติดต่อทีม KP ADvance System เพื่อขอคำปรึกษาฟรีเรื่อง CCTV และระบบความปลอดภัย",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "ผลงานและติดต่อ | KP ADvance System",
    description: "ตัวอย่างผลงานติดตั้งจริง พร้อมช่องทางติดต่อทีมงาน KP ADvance System",
    url: "/contact",
    images: [siteConfig.ogImage]
  },
  twitter: {
    title: "ผลงานและติดต่อ | KP ADvance System",
    description: "ตัวอย่างผลงานติดตั้งจริง พร้อมช่องทางติดต่อทีมงาน KP ADvance System",
    images: [siteConfig.ogImage]
  }
};

export default function ContactPage() {
  return (
    <div className="wrapper py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-leaf">Portfolio & Contact</p>
        <h1 className="section-title mt-2">ผลงานและช่องทางติดต่อ</h1>
        <p className="section-subtitle">
          ตัวอย่างงานติดตั้งจริงจากหน้างานหลากหลายประเภท พร้อมทีมให้คำปรึกษาเพื่อตีโจทย์ตามพื้นที่ของคุณ
        </p>
      </Reveal>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 100}>
            <article className="group relative h-64 overflow-hidden rounded-2xl border border-leaf/20">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-pine/10 to-transparent" />
              <h2 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-sm">
                {item.title}
              </h2>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-1">
        <Reveal className="glass-card border-leaf/30">
          <h2 className="text-2xl text-ink">ข้อมูลติดต่อ</h2>
          <div className="mt-5 space-y-3 text-sm text-ink/80">
            <p>โทร: 093-694-2456</p>
            <p>
              แผนที่:{" "}
              <a
                href="https://maps.app.goo.gl/mU8qpjbgnEe2K6CR9"
                target="_blank"
                rel="noreferrer"
                className="text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                เปิด Google Maps
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a
                href="https://web.facebook.com/profile.php?id=100080465570561"
                target="_blank"
                rel="noreferrer"
                className="text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                KP ADvance System
              </a>
            </p>
            <p>
              LINE:{" "}
              <a
                href="https://line.me/ti/p/CFlkQd5fIm"
                target="_blank"
                rel="noreferrer"
                className="text-leaf underline decoration-leaf/40 underline-offset-4"
              >
                0936942456
              </a>
            </p>
          </div>
          <a href="tel:0936942456" className="cta-btn mt-6 w-full">
            โทรหาทีมงานตอนนี้
          </a>
        </Reveal>
      </section>
    </div>
  );
}
