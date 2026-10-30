import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact PhotoOS | Studio Sales, Product Demo & Support",
  description:
    "Get in touch with the PhotoOS team for product demos, studio onboarding, sales inquiries, partnerships, or customer support via support@photoos.in.",
  keywords: [
    "PhotoOS contact",
    "contact PhotoOS support",
    "book photography software demo",
    "photography studio CRM support",
    "AI photography support",
    "support@photoos.in",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact PhotoOS | Studio Sales, Product Demo & Support",
    description:
      "Talk to PhotoOS about photography studio management, AI face search, client galleries, and business solutions.",
    url: "/contact",
    siteName: "PhotoOS",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "Contact PhotoOS Support & Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PhotoOS | Studio Sales, Product Demo & Support",
    description:
      "Talk to PhotoOS about photography studio management, AI face search, and client galleries.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

const enquiryTypes = [
  {
    icon: MessageCircle,
    title: "Product Enquiry",
    description:
      "Learn how PhotoOS can help you manage your studio, clients, galleries and workflow.",
  },
  {
    icon: Sparkles,
    title: "Sales & Plans",
    description:
      "Need help choosing a plan or understanding PhotoOS features and pricing?",
  },
  {
    icon: ShieldCheck,
    title: "Support",
    description:
      "Already using PhotoOS? Get help with your account, workspace or product experience.",
  },
  {
    icon: ArrowRight,
    title: "Partnership",
    description:
      "Interested in collaborating with PhotoOS or building a technology partnership?",
  },
];

const quickPoints = [
  "Tell us what you need help with",
  "Our team will review your enquiry",
  "We will get back to you with the next steps",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#102a43]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7fafc]">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#3495A1]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#EF8619]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3495A1]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0A3F61] shadow-sm">
              <Sparkles size={16} className="text-[#EF8619]" />
              Let&apos;s talk photography
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl lg:text-6xl">
              Let&apos;s build a better
              <span className="block bg-gradient-to-r from-[#0A3F61] via-[#1f70b8] to-[#3495A1] bg-clip-text text-transparent">
                photography workflow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you are exploring PhotoOS, setting up your studio,
              looking for support or interested in partnering with us, our team
              is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT EXPERIENCE */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF8619]">
              Contact PhotoOS
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#0A3F61] sm:text-4xl">
              Tell us what you&apos;re working on.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From studio management and client galleries to AI-powered
              photography workflows, we can help you understand where PhotoOS
              fits into your business.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/919699599142?text=Hi%20PhotoOS%2C%20I%20want%20to%20know%20more%20about%20your%20photography%20studio%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">
                    WhatsApp & Call
                  </span>
                  <span className="mt-1 block font-bold text-slate-900">
                    +91 9699599142
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="ml-auto text-emerald-400 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                />
              </a>

              <a
                href="mailto:support@photoos.in"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#3495A1]/30 hover:shadow-xl hover:shadow-[#0A3F61]/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0A3F61]/5 text-[#0A3F61]">
                  <Mail size={21} />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </span>
                  <span className="mt-1 block font-semibold text-[#0A3F61]">
                    support@photoos.in
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#3495A1]"
                />
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0A3F61]/5 text-[#0A3F61]">
                  <MapPin size={21} />
                </span>

                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Office Address
                  </span>
                  <span className="mt-1 block font-semibold text-[#0A3F61] leading-relaxed">
                    PhotoOS Software Pvt Ltd<br />
                    Gadhinglaj, Kolhapur, Maharashtra 416502
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3495A1]/10 text-[#3495A1]">
                  <Clock3 size={21} />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Response
                  </span>
                  <span className="mt-1 block font-semibold text-[#0A3F61]">
                    Quick response via WhatsApp & Email
                  </span>
                </span>
              </div>

              {/* Social Channels */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Follow PhotoOS Software Pvt Ltd
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/photoos_software_pvt_ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-pink-200 bg-pink-50/60 px-3.5 py-2 text-xs font-bold text-pink-700 transition hover:bg-pink-100"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/photoospvtltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50/60 px-3.5 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>

                  <a
                    href="https://www.linkedin.com/company/photoos-software-pvt-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/60 px-3.5 py-2 text-xs font-bold text-sky-700 transition hover:bg-sky-100"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#0A3F61] via-[#0f5b82] to-[#3495A1] p-7 text-white shadow-xl shadow-[#0A3F61]/15">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    Need help?
                  </p>
                  <p className="font-bold">Start with a message</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/75">
                Share a few details about your requirement and our team can
                guide you towards the right PhotoOS solution.
              </p>

              <div className="mt-6 space-y-3">
                {quickPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#EF8619]"
                    />
                    <span className="text-sm text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <ContactForm />
        </div>
      </section>

      {/* ENQUIRY TYPES */}
      <section className="bg-[#f7fafc] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF8619]">
              How can we help?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#0A3F61] sm:text-4xl">
              Start with what you need.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose the conversation that best matches your requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {enquiryTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3495A1]/30 hover:shadow-xl hover:shadow-[#0A3F61]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3F61]/5 text-[#0A3F61] transition group-hover:bg-[#0A3F61] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0A3F61]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0A3F61] via-[#145b80] to-[#3495A1] px-7 py-12 text-center shadow-2xl shadow-[#0A3F61]/15 sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#EF8619]">
            <Sparkles size={24} />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
            Ready to explore PhotoOS?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Explore PhotoOS plans and discover tools built to simplify the
            modern photography business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0A3F61] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore Pricing
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
