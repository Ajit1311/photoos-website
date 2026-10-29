import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Compliance | PhotoOS",
  description:
    "Review legal compliance, terms of service agreements, privacy standards, and user policies for PhotoOS.",
  alternates: {
    canonical: "/legal-compliance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalComplianceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
