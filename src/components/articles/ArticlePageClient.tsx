"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { Article } from "@/types";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { ArticleInteractions } from "./ArticleInteractions";
import { ArticleComments } from "./ArticleComments";
import { SummarizeModal } from "./SummarizeModal";
import { AIRecommendations } from "@/components/ai/AIRecommendations";
import { InternalLinking } from "./InternalLinking";
import { SocialShare } from "./SocialShare";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

interface Heading {
  id: string;
  title: string;
}

interface ArticlePageClientProps {
  article: Article;
  related: Article[];
  latest: Article[];
  popular: Article[];
  recommended: Article[];
  categoryArticles: Article[];
  prev?: Article | null;
  next?: Article | null;
}

function contentToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  let html = "";
  let inList = false;
  let inCode = false;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("```")) {
      if (!inCode) {
        inCode = true;
        html += "<pre class='mt-4 overflow-x-auto rounded-xl border border-border bg-black/40 p-4'><code>";
      } else {
        inCode = false;
        html += "</code></pre>";
      }
      continue;
    }

    if (inCode) {
      html += `${line
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")}\n`;
      continue;
    }

    if (line.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const heading = line.replace("## ", "").trim();
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      html += `<h2 id="${id}" class="mt-10 text-2xl font-semibold text-text">${heading}</h2>`;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!inList) {
        html += "<ul class='mt-4 space-y-2'>";
        inList = true;
      }
      html += `<li class='rounded-lg bg-elevated px-3 py-2 text-sm text-text/85'>${line.replace(
        /^\d+\.\s+/,
        ""
      )}</li>`;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul class='mt-4 space-y-2'>";
        inList = true;
      }
      html += `<li class='rounded-lg bg-elevated px-3 py-2 text-sm text-text/85'>${line
        .replace("- ", "")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`;
      continue;
    }

    if (line.length === 0) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    html += `<p class='mt-4 leading-relaxed text-text/85'>${line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code class='rounded bg-black/40 px-1 py-0.5 text-cyan-300'>$1</code>")}</p>`;
  }

  if (inList) {
    html += "</ul>";
  }

  return html;
}

function getHeadings(markdown: string): Heading[] {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace("## ", "").trim();
      return {
        title,
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      };
    });
}

export function ArticlePageClient({
  article,
  related,
  latest,
  popular,
  recommended,
  categoryArticles,
  prev,
  next,
}: ArticlePageClientProps) {
  const contentHtml = useMemo(() => contentToHtml(article.content), [article.content]);
  const headings = useMemo(() => getHeadings(article.content), [article.content]);

  return (
    <>
      <ReadingProgressBar targetId="article-content" />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article id="article-content" className="glass glow-border rounded-3xl p-6 sm:p-8">
          <header>
            <Link
              href={`/categories/${article.categorySlug}`}
              className="text-xs uppercase tracking-wider text-cyan-300 hover:underline"
            >
              {article.category}
            </Link>
            <h1 className="mt-3 font-display text-h1 font-bold text-text">
              {article.title}
            </h1>
            <p className="mt-4 text-muted">{article.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
              <Link href={`/authors/${article.author.slug}`} className="font-medium text-text hover:text-cyan-400">
                {article.author.name}
              </Link>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                Published {article.date}
              </span>
              {article.updatedAt && article.updatedAt !== article.date && (
                <span>Updated {article.updatedAt}</span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
            {article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="rounded-lg bg-elevated px-2.5 py-1 text-xs text-muted hover:text-cyan-400"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-5">
              <SocialShare title={article.title} path={`/blog/${article.slug}`} />
            </div>
          </header>

          <div className="mt-6">
            <SummarizeModal
              slug={article.slug}
              title={article.title}
              content={article.content}
            />
          </div>

          <div
            className="prose prose-invert mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="mt-10 rounded-2xl border border-border bg-elevated p-5">
            <h3 className="font-display text-lg font-semibold text-text">
              About the author
            </h3>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-text">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-semibold text-text">{article.author.name}</p>
                <p className="text-sm text-cyan-300">{article.author.role}</p>
                <p className="mt-2 text-sm text-muted">{article.author.bio}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-400/25 bg-indigo-500/10 p-5">
            <h3 className="font-display text-lg font-semibold text-text">
              Join our newsletter
            </h3>
            <p className="mt-2 text-sm text-muted">
              Weekly practical updates on AI tools, development workflows, and
              expert tutorials.
            </p>
            <Link
              href="/newsletter"
              className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Subscribe now
            </Link>
          </div>

          {(prev || next) && (
            <nav className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="glass glass-hover flex items-center gap-2 rounded-xl p-4 text-sm">
                  <ChevronLeft size={16} />
                  <div>
                    <span className="text-xs text-muted">Previous</span>
                    <p className="font-semibold text-text">{prev.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {next && (
                <Link href={`/blog/${next.slug}`} className="glass glass-hover flex items-center gap-2 rounded-xl p-4 text-sm sm:text-right">
                  <div className="sm:order-1">
                    <span className="text-xs text-muted">Next</span>
                    <p className="font-semibold text-text">{next.title}</p>
                  </div>
                  <ChevronRight size={16} className="sm:order-2" />
                </Link>
              )}
            </nav>
          )}
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <section className="glass rounded-2xl p-5">
            <h3 className="font-display text-lg font-semibold text-text">
              Table of contents
            </h3>
            {headings.length === 0 ? (
              <p className="mt-3 text-sm text-muted">No section headings found.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="text-sm text-muted transition hover:text-cyan-300"
                    >
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <ArticleInteractions slug={article.slug} title={article.title} />
          <AIRecommendations articles={related} />
          <ArticleComments slug={article.slug} />
        </aside>
      </div>

      <InternalLinking
        related={related}
        latest={latest}
        popular={popular}
        recommended={recommended}
        categoryArticles={categoryArticles}
        categoryName={article.category}
        categorySlug={article.categorySlug}
      />
    </>
  );
}
