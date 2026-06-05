import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { articles } from "@/lib/data/articles";
import { roadmaps } from "@/lib/data/roadmaps";
import { devTools } from "@/lib/data/dev-tools";
import { SearchExplorerClient, type SearchEntry } from "./SearchExplorerClient";

export const metadata: Metadata = createMetadata({
  title: "Search",
  description:
    "Fuzzy search across articles, roadmaps, and developer tools to quickly find the exact TechHowTo content you need.",
  path: "/search",
});

const searchEntries: SearchEntry[] = [
  ...articles.map((article) => ({
    id: `article-${article.id}`,
    type: "Article" as const,
    title: article.title,
    excerpt: article.excerpt,
    href: `/blog/${article.slug}`,
    tags: [...article.tags, article.category],
  })),
  ...roadmaps.map((roadmap) => ({
    id: `roadmap-${roadmap.id}`,
    type: "Roadmap" as const,
    title: roadmap.title,
    excerpt: roadmap.description,
    href: `/roadmaps/${roadmap.slug}`,
    tags: [roadmap.level, ...roadmap.skills.slice(0, 5)],
  })),
  ...devTools.map((tool) => ({
    id: `tool-${tool.id}`,
    type: "Tool" as const,
    title: tool.name,
    excerpt: tool.description,
    href: `/tools/${tool.slug}`,
    tags: [tool.category, tool.slug],
  })),
];

export default function SearchPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Search
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-white">
            Find what you need in seconds
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Powered by fuzzy matching with Fuse.js across all articles, roadmaps,
            and dev tools.
          </p>
        </header>

        <SearchExplorerClient entries={searchEntries} />
      </div>
    </section>
  );
}
