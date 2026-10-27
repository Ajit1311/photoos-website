import {
  supabase,
} from "@/lib/supabase/client";

import type {
  SubscriptionPlan,
} from "@/types/subscription/plan";

export const DEFAULT_SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "plan-trial",
    plan_code: "trial",
    name: "Starter Trial",
    description: "Start exploring PhotoOS with a 14-day full-feature trial.",
    plan_type: "studio",
    price: 0,
    currency: "INR",
    billing_cycle: "monthly",
    trial_days: 14,
    limits: {
      storage_gb: 15,
      watermark_photos: 1000,
      active_events: 5,
      team_members: 2,
    },
    features: {
      "AI Face Search & Smart Culling": true,
      "Client Digital Gallery Delivery": true,
      "Automated WhatsApp & Email Notifications": true,
      "Digital Contracts & Invoicing": true,
    },
    metadata: {},
    is_active: true,
  },
  {
    id: "plan-pro",
    plan_code: "professional",
    name: "Professional",
    description: "Ideal for full-time wedding, event and commercial photographers.",
    plan_type: "studio",
    price: 1499,
    currency: "INR",
    billing_cycle: "monthly",
    trial_days: 0,
    limits: {
      storage_gb: 250,
      watermark_photos: -1,
      active_events: 50,
      team_members: 5,
    },
    features: {
      "Unlimited High-Res Watermarked Galleries": true,
      "Full AI Face-Recognition Engine": true,
      "Studio Custom Branding & Subdomain": true,
      "Automated Payment Collection & Invoices": true,
      "Priority Client Delivery Speeds": true,
    },
    metadata: {},
    is_active: true,
  },
  {
    id: "plan-enterprise",
    plan_code: "studio_enterprise",
    name: "Studio Enterprise",
    description: "For high-volume photography studios, agencies and multi-city teams.",
    plan_type: "studio",
    price: 3499,
    currency: "INR",
    billing_cycle: "monthly",
    trial_days: 0,
    limits: {
      storage_gb: 1000,
      watermark_photos: -1,
      active_events: -1,
      team_members: 20,
    },
    features: {
      "1 TB Cloudflare R2 High-Speed Storage": true,
      "Multi-Member Team Permissions & Roles": true,
      "Advanced CRM, Lead Pipeline & Expense Tracking": true,
      "Custom Watermarks & White-Label Delivery": true,
      "Dedicated 24/7 Priority Support": true,
    },
    metadata: {},
    is_active: true,
  },
];

function asRecord(
  value: unknown,
): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function normalizePlan(
  value: Record<string, unknown>,
): SubscriptionPlan {
  return {
    id: String(value.id),
    plan_code: String(value.plan_code),
    name: String(value.name),
    description: typeof value.description === "string" ? value.description : null,
    plan_type: typeof value.plan_type === "string" ? value.plan_type : "",
    price: Number(value.price ?? 0),
    currency: typeof value.currency === "string" ? value.currency : "INR",
    billing_cycle: typeof value.billing_cycle === "string" ? value.billing_cycle : "monthly",
    trial_days: Number(value.trial_days ?? 0),
    limits: asRecord(value.limits),
    features: asRecord(value.features),
    metadata: asRecord(value.metadata),
    is_active: value.is_active !== false,
  };
}

export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  try {
    const { data, error } = await supabase
      .from("subscription_plans")
      .select(
        `
          id,
          plan_code,
          name,
          description,
          plan_type,
          price,
          currency,
          billing_cycle,
          trial_days,
          limits,
          features,
          metadata,
          is_active
        `,
      )
      .eq("is_active", true);

    if (error) {
      console.warn("[getSubscriptionPlans] Supabase error, serving fallback plans:", error.message);
      return DEFAULT_SUBSCRIPTION_PLANS;
    }

    if (!data || data.length === 0) {
      return DEFAULT_SUBSCRIPTION_PLANS;
    }

    return data.map((plan) => normalizePlan(plan as Record<string, unknown>));
  } catch (err) {
    console.warn("[getSubscriptionPlans] Failed to fetch live plans, using default plans:", err);
    return DEFAULT_SUBSCRIPTION_PLANS;
  }
}
