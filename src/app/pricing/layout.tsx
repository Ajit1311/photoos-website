import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoOS Pricing | Photography Management Software",
  description:
    "Explore PhotoOS plans for photographers and studios. Compare features, workflows, AI-powered tools, client galleries and photography business management capabilities.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "PhotoOS Pricing | Photography Management Software",
    description:
      "Explore PhotoOS plans and features for photographers, studios and modern photography businesses.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoOS Pricing | Photography Management Software",
    description:
      "Explore PhotoOS plans and features for photographers and studios.",
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
