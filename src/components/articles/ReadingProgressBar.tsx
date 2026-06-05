"use client";

import { useEffect, useState } from "react";

interface ReadingProgressBarProps {
  targetId: string;
}

export function ReadingProgressBar({ targetId }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const computeProgress = () => {
      const target = document.getElementById(targetId);
      if (!target) {
        setProgress(0);
        return;
      }

      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const start = scrollTop + rect.top;
      const end = start + target.offsetHeight - window.innerHeight;
      const raw = ((scrollTop - start) / Math.max(end - start, 1)) * 100;
      setProgress(Math.min(100, Math.max(0, raw)));
    };

    computeProgress();
    window.addEventListener("scroll", computeProgress, { passive: true });
    window.addEventListener("resize", computeProgress);

    return () => {
      window.removeEventListener("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
    };
  }, [targetId]);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-elevated">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
