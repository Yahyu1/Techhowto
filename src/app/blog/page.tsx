import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { BlogCategoryFilter } from "@/components/articles/BlogCategoryFilter";
import { PageHeader } from "@/components/layout/PageHeader";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { blogSchema } from "@/lib/seo/schema";

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
      <SchemaScript data={blogSchema()} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Editorial Hub"
          title="Insights for Modern Builders"
          description="Deep dives and practical guides on AI workflows, developer tools, operating systems, and productivity engineering."
        />
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/archive" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Browse archive →
          </Link>
          <Link href="/categories" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Browse categories →
          </Link>
          <Link href="/tags" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Browse tags →
          </Link>
        </div>
      </div>

      <Suspense fallback={<div className="py-16 text-center text-muted">Loading articles...</div>}>
        <BlogCategoryFilter articles={sortedArticles} />
      </Suspense>
    </div>
  );
}
