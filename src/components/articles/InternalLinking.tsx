import Link from "next/link";
import type { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface InternalLinkingProps {
  related: Article[];
  latest: Article[];
  popular: Article[];
  recommended: Article[];
  categoryArticles: Article[];
  categoryName?: string;
  categorySlug?: string;
}

function ArticleGrid({ title, articles, viewAllHref }: { title: string; articles: Article[]; viewAllHref?: string }) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-14">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-h3 font-semibold text-text">{title}</h2>
        {viewAllHref && (
          <Link href={viewAllHref} className="text-sm text-cyan-400 hover:underline">
            View all
          </Link>
        )}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
}

export function InternalLinking({
  related,
  latest,
  popular,
  recommended,
  categoryArticles,
  categoryName,
  categorySlug,
}: InternalLinkingProps) {
  const shown = new Set<string>();

  const unique = (items: Article[]) =>
    items.filter((item) => {
      if (shown.has(item.slug)) return false;
      shown.add(item.slug);
      return true;
    });

  return (
    <>
      <ArticleGrid title="Related Articles" articles={unique(related)} />
      <ArticleGrid title="Recommended Articles" articles={unique(recommended)} />
      {categoryName && categoryArticles.length > 0 && categorySlug && (
        <ArticleGrid
          title={`More in ${categoryName}`}
          articles={unique(categoryArticles)}
          viewAllHref={`/categories/${categorySlug}`}
        />
      )}
      <ArticleGrid title="Latest Articles" articles={unique(latest)} viewAllHref="/blog" />
      <ArticleGrid title="Popular Articles" articles={unique(popular)} viewAllHref="/blog" />
    </>
  );
}
