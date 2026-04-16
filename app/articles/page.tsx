import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "บทความ",
  description:
    "รวมบทความความรู้ด้านกล้องวงจรปิด CCTV, Access Control และระบบความปลอดภัยสำหรับบ้านและธุรกิจ",
  alternates: {
    canonical: "/articles"
  },
  openGraph: {
    title: "บทความความรู้ระบบความปลอดภัย | KP ADvance System",
    description:
      "อ่านบทความอัปเดตเกี่ยวกับการเลือกกล้องวงจรปิดและการออกแบบระบบรักษาความปลอดภัย",
    url: "/articles",
    images: [siteConfig.ogImage]
  },
  twitter: {
    title: "บทความความรู้ระบบความปลอดภัย | KP ADvance System",
    description:
      "อ่านบทความอัปเดตเกี่ยวกับการเลือกกล้องวงจรปิดและการออกแบบระบบรักษาความปลอดภัย",
    images: [siteConfig.ogImage]
  }
};

export default function ArticlesPage() {
  return (
    <div className="wrapper py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-leaf">Knowledge Center</p>
        <h1 className="section-title mt-2">บทความความรู้ระบบความปลอดภัย</h1>
        <p className="section-subtitle">
          เนื้อหาเชิงลึกที่ช่วยให้เจ้าของบ้านและเจ้าของธุรกิจตัดสินใจเลือกอุปกรณ์และการติดตั้งได้คุ้มค่ามากขึ้น
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6">
        {articles.map((article, idx) => (
          <Reveal key={article.slug} delay={idx * 120}>
            <article className="glass-card transition hover:-translate-y-1 hover:border-leaf/45">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-leaf/15 px-3 py-1 font-semibold text-moss">
                  {article.category}
                </span>
                <span className="text-ink/60">{article.readTime}</span>
                <span className="text-ink/60">เผยแพร่ {article.publishedAt}</span>
              </div>
              <h2 className="mt-3 text-2xl text-ink">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{article.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-leaf/30 bg-white px-3 py-1 text-xs text-ink/70"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <Link href={`/articles/${article.slug}`} className="cta-btn mt-6">
                อ่านบทความนี้
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

