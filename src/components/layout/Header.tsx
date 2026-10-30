"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "AI Face Search", href: "/#ai" },
  { label: "Corporate", href: "/corporate" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in"}/login`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="PhotoOS home"
          className="group flex h-full shrink-0 items-center justify-center transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/logo/photoos-logo-v2.png"
            alt="PhotoOS - AI-Powered Photography Management Platform"
            width={190}
            height={60}
            priority
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 170px, 185px"
            quality={85}
            className="block h-auto w-[150px] object-contain sm:w-[170px] lg:w-[185px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/60 bg-slate-50/70 p-1.5 backdrop-blur-md lg:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : !item.href.includes("#") && pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#0A3F61] shadow-xs font-bold"
                    : "text-slate-600 hover:text-[#0A3F61] hover:bg-white/60"
                }`}
              >
                {item.label}
                {item.label === "AI Face Search" && (
                  <span className="ml-1.5 inline-flex items-center gap-0.5 rounded-full bg-[#EF8619]/15 px-1.5 py-0.5 text-[10px] font-bold text-[#EF8619]">
                    <Sparkles size={9} />
                    AI
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-700 transition hover:text-[#0A3F61]"
          >
            Studio Login
          </Link>

          <Link
            href="/pricing"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#0A3F61] to-[#125884] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#0A3F61]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0A3F61]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start Free
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 text-[#0A3F61] shadow-xs transition hover:bg-slate-50 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/80 bg-white/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100/70 hover:text-[#0A3F61]"
                >
                  <span>{item.label}</span>
                  {item.label === "AI Face Search" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#EF8619]/15 px-2 py-0.5 text-xs font-bold text-[#EF8619]">
                      <Sparkles size={11} /> AI
                    </span>
                  )}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                <Link
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-xs"
                >
                  Studio Login
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0A3F61] to-[#3495A1] px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-[#0A3F61]/20"
                >
                  Start Free Trial
                  <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
