"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Loader2,
  Sparkles,
  XCircle,
} from "lucide-react";

import Footer from "@/components/layout/Footer";
import { getSubscriptionPlans } from "@/lib/api/subscription/plans";

type SubscriptionPlan =
  Awaited<ReturnType<typeof getSubscriptionPlans>>[number];

type BillingCycle = "monthly" | "annual";

type ComparisonRow = {
  key: string;
  label: string;
  type: "limit" | "feature";
};

function formatPrice(price: number, currency: string) {
  if (price === 0) {
    return "Free";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getLimitValue(
  plan: SubscriptionPlan,
  key: string,
) {
  const code = plan.plan_code.toLowerCase();
  const name = plan.name.toLowerCase();

  const isFree =
    (plan.price === 0 && plan.trial_days > 0) ||
    code.includes("free_trial") ||
    name.includes("free trial");

  if (isFree) {
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


function getFeatureValue(
  plan: SubscriptionPlan,
  key: string,
) {
  const features =
    (plan.features ?? {}) as Record<string, unknown>;

  const value = features[key];

  if (
    value === undefined ||
    value === null ||
    value === false
  ) {
    return null;
  }

  if (value === true) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length > 0
      ? value.join(", ")
      : null;
  }

  return String(value);
}

function planRank(plan: SubscriptionPlan) {
  const code = plan.plan_code.toLowerCase();
  const name = plan.name.toLowerCase();

  if (
    plan.price === 0 &&
    plan.trial_days > 0
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

function getPlanTier(plan: SubscriptionPlan) {
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

function normalizeFeatureKey(value: string) {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getFeaturePolicy(
  plan: SubscriptionPlan,
  key: string,
) {
  const tier = planRank(plan);
  const normalized = normalizeFeatureKey(key);

  /*
   * Client Selfie — ALL plans
   */
  if (
    normalized === "client selfie" ||
    normalized.includes("client selfie")
  ) {
    return true;
  }

  /*
   * AI Features — Starter, Booster, Elite
   * Free Trial — OFF
   */
  if (
    normalized === "ai features" ||
    normalized.includes("ai feature") ||
    normalized.includes("ai face") ||
    normalized.includes("face matching") ||
    normalized.includes("face search")
  ) {
    return tier >= 1;
  }

  /*
   * Analytics — Booster and Elite only
   */
  if (
    normalized === "analytics" ||
    normalized.includes("analytics")
  ) {
    return tier >= 2;
  }

  /*
   * Marketplace — Starter+
   */
  if (
    normalized === "marketplace" ||
    normalized.includes("marketplace")
  ) {
    return tier >= 1;
  }

  /*
   * Hire Freelancer — Starter+
   */
  if (
    normalized === "hire freelancer" ||
    normalized.includes("hire freelancer") ||
    normalized.includes("freelancer hiring")
  ) {
    return tier >= 1;
  }

  /*
   * Support is handled separately by getSupportLabel().
   */
  if (normalized === "support") {
    return tier >= 1;
  }

  /*
   * Free Trial has NO other feature access.
   */
  if (tier === 0) {
    return false;
  }

  return null;
}


function getSupportLabel(plan: SubscriptionPlan) {
  const tier = getPlanTier(plan);

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

function getInheritedFeatureValue(
  plan: SubscriptionPlan,
  allPlans: SubscriptionPlan[],
  key: string,
) {
  const policy = getFeaturePolicy(plan, key);

  /*
   * Explicit PhotoOS pricing rules take priority over
   * whatever feature JSON happens to contain.
   */
  if (policy !== null) {
    return policy;
  }

  const currentRank = getPlanTier(plan);

  const currentValue = getFeatureValue(
    plan,
    key,
  );

  if (currentValue !== null) {
    return currentValue;
  }

  const lowerPlans = allPlans
    .filter(
      (candidate) =>
        getPlanTier(candidate) < currentRank,
    )
    .sort(
      (a, b) =>
        getPlanTier(b) - getPlanTier(a),
    );

  for (const candidate of lowerPlans) {
    const value = getFeatureValue(
      candidate,
      key,
    );

    if (value !== null) {
      return value;
    }
  }

  return null;
}

function getComparisonRows(
  plans: SubscriptionPlan[],
): ComparisonRow[] {
  const rows: ComparisonRow[] = [];

  const limitRows: Array<{
    key: string;
    label: string;
  }> = [
    {
      key: "users",
      label: "Users",
    },
    {
      key: "storage_gb",
      label: "Storage",
    },
    {
      key: "events_per_month",
      label: "Events per month",
    },
    {
      key: "watermark_photos",
      label: "Watermarked Photos",
    },
  ];

  for (const row of limitRows) {
    const exists = plans.some(
      (plan) =>
        getLimitValue(plan, row.key) !== null,
    );

    if (exists) {
      rows.push({
        key: row.key,
        label: row.label,
        type: "limit",
      });
    }
  }

  /*
   * Build the complete feature universe from every
   * active plan. Missing keys are intentionally retained
   * so the comparison can show a red X.
   */
  const featureKeys = new Set<string>();

  plans.forEach((plan) => {
    const features =
      (plan.features ?? {}) as Record<string, unknown>;

    Object.keys(features).forEach((key) =>
      featureKeys.add(key),
    );
  });

  Array.from(featureKeys)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      rows.push({
        key,
        label: formatLabel(key),
        type: "feature",
      });
    });

  return rows;
}

function getCellValue(
  plan: SubscriptionPlan,
  row: ComparisonRow,
  allPlans: SubscriptionPlan[],
) {
  if (row.type === "limit") {
    /*
     * Free Trial limits are intentionally overridden
     * according to the current PhotoOS pricing policy.
     */
    const tier = getPlanTier(plan);

    if (
      tier === 0 &&
      row.key === "users"
    ) {
      return 1;
    }

    if (
      tier === 0 &&
      row.key === "events_per_month"
    ) {
      return 10;
    }

    if (
      tier === 0 &&
      row.key === "watermark_photos"
    ) {
      return 1000;
    }

    return getLimitValue(
      plan,
      row.key,
    );
  }

  /*
   * Support is displayed as a plan-specific service level.
   */
  if (
    normalizeFeatureKey(row.key).includes("support")
  ) {
    return getSupportLabel(plan);
  }

  return getInheritedFeatureValue(
    plan,
    allPlans,
    row.key,
  );
}


function renderLimitValue(
  value: string | null,
  row: ComparisonRow,
) {
  if (value === null) {
    return (
      <XCircle
        size={21}
        strokeWidth={2.4}
        className="text-red-500"
        aria-label={`${row.label} not included`}
      />
    );
  }

  if (row.key === "storage_gb") {
    return (
      <span className="font-bold text-[#0A3F61]">
        {value} GB
      </span>
    );
  }

  if (row.key === "events_per_month") {
    return (
      <span className="font-bold text-[#0A3F61]">
        {value === "Unlimited"
          ? "Unlimited"
          : `${value} / month`}
      </span>
    );
  }

  if (row.key === "watermark_photos") {
    return (
      <span className="font-bold text-[#0A3F61]">
        {value === "Unlimited"
          ? "Unlimited"
          : Number(value).toLocaleString("en-IN")}
      </span>
    );
  }

  return (
    <span className="font-bold text-[#0A3F61]">
      {value === "Unlimited"
        ? "Unlimited"
        : value}
    </span>
  );
}

function renderFeatureValue(
  value: string | boolean | null,
) {
  if (value === null) {
    return (
      <XCircle
        size={21}
        strokeWidth={2.4}
        className="text-red-500"
        aria-label="Feature not included"
      />
    );
  }

  if (value === true) {
    return (
      <BadgeCheck
        size={21}
        strokeWidth={2.4}
        className="text-[#3495A1]"
        aria-label="Feature included"
      />
    );
  }

  return (
    <span className="max-w-[180px] text-center text-sm font-bold text-[#0A3F61]">
      {value}
    </span>
  );
}

export default function ComparePlansPage() {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly");

  const [plans, setPlans] = useState<SubscriptionPlan[]>(
    [],
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadPlans() {
      try {
        setLoading(true);
        setError("");

        const data = await getSubscriptionPlans();

        if (!mounted) {
          return;
        }

        setPlans(
          data.filter(
            (plan) => plan.plan_type !== "marketplace",
          ),
        );
      } catch (err) {
        if (!mounted) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load pricing plans.",
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadPlans();

    return () => {
      mounted = false;
    };
  }, []);

  const visiblePlans = useMemo(() => {
    const filtered = plans.filter((plan) => {
      const cycle = plan.billing_cycle
        .trim()
        .toLowerCase();

      if (billingCycle === "monthly") {
        return (
          cycle === "monthly" ||
          cycle === "month" ||
          (plan.price === 0 &&
            plan.trial_days > 0)
        );
      }

      return (
        cycle === "yearly" ||
        cycle === "annual" ||
        cycle === "year"
      );
    });

    return filtered.sort((a, b) => {
      if (
        a.price === 0 &&
        a.trial_days > 0
      ) {
        return -1;
      }

      if (
        b.price === 0 &&
        b.trial_days > 0
      ) {
        return 1;
      }

      return a.price - b.price;
    });
  }, [plans, billingCycle]);

  const comparisonRows = useMemo(
    () => getComparisonRows(visiblePlans),
    [visiblePlans],
  );

  return (
    <>
      <main className="min-h-screen bg-[#f7fafc]">
        <section className="relative overflow-hidden bg-[#0A3F61] px-5 py-20 text-white sm:py-28">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3495A1]/20 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#EF8619]/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Pricing
            </Link>

            <div className="mx-auto mt-12 max-w-4xl text-center">
              <Sparkles
                size={32}
                className="mx-auto text-[#EF8619]"
              />

              <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
                Compare PhotoOS Plans
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Compare pricing, features and limits
                across PhotoOS plans for photographers
                and studios.
              </p>

              <div className="mx-auto mt-9 inline-flex rounded-full border border-white/10 bg-white/10 p-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setBillingCycle("monthly")
                  }
                  className={`rounded-full px-7 py-3 text-sm font-bold transition ${
                    billingCycle === "monthly"
                      ? "bg-white text-[#0A3F61]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setBillingCycle("annual")
                  }
                  className={`rounded-full px-7 py-3 text-sm font-bold transition ${
                    billingCycle === "annual"
                      ? "bg-white text-[#0A3F61]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            {loading ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="flex items-center gap-3 text-[#0A3F61]">
                  <Loader2
                    size={22}
                    className="animate-spin"
                  />
                  Loading plans...
                </div>
              </div>
            ) : error ? (
              <div className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
                <p className="font-semibold text-red-700">
                  Unable to load pricing plans.
                </p>

                <p className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              </div>
            ) : visiblePlans.length === 0 ? (
              <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center">
                <p className="font-semibold text-[#0A3F61]">
                  No {billingCycle} plans are currently
                  available.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF8619]">
                    Plan comparison
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0A3F61] sm:text-4xl">
                    Compare every plan side by side.
                  </h2>

                  <p className="mt-3 max-w-2xl text-slate-500">
                    Every limit and feature below is taken
                    directly from the active PhotoOS pricing
                    plans.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-[30px] border border-slate-200 bg-white shadow-xl">
                  <div
                    className="grid min-w-[980px]"
                    style={{
                      gridTemplateColumns: `230px repeat(${visiblePlans.length}, minmax(220px, 1fr))`,
                    }}
                  >
                    <div className="border-b border-slate-200 bg-slate-50 p-6">
                      <p className="text-xs font-black uppercase tracking-wider text-[#0A3F61]">
                        Features & Limits
                      </p>
                    </div>

                    {visiblePlans.map((plan) => (
                      <div
                        key={plan.id}
                        className={`border-b border-l border-slate-200 p-6 ${
                          plan.price === 0
                            ? "bg-[#0A3F61]"
                            : "bg-white"
                        }`}
                      >
                        {plan.price === 0 &&
                          plan.trial_days > 0 && (
                            <span className="inline-flex rounded-full bg-[#EF8619] px-3 py-1 text-[11px] font-black text-white">
                              FREE TRIAL
                            </span>
                          )}

                        <h3
                          className={`mt-3 text-xl font-black ${
                            plan.price === 0
                              ? "text-white"
                              : "text-[#0A3F61]"
                          }`}
                        >
                          {plan.name}
                        </h3>

                        <p
                          className={`mt-2 min-h-[48px] text-sm leading-6 ${
                            plan.price === 0
                              ? "text-white/60"
                              : "text-slate-500"
                          }`}
                        >
                          {plan.description}
                        </p>

                        <div
                          className={`mt-5 text-2xl font-black ${
                            plan.price === 0
                              ? "text-white"
                              : "text-[#0A3F61]"
                          }`}
                        >
                          {formatPrice(
                            plan.price,
                            plan.currency,
                          )}

                          {plan.price > 0 && (
                            <span className="ml-1 text-xs font-semibold opacity-50">
                              /
                              {billingCycle ===
                              "monthly"
                                ? "mo"
                                : "yr"}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    {comparisonRows.map((row) => (
                      <div
                        key={row.key}
                        className="contents"
                      >
                        <div className="flex items-center border-b border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-600">
                          {row.label}
                        </div>

                        {visiblePlans.map((plan) => {
                          const value = getCellValue(
                            plan,
                            row,
                            visiblePlans,
                          );

                          return (
                            <div
                              key={`${plan.id}-${row.key}`}
                              className="flex min-h-[68px] items-center justify-center border-b border-l border-slate-200 p-4"
                            >
                              {row.type === "limit"
                                ? renderLimitValue(
                                    value as string | null,
                                    row,
                                  )
                                : renderFeatureValue(
                                    value as
                                      | string
                                      | boolean
                                      | null,
                                  )}
                            </div>
                          );
                        })}
                      </div>
                    ))}

                    <div className="bg-slate-50 p-5" />

                    {visiblePlans.map((plan) => (
                      <div
                        key={`${plan.id}-cta`}
                        className="border-l border-slate-200 bg-white p-5"
                      >
                        <Link
                          href={`/onboarding/studio?planId=${encodeURIComponent(plan.id)}&planCode=${encodeURIComponent(plan.plan_code)}&billingCycle=${encodeURIComponent(plan.billing_cycle)}${plan.price === 0 && plan.trial_days > 0 ? "&mode=trial" : ""}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A3F61] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#EF8619]"
                        >
                          {plan.price === 0 &&
                          plan.trial_days > 0
                            ? "Start Free Trial"
                            : "Choose Plan"}

                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck
                      size={18}
                      className="text-[#3495A1]"
                    />
                    Included
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <XCircle
                      size={18}
                      className="text-red-500"
                    />
                    Not included
                  </span>
                </div>
              </>
            )}

            <div className="mt-10 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3F61] transition hover:text-[#EF8619]"
              >
                <ArrowLeft size={16} />
                Back to Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
