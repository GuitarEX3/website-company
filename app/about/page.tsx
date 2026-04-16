import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "รู้จักทีมงานผู้เชี่ยวชาญของ KP ADvance System และแนวคิดการทำงานด้านระบบความปลอดภัย",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "เกี่ยวกับเรา | KP ADvance System",
    description: "ทีมผู้เชี่ยวชาญด้าน CCTV, Access Control, Smart Home และระบบเครือข่าย",
    url: "/about",
    images: [siteConfig.ogImage]
  },
  twitter: {
    title: "เกี่ยวกับเรา | KP ADvance System",
    description: "ทีมผู้เชี่ยวชาญด้าน CCTV, Access Control, Smart Home และระบบเครือข่าย",
    images: [siteConfig.ogImage]
  }
};

export default function AboutPage() {
  return (
    <div className="wrapper py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-leaf">Our Team</p>
        <h1 className="section-title mt-2">ทีมผู้เชี่ยวชาญของ KP ADvance</h1>
        <p className="section-subtitle">
          ทีมงานของเราผสานความรู้ด้านเทคนิคและประสบการณ์ภาคสนาม เพื่อให้ทุกโครงการปลอดภัยและใช้งานได้ลื่นไหลระยะยาว
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member, idx) => (
          <Reveal key={member.name} delay={idx * 150}>
            <article
              className={`glass-card h-full text-center transition hover:-translate-y-2 ${
                member.featured ? "border-leaf/70 bg-leaf/5" : ""
              }`}
            >
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-leaf/60">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <h2 className="mt-5 text-xl text-ink">{member.name}</h2>
              <p className="mt-2 text-sm font-semibold text-leaf">{member.role}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 glass-card border-leaf/30">
        <h2 className="text-2xl text-ink md:text-3xl">แนวคิดการทำงาน</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
          เราเชื่อว่าระบบความปลอดภัยที่ดีต้องสวย เป็นระเบียบ และใช้งานง่าย ทีมของเราจึงให้ความสำคัญทั้งคุณภาพภาพจากกล้อง
          โครงข่ายที่เสถียร และการบริการหลังติดตั้ง เพื่อให้เจ้าของบ้านหรือเจ้าของกิจการมั่นใจได้ทุกวัน
        </p>
      </Reveal>
    </div>
  );
}
