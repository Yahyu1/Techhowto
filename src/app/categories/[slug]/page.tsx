import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getSeoCategoryBySlug, getAllSeoCategorySlugs } from "@/lib/data/seo-categories";
import { getArticlesByCategorySlug } from "@/lib/data/articles";
import { getFaqsForTopic } from "@/lib/data/faqs";
import { SITE } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSeoCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getSeoCategoryBySlug(slug);
  if (!category) {
    return createMetadata({ title: "Category Not Found", description: "Category not found.", path: `/categories/${slug}` });
  }
  return createMetadata({
    title: `${category.name} Tutorials & Guides`,
    description: category.metaDescription,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getSeoCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategorySlug(slug);
  const faqs = getFaqsForTopic(slug === "nextjs" ? "nextjs" : slug === "react" ? "react" : slug === "javascript" ? "javascript" : slug === "web-development" ? "web-development" : "programming");

  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Categories", url: `${SITE.url}/categories` },
    { name: category.name, url: `${SITE.url}/categories/${slug}` },
  ];

  return (
    <div className="py-10 sm:py-14">
      <SchemaScript data={breadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]} />
        <PageHeader
          eyebrow={`${category.icon} ${category.name}`}
          title={`${category.name} tutorials and guides`}
          description={category.description}
          align="left"
        />

        {categoryArticles.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted">
            New {category.name.toLowerCase()} content is on the way. Browse our{" "}
            <Link href="/blog" className="text-cyan-400 hover:underline">blog</Link> or{" "}
            <Link href="/roadmaps" className="text-cyan-400 hover:underline">roadmaps</Link> in the meantime.
          </p>
        )}

        {faqs.length > 0 && <FAQSection title={`${category.name} FAQ`} faqs={faqs} />}
      </div>
    </div>
  );
}
