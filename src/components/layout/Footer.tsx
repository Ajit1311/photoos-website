import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, ArrowRight, Mail, MapPin } from "lucide-react";

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

            {/* Social Media Links */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Connect With Us
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://wa.me/919699599142?text=Hi%20PhotoOS%2C%20I%20want%20to%20know%20more%20about%20your%20photography%20studio%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with PhotoOS Software Pvt Ltd on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 transition duration-200 hover:scale-110 hover:bg-emerald-500 hover:text-white shadow-md shadow-emerald-500/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/photoos_software_pvt_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PhotoOS Software Pvt Ltd on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30 transition duration-200 hover:scale-110 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white shadow-md shadow-pink-500/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/photoospvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PhotoOS Software Pvt Ltd on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 transition duration-200 hover:scale-110 hover:bg-blue-600 hover:text-white shadow-md shadow-blue-500/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/photoos-software-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PhotoOS Software Pvt Ltd on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30 transition duration-200 hover:scale-110 hover:bg-[#0A66C2] hover:text-white shadow-md shadow-sky-500/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
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

            <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Support & Inquiries
              </p>
              <a
                href="mailto:support@photoos.in"
                className="flex items-center gap-2 text-xs font-medium text-slate-200 transition hover:text-[#EF8619]"
              >
                <Mail size={13} className="text-[#EF8619]" />
                support@photoos.in
              </a>
              <a
                href="https://wa.me/919699599142?text=Hi%20PhotoOS%2C%20I%20want%20to%20know%20more%20about%20your%20photography%20studio%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                +91 9699599142 (WhatsApp)
              </a>
              <div className="pt-2 text-xs text-slate-400 flex items-start gap-1.5">
                <MapPin size={13} className="text-[#3495A1] shrink-0 mt-0.5" />
                <span>Gadhinglaj, Kolhapur, Maharashtra 416502</span>
              </div>
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
              © {new Date().getFullYear()} PhotoOS Software Pvt Ltd. All rights reserved.
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
