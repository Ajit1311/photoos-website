import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans | Studio Management & AI Face Search | PhotoOS",
  description:
    "Explore PhotoOS plans for photographers and studios starting with a 7-day free trial. AI face search, unlimited client galleries, photo proofing, CRM, and marketplace access.",
  keywords: [
    "PhotoOS pricing",
    "photography software pricing",
    "photography CRM cost",
    "AI face match gallery price",
    "photo proofing software pricing",
    "free trial photography studio software",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "PhotoOS Pricing & Plans | Photography Studio Software",
    description:
      "Explore flexible PhotoOS plans with a 7-day free trial. AI face matching, client galleries, proofing, and studio workflows.",
    url: "/pricing",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS Pricing & Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoOS Pricing & Plans | Photography Studio Software",
    description:
      "Explore flexible PhotoOS plans with a 7-day free trial. AI face matching, client galleries, proofing, and studio workflows.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
