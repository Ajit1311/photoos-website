"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, KeyRound, HardDriveDownload, UserCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Client-Restricted Access",
    desc: "Every gallery has customizable privacy modes — private PINs, password protection, and hidden unlisted links.",
  },
  {
    icon: HardDriveDownload,
    title: "Controlled High-Res Downloads",
    desc: "Decide whether guests can download original RAW, full-res JPEGs, or web-optimized versions with studio watermark.",
  },
  {
    icon: KeyRound,
    title: "256-bit TLS/SSL Encryption",
    desc: "Enterprise cloud storage with data encryption both in transit and at rest.",
  },
  {
    icon: EyeOff,
    title: "Granular Album Visibility",
    desc: "Grant access to specific albums (e.g. Haldi, Sangeet, Pre-Wedding) only to approved family members.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-Preserving AI",
    desc: "Facial vector embeddings are strictly sandboxed per event and never shared with 3rd-party ad networks.",
  },
  {
    icon: UserCheck,
    title: "Permanent Ownership",
    desc: "You and your clients retain 100% intellectual property and copyright over every uploaded photograph.",
  },
];

export default function SecurityPrivacyCard() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[36px] border border-slate-200/90 bg-[#f8fafc] shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-12">
            {/* Left dark column */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#061826] via-[#0A3F61] to-[#0A3F61] p-8 sm:p-12 lg:col-span-5 lg:p-14 text-white flex flex-col justify-between">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3495A1]/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#EF8619]/15 blur-3xl" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-[#EF8619]">
                  <ShieldCheck size={28} />
                </div>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#EF8619]">
                  Bank-Grade Protection
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Your Memories.{" "}
                  <span className="block text-[#EF8619]">Your Privacy.</span>
                </h2>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                  Client photographs are personal, intimate, and sacred. PhotoOS
                  is built from the ground up to protect client privacy with
                  strict access controls, private tokens, and secure delivery.
                </p>
              </div>

              <div className="relative z-10 mt-10 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md text-xs text-slate-300">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  Zero Third-Party Data Monetization
                </div>
                Your photos and your clients&apos; faces are never used for public AI training or ads.
              </div>
            </div>

            {/* Right security feature grid */}
            <div className="p-8 sm:p-12 lg:col-span-7 lg:p-14">
              <div className="grid gap-6 sm:grid-cols-2">
                {securityFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={feat.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A3F61]/5 text-[#0A3F61]">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-sm font-bold text-[#0A3F61]">
                          {feat.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">
                        {feat.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

