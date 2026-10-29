import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PhotoOS | AI-Powered Photography Studio Platform",
    short_name: "PhotoOS",
    description:
      "AI-powered photography studio management platform with AI face matching, client galleries, photo proofing, CRM, and freelancer network.",
    start_url: "/",
    display: "standalone",
    background_color: "#061826",
    theme_color: "#0A3F61",
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
