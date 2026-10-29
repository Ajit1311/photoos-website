"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Check,
  ThumbsUp,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

const proofingPoints = [
  "Clients can click to favourite and comment on individual photos",
  "Designate album selection quotas (e.g. 'Select exactly 80 photos')",
  "Direct photographer-to-client threaded discussions per photo",
  "Real-time selection progress bar and one-click final sign-off",
  "Export selections straight to Adobe Lightroom, Capture One, or zip",
];

export default function ClientCollaborationSection() {
  return (
    <section id="collaboration" className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* LEFT: Image with Interactive Glass Proofing Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-900/10">
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/client-collaboration.jpg"
                  alt="Photography clients and studio reviewing album photo proofing and leaving comments in PhotoOS"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F61]/80 via-transparent to-transparent" />

                {/* Floating Feedback Bubble 1 (Top) */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl border border-white/30 bg-white/95 p-3.5 shadow-xl backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white font-bold text-xs shadow-md">
                      <Heart size={14} fill="white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Album Selection #42
                      </p>
                      <p className="text-[11px] text-slate-600">
                        &quot;Loved the lighting here! Please use for the main family portrait spread.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#0A3F61]/90 p-4 text-white backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EF8619] text-white">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Client Proofing Live</p>
                        <p className="text-xs text-slate-300">
                          80 of 80 required photos approved by client
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                      <Check size={12} strokeWidth={3} /> Ready for Print
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content & Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3495A1]/30 bg-[#3495A1]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3495A1]">
              <MessageCircle size={13} />
              Frictionless Client Collaboration
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0A3F61] sm:text-5xl lg:text-[46px] lg:leading-[1.15]">
              Turn photo selection from a headache into a joy.
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              No more vague WhatsApp voice notes like &quot;Please edit the photo
              where Uncle is standing next to Auntie&quot;. PhotoOS attaches client
              notes, cropped previews, and hearts directly onto the exact high-res image.
            </p>

            <div className="mt-8 space-y-3.5">
              {proofingPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3495A1] text-white shadow-xs">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A3F61] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A3F61]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3495A1]"
              >
                Experience Client Proofing
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

