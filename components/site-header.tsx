"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/services", label: "บริการ" },
  { href: "/articles", label: "บทความ" },
  { href: "/contact", label: "ติดต่อ" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-leaf/20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-wide text-ink transition hover:text-moss"
          onClick={() => setMenuOpen(false)}
        >
          KP<span className="text-moss">ADvance</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center rounded-xl border border-leaf/30 bg-white px-3 py-2 text-sm text-ink transition hover:border-leaf md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          เมนู
        </button>

        <nav
          className={`${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 md:translate-y-0 md:opacity-100"
          } absolute left-4 right-4 top-[78px] rounded-2xl border border-leaf/20 bg-white p-4 shadow-xl transition duration-300 md:static md:flex md:w-auto md:items-center md:gap-1 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2 font-display text-sm tracking-wide transition ${
                  active
                    ? "bg-moss text-white"
                    : "text-ink/85 hover:bg-leaf/15 hover:text-moss"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
