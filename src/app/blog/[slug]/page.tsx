import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getAllArticleSlugs, getArticleBySlug, articles, getAdjacentArticles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, personSchema } from "@/lib/seo/schema";
import { ArticlePageClient } from "@/components/articles/ArticlePageClient";
import { ChevronRight } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return createMetadata({
      title: "Article Not Found",
      description: "The requested article does not exist.",
      path: `/blog/${slug}`,
      type: "article",
    });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .filter((item) => item.category === article.category || item.tags.some((tag) => article.tags.includes(tag)))
    .slice(0, 3);

  const { prev, next } = getAdjacentArticles(slug);

  const schemas = [
    articleSchema(article),
    personSchema(article.author),
    breadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Blog", url: `${SITE.url}/blog` },
      { name: article.title, url: `${SITE.url}/blog/${article.slug}` },
    ]),
  ];

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition hover:text-cyan-300">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="transition hover:text-cyan-300">
            Blog
          </Link>
          <ChevronRight size={14} />
          <span className="text-text">{article.title}</span>
        </nav>

        <ArticlePageClient article={article} related={related} prev={prev} next={next} />
      </div>
    </div>
  );
}
