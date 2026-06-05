"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { Search } from "lucide-react";

import type { SearchEntry } from "@/lib/data/search-index";

export type { SearchEntry };

interface SearchExplorerClientProps {
  entries: SearchEntry[];
}

export function SearchExplorerClient({ entries }: SearchExplorerClientProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? searchParams.get("search_term_string") ?? "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const param = searchParams.get("q") ?? searchParams.get("search_term_string") ?? "";
    setQuery(param);
  }, [searchParams]);

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        includeScore: true,
        threshold: 0.36,
        keys: ["title", "excerpt", "tags"],
      }),
    [entries]
  );

  const results = useMemo(() => {
    if (!query.trim()) {
      return entries.slice(0, 18).map((item) => ({ item, score: 0 }));
    }
    return fuse.search(query.trim()).slice(0, 24);
  }, [entries, fuse, query]);

  return (
    <>
      <div className="glass glow-border mb-6 rounded-2xl p-4 sm:p-5">
        <label htmlFor="site-search" className="relative block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            id="site-search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides, roadmaps, and tools with fuzzy matching..."
            className="w-full rounded-xl border border-border bg-black/35 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-cyan-400"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {results.map(({ item, score }) => (
          <Link
            key={item.id}
            href={item.href}
            className="glass glow-border glass-hover rounded-2xl p-5 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-200">
                {item.type}
              </span>
              {query.trim() && (
                <span className="text-[11px] text-cyan-200">
                  Match {(100 - Math.min((score ?? 0) * 100, 99)).toFixed(0)}%
                </span>
              )}
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold text-text">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-elevated px-2 py-1 text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className="glass mt-6 rounded-xl p-6 text-center text-sm text-muted">
          No results found. Try broader keywords or fewer filters.
        </div>
      )}
    </>
  );
}
