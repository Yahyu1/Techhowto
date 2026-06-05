"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Roadmap } from "@/types";
import { Search } from "lucide-react";

interface RoadmapsDirectoryProps {
  roadmaps: Roadmap[];
}

const levelOptions = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export function RoadmapsDirectory({ roadmaps }: RoadmapsDirectoryProps) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<(typeof levelOptions)[number]>("All");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();

    return roadmaps.filter((roadmap) => {
      const matchesLevel = level === "All" ? true : roadmap.level === level;
      const matchesQuery =
        normalized.length === 0
          ? true
          : [
              roadmap.title,
              roadmap.description,
              roadmap.skills.join(" "),
              roadmap.tools.join(" "),
            ]
              .join(" ")
              .toLowerCase()
              .includes(normalized);

      return matchesLevel && matchesQuery;
    });
  }, [level, query, roadmaps]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass glow-border rounded-3xl p-5 sm:p-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search roadmaps, skills, or tools..."
                className="w-full rounded-2xl border border-border bg-elevated py-3 pl-11 pr-4 text-sm text-text placeholder:text-muted outline-none transition focus:border-cyan-400/50 focus:bg-elevated"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {levelOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLevel(option)}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    level === option
                      ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-300"
                      : "border-border bg-elevated text-muted hover:border-border hover:text-text"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Showing {filtered.length} roadmap{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((roadmap) => (
            <Link
              key={roadmap.id}
              href={`/roadmaps/${roadmap.slug}`}
              className="glass glow-border glass-hover group rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
                  {roadmap.level}
                </span>
                <span className="text-xs text-muted">{roadmap.duration}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-text transition-colors group-hover:text-cyan-300">
                {roadmap.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm text-muted">
                {roadmap.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {roadmap.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-elevated px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-elevated">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
