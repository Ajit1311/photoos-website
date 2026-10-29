import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Studio Plans & Features | PhotoOS vs Alternatives",
  description:
    "Compare PhotoOS studio plans side-by-side. Storage limits, AI face indexing quotas, client gallery limits, watermark options, and freelancer hiring features.",
  keywords: [
    "compare photography software plans",
    "PhotoOS plan comparison",
    "photography studio feature comparison",
    "AI face match limits",
    "photography client gallery comparison",
  ],
  alternates: {
    canonical: "/pricing/compare",
  },
  openGraph: {
    title: "Compare PhotoOS Plans & Features",
    description:
      "Detailed side-by-side comparison of PhotoOS plans, limits, and studio capabilities.",
    url: "/pricing/compare",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS Plan Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare PhotoOS Plans & Features",
    description:
      "Detailed side-by-side comparison of PhotoOS plans, limits, and studio capabilities.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

export default function PricingCompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
