import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare PhotoOS Plans | Photography Management Software",
  description:
    "Compare PhotoOS plans, features and limits to understand which photography management capabilities are available across each plan.",
  alternates: {
    canonical: "/pricing/compare",
  },
  openGraph: {
    title: "Compare PhotoOS Plans",
    description:
      "Compare PhotoOS plans, features and capabilities for photography studios and photographers.",
    url: "/pricing/compare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare PhotoOS Plans",
    description:
      "Compare PhotoOS plans, features and capabilities.",
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
