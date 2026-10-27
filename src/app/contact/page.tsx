import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
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
  title: "Contact PhotoOS | AI-Powered Photography Management",
  description:
    "Get in touch with PhotoOS for product enquiries, sales, support, partnerships and photography business solutions.",
  keywords: [
    "PhotoOS contact",
    "photography software support",
    "photography CRM support",
    "AI photography software",
    "photography studio management",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact PhotoOS",
    description:
      "Talk to PhotoOS about photography studio management, AI tools, client galleries and business solutions.",
    url: "/contact",
    siteName: "PhotoOS",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS - AI-Powered Photography Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PhotoOS | AI-Powered Photography Management",
    description:
      "Talk to PhotoOS about photography studio management, AI tools, client galleries and business solutions.",
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
                href="mailto:hello@photoos.ai"
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
                    hello@photoos.ai
                  </span>
                </span>

                <ArrowRight
                  size={18}
                  className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#3495A1]"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3495A1]/10 text-[#3495A1]">
                  <Clock3 size={21} />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Response
                  </span>
                  <span className="mt-1 block font-semibold text-[#0A3F61]">
                    We&apos;ll get back to you as soon as possible
                  </span>
                </span>
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
