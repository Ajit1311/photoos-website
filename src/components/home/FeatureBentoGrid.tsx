"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Images,
  MessageCircle,
  ScanFace,
  ShieldCheck,
  BriefcaseBusiness,
  ArrowRight,
  Check,
  CheckCircle2,
  Lock,
  Layers,
} from "lucide-react";

export default function FeatureBentoGrid() {
  return (
    <section id="features" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#EF8619]/25 bg-[#EF8619]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EF8619]"
          >
            <Sparkles size={13} />
            More Than A Gallery
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl lg:text-[50px] lg:leading-[1.1]"
          >
            Everything your photography studio needs to thrive.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600"
          >
            Standard cloud drives and chat apps create friction, scattered
            feedback, and delayed album approvals. PhotoOS connects your
            entire client journey into one intuitive, AI-accelerated experience.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: AI Face Search (Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-gradient-to-br from-[#061826] to-[#0A3F61] p-8 sm:p-10 text-white lg:col-span-2 shadow-xl shadow-slate-900/5 transition duration-300 hover:border-[#3495A1]"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#3495A1]/20 blur-3xl transition duration-500 group-hover:scale-125" />
            <div className="pointer-events-none absolute top-10 right-10 h-40 w-40 rounded-full bg-[#EF8619]/15 blur-2xl" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#EF8619]">
                  <ScanFace size={13} />
                  AI Face Matching Engine
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-black text-white">
                  Guests find their moments in seconds with a single selfie.
                </h3>

                <p className="mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
                  Save your clients and wedding guests from manually scrolling
                  through 3,000+ event photos. Our on-device & cloud neural AI
                  matches guest faces with extreme 99.8% precision, creating
                  instant personalized galleries.
                </p>
              </div>

              {/* Visual Demo Card */}
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF8619] to-[#ffaa47] text-white shadow-lg">
                      <ScanFace size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-300">
                        Selfie Uploaded
                      </p>
                      <p className="text-sm font-bold text-white">
                        48 matching photos located instantly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                      <Check size={12} strokeWidth={3} /> Match Confirmed: 99.8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Smart Galleries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-[#f8fafc] p-8 sm:p-10 transition duration-300 hover:-translate-y-1 hover:border-[#3495A1] hover:bg-white hover:shadow-xl hover:shadow-[#0A3F61]/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A3F61]/10 text-[#0A3F61] transition duration-300 group-hover:bg-[#0A3F61] group-hover:text-white">
              <Images size={26} />
            </div>

            <h3 className="mt-7 text-xl sm:text-2xl font-bold text-[#0A3F61]">
              Smart Client Galleries
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Deliver gorgeous, ultra-fast client web galleries with custom
              branding, watermark protection, and seamless multi-device viewing.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3495A1]" />
                Zero-compression preview quality
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3495A1]" />
                Custom PIN & password privacy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#3495A1]" />
                Studio logo & theme customization
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Photo-Level Selection & Comments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-[#f8fafc] p-8 sm:p-10 transition duration-300 hover:-translate-y-1 hover:border-[#3495A1] hover:bg-white hover:shadow-xl hover:shadow-[#0A3F61]/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3495A1]/10 text-[#3495A1] transition duration-300 group-hover:bg-[#3495A1] group-hover:text-white">
              <MessageCircle size={26} />
            </div>

            <h3 className="mt-7 text-xl sm:text-2xl font-bold text-[#0A3F61]">
              Direct Photo Proofing & Chat
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              No more messy spreadsheets or WhatsApp screenshots. Clients
              favourite, flag, and leave precise notes right on individual
              photos.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="flex h-2 w-2 rounded-full bg-[#EF8619]" />
                &quot;Please remove the lens glare on page 8&quot;
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Connected directly to Photo #IMG_9104
              </p>
            </div>
          </motion.div>

          {/* Card 4: Creative Freelancer Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-[#f8fafc] p-8 sm:p-10 transition duration-300 hover:-translate-y-1 hover:border-[#3495A1] hover:bg-white hover:shadow-xl hover:shadow-[#0A3F61]/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EF8619]/10 text-[#EF8619] transition duration-300 group-hover:bg-[#EF8619] group-hover:text-white">
              <BriefcaseBusiness size={26} />
            </div>

            <h3 className="mt-7 text-xl sm:text-2xl font-bold text-[#0A3F61]">
              Freelancer Marketplace
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Need a second shooter, aerial drone pilot, or album colorist this
              weekend? Browse verified creative talent and hire with one click.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-700">
                Wedding Shooters
              </span>
              <span className="rounded-full bg-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-700">
                Video Editors
              </span>
              <span className="rounded-full bg-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-700">
                Drone Pilots
              </span>
            </div>
          </motion.div>

          {/* Card 5: Enterprise Privacy & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-[#f8fafc] p-8 sm:p-10 transition duration-300 hover:-translate-y-1 hover:border-[#3495A1] hover:bg-white hover:shadow-xl hover:shadow-[#0A3F61]/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
              <ShieldCheck size={26} />
            </div>

            <h3 className="mt-7 text-xl sm:text-2xl font-bold text-[#0A3F61]">
              Privacy & Controlled Access
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Keep intimate family moments strictly protected. Only authorized
              clients can access their designated photos and galleries.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Lock size={15} className="text-emerald-600" />
                Time-limited download links
              </li>
              <li className="flex items-center gap-2">
                <Lock size={15} className="text-emerald-600" />
                Granular photo visibility control
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

