import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Freelancer Profile | PhotoOS Marketplace",
  description:
    "Register as a freelance photographer, cinematographer, drone pilot, or editor on PhotoOS. Showcase your portfolio and get hired by top photo studios.",
  keywords: [
    "freelance photographer registration",
    "join photography marketplace",
    "freelance photo editor jobs",
    "second shooter registration",
    "PhotoOS freelancer onboarding",
  ],
  alternates: {
    canonical: "/freelancer/create",
  },
  openGraph: {
    title: "Create Freelancer Profile | PhotoOS",
    description:
      "Register as a freelance photographer, cinematographer, drone pilot, or editor on PhotoOS. Showcase your portfolio and get hired by top photo studios.",
    url: "/freelancer/create",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Freelancer Profile | PhotoOS",
    description:
      "Register as a freelance photographer, cinematographer, drone pilot, or editor on PhotoOS. Showcase your portfolio and get hired by top photo studios.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

export default function FreelancerCreateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

