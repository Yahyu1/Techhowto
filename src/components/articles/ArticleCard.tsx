import Link from "next/link";
import { Clock, Eye } from "lucide-react";
import type { Article } from "@/types";
import { formatViews } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  rank?: number;
}

export function ArticleCard({ article, rank }: ArticleCardProps) {
  return (
    <article className="group glass glow-border glass-hover flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={`/categories/${article.categorySlug}`}
          className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/25"
        >
          {article.category}
        </Link>
        {rank !== undefined && (
          <span className="font-display text-lg font-bold text-cyan-400">
            #{rank}
          </span>
        )}
      </div>
      <Link href={`/blog/${article.slug}`}>
        <h3 className="mt-4 font-display text-h3 font-semibold text-text group-hover:text-cyan-300 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {article.excerpt}
        </p>
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
        <span>{article.date}</span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {article.readTime}
        </span>
        <span className="flex items-center gap-1">
          <Eye size={12} />
          {formatViews(article.views)}
        </span>
        <Link href={`/authors/${article.author.slug}`} className="hover:text-cyan-400">
          {article.author.name}
        </Link>
      </div>
      {article.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {article.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="rounded-md bg-elevated px-2 py-0.5 text-[10px] text-muted hover:text-cyan-400"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
