import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/onboarding/",
          "/sign-in/",
          "/sign-up/",
          "/auth/callback/",
          "/api/chat/",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot",
          "CCBot",
        ],
        allow: "/",
        disallow: [
          "/dashboard/",
          "/onboarding/",
          "/sign-in/",
          "/sign-up/",
          "/auth/callback/",
        ],
      },
    ],
    sitemap: "https://photoos.ai/sitemap.xml",
    host: "https://photoos.ai",
  };
}
