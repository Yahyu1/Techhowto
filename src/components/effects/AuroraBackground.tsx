"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-[40%] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
        animate={{ x: ["-5%", "5%", "-5%"], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] -right-[10%] h-[50vh] w-[50vw] rounded-full bg-cyan-500/15 blur-[100px]"
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[40vh] w-[40vw] rounded-full bg-purple-600/10 blur-[90px]"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
