"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  ShieldCheck,
  Download,
  CreditCard,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  X,
  Users,
  Heart,
  Sparkles,
  Phone,
  Eye,
} from "lucide-react";

export default function DownloadSecurityDemo() {
  const [downloadLocked, setDownloadLocked] = useState(true);
  const [role, setRole] = useState<"client" | "relative">("client"); // 'client' = Bride/Groom, 'relative' = Relative/Guest
  const [modalOpen, setModalOpen] = useState(false);
  const [screenshotBlockedToast, setScreenshotBlockedToast] = useState(false);

  const handleDownloadClick = () => {
    setModalOpen(true);
  };

  const handleTestRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setScreenshotBlockedToast(true);
    setTimeout(() => setScreenshotBlockedToast(false), 3000);
  };

  return (
    <section id="download-security" className="relative overflow-hidden bg-[#0A3F61] py-24 sm:py-32 text-white">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-10 h-96 w-96 rounded-full bg-[#3495A1]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#EF8619]/15 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EF8619]/30 bg-[#EF8619]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#EF8619] backdrop-blur-md">
            <ShieldCheck size={14} />
            Studio Payment & Asset Protection
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-[46px]">
            Smart Download Lock &{" "}
            <span className="bg-gradient-to-r from-[#EF8619] via-[#ffaa47] to-[#3495A1] bg-clip-text text-transparent">
              Screenshot Guard
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Never lose your final payment. Lock original high-resolution downloads until
            the invoice is cleared. Bride & Groom see payment prompts, while relatives and
            guests are directed to contact the couple.
          </p>
        </div>

        {/* Interactive Studio Control Bar */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Studio Lock Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-slate-200">
                Studio Setting:
              </span>
              <button
                type="button"
                onClick={() => setDownloadLocked(!downloadLocked)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-md ${
                  downloadLocked
                    ? "bg-rose-500 text-white shadow-rose-500/25"
                    : "bg-emerald-500 text-white shadow-emerald-500/25"
                }`}
              >
                {downloadLocked ? (
                  <>
                    <Lock size={14} /> Download Locked (Payment Pending)
                  </>
                ) : (
                  <>
                    <Unlock size={14} /> Download Unlocked (Payment Cleared)
                  </>
                )}
              </button>
            </div>

            {/* Viewer Persona Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                View As:
              </span>
              <div className="flex rounded-xl bg-white/10 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    role === "client"
                      ? "bg-[#EF8619] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  👰 Groom / Bride
                </button>
                <button
                  type="button"
                  onClick={() => setRole("relative")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    role === "relative"
                      ? "bg-[#3495A1] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  👨‍👩‍👧 Relative / Guest
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Gallery Preview Card */}
        <div className="mt-8 mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/20 bg-[#061826]/90 shadow-2xl backdrop-blur-2xl">
          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-200">
                Live Gallery View • Priya & Rahul Wedding
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                Role: <strong className="text-white">{role === "client" ? "Bride & Groom" : "Guest / Relative"}</strong>
              </span>
            </div>
          </div>

          {/* Photo Preview Container */}
          <div className="p-6 sm:p-8">
            <div
              onContextMenu={handleTestRightClick}
              className="group relative h-[340px] sm:h-[440px] w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950 select-none"
              style={{ WebkitUserSelect: "none" }}
            >
              <Image
                src="/images/hero-wedding.jpg"
                alt="PhotoOS Wedding Gallery Preview with Download Lock"
                fill
                className="object-cover pointer-events-none transition duration-500 group-hover:scale-105"
                draggable={false}
              />

              {/* Watermark Overlay Simulation */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rotate-[-25deg] select-none rounded-2xl border-2 border-white/20 bg-black/40 px-6 py-3 text-sm sm:text-base font-black tracking-widest text-white/50 backdrop-blur-xs">
                  PHOTOOS STUDIO • WATERMARK PREVIEW
                </div>
              </div>

              {/* Right-click & Screenshot Guard Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Right-Click & Screenshot Guard Active</span>
              </div>

              {/* Bottom Action Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-white/20 bg-[#061826]/90 p-4 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-bold text-white">#DSC_8942.RAW • 300 DPI Original</p>
                  <p className="text-[11px] text-slate-300">File size: 24.8 MB • Uncompressed</p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleDownloadClick}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EF8619] to-[#f4932b] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#EF8619]/25 transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download size={16} />
                    <span>Download Original Photo</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Test Instructions helper */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 px-2">
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#EF8619]" />
                Click &quot;Download Original Photo&quot; above to test the role-based popup!
              </span>
              <span className="text-slate-400">
                (Try right-clicking the photo to test screenshot protection)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ROLE-BASED POPUP MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/20 bg-[#0B253A] p-6 sm:p-8 text-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* UNLOCKED STATE */}
              {!downloadLocked ? (
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-white">
                    Downloads Unlocked!
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Full studio payment has been received. Your high-resolution original JPEG/RAW
                    file (300 DPI, uncompressed) is downloading now.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="mt-6 w-full rounded-xl bg-emerald-500 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25"
                  >
                    Close
                  </button>
                </div>
              ) : role === "client" ? (
                /* ============================================================== */
                /* BRIDE / GROOM POPUP: PAYMENT REQUIRED                          */
                /* ============================================================== */
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                    <CreditCard size={30} />
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300">
                    <AlertCircle size={13} />
                    Studio Payment Required
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Complete Payment to Unlock Downloads
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Hi <strong>Priya & Rahul</strong>! Your wedding gallery is ready for final delivery.
                    Please clear the remaining studio invoice balance to instantly unlock high-resolution
                    original downloads for your entire event.
                  </p>

                  {/* Invoice Summary Box */}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Invoice #ST-2026-89</span>
                      <span className="font-bold text-white">Sharma Wedding Studios</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="font-semibold text-slate-300">Remaining Balance:</span>
                      <span className="text-base font-black text-[#EF8619]">₹24,000</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        alert("Simulated: Client is directed to secure studio payment gateway (Razorpay / UPI / NetBanking).");
                        setModalOpen(false);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EF8619] to-[#f4932b] py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#EF8619]/30"
                    >
                      <CreditCard size={16} />
                      <span>Pay Remaining Balance</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white"
                    >
                      <span>Close</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* ============================================================== */
                /* RELATIVES / GUESTS POPUP: CONTACT BRIDE & GROOM                */
                /* ============================================================== */
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3495A1]/20 text-[#3495A1]">
                    <Lock size={30} />
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#3495A1]/15 px-3 py-1 text-xs font-bold text-[#3495A1]">
                    <Users size={13} />
                    Downloads Locked by Studio
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Please Contact Bride or Groom
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    High-resolution original downloads for this event are currently restricted
                    by the photography studio. Please contact <strong>Priya & Rahul (Bride & Groom)</strong> to
                    request high-resolution download permission.
                  </p>

                  {/* Contact Couple Helper Box */}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
                    <p className="font-semibold text-slate-300">
                      Why are downloads locked?
                    </p>
                    <p className="mt-1 text-slate-400 leading-normal">
                      Original full-resolution files are made available only after final studio album
                      approval. You can still view watermarked previews online.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        window.open("https://wa.me/?text=Hi!%20I%20am%20viewing%20your%20wedding%20gallery%20on%20PhotoOS.%20Can%20you%20please%20unlock%20the%20download%20access?", "_blank");
                        setModalOpen(false);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/25"
                    >
                      <MessageCircle size={16} />
                      <span>Message Bride & Groom on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white"
                    >
                      <span>Continue Browsing</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Right Click Simulation Toast */}
      <AnimatePresence>
        {screenshotBlockedToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[999999] rounded-2xl border border-amber-500/40 bg-[#061826]/95 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                <Lock size={14} />
              </span>
              <span>🛡️ PhotoOS Screenshot Guard: Right-click & photo saving is locked!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

