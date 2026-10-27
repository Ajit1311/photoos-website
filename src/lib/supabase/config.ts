function cleanSupabaseUrl(raw: string): string {
  if (!raw) return "";
  const cleaned = raw.trim().replace(/^['"]+|['"]+$/g, "");
  try {
    const parsed = new URL(cleaned);
    if (parsed.hostname === "supabase.com" && parsed.pathname.includes("/project/")) {
      const match = parsed.pathname.match(/\/project\/([a-z0-9_-]+)/i);
      if (match) return `https://${match[1]}.supabase.co`;
    }
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return cleaned.replace(/\/+$/, "");
  }
}

function cleanKey(raw: string): string {
  if (!raw) return "";
  return raw.trim().replace(/^['"]+|['"]+$/g, "");
}

function getFirstNonEmpty(...vals: (string | undefined)[]): string {
  for (const v of vals) {
    if (v && typeof v === "string" && v.trim().length > 0 && !v.includes("dummy_static_prerender")) {
      return v.trim();
    }
  }
  return "";
}

export const supabaseUrl: string = cleanSupabaseUrl(
  getFirstNonEmpty(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
    process.env.SUPABASE_URL,
  ) || "https://placeholder-project.supabase.co"
);

export const publishableKey: string = cleanKey(
  getFirstNonEmpty(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    process.env.SUPABASE_ANON_KEY,
    process.env.SUPABASE_KEY,
  ) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dummy_static_prerender_key"
);
