import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://photoos.ai";

  const staticRoutes = [
    "",
    "/about",
    "/pricing",
    "/pricing/compare",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "weekly" as const,
      priority:
        route === ""
          ? 1
          : route === "/pricing"
            ? 0.9
            : route === "/blog"
              ? 0.8
              : 0.7,
    })),

    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
