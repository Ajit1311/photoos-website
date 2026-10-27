import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PhotoOS",
  description:
    "PhotoOS Privacy Policy explains how information may be collected and processed to provide authentication, studio management, media management, workflow, communication and related platform services.",
  keywords: [
    "PhotoOS Privacy Policy",
    "privacy policy",
    "photography software privacy",
    "PhotoOS data privacy",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PhotoOS",
    description:
      "Learn how PhotoOS may collect and process information required to provide and secure its platform services.",
    url: "/privacy-policy",
    siteName: "PhotoOS",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#102a43]">
      <Header />

      <section className="bg-[#f7fafc] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex rounded-full border border-[#3495A1]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0A3F61] shadow-sm">
            Legal
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            This Privacy Policy explains how information may be collected and
            processed when using PhotoOS.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Version 1.0
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              PhotoOS Software Pvt. Ltd.
            </span>
          </div>
        </div>
      </section>

      <article className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-[#0A3F61] prose-headings:font-black prose-a:text-[#1f70b8]">
            <h2>1. Overview</h2>
            <p>
              PhotoOS may collect and process information necessary to provide
              authentication, studio management, media management, workflow,
              communication, and related platform services.
            </p>

            <p>
              Personal and business information must be handled in accordance
              with applicable privacy and data protection laws.
            </p>

            <p>
              By using the platform, you acknowledge the collection and
              processing of information as required to operate and secure the
              service.
            </p>

            <h2>2. Information Used by PhotoOS</h2>
            <p>
              Information may be processed as necessary to authenticate users,
              provide studio and workspace functionality, manage media and
              workflows, support communication, and operate related PhotoOS
              services.
            </p>

            <h2>3. Purpose of Processing</h2>
            <p>
              Information may be processed where necessary to provide,
              maintain, secure, and operate PhotoOS services and related
              platform functionality.
            </p>

            <h2>4. Privacy and Data Protection</h2>
            <p>
              Personal and business information is expected to be handled in
              accordance with applicable privacy and data protection laws.
            </p>

            <h2>5. Contact</h2>
            <p>
              For privacy-related questions or enquiries, please contact
              PhotoOS through our official contact channel.
            </p>

            <p>
              <a href="mailto:hello@photoos.ai">hello@photoos.ai</a>
            </p>

            <h2>6. Related Legal Documents</h2>
            <p>
              The use of PhotoOS is also governed by our{" "}
              <Link href="/terms-and-conditions">
                Terms and Conditions
              </Link>
              .
            </p>

            <p>
              For general enquiries, please visit our{" "}
              <Link href="/contact">Contact page</Link>.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-[#f7fafc] p-6 sm:p-8">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#0A3F61]">PhotoOS Software Pvt. Ltd.</strong>
              {" "}— Privacy Policy, Version 1.0.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
