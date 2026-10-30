import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Check,
  Images,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Freelancer Creative Network | Hire Photographers & Editors",
  description:
    "Join or hire from the PhotoOS Creative Marketplace. Connect with verified second shooters, wedding cinematographers, drone pilots, and editors for studios.",
  keywords: [
    "photographer marketplace India",
    "hire wedding second shooter India",
    "wedding cinematographer marketplace",
    "drone pilot for photography",
    "freelance photo editor",
    "freelance photographer network",
  ],
  alternates: {
    canonical: "/freelancer",
  },
  openGraph: {
    title: "Freelancer Creative Network | PhotoOS",
    description:
      "Join or hire from the PhotoOS Creative Marketplace. Connect with verified second shooters, wedding cinematographers, drone pilots, and editors for studios.",
    url: "/freelancer",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS Freelancer Creative Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Creative Network | PhotoOS",
    description:
      "Join or hire from the PhotoOS Creative Marketplace. Connect with verified second shooters, wedding cinematographers, drone pilots, and editors for studios.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

const benefits = [
  {
    icon: Camera,
    title: "Showcase Your Skills",
    text: "Create a professional freelancer profile with your role, skills, experience and portfolio.",
  },
  {
    icon: Images,
    title: "Build Your Portfolio",
    text: "Present your work and creative experience so photography studios can understand what you offer.",
  },
  {
    icon: Users,
    title: "Get Discovered",
    text: "Make your profile discoverable to photography studios looking for creative professionals.",
  },
  {
    icon: MessageCircle,
    title: "Connect With Studios",
    text: "Keep conversations and collaboration connected through the PhotoOS ecosystem.",
  },
];

const professionalTypes = [
  "Photographers",
  "Photo Editors",
  "Videographers",
  "Designers",
  "Retouchers",
  "Other Creative Professionals",
];

function FreelancerPageContent({
  created,
}: {
  created: boolean;
}) {
  return (
    <>
      <Header />

      <main>
        {created && (
          <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center">
              <p className="font-bold text-emerald-800">
                Freelancer profile created successfully!
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Your profile is now active on the PhotoOS Freelancer Marketplace.
              </p>
            </div>
          </div>
        )}

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071f31]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/photo-editing.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061d2d]/95 via-[#061d2d]/90 to-[#061d2d]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f31] via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <Sparkles size={16} className="text-[#EF8619]" />
                PhotoOS Freelancer Marketplace
              </div>

              <h1 className="mt-7 text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Showcase Your Skills.
                <span className="block text-[#EF8619]">
                  Get Discovered.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Create your free PhotoOS freelancer profile and let
                photography studios discover you when they need creative
                professionals.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/freelancer/create"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF8619] px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#0A3F61]"
                >
                  Create Free Freelancer Listing
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  See How It Works
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <BadgeCheck size={17} className="text-[#3495A1]" />
                  Free to create
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck size={17} className="text-[#3495A1]" />
                  Professional profile
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck size={17} className="text-[#3495A1]" />
                  Studio discovery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                Built for creative professionals
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                Turn your skills into opportunities.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Your PhotoOS freelancer profile gives studios a simple way to
                discover your skills, experience and creative work.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3F61] text-[#EF8619]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#0A3F61]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL TYPES */}
        <section className="bg-[#f7fafc] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                  Who can join
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Your craft belongs in the marketplace.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether you capture moments, edit photographs or create
                  visual experiences, build a profile that represents your
                  professional skills.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {professionalTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <Check
                      size={18}
                      className="shrink-0 text-[#3495A1]"
                    />

                    <span className="font-semibold text-[#0A3F61]">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-[#0A3F61] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                How it works
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                From profile to opportunity.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Create Your Profile",
                  text: "Sign in and add your professional details, skills, experience and portfolio.",
                },
                {
                  number: "02",
                  title: "Get Discovered",
                  text: "Your active freelancer profile can be discovered by photography studios.",
                },
                {
                  number: "03",
                  title: "Connect & Collaborate",
                  text: "Studios can review your profile and connect with you for opportunities.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-7"
                >
                  <p className="text-sm font-black tracking-[0.15em] text-[#EF8619]">
                    {step.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-5 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <BriefcaseBusiness
              size={32}
              className="mx-auto text-[#EF8619]"
            />

            <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
              Ready to put your skills in front of studios?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Create your free freelancer listing and start building your
              professional presence on PhotoOS.
            </p>

            <Link
              href="/freelancer/create"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0A3F61]"
            >
              Create Free Freelancer Listing
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


export default async function FreelancerPage({
  searchParams,
}: {
  searchParams: Promise<{ created?: string }>;
}) {
  const params = await searchParams;
  const created = params.created === "1";

  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071f31]" />
      }
    >
      <FreelancerPageContent created={created} />
    </Suspense>
  );
}
