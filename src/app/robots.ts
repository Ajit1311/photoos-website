import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/*",
          "/onboarding",
          "/onboarding/*",
          "/sign-in",
          "/sign-up",
          "/auth",
          "/auth/*",
          "/api",
          "/api/*",
          "/ops-console",
          "/ops-console/*",
          "/admin",
          "/admin/*",
        ],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
          "WhatsApp",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/*",
          "/onboarding",
          "/onboarding/*",
          "/auth",
          "/auth/*",
          "/api",
          "/api/*",
        ],
      },
    ],
    sitemap: "https://photoos.in/sitemap.xml",
    host: "https://photoos.in",
  };
}
