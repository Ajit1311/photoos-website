import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock3,
  Images,
  MessageCircle,
  ScanFace,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  UserRoundPlus,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PhotoOS | AI-Powered Photography Studio Management Platform",
  description:
    "Manage your photography studio, clients, projects, events, galleries, photo selection and delivery with PhotoOS, an AI-powered photography management platform.",
  keywords: [
    "PhotoOS",
    "photography studio management software",
    "photography management platform",
    "photography CRM",
    "AI photography software",
    "photo gallery software",
    "AI face search",
    "photographer workflow",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "Manage your photography business with AI-powered studio workflows, client collaboration, galleries, photo selection and delivery.",
    url: "/",
    siteName: "PhotoOS",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS - AI-Powered Photography Studio Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "AI-powered studio management, client galleries, collaboration and photo delivery for modern photography businesses.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};


const features = [
  {
    icon: Images,
    title: "Smart Photo Galleries",
    text: "Create beautiful client galleries where every photograph stays organized, searchable and ready for delivery.",
  },
  {
    icon: MessageCircle,
    title: "In-Built Client Chat",
    text: "Keep project conversations inside PhotoOS instead of switching between WhatsApp, email and scattered messages.",
  },
  {
    icon: Check,
    title: "Photo-Level Comments",
    text: "Clients can comment, favourite and select individual photographs, making album selection faster and clearer.",
  },
  {
    icon: ScanFace,
    title: "AI Face Matching",
    text: "Help clients find their moments using AI-powered face matching and reduce the time spent searching thousands of photos.",
  },
];

const workflow = [
  ["01", "Manage Clients", "Keep client details, conversations and projects organized."],
  ["02", "Plan Events", "Manage shoots, events, deadlines and photography workflows."],
  ["03", "Collaborate", "Work with your team and hire creative professionals when needed."],
  ["04", "Upload & Organize", "Structure your photos into albums and beautiful galleries."],
  ["05", "AI Face Matching", "Let clients find their photographs with a selfie."],
  ["06", "Select & Comment", "Turn photo selection into a simple collaboration."],
  ["07", "Deliver", "Move from selection to final delivery with less delay."],
  ["08", "Business Growth Challenges", "Stay organized as your business grows."],
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[760px] overflow-hidden bg-[#071f31]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-wedding.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d2d]/95 via-[#061d2d]/75 to-[#061d2d]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d2d] via-transparent to-[#061d2d]/20" />

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
            <div className="max-w-4xl text-white">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <Sparkles size={16} className="text-[#EF8619]" />
                AI-Powered Photography Platform
              </div>

              <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Your Photography Business.
                <span className="mt-2 block text-[#EF8619]">
                  Reimagined.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                From client conversations and photo selection to freelancer
                hiring, AI face matching and final delivery — PhotoOS brings
                your entire photography workflow into one powerful platform.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF8619] px-7 py-4 font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-white hover:text-[#0A3F61]"
                >
                  Start with PhotoOS
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0A3F61]"
                >
                  Explore Platform
                  <ChevronRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65">
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#EF8619]" />
                  AI-powered workflow
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#EF8619]" />
                  Client collaboration
                </span>
                <span className="flex items-center gap-2">
                  <Check size={16} className="text-[#EF8619]" />
                  Faster delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  More than a gallery
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Everything your photography business needs.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                PhotoOS connects your studio, clients, creative team,
                galleries and AI-powered workflows — so every project moves
                from shoot to delivery with less friction.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-[28px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#3495A1]/40 hover:shadow-2xl hover:shadow-[#0A3F61]/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A3F61]/5 transition group-hover:bg-[#0A3F61]">
                      <Icon
                        size={24}
                        className="text-[#0A3F61] transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-[#0A3F61]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLIENT COLLABORATION */}
        <section className="overflow-hidden bg-[#f7fafc] py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="/images/client-collaboration.jpg"
                alt="Clients reviewing photography after a photo shoot"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#0A3F61]/90 p-5 text-white backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-[#EF8619]" size={22} />
                  <div>
                    <p className="font-bold">Client Collaboration</p>
                    <p className="text-sm text-white/60">
                      Everything stays connected to the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                Client collaboration
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                Turn photo selection into a conversation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Stop searching through screenshots and scattered WhatsApp
                messages. PhotoOS lets clients interact directly with their
                photographs.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Comment directly on individual photos",
                  "Favourite and select photographs",
                  "Discuss album requirements with your team",
                  "Keep every decision connected to the project",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3495A1] text-white">
                      <Check size={13} />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI */}
        <section className="bg-[#0A3F61] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  AI-powered delivery
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
                  One selfie.
                  <span className="block text-[#EF8619]">
                    Every moment.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                  AI-powered face matching helps clients find the photographs
                  they appear in, making discovery faster and helping studios
                  move from gallery to selection and delivery sooner.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {[
                    "Selfie-based discovery",
                    "AI face matching",
                    "Faster photo selection",
                    "Faster client delivery",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                    >
                      <Check className="mb-3 text-[#EF8619]" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-[#3495A1]/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3">
                  <video
                    src="/videos/ai-face-search.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="AI-powered face matching in PhotoOS"
                    className="h-[500px] w-full rounded-[25px] object-cover"
                  />

                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white p-5 text-[#0A3F61] shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          AI Photo Search
                        </p>
                        <p className="mt-1 font-bold">
                          Finding matching moments...
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#EF8619]/10 p-3">
                        <ScanFace className="text-[#EF8619]" size={22} />
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#3495A1] to-[#EF8619]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY & PRIVACY */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[#f7fafc]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-[#0A3F61] p-8 text-white sm:p-12 lg:p-16">
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#3495A1]/25 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#EF8619]/20 blur-3xl" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <ShieldCheck className="text-[#EF8619]" size={27} />
                    </div>

                    <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      Privacy & Security
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                      Your Memories.
                      <span className="block text-[#EF8619]">
                        Your Privacy.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
                      Your personal photos are private. PhotoOS is designed
                      around secure access, controlled sharing and
                      permission-based protection for your photography data.
                    </p>
                  </div>
                </div>

                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="max-w-2xl text-lg leading-8 text-slate-600">
                    Your photos should only be available to the people you
                    authorize. PhotoOS keeps privacy and secure access at the
                    center of the photography experience.
                  </p>

                  <div className="mt-9 grid gap-5 sm:grid-cols-2">
                    {[
                      {
                        title: "Private by Design",
                        text: "Your galleries and photographs are intended for authorized users, not public access.",
                      },
                      {
                        title: "Secure Data Access",
                        text: "Authentication and permission-based access help protect your account and content.",
                      },
                      {
                        title: "Your Photos Stay Yours",
                        text: "Your personal memories remain under your control and are not automatically made public.",
                      },
                      {
                        title: "Controlled Sharing",
                        text: "Choose who can view, interact with and receive photographs from your galleries.",
                      },
                      {
                        title: "Secure Photo Delivery",
                        text: "Deliver selected photographs to clients without exposing your entire photo library.",
                      },
                      {
                        title: "Privacy-Focused AI",
                        text: "AI-powered features are designed to support your workflow while respecting controlled access to your photos.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-xl bg-[#3495A1]/10 p-2">
                            <ShieldCheck
                              size={18}
                              className="text-[#3495A1]"
                            />
                          </div>

                          <div>
                            <h3 className="font-bold text-[#0A3F61]">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="/images/photo-studio.jpg"
                  alt="Professional photography studio with photographer and creative workspace"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F61]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm text-white/60">PhotoOS Marketplace</p>
                    <p className="mt-1 text-2xl font-bold">
                      Build your creative team.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#EF8619] p-3">
                    <BriefcaseBusiness size={24} />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Marketplace
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Need a freelancer?
                  <span className="block text-[#3495A1]">
                    Find the right talent.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Hire photographers, editors, designers and other creative
                  professionals when your next project needs extra hands.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    [UserRoundPlus, "Discover creative professionals"],
                    [MessageCircle, "Chat before you hire"],
                    [BriefcaseBusiness, "Hire for your project"],
                    [Clock3, "Keep your workflow moving"],
                  ].map(([Icon, text]) => (
                    <div
                      key={text as string}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="rounded-xl bg-[#0A3F61]/5 p-3">
                        <Icon className="text-[#0A3F61]" size={20} />
                      </div>
                      <span className="font-semibold text-[#0A3F61]">
                        {text as string}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-[#f7fafc] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                One connected workflow
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                From first conversation to final delivery.
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-sm font-bold text-[#EF8619]">
                    {number}
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-[#0A3F61]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY VALUE */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0A3F61] to-[#123f57]">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    Built around your clients
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">
                    Make every photo interaction count.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/65">
                    Give your clients a better way to discover, discuss,
                    select and receive the photographs they love.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0A3F61]"
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[420px]">
                  <img
                    src="/images/hero-wedding.jpg"
                    alt="Wedding couple photographed during a special moment"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A3F61] via-transparent to-transparent lg:w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#f7fafc] px-5 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A3F61] text-white">
              <Sparkles size={25} />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
              Your photos deserve more than a folder.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Your business deserves a smarter workflow. Manage, collaborate,
              match, select and deliver with PhotoOS.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A3F61] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#3495A1]"
              >
                Start with PhotoOS
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-[#0A3F61]"
              >
                Talk to Us
                <Search size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
