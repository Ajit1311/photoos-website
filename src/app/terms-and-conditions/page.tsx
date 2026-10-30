import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | PhotoOS",
  description:
    "Read the PhotoOS Terms and Conditions governing subscription plans, studio usage, client photo galleries, billing policies, and SaaS platform guidelines.",
  keywords: [
    "PhotoOS Terms and Conditions",
    "PhotoOS terms",
    "photography software terms",
    "PhotoOS subscription terms",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | PhotoOS",
    description:
      "Read the PhotoOS Terms and Conditions governing subscription plans, studio usage, client photo galleries, billing policies, and SaaS platform guidelines.",
    url: "/terms-and-conditions",
    siteName: "PhotoOS",
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#102a43]">
      <Header />

      <section className="bg-[#f7fafc] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex rounded-full border border-[#3495A1]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0A3F61] shadow-sm">
            Legal
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.045em] text-[#0A3F61] sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            These Terms and Conditions govern access to and use of PhotoOS,
            a software-as-a-service platform provided by PhotoOS Software Pvt. Ltd.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Version 1.1
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Effective 11 August 2026
            </span>
          </div>
        </div>
      </section>

      <article className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-[#0A3F61] prose-headings:font-black prose-a:text-[#1f70b8]">

            <h2>1. About These Terms</h2>
            <p>
              These Terms and Conditions govern the access to and use of
              PhotoOS, a software-as-a-service platform provided by
              <strong> PhotoOS Software Pvt. Ltd.</strong>
            </p>
            <p>
              PhotoOS provides software features and business workflows for
              photography studios and related businesses, including workspace
              management, client management, project management, event
              management, galleries, asset management, communication,
              payments, subscriptions, analytics, and related services.
            </p>
            <p>
              By creating an account, accessing the platform, or using any
              PhotoOS service, you acknowledge that you have read, understood,
              and agreed to these Terms and Conditions.
            </p>

            <h2>2. User Responsibilities</h2>
            <p>Users must:</p>
            <ul>
              <li>Provide accurate and up-to-date information.</li>
              <li>Maintain the security of their account credentials.</li>
              <li>Prevent unauthorized access to their account.</li>
              <li>
                Use the platform only for lawful business and professional
                purposes.
              </li>
              <li>
                Ensure that they have the necessary rights and permissions for
                personal data, photographs, videos, documents, and other
                content submitted to the platform.
              </li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
            <p>Users are responsible for activity performed through their account.</p>

            <h2>3. Studio and Workspace Data</h2>
            <p>
              PhotoOS workspaces may contain client information, team member
              information, events, projects, photographs, videos, documents,
              communications, billing records, subscription information, and
              other business data.
            </p>
            <p>
              The studio or customer is responsible for ensuring that it has
              the necessary rights, permissions, notices, and lawful basis for
              the business and personal data submitted to PhotoOS.
            </p>

            <h2>4. Personal Data</h2>
            <p>
              PhotoOS Software Pvt. Ltd. may process personal and business
              information as necessary to provide, maintain, secure, and
              improve PhotoOS services.
            </p>
            <p>
              Additional information regarding collection, use, storage,
              disclosure, retention, and data rights is provided in the
              applicable <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>Users must not use PhotoOS for:</p>
            <ul>
              <li>Fraudulent or unlawful activities.</li>
              <li>Unauthorized access to systems or accounts.</li>
              <li>Distribution of malware or harmful code.</li>
              <li>Circumvention of security controls.</li>
              <li>Misuse of another person's identity or credentials.</li>
              <li>Distribution of unlawful content.</li>
              <li>
                Activities that interfere with the operation, security, or
                availability of the platform.
              </li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              PhotoOS software, interface, branding, trademarks,
              documentation, system design, code, features, and related
              intellectual property remain the property of
              <strong> PhotoOS Software Pvt. Ltd.</strong> or its applicable
              licensors.
            </p>
            <p>
              These Terms do not transfer ownership of PhotoOS intellectual
              property to the user.
            </p>
            <p>
              Users retain ownership of content that they independently own and
              upload to PhotoOS, subject to the rights and licenses necessary
              to operate the platform.
            </p>

            <h2>7. User Content</h2>
            <p>
              Users are responsible for ensuring that content uploaded to
              PhotoOS does not violate applicable law or the rights of any
              third party.
            </p>
            <p>
              Users grant PhotoOS the limited rights necessary to host, store,
              process, back up, secure, and provide requested platform services
              for such content.
            </p>
            <p>
              This limited operational license does not transfer ownership of
              user content to PhotoOS Software Pvt. Ltd.
            </p>

            <h2>8. Payments and Subscriptions</h2>
            <p>
              Paid PhotoOS plans are subject to the applicable subscription
              fees, taxes, payment terms, renewal conditions, and other charges
              displayed during checkout or in the relevant subscription
              documentation.
            </p>
            <p>
              Payment gateway and payment processor terms may also apply.
            </p>

            <h3>8.1 Subscription Cancellation</h3>
            <p>
              Users may cancel their subscription through the available PhotoOS
              subscription controls.
            </p>
            <p>
              Unless otherwise required by applicable law or expressly stated
              in a specific offer, cancellation will close access to paid
              subscription features in accordance with the applicable
              subscription cancellation process.
            </p>

            <h3>8.2 Non-Refundable Subscription Payments</h3>
            <p>
              <strong>Subscription fees and payments are generally non-refundable.</strong>
            </p>
            <p>
              Cancellation of a subscription does not create any right or
              entitlement to receive a refund for amounts already paid.
            </p>
            <p>
              No prorated refund, unused-period refund, or automatic refund
              will be provided merely because a subscription is cancelled.
            </p>
            <p>
              Refunds may be considered only in{" "}
              <strong>rare and exceptional circumstances</strong>, at the sole
              discretion of PhotoOS Software Pvt. Ltd., subject to applicable
              law, payment processor rules, and the specific circumstances of
              the transaction.
            </p>
            <p>
              Where an exceptional refund is approved, the amount and method of
              refund may be determined by PhotoOS Software Pvt. Ltd. based on
              the applicable circumstances.
            </p>

            <h2>9. Service Availability</h2>
            <p>
              PhotoOS Software Pvt. Ltd. will use reasonable efforts to keep
              PhotoOS available and operational.
            </p>
            <p>
              Temporary interruptions may occur due to maintenance, security
              updates, infrastructure failures, third-party service failures,
              network problems, force majeure events, or other circumstances
              beyond reasonable control.
            </p>

            <h2>10. Third-Party Services</h2>
            <p>
              PhotoOS may use third-party infrastructure, cloud hosting,
              payment services, email services, analytics services,
              authentication services, or other third-party providers.
            </p>
            <p>
              Third-party services may be subject to their own terms, policies,
              and conditions.
            </p>

            <h2>11. Security</h2>
            <p>
              PhotoOS Software Pvt. Ltd. will use reasonable technical and
              organisational safeguards designed to protect the PhotoOS
              platform and information processed through the platform.
            </p>
            <p>
              Security measures may include encryption, access controls,
              role-based permissions, authentication controls, logging,
              monitoring, and incident-response measures, as appropriate.
            </p>

            <h2>12. Suspension and Termination</h2>
            <p>
              PhotoOS access may be suspended or terminated where reasonably
              necessary due to violation of these Terms, security risks, fraud,
              unlawful activity, non-payment, misuse of the platform, or
              requirements of applicable law.
            </p>
            <p>
              After termination, certain information may be retained where
              required for legal, security, accounting, compliance,
              dispute-resolution, or other legitimate purposes.
            </p>

            <h2>13. Disclaimer</h2>
            <p>PhotoOS is a business software platform.</p>
            <p>
              Information, calculations, workflows, or features provided
              through PhotoOS should not be treated as professional legal, tax,
              financial, accounting, or regulatory advice.
            </p>

            <h2>14. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, PhotoOS
              Software Pvt. Ltd. will not be liable for indirect, incidental,
              special, consequential, or loss-of-profit damages arising from
              the use of PhotoOS.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              lawfully be excluded or limited.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              PhotoOS Software Pvt. Ltd. may update these Terms and Conditions
              when reasonably necessary to reflect changes to the platform,
              services, business practices, legal requirements, or other
              operational requirements.
            </p>
            <p>
              Where legally required, appropriate notice will be provided for
              material changes.
            </p>

            <h2>16. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by the applicable
              laws of India.
            </p>
            <p>
              Any dispute shall be subject to the jurisdiction permitted under
              applicable Indian law.
            </p>

            <h2>17. Contact</h2>
            <p>
              For questions regarding these Terms and Conditions:
            </p>
            <p>
              <strong>PhotoOS Software Pvt. Ltd.</strong>
            </p>
            <p>
              Please use the official support or contact channel provided
              through PhotoOS for support and legal-compliance enquiries.
            </p>
            <p>
              <a href="mailto:support@photoos.in">support@photoos.in</a>
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-[#f7fafc] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="text-[#0A3F61]">PhotoOS Software Pvt. Ltd.</strong>
              {" "}— Terms and Conditions, Version 1.1.
            </p>

            <Link
              href="/privacy-policy"
              className="font-semibold text-[#1f70b8] transition hover:text-[#0A3F61]"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
