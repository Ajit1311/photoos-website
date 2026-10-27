"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { supabase } from "@/lib/supabase/client";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [message, setMessage] =
    useState("Completing secure sign-in...");

  useEffect(() => {
    let cancelled = false;

    async function completeAuthentication() {
      try {
        /*
         * Explicitly consume Supabase authentication callback parameters.
         * Admin-generated magic links may return either a PKCE code or
         * a token_hash. Do not rely only on detectSessionInUrl.
         */
        const code = searchParams.get("code");
        const tokenHash = searchParams.get("token_hash");
        const callbackType = searchParams.get("type");

        const hashParams =
          typeof window !== "undefined"
            ? new URLSearchParams(window.location.hash.replace(/^#/, ""))
            : new URLSearchParams();

        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");

        console.log("[AUTH CALLBACK] params", {
          hasCode: Boolean(code),
          hasTokenHash: Boolean(tokenHash),
          hasAccessToken: Boolean(accessToken),
          hasRefreshToken: Boolean(refreshToken),
          type: callbackType,
        });

        if (code) {
          const { error } =
            await supabase.auth.exchangeCodeForSession(code);

          if (error) {
            throw error;
          }
        } else if (tokenHash) {
          const type =
            callbackType === "magiclink"
              ? "magiclink"
              : "email";

          const { error } =
            await supabase.auth.verifyOtp({
              token_hash: tokenHash,
              type,
            });

          if (error) {
            throw error;
          }
        } else if (accessToken && refreshToken) {
          const { error } =
            await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });

          if (error) {
            throw error;
          }
        }

        let session = null;

        for (let attempt = 0; attempt < 20; attempt += 1) {
          const { data, error } = await supabase.auth.getSession();

          if (error) {
            throw error;
          }

          if (data.session) {
            session = data.session;
            break;
          }

          await new Promise((resolve) =>
            setTimeout(resolve, 150),
          );
        }

        if (!session?.user) {
          throw new Error(
            "Supabase authentication session could not be established.",
          );
        }

        // Verify that the newly established access token is actually
        // accepted by Supabase Auth before redirecting to the protected app.
        const {
          data: verifiedUser,
          error: verifiedUserError,
        } = await supabase.auth.getUser(session.access_token);

        if (verifiedUserError || !verifiedUser.user) {
          throw (
            verifiedUserError ??
            new Error(
              "Supabase authentication token could not be verified.",
            )
          );
        }

        console.log("[AUTH CALLBACK] authenticated session verified", {
          userId: verifiedUser.user.id,
          email: verifiedUser.user.email ?? null,
          hasAccessToken: Boolean(session.access_token),
          expiresAt: session.expires_at ?? null,
        });

        if (cancelled) {
          return;
        }

        const next =
          searchParams.get("next") ||
          "/freelancer/create?resume=1";

        /*
         * Only allow local application paths.
         * Never redirect to an arbitrary external URL.
         */
        if (
          !next.startsWith("/") ||
          next.startsWith("//")
        ) {
          throw new Error(
            "Invalid authentication redirect.",
          );
        }

        setMessage("Sign-in successful. Continuing...");

        router.replace(next);
      } catch (error) {
        console.error(
          "[AUTH CALLBACK]",
          error,
        );

        if (!cancelled) {
          setMessage(
            error instanceof Error
              ? error.message
              : "Unable to complete secure sign-in.",
          );
        }
      }
    }

    void completeAuthentication();

    return () => {
      cancelled = true;
    };
  }, [router, searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7fafc] px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
        </div>

        <h1 className="text-xl font-semibold text-slate-900">
          Secure Sign-In
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          {message}
        </p>
      </div>
    </main>
  );
}


export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#071f31] px-5">
          <div className="rounded-2xl bg-white/10 px-6 py-5 text-sm font-semibold text-white backdrop-blur-md">
            Completing secure sign-in...
          </div>
        </main>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
