"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  CalendarCheck2,
  Camera,
  Check,
  ChevronRight,
  Download,
  Images,
  MessageCircle,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSubscriptionPlans } from "@/lib/api/subscription/plans";
import type { SubscriptionPlan } from "@/types/subscription/plan";

type Audience = "personal" | "photographer" | "freelancer";

const personalAppFeatures = [
  {
    icon: BriefcaseBusiness,
    title: "Find Trusted Photographers",
    text: "Discover photographers through the PhotoOS ecosystem and find the right professional for your event or personal requirement.",
  },
  {
    icon: CalendarCheck2,
    title: "Book Your Photographer",
    text: "Connect with photographers, discuss your requirement and manage your booking journey from one place.",
  },
  {
    icon: MessageCircle,
    title: "Chat Directly",
    text: "Talk with your photographer before and during your photography experience without switching between different apps.",
  },
  {
    icon: Images,
    title: "Your Personal Gallery",
    text: "Access your photographs through organized digital galleries and keep your memories available in one place.",
  },
];

const faceFeatures = [
  {
    icon: ScanFace,
    title: "Take a Selfie",
    text: "Use your phone camera to provide a selfie for AI-powered photo discovery.",
  },
  {
    icon: Bot,
    title: "AI Finds Your Photos",
    text: "PhotoOS uses face matching technology to help discover photographs where you appear.",
  },
  {
    icon: Images,
    title: "See Your Moments",
    text: "Find your photographs without manually searching through hundreds or thousands of images.",
  },
  {
    icon: Check,
    title: "Select & Share",
    text: "Review your matching photographs and continue with selection and gallery workflows.",
  },
];

const aiFeatures = [
  {
    title: "Smart Photo Discovery",
    text: "Spend less time searching and more time enjoying your photographs.",
  },
  {
    title: "AI-Powered Experience",
    text: "Intelligent features are designed to make your photography journey simpler and faster.",
  },
  {
    title: "Connected Communication",
    text: "Keep photographer communication and project conversations connected.",
  },
  {
    title: "Faster Delivery",
    text: "Move from photography to discovery and selection with fewer manual steps.",
  },
];

type PricingPlan = {
  id: string;
  name: string;
  label: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  features: string[];
  cta: string;
  raw: SubscriptionPlan;
};

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function featureValues(
  features: Record<string, unknown>,
  limits: Record<string, unknown>,
): string[] {
  const values: string[] = [];

  for (const [key, value] of Object.entries(features)) {
    if (typeof value === "string" && value.trim()) {
      values.push(value.trim());
      continue;
    }

    if (typeof value === "boolean" && value) {
      values.push(
        key
          .replaceAll("_", " ")
          .replace(/\\b\\w/g, (letter) => letter.toUpperCase()),
      );
      continue;
    }

    if (typeof value === "number") {
      values.push(
        `${key
          .replaceAll("_", " ")
          .replace(/\\b\\w/g, (letter) => letter.toUpperCase())}: ${value}`,
      );
    }
  }

  for (const [key, value] of Object.entries(limits)) {
    if (values.length >= 8) break;

    if (
      typeof value === "string" ||
      typeof value === "number"
    ) {
      values.push(
        `${key
          .replaceAll("_", " ")
          .replace(/\\b\\w/g, (letter) => letter.toUpperCase())}: ${value}`,
      );
    }
  }

  return [...new Set(values)];
}

function mapBackendPlan(plan: SubscriptionPlan): PricingPlan {
  const isTrial = plan.price === 0 && plan.trial_days > 0;
  const isPopular =
    plan.plan_code.toLowerCase().includes("professional") ||
    plan.plan_code.toLowerCase().includes("pro");

  return {
    id: plan.id,
    name: plan.name,
    label: isTrial
      ? "Start exploring"
      : isPopular
        ? "For photographers"
        : "For professional studios",
    price: plan.price === 0
      ? "Free"
      : formatPrice(plan.price, plan.currency),
    period: plan.price === 0
      ? ""
      : plan.billing_cycle,
    description:
      plan.description ??
      `PhotoOS ${plan.name} studio subscription.`,
    popular: isPopular,
    features: [
      ...featureValues(
        plan.features,
        Object.fromEntries(
          Object.entries(plan.limits).filter(
            ([key]) =>
              key !== "storage_gb" &&
              key !== "watermark_photos",
          ),
        ),
      ),
      ...(typeof plan.limits.storage_gb === "number"
        ? [`Storage: ${plan.limits.storage_gb} GB`]
        : []),
      ...(typeof plan.limits.watermark_photos === "number"
        ? [
            `Watermarked Photos: ${
              (
                plan.price === 0 &&
                plan.trial_days > 0
              )
                ? "1,000"
                : plan.limits.watermark_photos === -1
                  ? "Unlimited"
                  : plan.limits.watermark_photos.toLocaleString("en-IN")
            }`,
          ]
        : []),
    ],
    cta: isTrial
      ? "Start Free Trial"
      : "Choose Plan",
    raw: plan,
  };
}

export default function PricingPage() {
  const [audience, setAudience] = useState<Audience>("personal");
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [plansError, setPlansError] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );

  const isPersonal = audience === "personal";
  const isPhotographer = audience === "photographer";
  const isFreelancer = audience === "freelancer";

  const trialPlans = plans
    .filter(
      (plan) =>
        plan.raw.price === 0 &&
        plan.raw.trial_days > 0,
    )
    .sort(
      (a, b) =>
        a.raw.trial_days -
        b.raw.trial_days,
    );

  const paidPlans = plans
    .filter(
      (plan) =>
        plan.raw.price > 0,
    )
    .filter((plan) => {
      const cycle =
        plan.raw.billing_cycle
          .trim()
          .toLowerCase();

      if (billingCycle === "monthly") {
        return (
          cycle === "monthly" ||
          cycle === "month"
        );
      }

      return (
        cycle === "yearly" ||
        cycle === "annual" ||
        cycle === "year"
      );
    })
    .sort(
      (a, b) =>
        a.raw.price -
        b.raw.price,
    );

  
function getPricingPlanTier(plan: SubscriptionPlan) {
  const code = plan.plan_code.toLowerCase();
  const name = plan.name.toLowerCase();

  if (
    (plan.price === 0 && plan.trial_days > 0) ||
    code.includes("free_trial") ||
    name.includes("free trial")
  ) {
    return 0;
  }

  if (
    code.includes("starter") ||
    name.includes("starter")
  ) {
    return 1;
  }

  if (
    code.includes("booster") ||
    name.includes("booster")
  ) {
    return 2;
  }

  if (
    code.includes("elite") ||
    name.includes("elite")
  ) {
    return 3;
  }

  return 100;
}

function normalizePricingFeatureKey(value: string) {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getPricingFeaturePolicy(
  plan: SubscriptionPlan,
  key: string,
) {
  const tier = getPricingPlanTier(plan);
  const normalized = normalizePricingFeatureKey(key);

  if (
    normalized.includes("ai") ||
    normalized.includes("artificial intelligence") ||
    normalized.includes("face matching") ||
    normalized.includes("face search") ||
    normalized.includes("ai feature")
  ) {
    return tier >= 1;
  }

  if (
    normalized.includes("analytics") ||
    normalized.includes("analytical")
  ) {
    return tier >= 2;
  }

  if (
    normalized.includes("client selfie") ||
    normalized.includes("selfie")
  ) {
    return true;
  }

  if (
    normalized.includes("marketplace")
  ) {
    return tier >= 1;
  }

  if (
    normalized.includes("hire freelancer") ||
    normalized.includes("freelancer hiring") ||
    normalized.includes("hire a freelancer") ||
    normalized.includes("freelancer")
  ) {
    return tier >= 1;
  }

  return null;
}

function getPricingSupportLabel(
  plan: SubscriptionPlan,
) {
  const tier = getPricingPlanTier(plan);

  if (tier === 0) {
    return "Not included";
  }

  if (tier === 1) {
    return "Chat Support";
  }

  if (tier === 2) {
    return "Chat + Customer Support";
  }

  if (tier >= 3) {
    return "Priority Support";
  }

  return null;
}

function getPricingLimit(
  plan: SubscriptionPlan,
  key: string,
) {
  const tier = getPricingPlanTier(plan);

  if (tier === 0) {
    if (key === "users") {
      return 1;
    }

    if (key === "events_per_month") {
      return 10;
    }

    if (key === "watermark_photos") {
      return 1000;
    }
  }

  const value = plan.limits?.[key];

  if (
    value === null ||
    value === undefined
  ) {
    return null;
  }

  return value;
}

function getPricingFeatureValue(
  plan: SubscriptionPlan,
  key: string,
) {
  const policy = getPricingFeaturePolicy(
    plan,
    key,
  );

  if (policy !== null) {
    return policy;
  }

  const normalized = normalizePricingFeatureKey(key);

  if (
    normalized.includes("support")
  ) {
    return getPricingSupportLabel(plan);
  }

  const value = plan.features?.[key];

  if (
    value === null ||
    value === undefined
  ) {
    return null;
  }

  return value;
}


const visiblePlans = [
    ...(billingCycle === "monthly"
      ? trialPlans
      : []),
    ...paidPlans,
  ];

  useEffect(() => {
    if (!isPhotographer) {
      return;
    }

    let cancelled = false;

    async function loadPlans() {
      setPlansLoading(true);
      setPlansError(null);

      try {
        const backendPlans = await getSubscriptionPlans();

        const studioPlans = backendPlans
          .filter((plan) => plan.plan_type !== "marketplace")
          .map(mapBackendPlan);

        if (!cancelled) {
          setPlans(studioPlans);
        }
      } catch (error) {
        console.error("[Pricing] Failed to load plans:", error);

        if (!cancelled) {
          setPlans([]);
          setPlansError(
            error instanceof Error
              ? error.message
              : "Unable to load PhotoOS pricing.",
          );
        }
      } finally {
        if (!cancelled) {
          setPlansLoading(false);
        }
      }
    }

    void loadPlans();

    return () => {
      cancelled = true;
    };
  }, [isPhotographer]);

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071f31]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-wedding.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d2d]/95 via-[#061d2d]/85 to-[#061d2d]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f31] via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-white">
              <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <Sparkles size={16} className="text-[#EF8619]" />
                Choose your PhotoOS experience
              </div>

              <h1 className="text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Photography made
                <span className="block text-[#EF8619]">
                  smarter for everyone.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Choose how you use PhotoOS and discover the experience built
                specifically for you.
              </p>
            </div>

            {/* SWITCH */}
            <div className="mx-auto mt-12 max-w-2xl rounded-[24px] border border-white/15 bg-white/10 p-2 backdrop-blur-xl">
              <div className="grid gap-2 md:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setAudience("personal")}
                  className={`rounded-2xl px-4 py-5 text-left transition ${
                    isPersonal
                      ? "bg-white text-[#0A3F61] shadow-xl"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <UserRound
                      size={23}
                      className={
                        isPersonal ? "text-[#EF8619]" : "text-white/70"
                      }
                    />

                    <div>
                      <p className="font-bold">I&apos;m a Personal User</p>
                      <p
                        className={`mt-1 text-xs ${
                          isPersonal ? "text-slate-500" : "text-white/50"
                        }`}
                      >
                        Discover & book photographers
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAudience("photographer")}
                  className={`rounded-2xl px-4 py-5 text-left transition ${
                    isPhotographer
                      ? "bg-white text-[#0A3F61] shadow-xl"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Camera
                      size={23}
                      className={
                        isPhotographer ? "text-[#EF8619]" : "text-white/70"
                      }
                    />

                    <div>
                      <p className="font-bold">
                        I&apos;m a Photographer / Studio
                      </p>
                      <p
                        className={`mt-1 text-xs ${
                          isPhotographer ? "text-slate-500" : "text-white/50"
                        }`}
                      >
                        Run your photography business
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAudience("freelancer")}
                  className={`rounded-2xl px-4 py-5 text-left transition ${
                    isFreelancer
                      ? "bg-white text-[#0A3F61] shadow-xl"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users
                      size={23}
                      className={
                        isFreelancer
                          ? "text-[#EF8619]"
                          : "text-white/70"
                      }
                    />

                    <div>
                      <p className="font-bold">
                        I&apos;m a Freelancer
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          isFreelancer
                            ? "text-slate-500"
                            : "text-white/50"
                        }`}
                      >
                        Get discovered & find opportunities
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PERSONAL USER ONLY */}
        {/* ========================================================= */}

        {isPersonal && (
          <>
            {/* 01 — APP */}
            <section className="overflow-hidden bg-white py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      PhotoOS Client App
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
                      Your photography world,
                      <span className="block text-[#3495A1]">
                        right in your pocket.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                      Discover photographers, connect with them, book your
                      photography requirements, chat with your photographer
                      and access your galleries from one simple mobile
                      experience.
                    </p>

                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                      {personalAppFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                          <div
                            key={feature.title}
                            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3495A1]/10">
                              <Icon
                                size={21}
                                className="text-[#3495A1]"
                              />
                            </div>

                            <h3 className="mt-5 font-bold text-[#0A3F61]">
                              {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              {feature.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* MOBILE APP SCREENSHOT */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-16 rounded-full bg-[#3495A1]/20 blur-3xl" />

                      <div className="relative w-[285px] overflow-hidden rounded-[44px] border-[7px] border-[#102a43] bg-[#102a43] p-1.5 shadow-2xl sm:w-[310px]">
                        <div className="overflow-hidden rounded-[36px] bg-black">
                          <img
                            src="/images/photoos-client-app-home.png"
                            alt="PhotoOS Client Mobile App interface for client gallery access and selfie face discovery"
                            className="block h-auto w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PLAY STORE */}
                <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-3xl bg-[#f7fafc] p-8 text-center sm:flex-row sm:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A3F61] text-white">
                    <Download size={25} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF8619]">
                      PhotoOS Mobile App
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#0A3F61]">
                      Download the PhotoOS app
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Discover photographers, manage your photography
                      experience and access your memories anywhere.
                    </p>
                  </div>

                  <Link
                    href="/pricing/compare"
                    aria-label="Get PhotoOS on Google Play"
                    className="inline-flex shrink-0 items-center transition hover:-translate-y-0.5"
                  >
                    <img
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      className="block h-auto w-[180px]"
                    />
                  </Link>
                </div>
              </div>
            </section>

            {/* 02 — FACE MATCHING */}
            <section className="bg-[#0A3F61] py-24 text-white">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      AI Face Matching
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
                      One selfie.
                      <span className="block text-[#EF8619]">
                        Find your moments.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                      Stop scrolling through hundreds or thousands of
                      photographs. Use your selfie and let PhotoOS help you
                      discover the moments where you appear.
                    </p>

                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                      {faceFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                          <div
                            key={feature.title}
                            className="rounded-3xl border border-white/10 bg-white/5 p-5"
                          >
                            <Icon
                              size={23}
                              className="text-[#EF8619]"
                            />

                            <h3 className="mt-5 font-bold">
                              {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-white/50">
                              {feature.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-12 rounded-full bg-[#3495A1]/20 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black shadow-2xl">
                      <video
                        className="block h-auto w-full"
                        src="/videos/ai-face-search.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/images/hero-wedding.jpg"
                        aria-label="PhotoOS AI Face Matching demonstration"
                      >
                        <track
                          kind="captions"
                          src="/captions/empty.vtt"
                          srcLang="en"
                          label="English"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 03 — AI POWERED */}
            <section className="bg-[#f7fafc] py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    AI-powered experience
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                    More intelligence. Less effort.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    PhotoOS uses intelligent technology to make the client
                    photography experience faster, simpler and more
                    connected.
                  </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {aiFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3F61] text-[#EF8619]">
                        <Sparkles size={21} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-[#0A3F61]">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[32px] bg-white p-8 text-center shadow-sm sm:p-12">
                  <ShieldCheck
                    size={30}
                    className="mx-auto text-[#3495A1]"
                  />

                  <h3 className="mt-5 text-2xl font-black text-[#0A3F61]">
                    Your photos. Your privacy. Your control.
                  </h3>

                  <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
                    PhotoOS is designed around secure access, controlled
                    sharing and permission-based workflows.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ========================================================= */}
        {/* FREELANCER ECOSYSTEM */}
        {/* ========================================================= */}

        {isFreelancer && (
          <>
            {/* HERO */}
            <section className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      PhotoOS Freelancer Marketplace
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
                      Turn your skills into
                      <span className="block text-[#3495A1]">
                        real opportunities.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                      Create your professional freelancer identity on PhotoOS,
                      showcase your skills and portfolio, and become discoverable
                      by photography studios looking for creative professionals.
                    </p>

                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      {[
                        "Free professional listing",
                        "Showcase your portfolio",
                        "Add your skills & experience",
                        "Set your daily rate",
                        "Get discovered by studios",
                        "Connect through the PhotoOS ecosystem",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                        >
                          <Check
                            size={17}
                            className="shrink-0 text-[#3495A1]"
                          />
                          <span className="text-sm font-semibold text-[#0A3F61]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/freelancer/create"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF8619] px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0A3F61]"
                      >
                        Create Free Listing as a Freelancer
                        <ChevronRight size={18} />
                      </Link>

                      <Link
                        href="/freelancer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-[#0A3F61] transition hover:border-[#3495A1] hover:text-[#3495A1]"
                      >
                        Explore Freelancer Marketplace
                      </Link>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[36px] bg-[#0A3F61] p-8 text-white shadow-2xl sm:p-12">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#EF8619]/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#3495A1]/20 blur-3xl" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <Users
                          size={27}
                          className="text-[#EF8619]"
                        />
                      </div>

                      <h3 className="mt-7 text-3xl font-black">
                        Your skills.
                        <span className="block text-[#EF8619]">
                          Your profile. Your opportunities.
                        </span>
                      </h3>

                      <p className="mt-5 leading-7 text-white/60">
                        PhotoOS connects the photography ecosystem so studios
                        can discover the creative professionals they need for
                        their projects.
                      </p>

                      <div className="mt-8 space-y-4">
                        {[
                          "Professional freelancer identity",
                          "Portfolio & social links",
                          "Skills, experience & location",
                          "Availability & booking information",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <Check
                              size={18}
                              className="shrink-0 text-[#3495A1]"
                            />
                            <span className="text-sm font-semibold text-white/85">
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

            {/* HOW FREELANCERS FIT INTO PHOTOOS */}
            <section className="bg-[#f7fafc] py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    Your place in the ecosystem
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                    One profile. Multiple opportunities.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Your PhotoOS freelancer profile is designed to become your
                    professional presence inside the photography ecosystem.
                  </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Get Discovered",
                      text: "Studios can discover creative professionals based on their requirements.",
                    },
                    {
                      title: "Show Your Work",
                      text: "Present your portfolio, social links, skills and experience in one profile.",
                    },
                    {
                      title: "Get Hired",
                      text: "Studios can review freelancer profiles and initiate hiring opportunities.",
                    },
                    {
                      title: "Stay Connected",
                      text: "Keep your professional collaboration connected through the PhotoOS ecosystem.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3F61] text-[#EF8619]">
                        <Sparkles size={21} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-[#0A3F61]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-[#0A3F61] py-24 text-white">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    Simple onboarding
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                    From profile to opportunity.
                  </h2>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-4">
                  {[
                    {
                      number: "01",
                      title: "Create Listing",
                      text: "Add your professional information, skills and portfolio.",
                    },
                    {
                      number: "02",
                      title: "Verify",
                      text: "Verify your identity securely before your listing goes live.",
                    },
                    {
                      number: "03",
                      title: "Get Discovered",
                      text: "Your active profile becomes available inside the PhotoOS marketplace.",
                    },
                    {
                      number: "04",
                      title: "Get Hired",
                      text: "Studios can review your profile and connect for projects.",
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

            {/* FINAL CTA */}
            <section className="bg-white px-5 py-24 text-center">
              <div className="mx-auto max-w-4xl">
                <Users
                  size={32}
                  className="mx-auto text-[#EF8619]"
                />

                <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                  Ready to build your PhotoOS freelancer profile?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Create your free listing, verify your account and become
                  discoverable to studios inside the PhotoOS ecosystem.
                </p>

                <Link
                  href="/freelancer/create"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0A3F61]"
                >
                  Create Free Listing as a Freelancer
                  <ChevronRight size={18} />
                </Link>
              </div>
            </section>
          </>
        )}

        {/* ========================================================= */}
        {/* PHOTOGRAPHER / STUDIO ONLY */}
        {/* ========================================================= */}

        {isPhotographer && (
          <>
            {/* STUDIO PRODUCT */}
            <section className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                  <div className="relative overflow-hidden rounded-[36px]">
                    <img
                      src="/images/photo-editing.jpg"
                      alt="Professional studio photographer managing galleries and client photo selection in PhotoOS Studio"
                      className="h-[560px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F61]/85 via-transparent to-transparent" />

                    <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white p-5 shadow-2xl">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#EF8619]">
                        PhotoOS Studio
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#0A3F61]">
                        Run your entire photography business from one place.
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      Studio software
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
                      Your studio.
                      <span className="block text-[#3495A1]">
                        One intelligent workspace.
                      </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      Manage clients, projects, events, albums, galleries,
                      teams, freelancer hiring, client collaboration,
                      AI-powered workflows and delivery from one connected
                      platform.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {[
                        "Client & CRM management",
                        "Projects & events",
                        "Albums & galleries",
                        "Client chat",
                        "Photo-level comments",
                        "AI face matching",
                        "Freelancer marketplace",
                        "Secure delivery",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                        >
                          <Check
                            size={17}
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
            </section>

            {/* MARKETPLACE */}
            <section className="bg-[#f7fafc] py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                      Marketplace
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                      Need more hands for your next project?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      Find photographers, editors, designers and other
                      creative professionals through the PhotoOS marketplace.
                    </p>

                    <div className="mt-8 space-y-4">
                      {[
                        "Discover creative professionals",
                        "Connect through in-built chat",
                        "Hire for your project",
                        "Keep collaboration connected",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <BadgeCheck
                            size={20}
                            className="text-[#3495A1]"
                          />
                          <span className="font-semibold text-[#0A3F61]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[36px] bg-[#0A3F61] p-8 text-white sm:p-12">
                    <BriefcaseBusiness
                      size={35}
                      className="text-[#EF8619]"
                    />

                    <h3 className="mt-7 text-3xl font-black">
                      Build your creative team on demand.
                    </h3>

                    <p className="mt-5 leading-7 text-white/60">
                      From a second photographer to a professional editor,
                      connect with creative talent without leaving your
                      workflow.
                    </p>

                    <Link
                      href="/pricing/compare"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-7 py-4 font-bold text-white"
                    >
                      Explore PhotoOS
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* BACKEND PRICING */}
            <section className="bg-white py-24">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    Studio pricing
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
                    Choose the plan that fits your studio.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Choose the right PhotoOS plan for your photography business.
                  </p>
                </div>

                <div className="mt-10 flex justify-center">
                  <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1.5 shadow-sm">
                    <button
                      type="button"
                      onClick={() =>
                        setBillingCycle("monthly")
                      }
                      className={`rounded-full px-7 py-3 text-sm font-bold transition-all ${
                        billingCycle === "monthly"
                          ? "bg-[#0A3F61] text-white shadow-md"
                          : "text-slate-600 hover:text-[#0A3F61]"
                      }`}
                    >
                      Monthly
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setBillingCycle("annual")
                      }
                      className={`rounded-full px-7 py-3 text-sm font-bold transition-all ${
                        billingCycle === "annual"
                          ? "bg-[#0A3F61] text-white shadow-md"
                          : "text-slate-600 hover:text-[#0A3F61]"
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-500">
                    {billingCycle === "monthly"
                      ? "Monthly plans with a 7-day free trial to get started."
                      : "Annual plans for studios that prefer yearly billing."}
                  </p>
                </div>

                {plansLoading ? (
                  <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-[560px] animate-pulse rounded-[30px] bg-slate-100"
                      />
                    ))}
                  </div>
                ) : plansError ? (
                  <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-red-200 bg-red-50 p-6 text-center">
                    <p className="font-semibold text-red-700">
                      Unable to load PhotoOS pricing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-red-600">
                      {plansError}
                    </p>
                  </div>
                ) : plans.length === 0 ? (
                  <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                    <p className="font-semibold text-[#0A3F61]">
                      No studio plans are currently available.
                    </p>
                  </div>
                ) : visiblePlans.length === 0 ? (
                  <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                    <p className="font-semibold text-[#0A3F61]">
                      No {billingCycle} plans are currently available.
                    </p>
                  </div>
                ) : (
                  <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {visiblePlans.map((plan) => (
                      <div
                        key={plan.id}
                        className={`relative flex flex-col rounded-[30px] border p-8 ${
                          plan.popular
                            ? "border-[#EF8619] bg-[#0A3F61] text-white shadow-2xl"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-7 flex items-center gap-1 rounded-full bg-[#EF8619] px-3 py-1 text-xs font-bold text-white">
                            <Star size={12} fill="currentColor" />
                            Popular
                          </div>
                        )}

                        <p className="text-sm font-bold text-[#EF8619]">
                          {plan.raw.price === 0 &&
                        plan.raw.trial_days > 0
                          ? "FREE TRIAL"
                          : plan.label}
                        </p>

                        <h3
                          className={`mt-3 text-2xl font-black ${
                            plan.popular
                              ? "text-white"
                              : "text-[#0A3F61]"
                          }`}
                        >
                          {plan.name}
                        </h3>

                        <div className="mt-7">
                          <span
                            className={`text-4xl font-black ${
                              plan.popular
                                ? "text-white"
                                : "text-[#0A3F61]"
                            }`}
                          >
                            {plan.price}
                          </span>

                          {plan.period && (
                            <span
                              className={
                                plan.popular
                                  ? "text-white/50"
                                  : "text-slate-400"
                              }
                            >
                              {" "}
                              / {plan.period}
                            </span>
                          )}
                        </div>

                        <p
                          className={`mt-5 min-h-[72px] text-sm leading-6 ${
                            plan.popular
                              ? "text-white/60"
                              : "text-slate-500"
                          }`}
                        >
                          {plan.description}
                        </p>

                          <div className="mt-6">
                            <div className="space-y-3">
                              {plan.features.map((feature) => (
                                <div
                                  key={feature}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <BadgeCheck
                                    size={17}
                                    className={`mt-0.5 shrink-0 ${
                                      plan.popular
                                        ? "text-[#EF8619]"
                                        : "text-[#3495A1]"
                                    }`}
                                  />

                                  <span
                                    className={
                                      plan.popular
                                        ? "text-white/75"
                                        : "text-slate-600"
                                    }
                                  >
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>


                        <Link
                          href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.photoos.in"}/onboarding/studio?planId=${encodeURIComponent(plan.raw.id)}&planCode=${encodeURIComponent(plan.raw.plan_code)}&billingCycle=${encodeURIComponent(plan.raw.billing_cycle)}${plan.raw.price === 0 && plan.raw.trial_days > 0 ? "&mode=trial" : ""}`}
                          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold ${
                            plan.popular
                              ? "bg-[#EF8619] text-white hover:bg-white hover:text-[#0A3F61]"
                              : "bg-[#0A3F61] text-white hover:bg-[#3495A1]"
                          }`}
                        >
                          {plan.cta}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* STUDIO CTA */}
            <section className="bg-[#f7fafc] px-5 py-24 text-center">
              <div className="mx-auto max-w-4xl">
                <Sparkles
                  size={30}
                  className="mx-auto text-[#EF8619]"
                />

                <h2 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-6xl">
                  Build a smarter photography business.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Bring your clients, team, photographs, AI workflows and
                  delivery into one connected platform.
                </p>

                <Link
                  href="/pricing/compare"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#EF8619] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0A3F61]"
                >
                  Compare Plans
                  <ArrowRight size={18} />
                </Link>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
