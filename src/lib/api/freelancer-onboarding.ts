
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

type OtpResponse = {
  success: boolean;
  expires_in_seconds?: number;
  retry_after_seconds?: number;
  verified?: boolean;
  bootstrapped?: boolean;
  email?: string;
  supabase_user_id?: string;
  supabase_action_link?: string;
  verified_at?: string;
  error?: string | { message?: string };
};

function getErrorMessage(
  data: OtpResponse | null,
  fallback: string,
): string {
  return (
    (typeof data?.error === "string"
      ? data.error
      : data?.error?.message) ??
    fallback
  );
}

async function callEmailOtp(
  body: Record<string, unknown>,
): Promise<OtpResponse> {
  if (!SUPABASE_URL) {
    throw new Error("Supabase URL is not configured.");
  }

  const response = await fetch(
    `${SUPABASE_URL}/functions/v1/email-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const data =
    (await response.json().catch(() => null)) as
      | OtpResponse
      | null;

  if (!response.ok || !data?.success) {
    throw new Error(
      getErrorMessage(
        data,
        "Unable to process email OTP.",
      ),
    );
  }

  return data;
}

export async function sendFreelancerEmailOtp(
  email: string,
): Promise<OtpResponse> {
  return callEmailOtp({
    action: "send_bootstrap",
    email: email.trim(),
  });
}

export async function verifyFreelancerEmailOtp(
  email: string,
  otp: string,
): Promise<OtpResponse> {
  const callbackUrl =
    new URL(
      "/auth/callback",
      window.location.origin,
    );

  callbackUrl.searchParams.set(
    "next",
    "/freelancer/create?resume=1",
  );

  const data = await callEmailOtp({
    action: "verify_and_bootstrap",
    email: email.trim(),
    otp: otp.trim(),
    redirect_to: callbackUrl.toString(),
  });

  if (
    data.verified !== true ||
    data.bootstrapped !== true ||
    !data.supabase_action_link
  ) {
    throw new Error(
      "Email OTP verification could not be completed.",
    );
  }

  return data;
}

export async function completeFreelancerOtpLogin(
  email: string,
  otp: string,
): Promise<void> {
  const data =
    await verifyFreelancerEmailOtp(
      email,
      otp,
    );

  if (!data.supabase_action_link) {
    throw new Error(
      "Supabase authentication link is missing.",
    );
  }

  window.location.assign(
    data.supabase_action_link,
  );

  await new Promise<void>(() => {
    // Navigation continues in the browser.
  });
}

