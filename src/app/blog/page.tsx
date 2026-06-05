import type { Metadata } from "next";
import { Suspense } from "react";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { BlogCategoryFilter } from "@/components/articles/BlogCategoryFilter";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";

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
        <PageHeader
          eyebrow="Editorial Hub"
          title="Insights for Modern Builders"
          description="Deep dives and practical guides on AI workflows, developer tools, operating systems, and productivity engineering."
        />
        <div className="mt-6 text-center">
          <Link href="/blog/archive" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            Browse archive →
          </Link>
        </div>
      </div>

      <Suspense fallback={<div className="py-16 text-center text-muted">Loading articles...</div>}>
        <BlogCategoryFilter articles={sortedArticles} />
      </Suspense>
    </div>
  );
}
