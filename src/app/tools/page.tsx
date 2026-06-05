import Link from "next/link";
import type { Metadata } from "next";
import { devTools } from "@/lib/data/dev-tools";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Developer Tools",
  description: "Client-side developer utilities for formatting, conversion, and generation.",
  path: "/tools",
});

interface ToolsPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const params = (await searchParams) ?? {};
  const query = typeof params.q === "string" ? params.q.toLowerCase().trim() : "";
  const category =
    typeof params.category === "string" ? params.category.toLowerCase() : "all";

  const categories = ["all", ...new Set(devTools.map((tool) => tool.category))];

  const filtered = devTools.filter((tool) => {
    const byCategory =
      category === "all" || tool.category.toLowerCase() === category.toLowerCase();
    const searchText = `${tool.name} ${tool.description} ${tool.slug}`.toLowerCase();
    const byQuery = !query || searchText.includes(query);
    return byCategory && byQuery;
  });

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="font-display text-h2 font-bold text-white">Developer Tools</h1>
          <p className="mt-2 max-w-3xl text-muted">
            Fast, practical utilities that run fully in your browser.
          </p>
        </header>

        <form className="glass glow-border mb-6 rounded-2xl p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="search"
              name="q"
              defaultValue={typeof params.q === "string" ? params.q : ""}
              placeholder="Search tools..."
              className="w-full rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-sm outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Search
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((item) => {
              const isActive = item.toLowerCase() === category.toLowerCase();
              return (
                <Link
                  key={item}
                  href={`/tools?category=${encodeURIComponent(item)}${query ? `&q=${encodeURIComponent(query)}` : ""}`}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "glass-hover border border-white/10 text-muted"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </form>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="glass glow-border glass-hover rounded-xl p-5 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <h2 className="font-semibold text-white">{tool.name}</h2>
                  <p className="mt-1 text-xs text-cyan-300">{tool.category}</p>
                  <p className="mt-2 text-sm text-muted">{tool.description}</p>
                  <p className="mt-3 font-mono text-xs text-white/50">{tool.slug}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass mt-6 rounded-xl p-6 text-center text-sm text-muted">
            No tools matched your search.
          </div>
        )}
      </div>
    </section>
  );
}
