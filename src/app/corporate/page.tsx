import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  LockKeyhole,
  QrCode,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PhotoOS for Corporate Offices & Enterprises | AI Face Matching for Company Events",
  description:
    "Instant AI face recognition and branded reception standee QRs for corporate townhalls, annual days, offsites, and celebrations. Employees find their candid photos in seconds.",
  keywords: [
    "corporate event photo sharing",
    "AI face matching for company events",
    "corporate office standee QR",
    "office townhall photo delivery",
    "employee engagement photo app",
    "DPDP compliant photo platform",
  ],
  alternates: {
    canonical: "/corporate",
  },
};

const corporateEvents = [
  {
    title: "Annual Day & Awards Night",
    description: "Celebrate milestones and excellence awards with instant candid delivery for hundreds of employees.",
    icon: Sparkles,
  },
  {
    title: "Executive Townhalls & All-Hands",
    description: "Capture leadership announcements and team engagement without bulky email attachments.",
    icon: Building2,
  },
  {
    title: "Offsites & Team Retreats",
    description: "Outdoor adventure and bonding moments categorized and delivered privately to each attendee.",
    icon: Users,
  },
  {
    title: "Festive Office Celebrations",
    description: "Diwali ethnic days, Christmas parties, and cultural competitions with high-res photo booths.",
    icon: CalendarDays,
  },
];

const steps = [
  {
    step: "01",
    title: "Create Event & Upload",
    description: "Upload your event photographer's DSLR captures or phone albums. AI automatically indexes all faces in the background.",
  },
  {
    step: "02",
    title: "Download Standee QR",
    description: "Generate a branded standee poster with your company logo and event name. Place it at the reception or cafeteria.",
  },
  {
    step: "03",
    title: "Employees Get Their Photos",
    description: "Employees scan the QR on their phone, take a 2-second selfie, and their personal candid photos appear instantly.",
  },
];

export default function CorporatePage() {
  const corpLoginUrl = "https://corp.photoos.in/login";

  return (
    <>
      <Header />

      <main className="bg-white text-slate-900 selection:bg-[#0A3F61] selection:text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#EF8619]" />
              Enterprise Workplace Solution &bull; 7-Day Free Trial
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Instant AI Face Matching For{" "}
              <span className="text-[#0A3F61]">
                Corporate Office Events
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              No more heavy Google Drive links or endless photographer emails. Give your employees an instant, delightful photo experience: Scan the reception standee QR, snap a quick selfie, and get candid event photos in seconds.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={corpLoginUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0A3F61] px-8 py-4 text-sm font-bold text-white shadow-md shadow-[#0A3F61]/20 hover:bg-[#072c44] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Corporate Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
              >
                How It Works
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ✓ 7-Day Free Trial &bull; No Credit Card Required &bull; DPDP Act 2023 Compliant
            </p>

            {/* Value Highlights Grid */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <ScanFace className="h-6 w-6 text-[#3495A1] mb-2" />
                <h3 className="text-sm font-bold text-slate-900">AI Face Search</h3>
                <p className="text-xs text-slate-500 mt-1">Sub-second biometric photo matching</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <QrCode className="h-6 w-6 text-[#0A3F61] mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Standee QR</h3>
                <p className="text-xs text-slate-500 mt-1">Branded posters for office reception</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <Clock className="h-6 w-6 text-[#EF8619] mb-2" />
                <h3 className="text-sm font-bold text-slate-900">7-Day Free Trial</h3>
                <p className="text-xs text-slate-500 mt-1">Instant setup with work email</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <ShieldCheck className="h-6 w-6 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-slate-900">DPDP Act 2023</h3>
                <p className="text-xs text-slate-500 mt-1">Enterprise privacy & data ownership</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem vs The PhotoOS Way */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A3F61] border border-sky-100">
                HR & Internal Comms Solution
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                The Smarter Way to Share Workplace Event Memories
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Say goodbye to unorganized shared drives that no one looks at.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Old Way */}
              <div className="rounded-3xl border border-red-200 bg-red-50/40 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    The Old Problem
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Google Drive & Manual Searching
                  </h3>
                  <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Photographer drops 3,000 raw unorganized photos in a 20 GB Drive folder.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>HR sends a company-wide email link; employees must scroll endlessly.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Most employees give up without ever finding the 2 photos they were in.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>Missed opportunity for employee engagement and team pride.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PhotoOS Way */}
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    The PhotoOS Enterprise Way
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    AI Face Matching & Standee QR
                  </h3>
                  <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Upload photos once; AI indexes all employee faces in under a minute.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Download a high-res Standee QR poster and place it in the office lobby.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Employees scan QR, take a selfie, and get their personal gallery in 3 seconds.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% DPDP Act 2023 compliant: strict biometric privacy & enterprise data safety.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-slate-50/70 border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900">
                How It Works in 3 Simple Steps
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Zero app download required for employees. Operates seamlessly on iOS and Android browsers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0A3F61] border border-sky-100 font-extrabold text-lg mb-5">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Event Categories */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Perfect For All Your Office Celebrations
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                From 50-person department offsites to 5,000-person enterprise summits.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateEvents.map((ev) => {
                const Icon = ev.icon;
                return (
                  <div key={ev.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#0A3F61] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{ev.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security & DPDP Compliance Banner */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              DPDP Act 2023 & Enterprise Compliance
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Strict Biometric Privacy & Employee Data Protection
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We never sell biometric data or train public models. Employee face descriptors are encrypted with AES-256 and used exclusively for personal event photo matching.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                100% Company Media Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Encrypted Biometric Vectors
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Instant Employee Deletion Rights
              </span>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 text-center">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Upgrade Your Next Corporate Gathering
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Start your 7-day complimentary corporate trial in under 2 minutes. No credit card required.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={corpLoginUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[#0A3F61] px-9 py-4 text-sm font-bold text-white shadow-md shadow-[#0A3F61]/20 hover:bg-[#072c44] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Corporate Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Need custom enterprise SSO or SLA? Contact{" "}
              <a href="mailto:team@photoos.in" className="text-[#0A3F61] font-semibold underline">
                team@photoos.in
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
