import type { Metadata } from "next";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { BlogCategoryFilter } from "@/components/articles/BlogCategoryFilter";

export const metadata: Metadata = createMetadata({
  title: "Tech Blog",
  description:
    "Read practical tutorials, comparisons, and troubleshooting guides across AI, development, and productivity.",
  path: "/blog",
});

export default function BlogPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Editorial Hub
          </p>
          <h1 className="mt-3 font-display text-h1 font-bold text-white">
            Insights for Modern Builders
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            Deep dives and practical guides on AI workflows, developer tools,
            operating systems, and productivity engineering.
          </p>
        </div>
      </div>

      <BlogCategoryFilter articles={sortedArticles} />
    </div>
  );
}
