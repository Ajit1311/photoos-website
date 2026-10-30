import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Compliance | PhotoOS",
  description:
    "Review legal compliance, privacy safeguards, terms of service agreements, and enterprise security certifications for the PhotoOS photography platform.",
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

