"use client";

import { useEffect, useState } from "react";
import { GlassModal } from "@/components/ui/GlassModal";
import { GlassButton } from "@/components/ui/GlassButton";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-intent-shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exit-intent-shown")) {
        setOpen(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <GlassModal open={open} onClose={() => setOpen(false)} title="Before you go">
      <p className="text-sm leading-relaxed text-muted">
        Get our free weekly digest — AI tool reviews, developer roadmaps, and
        production-ready tutorials delivered to your inbox.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <GlassButton href="/newsletter" variant="primary" onClick={() => setOpen(false)}>
          Subscribe Free
        </GlassButton>
        <GlassButton variant="ghost" onClick={() => setOpen(false)}>
          Maybe later
        </GlassButton>
      </div>
    </GlassModal>
  );
}
