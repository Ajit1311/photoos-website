"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="PhotoOS home"
          className="flex h-full shrink-0 items-center justify-center"
        >
          <Image
            src="/logo/photoos-logo-v2.png"
            alt="PhotoOS - AI-Powered Photography Management Platform"
            width={190}
            height={60}
            priority
            className="block h-auto w-[155px] object-contain sm:w-[175px] lg:w-[190px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#0A3F61]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in"}/login`}
            className="rounded-full bg-[#0A3F61] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0A3F61]/15 transition hover:-translate-y-0.5 hover:bg-[#3495A1]"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[#0A3F61] lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-4">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in"}/login`}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#0A3F61] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
