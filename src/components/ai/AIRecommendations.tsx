import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Article } from "@/types";

interface AIRecommendationsProps {
  articles?: Article[];
  roadmaps?: { title: string; slug: string; level: string }[];
}

export function AIRecommendations({ articles = [], roadmaps = [] }: AIRecommendationsProps) {
  if (!articles.length && !roadmaps.length) return null;

  return (
    <GlassCard glow className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        Recommended for you
      </p>
      <h3 className="mt-2 font-display text-lg font-bold text-text">
        Continue your learning path
      </h3>
      <div className="mt-4 space-y-2">
        {articles.slice(0, 2).map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="block rounded-xl bg-elevated px-4 py-3 text-sm transition hover:bg-elevated/80"
          >
            <span className="font-semibold text-text">{a.title}</span>
            <span className="ml-2 text-xs text-muted">{a.readTime}</span>
          </Link>
        ))}
        {roadmaps.slice(0, 1).map((r) => (
          <Link
            key={r.slug}
            href={`/roadmaps/${r.slug}`}
            className="block rounded-xl bg-elevated px-4 py-3 text-sm transition hover:bg-elevated/80"
          >
            <span className="font-semibold text-text">{r.title}</span>
            <span className="ml-2 text-xs text-cyan-400">{r.level}</span>
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}
