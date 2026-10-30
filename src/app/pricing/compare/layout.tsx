import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Studio Plans & Features | PhotoOS vs Alternatives",
  description:
    "Compare PhotoOS studio plans side by side. Storage quotas, AI face indexing limits, client galleries, proofing options, and freelancer hiring features.",
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
      "Compare PhotoOS studio plans side by side. Storage quotas, AI face indexing limits, client galleries, proofing options, and freelancer hiring features.",
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
      "Compare PhotoOS studio plans side by side. Storage quotas, AI face indexing limits, client galleries, proofing options, and freelancer hiring features.",
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
