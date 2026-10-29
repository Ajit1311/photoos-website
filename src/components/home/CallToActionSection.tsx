"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check, PhoneCall } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-[#061826] py-24 sm:py-32 text-center text-white">
      {/* Aurora Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-[#3495A1]/25 to-[#EF8619]/20 blur-[130px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EF8619] to-[#3495A1] text-white shadow-xl shadow-[#EF8619]/30"
        >
          <Sparkles size={26} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl"
        >
          Your photos deserve more than a generic folder.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300"
        >
          Your clients will love finding their pictures with one selfie. Your team
          will love frictionless photo selection. Join over 2,000+ top photographers
          scaling with PhotoOS today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center"
        >
          <Link
            href="/pricing"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#EF8619] to-[#ff9e3b] px-9 py-4 text-base font-bold text-white shadow-xl shadow-[#EF8619]/30 transition duration-300 hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Start Free with PhotoOS</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 hover:text-white"
          >
            <PhoneCall size={16} />
            <span>Book Studio Demo</span>
          </Link>
        </motion.div>

        {/* Reassurance pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
        >
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#3495A1]" strokeWidth={3} />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#3495A1]" strokeWidth={3} />
            Free trial included
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#3495A1]" strokeWidth={3} />
            Cancel anytime
          </span>
        </motion.div>
      </div>
    </section>
  );
}

