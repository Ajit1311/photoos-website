"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const faqs = [
  {
    q: "How does PhotoOS AI Face Matching work for wedding & event guests?",
    a: "Guests scan a QR code at your venue or open your gallery link, take a quick selfie in their phone browser without installing any app, and PhotoOS neural facial recognition matches their face against thousands of high-resolution event photos in under a second. Guests instantly see and download only their photos.",
  },
  {
    q: "How does PhotoOS eliminate WhatsApp screenshot chaos for photo proofing?",
    a: "Instead of clients sending blurry WhatsApp screenshots and confusing image numbers like 'IMG_4821 vs IMG_4822', PhotoOS lets clients favorite photos with a heart, leave pinpoint retouching notes directly on each picture, and approve selections in one click. Studios can export approved selections straight into Adobe Lightroom Classic or Capture One.",
  },
  {
    q: "Is client photograph privacy and biometric data secure?",
    a: "Absolutely. PhotoOS is built around privacy-first principles with 256-bit TLS/SSL encryption. Galleries can be secured with custom PINs, passwords, and restricted download links. Facial vector embeddings are sandboxed per event and are strictly never sold, shared, or used to train public AI models.",
  },
  {
    q: "Can I hire second shooters and drone pilots through the Freelancer Marketplace?",
    a: "Yes. PhotoOS includes an on-demand creative talent marketplace where photography studios can browse, chat with, and book verified second shooters, drone cinematographers, candid photographers, and album retouchers based on verified gear, locations, and client reviews.",
  },
  {
    q: "Does PhotoOS offer a free trial for photography studios?",
    a: "Yes, PhotoOS provides a 7-day fully functional free trial with full access to smart galleries, client proofing, and AI face search so you can test it on your upcoming shoots. No credit card is required to sign up.",
  },
  {
    q: "Can I export client photo selections directly into Adobe Lightroom?",
    a: "Yes! Once a client completes and signs off their album selection quota, you can copy Lightroom-formatted search strings or export selection lists directly into Adobe Lightroom Classic to start editing immediately.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-white py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0A3F61]/15 bg-[#0A3F61]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A3F61]">
            <HelpCircle size={14} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl">
            Everything you need to know about PhotoOS.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Got questions about AI face matching, client proofing, or studio workflows?
            Here are the answers.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f8fafc] transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A3F61]">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200/70 text-slate-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#0A3F61] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-200/80 px-6 pt-4 pb-6 text-sm sm:text-base leading-relaxed text-slate-600">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
