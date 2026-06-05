"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface TemplateItem {
  id: string;
  name: string;
  category: "Landing Pages" | "Dashboards" | "Blogs" | "SaaS" | "Portfolio";
  description: string;
  tech: string[];
  price: string;
  rating: number;
}

interface TemplatesMarketplaceClientProps {
  templates: TemplateItem[];
}

export function TemplatesMarketplaceClient({
  templates,
}: TemplatesMarketplaceClientProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(templates.map((item) => item.category)))],
    [templates]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return templates.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;
      const source = `${item.name} ${item.description} ${item.tech.join(" ")}`.toLowerCase();
      const matchQuery = !normalized || source.includes(normalized);
      return matchCategory && matchQuery;
    });
  }, [templates, activeCategory, query]);

  return (
    <>
      <div className="glass glow-border mb-6 rounded-2xl p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search templates by use-case, stack, or feature..."
              className="w-full rounded-lg border border-white/15 bg-black/35 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-cyan-400"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "border-cyan-400/40 bg-cyan-500/20 text-cyan-200"
                    : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => (
          <article
            key={template.id}
            className="glass glow-border glass-hover rounded-2xl p-5 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-200">
                {template.category}
              </span>
              <span className="text-xs text-amber-300">
                {"★".repeat(Math.round(template.rating))}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {template.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {template.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {template.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Price</p>
                <p className="text-lg font-semibold text-white">{template.price}</p>
              </div>
              <Button size="sm">View Template</Button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass mt-6 rounded-xl p-6 text-center text-sm text-muted">
          No templates match your filters yet. Try a different keyword or category.
        </div>
      )}
    </>
  );
}
