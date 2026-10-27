
import { supabase } from "@/lib/supabase/client";

async function getSupabaseAccessToken(): Promise<string | null> {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return data.session?.access_token ?? null;
}


export interface UpsertFreelancerProfileInput {
  display_name: string;
  bio?: string;
  phone?: string;
  email?: string;
  profile_image_url?: string;
  experience_years?: number;
  primary_role?: string;
  skills?: string[];
  location?: string;
  city?: string;
  state?: string;
  country?: string;
  portfolio_urls?: unknown[];
  instagram_url?: string;
  facebook_url?: string;
  youtube_url?: string;
  website_url?: string;
  daily_rate?: number;
  currency?: string;
  minimum_booking_days?: number;
  cancellation_policy?: string;
}

export interface UpsertFreelancerProfileResponse {
  success: boolean;
  data: {
    freelancer_id: string;
    profile_id: string;
  };
}

export async function upsertFreelancerProfile(
  input: UpsertFreelancerProfileInput,
): Promise<UpsertFreelancerProfileResponse> {
  const token =
    await getSupabaseAccessToken();

  if (!token) {
    throw new Error(
      "You must be signed in to continue.",
    );
  }

  const {
    data,
    error,
  } =
    await supabase.functions.invoke(
      "firebase-marketplace-freelancers",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
        body: {
          action: "upsert",
          ...input,
        },
      },
    );

  if (error) {
    console.error(
      "[freelancer-marketplace] UPSERT EDGE ERROR:",
      error,
    );

    console.error(
      "[freelancer-marketplace] UPSERT RESPONSE:",
      data,
    );

    throw error;
  }

  if (
    !data?.success ||
    !data?.data?.freelancer_id
  ) {
    throw new Error(
      data?.error?.message ??
        data?.error ??
        "Freelancer profile could not be saved.",
    );
  }

  return data as UpsertFreelancerProfileResponse;
}


export interface ProvisionFreelancerCredentialsResponse {
  success: boolean;
  credentials_provisioned: boolean;
  email_sent: boolean;
  already_provisioned?: boolean;
  freelancer_id: string;
  email: string | null;
}

export async function provisionFreelancerCredentials(): Promise<
  ProvisionFreelancerCredentialsResponse
> {
  const token = await getSupabaseAccessToken();

  if (!token) {
    throw new Error(
      "You must be signed in to continue.",
    );
  }

  const {
    data,
    error,
  } = await supabase.functions.invoke(
    "firebase-marketplace-freelancers",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        action:
          "provision_freelancer_credentials",
      },
    },
  );

  if (error) {
    console.error(
      "[freelancer-marketplace] CREDENTIAL PROVISION ERROR:",
      error,
    );

    console.error(
      "[freelancer-marketplace] CREDENTIAL PROVISION RESPONSE:",
      data,
    );

    throw error;
  }

  if (
    !data?.success ||
    !data?.credentials_provisioned
  ) {
    throw new Error(
      data?.error?.message ??
        data?.error ??
        "Freelancer login credentials could not be created.",
    );
  }

  return data as ProvisionFreelancerCredentialsResponse;
}
