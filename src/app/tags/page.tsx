import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Pagination } from "@/components/ui/Pagination";
import { getAllTags } from "@/lib/data/tags";
import { paginate } from "@/lib/data/articles";

export const metadata: Metadata = createMetadata({
  title: "Tags",
  description: "Browse TechHowTo articles by topic tags including JavaScript, React, AI, DevOps, and more.",
  path: "/tags",
});

interface TagsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function TagsPage({ searchParams }: TagsPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const allTags = getAllTags();
  const { items, totalPages } = paginate(allTags, page, 24);

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tags" }]} />
        <PageHeader
          eyebrow="Tags"
          title="Browse by tag"
          description={`Explore ${allTags.length} topic tags across our programming tutorials and technology guides.`}
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {items.map((tag) => (
            <Link key={tag.slug} href={`/tags/${tag.slug}`}>
              <GlassCard hover padding="sm" className="inline-flex items-center gap-2">
                <span className="font-medium text-text">#{tag.name}</span>
                <span className="text-xs text-muted">{tag.count}</span>
              </GlassCard>
            </Link>
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} basePath="/tags" />
      </div>
    </div>
  );
}
