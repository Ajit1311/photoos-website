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
import FAQSection from "@/components/home/FAQSection";
import CallToActionSection from "@/components/home/CallToActionSection";

export const metadata: Metadata = {
  title: "PhotoOS | AI-Powered Photography Studio Management Platform",
  description:
    "PhotoOS is the premier AI-powered photography studio management platform. Featuring sub-second selfie face matching, high-res client galleries, photo proofing & selection, studio CRM, and a creative freelancer network.",
  keywords: [
    "PhotoOS",
    "photography studio management software",
    "AI photography software",
    "AI face matching for photographers",
    "client photo gallery software",
    "photo selection and proofing software",
    "photography CRM",
    "wedding photography gallery software",
    "photographer workflow management",
    "selfie face search for events",
    "freelance photographer marketplace",
    "photography business software India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "Manage your photography business with AI-powered studio workflows, client collaboration, galleries, instant selfie face matching, photo proofing, and delivery.",
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
      "The intelligent operating system for modern photography businesses. AI face matching, smart galleries, client proofing & CRM.",
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

        {/* FREQUENTLY ASKED QUESTIONS (with FAQPage JSON-LD Schema) */}
        <FAQSection />

        {/* FINAL CALL TO ACTION */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
