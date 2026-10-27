import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PhotoOS",
    short_name: "PhotoOS",
    description:
      "AI-powered photography management platform for studios and photographers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A3F61",
    lang: "en",
  };
}
