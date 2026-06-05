"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";
import { GlassCard } from "@/components/ui/GlassCard";

const PER_PAGE = 6;

interface BlogCategoryFilterProps {
  articles: Article[];
}

export function BlogCategoryFilter({ articles }: BlogCategoryFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const initialSort = searchParams.get("sort") || "latest";
  const initialPage = Number(searchParams.get("page") || "1");

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "All");
    setSort(searchParams.get("sort") || "latest");
    setPage(Number(searchParams.get("page") || "1"));
  }, [searchParams]);

  const categories = useMemo(
    () => ["All", ...new Set(articles.map((a) => a.category))],
    [articles]
  );

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? [...articles]
        : articles.filter((a) => a.category === activeCategory);

    return sort === "trending"
      ? [...list].sort((a, b) => b.views - a.views)
      : [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, articles, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const updateParams = (cat: string, newSort: string, newPage: number) => {
    const params = new URLSearchParams();
    if (cat !== "All") params.set("category", cat);
    if (newSort !== "latest") params.set("sort", newSort);
    if (newPage > 1) params.set("page", String(newPage));
    const qs = params.toString();
    router.push(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard glow padding="lg">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setPage(1);
                  updateParams(category, sort, 1);
                }}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-indigo-400/60 bg-indigo-500/15 text-indigo-300"
                    : "border-border bg-elevated text-muted hover:text-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              {filtered.length} article{filtered.length === 1 ? "" : "s"}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            </p>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
                updateParams(activeCategory, e.target.value, 1);
              }}
              className="glass rounded-lg px-3 py-1.5 text-sm text-text outline-none"
            >
              <option value="latest">Latest</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </GlassCard>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setPage(p);
                  updateParams(activeCategory, sort, p);
                }}
                className={`h-10 w-10 rounded-xl text-sm font-semibold transition ${
                  p === currentPage
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "glass text-muted hover:text-text"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
