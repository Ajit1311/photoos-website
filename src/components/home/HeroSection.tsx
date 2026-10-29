"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  ScanFace,
  Heart,
  MessageCircle,
  ShieldCheck,
  Zap,
  Play,
  Users,
} from "lucide-react";

import type { Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const previewVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#061826] pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Ambience & Glowing Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#3495A1]/20 blur-[130px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[#EF8619]/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
        <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#0A3F61]/40 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061826]/40 via-transparent to-[#061826]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Hero Copy & Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white lg:col-span-7 xl:col-span-6"
          >
            {/* Top Pill / Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100 shadow-xl backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF8619] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF8619]" />
                </span>
                <span className="text-slate-200">The Modern Studio Operating System</span>
                <span className="hidden sm:inline-block text-[#3495A1]">•</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[#EF8619]">
                  <Sparkles size={13} /> AI Engine v2
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[64px]"
            >
              Your Photography Business.{" "}
              <span className="block mt-1 bg-gradient-to-r from-[#EF8619] via-[#ffaa47] to-[#3495A1] bg-clip-text text-transparent">
                Reimagined with AI.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8"
            >
              From instant selfie-powered face matching and interactive client
              galleries to effortless photo selection, chat, and talent hiring
              — PhotoOS puts your entire studio workflow into one powerful
              workspace.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#EF8619] to-[#f4932b] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#EF8619]/25 transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#EF8619]/40 active:scale-[0.99]"
              >
                <span>Start Free with PhotoOS</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>

              <a
                href="#ai"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition duration-200 hover:bg-white/20 hover:text-white"
              >
                <Play size={16} className="text-[#3495A1] fill-[#3495A1]" />
                <span>See AI in Action</span>
              </a>
            </motion.div>

            {/* Value Proof Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-white/10 pt-6 text-xs text-slate-300 sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3495A1]/20 text-[#3495A1]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>99.8% AI Face Match</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EF8619]/20 text-[#EF8619]">
                  <Zap size={12} />
                </div>
                <span>10x Faster Selection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck size={12} />
                </div>
                <span>Private & Secure</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Studio Dashboard Mockup Showcase */}
          <motion.div
            variants={previewVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:col-span-5 xl:col-span-6"
          >
            {/* Ambient decorative glow around frame */}
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#3495A1]/30 via-transparent to-[#EF8619]/25 blur-2xl" />

            {/* Main Window Frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#0B253A]/90 shadow-2xl shadow-black/60 backdrop-blur-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 hidden text-xs font-medium text-slate-400 sm:inline-block">
                    photoos.in/studio/gallery-pro
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Sync
                  </span>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-4 sm:p-5">
                {/* Studio Event Banner */}
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF8619] to-[#3495A1] text-white font-bold shadow-md">
                      P
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Royal Heritage Wedding
                      </h4>
                      <p className="text-xs text-slate-400">
                        2,450 Photos • 14 Albums • Udaipur Palace
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex rounded-xl bg-[#3495A1]/20 px-3 py-1 text-xs font-semibold text-[#3495A1]">
                    98.4% Selected
                  </span>
                </div>

                {/* Photo Gallery Grid Showcase */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {/* Photo 1: AI Face Scan Spotlight */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 select-none">
                    <div className="photo-shield" />
                    <Image
                      src="/images/hero-wedding.jpg"
                      alt="PhotoOS AI Face Matching feature scanning wedding couple portrait in gallery"
                      width={500}
                      height={400}
                      className="h-44 sm:h-52 w-full object-cover transition duration-500 group-hover:scale-105 pointer-events-none"
                    />
                    {/* Face Scan Bounding Box Overlay */}
                    <div className="absolute top-8 left-10 h-24 w-24 sm:h-28 sm:w-28 rounded-lg border-2 border-[#3495A1] shadow-[0_0_15px_rgba(52,149,161,0.5)]">
                      <div className="absolute -top-6 left-0 rounded-md bg-[#0A3F61] px-2 py-0.5 text-[10px] font-bold text-[#3495A1] border border-[#3495A1]/40 flex items-center gap-1 shadow-lg">
                        <ScanFace size={11} /> 99.8% Match
                      </div>
                      {/* Scanning animated beam */}
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#3495A1] to-transparent shadow-[0_0_8px_#3495A1] animate-scan-beam" />
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-xl bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-[11px] text-white">
                      <span className="font-medium">Bride & Groom</span>
                      <span className="text-[#EF8619] font-bold">#DSC_8942</span>
                    </div>
                  </div>

                  {/* Photo 2: Client Collaboration / Selected Photo */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 select-none">
                    <div className="photo-shield" />
                    <Image
                      src="/images/client-collaboration.jpg"
                      alt="PhotoOS interactive client photo proofing and album selection preview"
                      width={500}
                      height={400}
                      className="h-44 sm:h-52 w-full object-cover transition duration-500 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Approved Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg backdrop-blur-sm">
                      <Check size={12} strokeWidth={3} /> Approved for Album
                    </div>

                    {/* Client Heart & Comment Preview */}
                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-[#061826]/80 p-2 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white">
                          <Heart size={10} fill="white" />
                        </div>
                        <p className="truncate text-[10px] text-slate-200">
                          <span className="font-bold text-white">Ananya:</span> &quot;Use this for the main cover page!&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Activity Feed Bar inside Window */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EF8619]/20 text-[#EF8619]">
                      <Zap size={13} />
                    </div>
                    <span className="truncate">
                      AI identified <strong className="text-white">124 faces</strong> in 1.4 seconds
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Just now</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 1: Top Right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-3 sm:-right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#061826]/95 p-3.5 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF8619] to-[#f79427] text-white shadow-lg shadow-[#EF8619]/30">
                <ScanFace size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Selfie AI Match</p>
                <p className="text-[11px] text-slate-300">
                  Clients find all their photos instantly
                </p>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2: Bottom Left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#061826]/95 p-3.5 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3495A1] to-[#1f70b8] text-white shadow-lg shadow-[#3495A1]/30">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">In-Gallery Client Chat</p>
                <p className="text-[11px] text-slate-300">
                  Zero WhatsApp confusion
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
