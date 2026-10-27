import PhotoOSChatbot from "@/components/chat/PhotoOSChatbot";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://photoos.ai";
const siteName = "PhotoOS";
const siteDescription =
  "PhotoOS is an AI-powered photography management platform that helps studios and photographers manage clients, projects, events, galleries, photos and delivery in one place.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "PhotoOS | AI-Powered Photography Management Platform",
    template: "%s | PhotoOS",
  },

  description: siteDescription,

  applicationName: siteName,

  keywords: [
    "PhotoOS",
    "photography management software",
    "photography studio management",
    "AI photography software",
    "photography CRM",
    "photo gallery software",
    "AI face search",
    "photographer workflow",
    "photography business software",
    "client gallery software",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "PhotoOS | AI-Powered Photography Management Platform",
    description:
      "Run your photography business smarter with AI-powered studio management, client galleries, collaboration and photo delivery.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo/photoos-logo-v2.png",
        width: 445,
        height: 97,
        alt: "PhotoOS - AI-Powered Photography Management Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PhotoOS | AI-Powered Photography Management Platform",
    description:
      "The intelligent platform for modern photography businesses.",
    images: ["/logo/photoos-logo-v2.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PhotoOSChatbot />
      </body>
    </html>
  );
}
