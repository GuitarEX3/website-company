import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-leaf/20 bg-mist/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">
            KP<span className="text-moss">ADvance</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-ink/75">
            ระบบความปลอดภัยและโครงสร้างเครือข่ายครบวงจร พร้อมทีมเทคนิคดูแลตั้งแต่สำรวจจนถึงบริการหลังติดตั้ง
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-ink">เมนู</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ink/75">
            <Link href="/" className="hover:text-moss">
              หน้าแรก
            </Link>
            <Link href="/about" className="hover:text-moss">
              เกี่ยวกับเรา
            </Link>
            <Link href="/services" className="hover:text-moss">
              บริการ
            </Link>
            <Link href="/articles" className="hover:text-moss">
              บทความ
            </Link>
            <Link href="/contact" className="hover:text-moss">
              ติดต่อ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-ink">ติดต่อ</h3>
          <div className="mt-3 space-y-2 text-sm text-ink/75">
            <p>โทร: 093-694-2456</p>
            <p>ที่อยู่: 333 หมู่ 4 ถ.กำแพงเพชร 6 กรุงเทพฯ</p>
            <p>บริการเร่งด่วนทุกวัน</p>
          </div>
        </div>
      </div>
      <div className="border-t border-leaf/20 py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} KP ADvance System Co., Ltd.
      </div>
    </footer>
  );
}
