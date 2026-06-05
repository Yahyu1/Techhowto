import type { Metadata } from "next";
import Link from "next/link";
import { articles, paginate } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Pagination } from "@/components/ui/Pagination";

export const metadata: Metadata = createMetadata({
  title: "Article Archive",
  description: "Browse all TechHowTo programming tutorials and technology articles by date.",
  path: "/archive",
});

interface ArchivePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ArchivePage({ searchParams }: ArchivePageProps) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const { items, totalPages } = paginate(sorted, page, 15);

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Archive" }]} />
        <PageHeader
          eyebrow="Archive"
          title="All articles"
          description={`${articles.length} tutorials and guides published on TechHowTo.`}
          align="left"
        />
        <div className="mt-10 space-y-3">
          {items.map((article) => (
            <GlassCard key={article.slug} hover padding="sm">
              <Link href={`/blog/${article.slug}`} className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-cyan-400">{article.category}</span>
                  <h3 className="font-semibold text-text">{article.title}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {article.date}
                    {article.updatedAt && article.updatedAt !== article.date && ` · Updated ${article.updatedAt}`}
                    {" · "}{article.readTime}
                  </p>
                </div>
              </Link>
            </GlassCard>
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} basePath="/archive" />
      </div>
    </div>
  );
}
