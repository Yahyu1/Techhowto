import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Pagination } from "@/components/ui/Pagination";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getAllTagSlugs, getTagBySlug } from "@/lib/data/tags";
import { getArticlesByTag, paginate } from "@/lib/data/articles";
import { SITE } from "@/lib/constants";

interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return getAllTagSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) {
    return createMetadata({ title: "Tag Not Found", description: "Tag not found.", path: `/tags/${slug}` });
  }
  return createMetadata({
    title: `#${tag.name} Articles`,
    description: `Articles tagged with ${tag.name} on ${SITE.name}.`,
    path: `/tags/${slug}`,
  });
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const tag = getTagBySlug(slug);
  if (!tag) notFound();

  const allArticles = getArticlesByTag(slug);
  const { items, totalPages } = paginate(allArticles, page, 12);

  return (
    <div className="py-10 sm:py-14">
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Tags", url: `${SITE.url}/tags` },
          { name: `#${tag.name}`, url: `${SITE.url}/tags/${slug}` },
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tags", href: "/tags" }, { label: `#${tag.name}` }]} />
        <PageHeader
          eyebrow="Tag"
          title={`#${tag.name}`}
          description={`${tag.count} article${tag.count === 1 ? "" : "s"} tagged with ${tag.name}.`}
          align="left"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} basePath={`/tags/${slug}`} />
      </div>
    </div>
  );
}
