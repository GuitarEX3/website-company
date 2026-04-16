export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  keywords: string[];
};

export const articles: ArticleMeta[] = [
  {
    slug: "choose-cctv-system",
    title: "วิธีเลือกกล้องวงจรปิดให้เหมาะกับบ้านและร้านค้าในปี 2026",
    description:
      "คู่มือแบบละเอียดสำหรับเจ้าของบ้านและเจ้าของธุรกิจ ตั้งแต่การเลือกประเภทกล้อง เลนส์ ความละเอียด ไปจนถึงงบประมาณที่ควรเตรียม",
    category: "คู่มือ CCTV",
    readTime: "อ่าน 8 นาที",
    publishedAt: "2026-04-15",
    keywords: [
      "ติดตั้งกล้องวงจรปิด",
      "กล้องวงจรปิดบ้าน",
      "กล้องวงจรปิดร้านค้า",
      "เลือกกล้อง cctv",
      "ราคา cctv"
    ]
  }
];

