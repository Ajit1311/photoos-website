"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ScanFace,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Search,
  ArrowRight,
  Camera,
  Play,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Guest Uploads or Snaps a Selfie",
    desc: "Guests scan a QR code at your wedding or event venue and take a quick selfie directly in their browser — no app installation needed.",
  },
  {
    num: "02",
    title: "Neural Engine Indexes in Real-Time",
    desc: "PhotoOS deep learning algorithms match facial landmarks against thousands of high-resolution RAW & JPEG photos in under a second.",
  },
  {
    num: "03",
    title: "Instant Personalized Gallery",
    desc: "Guests instantly view and download high-resolution photos of themselves and their loved ones without wading through 3,000 files.",
  },
];

export default function AIFaceMatchingShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="ai" className="relative overflow-hidden bg-[#0A3F61] py-24 sm:py-32 text-white">
      {/* Background Lighting Mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#3495A1]/20 blur-[140px]" />
        <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-[#EF8619]/15 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top Header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EF8619] backdrop-blur-md"
            >
              <Sparkles size={14} />
              AI Face Matching Engine
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
            >
              One selfie.{" "}
              <span className="bg-gradient-to-r from-[#EF8619] via-[#ffaa47] to-[#3495A1] bg-clip-text text-transparent">
                Every candid moment found.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              Eliminate the endless WhatsApp messages asking &quot;Where are my photos?&quot;.
              Our proprietary facial clustering engine lets event guests discover
              their memories in sub-second speed.
            </p>
          </motion.div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT: Steps selector */}
          <div className="space-y-4 lg:col-span-5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  activeStep === idx
                    ? "border-[#EF8619] bg-white/10 shadow-lg backdrop-blur-xl"
                    : "border-white/10 bg-white/5 hover:bg-white/[0.08]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black transition ${
                      activeStep === idx
                        ? "bg-[#EF8619] text-white shadow-md shadow-[#EF8619]/40"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#EF8619] transition hover:text-white"
              >
                Try AI Face Search with your next event
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT: Video Mockup Device Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-7"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#3495A1]/40 via-transparent to-[#EF8619]/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-slate-950/80 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
              {/* Device Top Bar */}
              <div className="mb-3 flex items-center justify-between px-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">
                    Neural Face Cluster v2.4
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <ScanFace size={14} className="text-[#EF8619]" />
                  <span>Sub-second inference</span>
                </div>
              </div>

              {/* Video Element */}
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <video
                  src="/videos/ai-face-search.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="AI-powered face matching in PhotoOS"
                  className="h-[360px] sm:h-[460px] w-full rounded-2xl object-cover"
                />

                {/* Live Scanning Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl border border-white/20 bg-[#061826]/90 p-4 sm:p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Live Scanning Status
                      </p>
                      <p className="mt-0.5 text-sm sm:text-base font-bold text-white">
                        Matching face embeddings across 2,450 photos...
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EF8619]/20 text-[#EF8619]">
                      <ScanFace size={22} />
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center gap-3">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#3495A1] to-[#EF8619]" />
                    </div>
                    <span className="text-xs font-bold text-[#EF8619]">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

