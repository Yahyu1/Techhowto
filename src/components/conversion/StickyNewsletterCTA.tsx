"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import Link from "next/link";

export function StickyNewsletterCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("newsletter-cta-dismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("newsletter-cta-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-lg lg:bottom-6 lg:left-auto lg:right-6"
        >
          <div className="glass glow-border flex items-center gap-3 rounded-2xl p-4 shadow-xl">
            <Mail size={20} className="shrink-0 text-cyan-400" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-text">Stay ahead</p>
              <p className="text-xs text-muted">Weekly dev tips & AI reviews</p>
            </div>
            <Link
              href="/newsletter"
              className="shrink-0 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-xs font-bold text-white"
            >
              Join
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 text-muted hover:text-text"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
