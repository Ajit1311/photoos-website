import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, ArrowRight, Mail } from "lucide-react";

const productLinks = [
  { label: "Smart Galleries", href: "/#features" },
  { label: "AI Face Search", href: "/#ai" },
  { label: "Client Collaboration", href: "/#collaboration" },
  { label: "Freelancer Marketplace", href: "/#marketplace" },
  { label: "Pricing & Plans", href: "/pricing" },
  { label: "Compare Plans", href: "/pricing/compare" },
];

const companyLinks = [
  { label: "About PhotoOS", href: "/about" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Freelancer Portal", href: "/freelancer" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Legal Compliance", href: "/legal-compliance" },
];

export default function Footer() {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in";

  return (
    <footer className="relative overflow-hidden bg-[#061826] text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#3495A1]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-0 h-96 w-96 rounded-full bg-[#EF8619]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="PhotoOS home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo/photoos-footer-logo-white.png"
                alt="PhotoOS - AI Photography Studio Management Software"
                width={512}
                height={128}
                className="h-auto w-[180px] object-contain"
                priority
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              The AI-powered photography studio management platform. Client
              galleries, AI face matching, photo selection, team collaboration,
              and seamless delivery in one unified workspace.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                <ShieldCheck size={14} className="text-[#3495A1]" />
                AES-256 Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                <Sparkles size={14} className="text-[#EF8619]" />
                Neural AI Search
              </span>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8619]">
              Product
            </h3>

            <nav aria-label="Product links" className="mt-5 flex flex-col gap-3 text-sm">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8619]">
              Company
            </h3>

            <nav aria-label="Company links" className="mt-5 flex flex-col gap-3 text-sm">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition duration-200 hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Support & Inquiries
              </p>
              <a
                href="mailto:support@photoos.in"
                className="mt-1.5 inline-flex items-center gap-2 text-xs font-medium text-slate-200 transition hover:text-[#EF8619]"
              >
                <Mail size={13} className="text-[#EF8619]" />
                support@photoos.in
              </a>
            </div>
          </div>

          {/* LEGAL & ACCESS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8619]">
              Studio Access
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`${appUrl}/login`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF8619] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#EF8619]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0A3F61]"
              >
                Sign In to Studio
                <ArrowRight size={15} />
              </a>

              <Link
                href="/pricing"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Start Free Trial
              </Link>
            </div>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Legal
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-xs">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} PhotoOS Technologies. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All systems operational • Cloud AI v2.4</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
