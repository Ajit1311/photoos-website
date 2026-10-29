import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsTicker from "@/components/home/StatsTicker";
import FeatureBentoGrid from "@/components/home/FeatureBentoGrid";
import AIFaceMatchingShowcase from "@/components/home/AIFaceMatchingShowcase";
import ClientCollaborationSection from "@/components/home/ClientCollaborationSection";
import FreelancerMarketplaceSection from "@/components/home/FreelancerMarketplaceSection";
import WorkflowTimeline from "@/components/home/WorkflowTimeline";
import SecurityPrivacyCard from "@/components/home/SecurityPrivacyCard";
import CallToActionSection from "@/components/home/CallToActionSection";

export const metadata: Metadata = {
  title: "PhotoOS | AI-Powered Photography Studio Management Platform",
  description:
    "Manage your photography studio, clients, projects, events, galleries, photo selection and delivery with PhotoOS, an AI-powered photography management platform.",
  keywords: [
    "PhotoOS",
    "photography studio management software",
    "photography management platform",
    "photography CRM",
    "AI photography software",
    "photo gallery software",
    "AI face search",
    "photographer workflow",
    "client photo selection",
    "photographer gallery proofing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "Manage your photography business with AI-powered studio workflows, client collaboration, galleries, photo selection and delivery.",
    url: "/",
    siteName: "PhotoOS",
    type: "website",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS - AI-Powered Photography Studio Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "AI-powered studio management, client galleries, collaboration and photo delivery for modern photography businesses.",
    images: ["/logo/photoos-logo-v2.png"],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#3495A1] selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION with reveal animations & interactive studio mockup */}
        <HeroSection />

        {/* STATS & SOCIAL PROOF TICKER */}
        <StatsTicker />

        {/* BENTO GRID OF CORE FEATURES */}
        <FeatureBentoGrid />

        {/* AI FACE MATCHING SHOWCASE & VIDEO PLAYER */}
        <AIFaceMatchingShowcase />

        {/* CLIENT COLLABORATION & PHOTO PROOFING */}
        <ClientCollaborationSection />

        {/* CREATIVE FREELANCER MARKETPLACE */}
        <FreelancerMarketplaceSection />

        {/* 8-STEP STUDIO WORKFLOW */}
        <WorkflowTimeline />

        {/* ENTERPRISE PRIVACY & SECURITY */}
        <SecurityPrivacyCard />

        {/* FINAL CALL TO ACTION */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
