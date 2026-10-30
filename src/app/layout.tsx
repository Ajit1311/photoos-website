import ClientWidgets from "@/components/common/ClientWidgets";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://photoos.in";
const siteName = "PhotoOS";
const siteDescription =
  "PhotoOS is the premier AI-powered photography studio management platform. Featuring sub-second AI face matching, high-res client galleries, photo proofing & selection, studio CRM, and a creative freelancer network.";

export const viewport: Viewport = {
  themeColor: "#0A3F61",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "PhotoOS | AI-Powered Photography Studio Management Platform",
    template: "%s | PhotoOS",
  },

  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "PhotoOS Software Pvt Ltd", url: siteUrl }],
  creator: "PhotoOS Software Pvt Ltd",
  publisher: "PhotoOS Software Pvt Ltd",
  category: "technology",

  keywords: [
    "PhotoOS",
    "PhotoOS Software Pvt Ltd",
    "AI photography software",
    "photography studio management software",
    "AI face matching for photographers",
    "client photo gallery software",
    "photo selection and proofing software",
    "wedding album photo selection software",
    "photography CRM India",
    "wedding photography gallery",
    "photographer workflow software",
    "selfie face search for weddings",
    "QR code event photo sharing",
    "freelance photographer marketplace",
    "hire wedding second shooter India",
    "photography business software India",
    "Kwikpic alternative India",
    "FotoOwl alternative",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "PhotoOS | AI-Powered Photography Studio Management Platform",
    description:
      "Run your photography business smarter with AI-powered studio workflows, client galleries, instant selfie face matching, photo proofing, and delivery.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
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
    creator: "@photoos_in",
  },

  verification: {
    google: "googleb971c67a11b2ebf2",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://photoos.in/#organization",
      name: "PhotoOS Software Pvt Ltd",
      alternateName: ["PhotoOS", "PhotoOS Technologies"],
      url: "https://photoos.in",
      logo: {
        "@type": "ImageObject",
        url: "https://photoos.in/logo/photoos-logo-v2.png",
      },
      email: "support@photoos.in",
      telephone: "+919699599142",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gadhinglaj",
        addressLocality: "Gadhinglaj, Kolhapur",
        addressRegion: "Maharashtra",
        postalCode: "416502",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/photoos_software_pvt_ltd",
        "https://www.facebook.com/photoospvtltd",
        "https://wa.me/919699599142",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919699599142",
          email: "support@photoos.in",
          contactType: "customer support",
          contactOption: "WhatsApp",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      ],
      description:
        "PhotoOS provides AI-powered studio management software, client galleries, and facial recognition workflows for professional photographers.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://photoos.in/#software",
      name: "PhotoOS",
      applicationCategory: "BusinessApplication, PhotographySoftware",
      operatingSystem: "Web, iOS, Android",
      description:
        "AI-powered photography studio management platform with sub-second selfie face matching, high-res client galleries, photo proofing, CRM, and freelancer network.",
      url: "https://photoos.in",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0",
        highPrice: "1999",
        offerCount: "4",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1250",
        bestRating: "5",
      },
      featureList: [
        "AI Face Matching & Facial Search for Event Guests",
        "High-Resolution Branded Client Digital Galleries",
        "Interactive Client Photo Proofing, Hearts & Notes",
        "In-Gallery Direct Client Messaging",
        "Creative Freelancer Network (Photographers, Videographers, Editors)",
        "Studio CRM & Shoot Scheduling",
        "Adobe Lightroom Selection Sync",
        "Enterprise AES-256 Cloud Encryption & Privacy Control",
      ],
      provider: {
        "@id": "https://photoos.in/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://photoos.in/#website",
      url: "https://photoos.in",
      name: "PhotoOS",
      description:
        "AI-Powered Photography Studio Management Platform",
      publisher: {
        "@id": "https://photoos.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect candidates to eliminate network connection latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://pagead2.googlesyndication.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* Google AdSense Verification & Auto Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2185745695212755"
          crossOrigin="anonymous"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N46CW2TV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager (gtm.js) - loaded with lazyOnload so it never blocks LCP or initial hydration */}
        <Script
          id="gtm-container"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N46CW2TV"
        />

        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-lib"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-6DDPEYLZSB"
        />
        <Script
          id="gtag-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6DDPEYLZSB', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {children}
        <ClientWidgets />
      </body>
    </html>
  );
}
