"use client";

import { useEffect, useState } from "react";
import { Lock, ShieldAlert } from "lucide-react";
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
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    let touchTimer: ReturnType<typeof setTimeout> | null = null;

    // 1. GLOBAL CAPTURING RIGHT-CLICK BLOCKER
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if clicking on or near any image, video, canvas, or media wrapper
      const isMedia =
        target.tagName === "IMG" ||
        target.tagName === "VIDEO" ||
        target.tagName === "CANVAS" ||
        target.closest("img") ||
        target.closest("video") ||
        target.closest(".photo-shield") ||
        target.closest(".protect-media") ||
        window.getComputedStyle(target).backgroundImage !== "none";

      if (isMedia) {
        e.preventDefault();
        e.stopPropagation();
        showToast("🔒 PhotoOS Security: Right-click & downloading photos is locked by the studio.");
        return false;
      }
    };

    // 2. GLOBAL DRAG & DROP BLOCKER
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.closest("img") ||
          target.closest(".protect-media"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        showToast("🛡️ Image dragging is disabled by PhotoOS studio protection.");
        return false;
      }
    };

    // 3. MOBILE LONG-PRESS (SAVE TO PHOTOS) BLOCKER
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.closest("img") ||
          target.closest(".protect-media"))
      ) {
        touchTimer = setTimeout(() => {
          showToast("🔒 PhotoOS Security: Photo saving is locked on this device.");
        }, 400);
      }
    };

    const handleTouchEnd = () => {
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
    };

    // 4. KEYBOARD SHORTCUTS BLOCKER (Ctrl+S, Ctrl+P, PrintScreen, Inspect)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdKey = isMac ? e.metaKey : e.ctrlKey;

      // PrintScreen Key
      if (e.key === "PrintScreen") {
        e.preventDefault();
        showToast("📸 Screenshot Guard: Photos are protected by studio security.");
      }

      // Save page (Cmd+S / Ctrl+S)
      if (cmdKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        e.stopPropagation();
        showToast("🔒 Page and photo saving is disabled by the studio.");
      }

      // Print page (Cmd+P / Ctrl+P)
      if (cmdKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        e.stopPropagation();
        showToast("🔒 Printing gallery photos is disabled by the studio.");
      }

      // DevTools inspect (F12 or Cmd+Option+I / Ctrl+Shift+I)
      if (
        e.key === "F12" ||
        (cmdKey && (e.shiftKey || e.altKey) && (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j"))
      ) {
        // Prevent inspect if triggered over protected view
        showToast("🛡️ PhotoOS Studio Asset Protection Active.");
      }
    };

    // Use capturing phase (true) so listeners trigger BEFORE any other component
    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    document.addEventListener("touchstart", handleTouchStart, { passive: true, capture: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true, capture: true });
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("touchstart", handleTouchStart, true);
      document.removeEventListener("touchend", handleTouchEnd, true);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 left-1/2 z-[9999999] -translate-x-1/2 pointer-events-none"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-[#061826]/95 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-2xl backdrop-blur-2xl ring-1 ring-amber-500/20">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Lock size={16} />
            </div>
            <span>{toastMessage}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
