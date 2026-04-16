import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrapper flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-leaf">404</p>
      <h1 className="mt-3 text-4xl text-ink md:text-5xl">ไม่พบหน้าที่คุณต้องการ</h1>
      <p className="mt-4 max-w-md text-sm text-ink/70">
        ลองกลับไปหน้าแรกเพื่อเลือกเมนูใหม่อีกครั้ง
      </p>
      <Link href="/" className="cta-btn mt-8">
        กลับหน้าแรก
      </Link>
    </div>
  );
}
