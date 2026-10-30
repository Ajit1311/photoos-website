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
import DownloadSecurityDemo from "@/components/home/DownloadSecurityDemo";
import FAQSection from "@/components/home/FAQSection";
import CallToActionSection from "@/components/home/CallToActionSection";

export const metadata: Metadata = {
  title: "PhotoOS | AI-Powered Photography Studio Management Platform",
  description:
    "PhotoOS is an AI photography studio platform with instant face match galleries, client proofing, CRM, and freelancer network for modern photographers.",
  keywords: [
    // Tier 1: Low competition + high intent
    "Kwikpic alternative India",
    "FotoOwl alternative India",
    "photographer marketplace India",
    "hire wedding second shooter India",
    "wedding photographer CRM India",
    "photography studio management software India",
    "selfie face search wedding photos India",

    // Tier 2: Search & Workflow intent
    "WhatsApp photo delivery wedding guests",
    "QR code wedding photo sharing",
    "photo selection software for wedding album",
    "how to deliver wedding photos to guests",
    "Pixieset alternative India",
    "Pic-Time alternative India",

    // Tier 3: Local + Targeted Brand
    "photography software Kolhapur",
    "photography software Maharashtra",
    "PhotoOS",
    "PhotoOS photography",
    "PhotoOS app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "Manage your photography studio with AI-powered workflows, client galleries, instant face matching, photo proofing, CRM, and creative freelancer hiring.",
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
      "The intelligent operating system for modern photography businesses. AI face matching, smart galleries, client proofing, and studio CRM tools.",
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

        {/* SMART DOWNLOAD LOCK & SCREENSHOT GUARD DEMO */}
        <DownloadSecurityDemo />

        {/* FREQUENTLY ASKED QUESTIONS (with FAQPage JSON-LD Schema) */}
        <FAQSection />

        {/* FINAL CALL TO ACTION */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
