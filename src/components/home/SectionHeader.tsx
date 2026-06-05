import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({
  title,
  subtitle,
  href,
  linkLabel = "View all",
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-display text-h2 font-bold text-white">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {linkLabel}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
