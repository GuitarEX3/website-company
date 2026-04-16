import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { products, services } from "@/data/site-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "บริการและสินค้า",
  description:
    "บริการติดตั้ง CCTV, Maintenance, Access Control, Smart Home, Network Solution และสินค้าแนะนำสำหรับระบบความปลอดภัย",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "บริการและสินค้า | KP ADvance System",
    description:
      "รวมบริการติดตั้งและอุปกรณ์ระบบความปลอดภัยครบวงจรสำหรับบ้านพักอาศัยและธุรกิจ",
    url: "/services",
    images: [siteConfig.ogImage]
  },
  twitter: {
    title: "บริการและสินค้า | KP ADvance System",
    description:
      "รวมบริการติดตั้งและอุปกรณ์ระบบความปลอดภัยครบวงจรสำหรับบ้านพักอาศัยและธุรกิจ",
    images: [siteConfig.ogImage]
  }
};

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      description: service.description
    }))
  };

  return (
    <div className="wrapper py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-leaf">Services & Products</p>
        <h1 className="section-title mt-2">บริการและสินค้า</h1>
        <p className="section-subtitle">
          โซลูชันครบตั้งแต่ติดตั้งระบบใหม่ อัปเกรดระบบเดิม ไปจนถึงอุปกรณ์เสริมที่ช่วยยกระดับความปลอดภัยของพื้นที่
        </p>
      </Reveal>

      <section className="mt-10">
        <h2 className="text-2xl text-ink md:text-3xl">บริการหลัก</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.name} delay={idx * 110}>
              <article className="glass-card h-full transition hover:-translate-y-2 hover:border-leaf/45">
                <h3 className="text-xl text-ink">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl text-ink md:text-3xl">สินค้าแนะนำ</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <Reveal key={product.name} delay={idx * 90}>
              <article className="group glass-card h-full overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden border-b border-leaf/20 bg-mist/40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5 transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-ink">{product.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
    </div>
  );
}
