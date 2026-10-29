"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoSecurityGuard() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.closest(".protect-media") ||
          target.closest("img"))
      ) {
        e.preventDefault();
        showToast("🔒 PhotoOS Security: Right-click & saving photos is protected by studio policy.");
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img"))) {
        e.preventDefault();
        showToast("🛡️ Image drag & copy is disabled by PhotoOS studio protection.");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === "PrintScreen") {
        showToast("📸 Screenshot Guard: High-resolution media is protected by studio security.");
      }
      // Ctrl+P / Cmd+P
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        showToast("🔒 Printing gallery photos is disabled by the studio.");
      }
      // Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === "IMG" || target.closest("img"))) {
          e.preventDefault();
          showToast("🔒 Direct media download is locked by the studio.");
        }
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-[99999] -translate-x-1/2 pointer-events-none"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-[#061826]/95 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-2xl backdrop-blur-2xl ring-1 ring-black/10">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Lock size={15} />
            </div>
            <span>{toastMessage}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
