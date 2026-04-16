import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { trustPoints } from "@/data/site-data";
import { siteConfig } from "@/lib/site-config";

const brands = ["HIKVISION", "HI-VIEW", "DAHUA", "TP-LINK", "IMOU", "UNIVIEW"];

export const metadata: Metadata = {
  title: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ",
  description:
    "บริการติดตั้งกล้องวงจรปิด CCTV, Access Control, Smart Home และวางระบบ Network โดยทีมมืออาชีพ พร้อมบริการหลังการขาย",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ | KP ADvance System",
    description:
      "บริการติดตั้งกล้องวงจรปิด CCTV, Access Control, Smart Home และวางระบบ Network โดยทีมมืออาชีพ",
    url: "/",
    images: [siteConfig.ogImage]
  },
  twitter: {
    title: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ | KP ADvance System",
    description:
      "บริการติดตั้งกล้องวงจรปิด CCTV, Access Control, Smart Home และวางระบบ Network โดยทีมมืออาชีพ",
    images: [siteConfig.ogImage]
  }
};

export default function HomePage() {
  const homeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ติดตั้งกล้องวงจรปิดและระบบรักษาความปลอดภัย",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      areaServed: "Bangkok Metropolitan Region"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone
      }
    }
  };

  return (
    <div>
      <section className="relative isolate overflow-hidden pb-20 pt-24 md:pb-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/main-cctv-monitor.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/65 to-white/25" />

        <div className="wrapper relative">
          <Reveal className="max-w-3xl">
            <p className="inline-flex animate-glow rounded-full border border-leaf/60 bg-leaf/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
              KP ADvance System
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-ink md:text-6xl">
              นวัตกรรมความปลอดภัย
              <span className="block text-moss">ที่คุณไว้วางใจได้</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
              บริการติดตั้งกล้องวงจรปิด ระบบ Access Control และ Smart Home มาตรฐานสากล
              โดยทีมมืออาชีพ พร้อมดูแลตั้งแต่ติดตั้งจนถึงบริการหลังการขาย
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="cta-btn">
                นัดสำรวจหน้างานฟรี
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-leaf/45 bg-white px-6 py-3 font-display text-sm font-semibold tracking-wide text-ink transition hover:border-moss hover:text-moss"
              >
                ดูบริการทั้งหมด
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-leaf/20 bg-white/70 py-4">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 pr-4">
            {[...brands, ...brands].map((brand, idx) => (
              <span
                key={`${brand}-${idx}`}
                className="rounded-full border border-leaf/30 bg-leaf/10 px-5 py-2 text-sm font-semibold tracking-widest text-leaf"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper py-16 md:py-24">
        <Reveal>
          <h2 className="section-title">ทำไมลูกค้าถึงเลือก KP ADvance</h2>
          <p className="section-subtitle">
            เราออกแบบระบบแบบเข้าใจหน้างานจริง ไม่ใช่แค่ขายอุปกรณ์ แต่สร้างระบบที่ใช้งานได้ยาวและดูแลได้จริง
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustPoints.map((point, idx) => (
            <Reveal key={point.title} delay={idx * 130}>
              <article className="glass-card h-full transition hover:-translate-y-2 hover:border-leaf/45">
                <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-leaf to-mist" />
                <h3 className="text-xl text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{point.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrapper pb-12 md:pb-16">
        <Reveal className="glass-card relative overflow-hidden bg-gradient-to-br from-white to-mist p-8 md:p-12">
          <div className="absolute -right-16 -top-16 h-40 w-40 animate-float-slow rounded-full bg-leaf/20 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-44 w-44 animate-float-slow rounded-full bg-leaf/15 blur-2xl [animation-delay:600ms]" />

          <p className="text-xs uppercase tracking-[0.2em] text-leaf">
            ให้บริการทั่วกรุงเทพฯ และปริมณฑล
          </p>
          <h2 className="mt-3 text-balance text-3xl text-ink md:text-4xl">
            ปรึกษาฟรีก่อนเริ่มงานจริง
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/75 md:text-base">
            รองรับบ้านพักอาศัย ร้านค้า ออฟฟิศ และโรงงานอุตสาหกรรม พร้อมออกแบบระบบให้เหมาะกับหน้างาน
            งบประมาณ และการใช้งานจริงของแต่ละพื้นที่
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="cta-btn">
              คุยกับทีมงาน
            </Link>
            <a
              href="tel:0936942456"
              className="inline-flex items-center justify-center rounded-full border border-leaf/45 bg-white px-6 py-3 font-display text-sm font-semibold tracking-wide text-ink transition hover:border-moss hover:text-moss"
            >
              โทร 093-694-2456
            </a>
          </div>
        </Reveal>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceSchema) }}
      />
    </div>
  );
}
