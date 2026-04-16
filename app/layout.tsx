import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ | KP ADvance System",
    template: "%s | KP ADvance System"
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "ติดตั้งกล้องวงจรปิด",
    "CCTV",
    "Access Control",
    "Smart Home",
    "วางระบบ Network",
    "ติดตั้งกล้องวงจรปิด กรุงเทพ"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: siteConfig.shortName,
    title: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ | KP ADvance System",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "KP ADvance System - บริการติดตั้งระบบความปลอดภัย"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ติดตั้งกล้องวงจรปิด CCTV กรุงเทพ | KP ADvance System",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    sameAs: [...siteConfig.socials],
    areaServed: "Bangkok Metropolitan Region",
    priceRange: "$$"
  };

  return (
    <html lang="th">
      <body
        className={`${kanit.variable} ${sarabun.variable} font-body text-ink antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 animate-aurora bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(22,163,74,0.14),transparent_42%),radial-gradient(circle_at_55%_85%,rgba(255,255,255,0.95),transparent_35%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
