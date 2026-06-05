import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 32, text: "text-lg" },
  md: { icon: 36, text: "text-xl" },
  lg: { icon: 44, text: "text-2xl" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="th-grad" x1="0" y1="0" x2="44" y2="44">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="44" height="44" rx="12" fill="url(#th-grad)" />
        <path
          d="M12 14h8v16H12V14zm12 0h8v10h-8V14zm0 14h8v6h-8v-6z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-display font-bold tracking-tight text-white",
            s.text
          )}
        >
          Tech<span className="gradient-text">HowTo</span>
        </span>
      )}
    </Link>
  );
}
