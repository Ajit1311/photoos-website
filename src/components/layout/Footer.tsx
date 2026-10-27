import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "AI Features", href: "/#ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare Plans", href: "/pricing/compare" },
];

const companyLinks = [
  { label: "About PhotoOS", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in";

  return (
    <footer className="bg-[#0A3F61] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              aria-label="PhotoOS home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo/photoos-footer-logo-white.png"
                alt="PhotoOS"
                width={512}
                height={128}
                className="h-auto w-[190px] object-contain"
                priority
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              AI-powered photography management for modern studios,
              photographers and creative teams.
            </p>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/40">
              Manage clients, projects, events, galleries, collaboration and
              photo delivery in one connected workspace.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Product
            </h3>

            <nav
              aria-label="Product"
              className="mt-5 flex flex-col gap-3 text-sm"
            >
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/60 transition hover:translate-x-1 hover:text-[#EF8619]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h3>

            <nav
              aria-label="Company"
              className="mt-5 flex flex-col gap-3 text-sm"
            >
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/60 transition hover:translate-x-1 hover:text-[#EF8619]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* GET STARTED */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Get Started
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`${appUrl}/login`}
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#EF8619] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0A3F61]"
              >
                Login
              </a>

              <Link
                href="/pricing"
                className="text-sm text-white/60 transition hover:translate-x-1 hover:text-[#EF8619]"
              >
                Explore Plans
              </Link>

              <Link
                href="/contact"
                className="text-sm text-white/60 transition hover:translate-x-1 hover:text-[#EF8619]"
              >
                Talk to PhotoOS
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/40">
              © {new Date().getFullYear()} PhotoOS. All rights reserved.
            </p>

            <p className="text-white/35">
              AI-powered tools for modern photography businesses.
            </p>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
              Legal
            </h3>

            <div className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
