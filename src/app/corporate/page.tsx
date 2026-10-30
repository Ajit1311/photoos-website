"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Download,
  Lock,
  LockKeyhole,
  QrCode,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Play,
  Heart,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const corporateEvents = [
  {
    title: "Annual Day & Awards Gala",
    description: "Celebrate corporate milestones and excellence awards with instant, private candid delivery for hundreds of employees.",
    tag: "High Attendance",
    icon: Sparkles,
  },
  {
    title: "Executive Townhalls & All-Hands",
    description: "Capture leadership keynotes and team Q&As. Zero email drive links — employees scan and get their photos in seconds.",
    tag: "Leadership",
    icon: Building2,
  },
  {
    title: "Offsites & Team Retreats",
    description: "Team bonding, sports leagues, and outdoor adventures categorized into instant personal galleries for each member.",
    tag: "Team Building",
    icon: Users,
  },
  {
    title: "Festive Office Celebrations",
    description: "Diwali ethnic days, Christmas parties, and cultural competitions with instant AI-powered reception photo kiosks.",
    tag: "Cultural",
    icon: CalendarDays,
  },
];

const features = [
  {
    title: "Sub-Second AI Face Search",
    description: "Employees take a quick 2-second selfie to unlock all their event photos in under 0.58 seconds. No scrolling through 2,000+ files.",
    icon: ScanFace,
    badge: "0.58s Match Speed",
  },
  {
    title: "Reception Standee QR Posters",
    description: "Generate print-ready A4 & A3 standee posters with your company branding in one click. Place them at receptions, stage backdrops, or cafeterias.",
    icon: QrCode,
    badge: "1-Click PDF & PNG",
  },
  {
    title: "DPDP Act 2023 Biometric Privacy",
    description: "Built strictly adhering to India's Digital Personal Data Protection Act 2023. Zero permanent biometric storage, end-to-end encrypted.",
    icon: ShieldCheck,
    badge: "Enterprise Compliant",
  },
  {
    title: "Original High-Res Downloads",
    description: "Preserve raw DSLR clarity without WhatsApp compression. Employees download print-quality photos directly to their camera roll.",
    icon: Download,
    badge: "Lossless Quality",
  },
  {
    title: "Zero IT Installation Required",
    description: "Runs instantly in any modern web browser. No software installs, mobile apps, or enterprise firewall exceptions needed.",
    icon: Zap,
    badge: "Browser Native",
  },
  {
    title: "Private & Secure Access",
    description: "Role-based access for HR and People Ops teams. Restrict downloads, moderate galleries, or password-protect sensitive townhalls.",
    icon: LockKeyhole,
    badge: "Admin Controlled",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Create Event & Upload DSLR Photos",
    description: "Your official event photographer uploads high-resolution event captures. PhotoOS automatically indexes every face with proprietary AI.",
  },
  {
    step: "02",
    title: "Display Reception Standee QR Poster",
    description: "Generate and place custom-branded standee posters at reception desks, stage exits, dinner counters, or event entrances.",
  },
  {
    step: "03",
    title: "Employees Scan & Receive Photos",
    description: "Employees scan the QR on their smartphone, snap a quick selfie, and instantly view and download their personal photo collection.",
  },
];

export default function CorporatePage() {
  const corpLoginUrl = "https://app.photoos.in/login?mode=corporate";

  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#3495A1] selection:text-white">
      <Header />

      <main>
        {/* ============================================================
            1. HERO SECTION (Dark Ambient Navy matching PhotoOS Home)
        ============================================================ */}
        <section className="relative overflow-hidden bg-[#061826] pt-12 pb-24 lg:pt-20 lg:pb-32 text-white">
          {/* Background Ambience & Glowing Orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#3495A1]/20 blur-[130px] animate-pulse-glow" />
            <div
              className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[#EF8619]/15 blur-[140px] animate-pulse-glow"
              style={{ animationDelay: "2.5s" }}
            />
            <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#0A3F61]/40 blur-[120px]" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061826]/40 via-transparent to-[#061826]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
              {/* LEFT: Copy & CTAs */}
              <div className="text-white lg:col-span-7 xl:col-span-6">
                {/* Brand Pill */}
                <div className="mb-6 inline-flex">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100 shadow-xl backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF8619] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF8619]" />
                    </span>
                    <span className="text-slate-200">Enterprise Workplace Solution</span>
                    <span className="hidden sm:inline-block text-[#3495A1]">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[#EF8619]">
                      <Sparkles size={13} /> 7-Day Free Trial
                    </span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[60px]">
                  Instant AI Face Matching For{" "}
                  <span className="block mt-1 bg-gradient-to-r from-[#EF8619] via-[#ffaa47] to-[#3495A1] bg-clip-text text-transparent">
                    Corporate Office Events.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
                  From annual awards and leadership townhalls to team offsites and festival days.
                  Generate branded reception Standee QRs, eliminate messy Google Drive links, and let employees discover their candid photos with a 2-second selfie.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <a
                    href={corpLoginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#EF8619] to-[#f4932b] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#EF8619]/25 transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#EF8619]/40 active:scale-[0.99]"
                  >
                    <span>Start Corporate Free Trial</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition duration-200 hover:bg-white/20 hover:text-white"
                  >
                    <span>See How It Works</span>
                  </a>
                </div>

                {/* Micro social proof bullets */}
                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#EF8619]" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3495A1]" />
                    <span>DPDP Act 2023 compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Instant setup in 60s</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: High-converting Visual Showcase Card */}
              <div className="lg:col-span-5 xl:col-span-6">
                <div className="relative mx-auto w-full max-w-lg">
                  {/* Outer Glowing Border Box */}
                  <div className="relative rounded-[32px] border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
                    {/* Header of Mockup */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3495A1] to-[#0A3F61] text-white">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">
                            PhotoOS Corporate Portal
                          </p>
                          <p className="text-[10px] text-slate-400">
                            corp.photoos.in &bull; Live Event Hub
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                        Live Standee QR Active
                      </span>
                    </div>

                    {/* Event Banner Card */}
                    <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#0A3F61] to-[#072438] p-5 border border-white/10 text-white">
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="font-semibold text-[#EF8619] uppercase tracking-wider text-[10px]">
                          Annual Excellence Awards 2026
                        </span>
                        <span>1,420 Photos Uploaded</span>
                      </div>
                      <h4 className="text-lg font-black tracking-tight">
                        Global Townhall & Celebration
                      </h4>
                      <p className="mt-1 text-xs text-slate-300">
                        Scan the reception standee to get your candid moments instantly.
                      </p>
                    </div>

                    {/* Standee QR & AI Selfie Preview Grid */}
                    <div className="mt-4 grid grid-cols-2 gap-3.5">
                      {/* Standee QR Mini Card */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-900 shadow-md">
                          <QrCode className="h-7 w-7 text-[#0A3F61]" />
                        </div>
                        <p className="mt-2 text-xs font-bold text-white">
                          Standee QR Code
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Print-ready for Reception
                        </p>
                      </div>

                      {/* AI Face Match Result Mini Card */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <ScanFace className="h-7 w-7" />
                        </div>
                        <p className="mt-2 text-xs font-bold text-white">
                          AI Face Matching
                        </p>
                        <p className="mt-0.5 text-[10px] text-emerald-400 font-semibold">
                          18 Candid Photos Matched
                        </p>
                      </div>
                    </div>

                    {/* Employee Testimonial Snippet */}
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs text-slate-300 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Average employee search time: <strong className="text-white">0.58s</strong></span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#EF8619]">
                        98.4% Match Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. STATS & SOCIAL PROOF TICKER
        ============================================================ */}
        <section className="border-y border-slate-200/80 bg-slate-50 py-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0A3F61]">0.58s</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sub-second Face Search
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#EF8619]">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  DPDP Act 2023 Compliant
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0A3F61]">1-Click</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Branded Reception Standee
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-emerald-600">7 Days</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Complimentary Free Trial
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. CORPORATE USE CASES (BENTO / CARDS)
        ============================================================ */}
        <section id="use-cases" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EF8619]/25 bg-[#EF8619]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EF8619]">
                <Sparkles size={13} />
                Tailored For Modern Workplaces
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl lg:text-[48px] lg:leading-[1.1]">
                Every company event, beautifully captured & delivered.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                Stop emailing 5GB Google Drive links that expire or force employees to dig through thousands of photos.
                PhotoOS brings enterprise-grade AI face matching to every office gathering.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {corporateEvents.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#0A3F61]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#0A3F61] group-hover:bg-[#0A3F61] group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase text-slate-600">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A3F61] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            4. HOW IT WORKS (3 Simple Steps)
        ============================================================ */}
        <section id="how-it-works" className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF8619]">
                Zero Friction Workflow
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-4xl lg:text-5xl">
                How PhotoOS Works For Your Office
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Three simple steps from photographer upload to employees delighting in their memories.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {workflowSteps.map((s) => (
                <div
                  key={s.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-black text-[#EF8619]/30">
                      {s.step}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0A3F61]">
                    <span>Effortless & Instant</span>
                    <ChevronRight className="h-4 w-4 text-[#EF8619]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. CORE FEATURES BENTO GRID
        ============================================================ */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A3F61]">
                <ShieldCheck size={13} />
                Enterprise Architecture
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl">
                Engineered for security, speed, and privacy.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#0A3F61]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#0A3F61]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                        {f.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. DPDP ACT 2023 COMPLIANCE CALLOUT
        ============================================================ */}
        <section className="py-16 bg-[#061826] text-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 sm:p-12 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 mb-4">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Indian DPDP Act 2023 Compliant
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Employee biometrics are never permanently saved.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    The selfie uploaded by your employees is converted into a temporary mathematical facial vector solely for instantaneous matching and automatically discarded. No biometric data is stored or repurposed.
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={corpLoginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-[#061826] hover:bg-slate-100 transition-all shadow-xl"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. CALL TO ACTION SECTION (Matching PhotoOS standard CTA)
        ============================================================ */}
        <section className="relative overflow-hidden bg-[#061826] py-24 sm:py-32 text-center text-white">
          {/* Aurora Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-[#3495A1]/25 to-[#EF8619]/20 blur-[130px] animate-pulse-glow" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          </div>

          <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EF8619] to-[#3495A1] text-white shadow-xl shadow-[#EF8619]/30">
              <Sparkles size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Elevate your corporate office events with PhotoOS.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              Set up your enterprise corporate workspace in less than 2 minutes.
              Enjoy 7 days of complimentary access with unlimited employee face searches and standee posters.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center">
              <a
                href={corpLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#EF8619] to-[#ff9e3b] px-9 py-4 text-base font-bold text-white shadow-xl shadow-[#EF8619]/30 transition duration-300 hover:scale-[1.02] active:scale-[0.99]"
              >
                <span>Start Corporate Free Trial</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 hover:text-white"
              >
                <span>Contact Enterprise Sales</span>
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              7-Day Free Enterprise Trial &bull; Instant Access &bull; DPDP 2023 Compliant
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
