import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Categories",
  description:
    "Explore TechHowTo content categories including AI, software engineering, mobile, design, productivity, and cloud.",
  path: "/categories",
});

const categories = [
  {
    name: "AI Tools",
    description: "Reviews, comparisons, benchmarks, and practical automation workflows.",
    href: "/blog?category=AI%20Tools",
    count: "48 guides",
  },
  {
    name: "Software Engineering",
    description: "Architecture, clean code, testing strategy, and production debugging.",
    href: "/blog?category=Engineering",
    count: "72 guides",
  },
  {
    name: "Web Development",
    description: "Frontend, backend, full-stack systems, and deployment best practices.",
    href: "/roadmaps",
    count: "96 guides",
  },
  {
    name: "Developer Tools",
    description: "Utilities and tool stacks that save time in daily build workflows.",
    href: "/tools",
    count: "30 tools",
  },
  {
    name: "Career Roadmaps",
    description: "Structured paths from beginner to job-ready across top tech roles.",
    href: "/roadmaps",
    count: "11 roadmaps",
  },
  {
    name: "Design and UX",
    description: "UI systems, interaction patterns, and design process walkthroughs.",
    href: "/blog?category=Design",
    count: "26 guides",
  },
  {
    name: "Cloud and DevOps",
    description: "Infrastructure, reliability, CI/CD, observability, and scaling.",
    href: "/blog?category=Cloud",
    count: "39 guides",
  },
  {
    name: "Productivity",
    description: "Execution systems, focus workflows, and team operating playbooks.",
    href: "/recommended-tools",
    count: "34 guides",
  },
];

export default function CategoriesPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Categories
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Explore by topic and outcome
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Discover curated content libraries based on what you want to build,
            learn, or optimize.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="glass glow-border glass-hover rounded-2xl p-6 transition-all hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                {category.count}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-text">
                {category.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
