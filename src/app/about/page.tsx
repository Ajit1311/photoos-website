import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Clock3,
  Images,
  LockKeyhole,
  MessageCircle,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About PhotoOS | Built for Modern Photography Studios",
  description:
    "Learn about PhotoOS — the AI-powered operating system uniting photography studio management, client galleries, instant selfie face matching, and creative collaboration.",
  keywords: [
    "about PhotoOS",
    "photography studio management software",
    "AI photography platform",
    "photography CRM software",
    "photo studio technology",
    "AI face match for studios",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About PhotoOS | Built for Modern Photography Studios",
    description:
      "Learn how PhotoOS empowers studios and photographers with AI workflows, smart client galleries, and seamless photo delivery.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "About PhotoOS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PhotoOS | Built for Modern Photography Studios",
    description:
      "Learn how PhotoOS empowers studios and photographers with AI workflows, smart client galleries, and seamless photo delivery.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

const values = [
  {
    icon: Users,
    title: "People First",
    text: "Technology should make relationships stronger, not replace them. PhotoOS keeps photographers, teams and clients at the center.",
  },
  {
    icon: Sparkles,
    title: "Built for Simplicity",
    text: "Powerful technology should feel simple. We design workflows that reduce unnecessary steps and make everyday work easier.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Matters",
    text: "Photography is personal. We believe access, sharing and collaboration should always happen with privacy and control in mind.",
  },
  {
    icon: Bot,
    title: "AI With Purpose",
    text: "AI should solve real problems. PhotoOS uses intelligent technology where it can save time and improve the client experience.",
  },
];

const capabilities = [
  {
    icon: Users,
    title: "Studio & Client Management",
    text: "Keep clients, projects, events and business workflows connected in one workspace.",
  },
  {
    icon: Images,
    title: "Albums & Smart Galleries",
    text: "Organize photographs into structured albums and create a better gallery experience for clients.",
  },
  {
    icon: MessageCircle,
    title: "Client Collaboration",
    text: "Keep conversations, feedback, photo comments and selection connected to the actual project.",
  },
  {
    icon: ScanFace,
    title: "AI Face Matching",
    text: "Help clients discover photographs featuring them through AI-powered face matching.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Marketplace & Hiring",
    text: "Discover and collaborate with photographers, editors, designers and other creative professionals.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Photo Delivery",
    text: "Give clients controlled access to the photographs and galleries you choose to share.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071f31]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/photo-studio.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d2d]/95 via-[#061d2d]/80 to-[#061d2d]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f31] via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
            <div className="max-w-4xl text-white">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <Sparkles size={16} className="text-[#EF8619]" />
                About PhotoOS
              </div>

              <h1 className="text-5xl font-black leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Technology built around the
                <span className="block text-[#EF8619]">
                  art of photography.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                PhotoOS is an AI-powered photography management platform
                designed to bring studios, photographers, teams and clients
                together in one connected experience.
              </p>
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Our purpose
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Make photography business management simpler.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Photography businesses create incredible moments, but the
                  work behind those moments can become complicated — clients,
                  projects, events, teams, thousands of photographs, approvals,
                  selections and final delivery.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  PhotoOS brings these moving parts together so photographers
                  can spend less time managing disconnected tools and more
                  time focusing on their craft, clients and business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-[#f7fafc] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                What we do
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                One connected platform for the entire photography journey.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From the first client interaction to the final delivered
                photograph, PhotoOS connects the workflow.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3495A1]/30 hover:shadow-xl"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0A3F61]/5">
                      <Icon size={23} className="text-[#0A3F61]" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#0A3F61]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-[34px]">
                <img
                  src="/images/photo-editing.jpg"
                  alt="Professional photographer editing photographs and managing client workflow using PhotoOS software"
                  className="h-[570px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F61]/85 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#0A3F61]/85 p-5 text-white backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8619]">
                    The PhotoOS platform
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Manage. Collaborate. Match. Select. Deliver.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  The product
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Everything your studio needs, connected in one place.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  PhotoOS combines business management, client collaboration,
                  photo organization, AI-powered discovery and delivery into
                  one modern photography ecosystem.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Manage clients, projects and events",
                    "Organize albums, assets and galleries",
                    "Collaborate with clients directly on photographs",
                    "Use AI-powered face matching for faster discovery",
                    "Find and hire creative professionals",
                    "Move from selection to delivery faster",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3495A1] text-white">
                        <Check size={13} />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/pricing"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0A3F61] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#3495A1]"
                >
                  Explore PhotoOS
                  <ArrowRight size={18} />
                </Link>
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
                  Intelligent by design
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                  AI that solves real photography problems.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                  PhotoOS uses AI where it can remove repetitive work and
                  create a faster experience for photographers and their
                  clients.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["AI Face Matching", ScanFace],
                  ["Smart Discovery", Sparkles],
                  ["Faster Selection", Clock3],
                  ["Connected Delivery", Images],
                ].map(([title, Icon]) => (
                  <div
                    key={title as string}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <Icon className="text-[#EF8619]" size={25} />
                    <h3 className="mt-7 text-lg font-bold">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      Intelligent features designed around practical
                      photography workflows.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION VISION */}
        <section className="bg-[#f7fafc] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[32px] bg-white p-8 shadow-sm sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Our mission
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0A3F61] sm:text-4xl">
                  Empower photography businesses with simpler, smarter
                  technology.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  We want photographers and studios to have the tools they
                  need to manage their business efficiently while delivering a
                  better experience to every client.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#0A3F61] p-8 text-white shadow-sm sm:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Our vision
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  A connected future for the photography industry.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/65">
                  We envision a world where photography businesses can manage
                  their entire workflow through one intelligent ecosystem —
                  from client discovery to final delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                What we believe
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                Our values shape the product we build.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-[28px] border border-slate-200 p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3495A1]/10">
                      <Icon className="text-[#3495A1]" size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#0A3F61]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="bg-[#f7fafc] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-[#0A3F61] p-8 text-white sm:p-12 lg:p-16">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <LockKeyhole className="text-[#EF8619]" size={26} />
                  </div>

                  <h2 className="mt-8 text-4xl font-black tracking-[-0.04em]">
                    Your photos are personal.
                    <span className="block text-[#EF8619]">
                      Privacy should be too.
                    </span>
                  </h2>
                </div>

                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-lg leading-8 text-slate-600">
                    PhotoOS is designed around controlled access, secure
                    authentication and permission-based collaboration. Your
                    personal photographs should be accessible to the people
                    you authorize.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Private galleries",
                      "Controlled sharing",
                      "Permission-based access",
                      "Secure client workflows",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-[#f7fafc] p-4"
                      >
                        <ShieldCheck
                          size={19}
                          className="shrink-0 text-[#3495A1]"
                        />
                        <span className="text-sm font-semibold text-[#0A3F61]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER DESK */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[36px] bg-[#0A3F61] p-8 text-white sm:p-12 lg:p-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3495A1]/20 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Founder&apos;s Desk
                </p>

                <div className="mt-7 max-w-3xl">
                  <p className="text-2xl font-medium leading-10 text-white sm:text-3xl">
                    &quot;Photography is about preserving moments. The
                    technology behind it should make preserving, organizing
                    and sharing those moments easier — not more complicated.&quot;
                  </p>

                  <p className="mt-8 text-lg leading-8 text-white/65">
                    PhotoOS was shaped around a simple idea: photographers
                    deserve a platform that understands the way their
                    businesses actually work. From managing a client and
                    organizing an event to selecting photographs, collaborating
                    with a team and delivering the final gallery, every part of
                    the journey should feel connected.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-white/65">
                    We are building PhotoOS to bring modern technology, AI and
                    thoughtful workflows together — while keeping the
                    photographer, the client and their memories at the center.
                  </p>

                  <div className="mt-9 flex items-center gap-3">
                    <div className="h-px w-10 bg-[#EF8619]" />
                    <span className="text-sm font-semibold text-white/70">
                      Founder, PhotoOS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f7fafc] px-5 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
              The future of photography workflows
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
              Ready to experience PhotoOS?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Bring your clients, projects, photographs, collaboration and
              delivery into one intelligent photography platform.
            </p>

            <Link
              href="/pricing"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-8 py-4 font-bold text-white shadow-xl shadow-[#EF8619]/20 transition hover:-translate-y-1 hover:bg-[#0A3F61]"
            >
              Start with PhotoOS
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
