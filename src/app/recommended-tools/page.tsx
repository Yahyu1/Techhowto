import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Recommended Tools",
  description:
    "Expert-curated tools for coding, AI workflows, design systems, productivity, and team collaboration.",
  path: "/recommended-tools",
});

const tools = [
  {
    name: "Cursor",
    category: "Coding",
    rating: 4.9,
    summary:
      "Best all-around AI coding workflow with context-aware edits and fast iteration loops.",
    bestFor: "Teams shipping production web apps",
    href: "https://cursor.com/",
  },
  {
    name: "Linear",
    category: "Project Management",
    rating: 4.8,
    summary:
      "Lightning-fast issue tracking and roadmapping with clean UX and excellent keyboard flow.",
    bestFor: "Startups and product teams",
    href: "https://linear.app/",
  },
  {
    name: "Vercel",
    category: "Hosting",
    rating: 4.8,
    summary:
      "Reliable deploy pipeline for modern frontend stacks with edge delivery and preview branches.",
    bestFor: "Next.js, React, and full-stack TypeScript apps",
    href: "https://vercel.com/",
  },
  {
    name: "Figma",
    category: "Design",
    rating: 4.9,
    summary:
      "Top collaboration-first design platform for product UI systems and prototypes.",
    bestFor: "Design + dev teams building design systems",
    href: "https://www.figma.com/",
  },
  {
    name: "ChatGPT",
    category: "AI Assistant",
    rating: 4.7,
    summary:
      "Strong daily assistant for drafting, planning, ideation, and coding support workflows.",
    bestFor: "Founders, developers, and content teams",
    href: "https://chatgpt.com/",
  },
  {
    name: "Notion",
    category: "Knowledge Management",
    rating: 4.6,
    summary:
      "Flexible workspace for documentation, project specs, and async team collaboration.",
    bestFor: "Cross-functional teams and solo operators",
    href: "https://www.notion.so/",
  },
];

function renderStars(rating: number): string {
  const stars = Math.round(rating);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

export default function RecommendedToolsPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Curated Recommendations
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-white">
            Tools we trust in real production workflows
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Each recommendation is tested on speed, reliability, and long-term value.
            We prioritize products that reduce friction and help teams ship faster.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noreferrer noopener"
              className="glass glow-border glass-hover rounded-2xl p-6 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-200">
                  {tool.category}
                </span>
                <span className="text-xs text-amber-300">
                  {renderStars(tool.rating)} ({tool.rating.toFixed(1)})
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                {tool.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tool.summary}</p>
              <p className="mt-4 text-xs text-cyan-200">
                Best for: <span className="text-muted">{tool.bestFor}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
