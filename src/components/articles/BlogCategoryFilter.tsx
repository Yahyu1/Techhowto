"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface BlogCategoryFilterProps {
  articles: Article[];
}

export function BlogCategoryFilter({ articles }: BlogCategoryFilterProps) {
  const categories = useMemo(
    () => ["All", ...new Set(articles.map((article) => article.category))],
    [articles]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory, articles]
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass glow-border rounded-3xl p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-indigo-400/60 bg-indigo-500/15 text-indigo-300"
                    : "border-border bg-elevated text-muted hover:border-border hover:text-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            {filtered.length} article{filtered.length === 1 ? "" : "s"} in{" "}
            {activeCategory}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
