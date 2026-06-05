"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { Article } from "@/types";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { ArticleInteractions } from "./ArticleInteractions";
import { ArticleComments } from "./ArticleComments";
import { SummarizeModal } from "./SummarizeModal";
import { ArticleCard } from "./ArticleCard";

interface Heading {
  id: string;
  title: string;
}

interface ArticlePageClientProps {
  article: Article;
  related: Article[];
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
        html += "<pre class='mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4'><code>";
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
      html += `<h2 id="${id}" class="mt-10 text-2xl font-semibold text-white">${heading}</h2>`;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!inList) {
        html += "<ul class='mt-4 space-y-2'>";
        inList = true;
      }
      html += `<li class='rounded-lg bg-white/5 px-3 py-2 text-sm text-white/85'>${line.replace(
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
      html += `<li class='rounded-lg bg-white/5 px-3 py-2 text-sm text-white/85'>${line
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

    html += `<p class='mt-4 leading-relaxed text-white/85'>${line
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

export function ArticlePageClient({ article, related }: ArticlePageClientProps) {
  const contentHtml = useMemo(() => contentToHtml(article.content), [article.content]);
  const headings = useMemo(() => getHeadings(article.content), [article.content]);

  return (
    <>
      <ReadingProgressBar targetId="article-content" />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article id="article-content" className="glass glow-border rounded-3xl p-6 sm:p-8">
          <header>
            <p className="text-xs uppercase tracking-wider text-cyan-300">
              {article.category}
            </p>
            <h1 className="mt-3 font-display text-h1 font-bold text-white">
              {article.title}
            </h1>
            <p className="mt-4 text-muted">{article.excerpt}</p>
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

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-display text-lg font-semibold text-white">
              About the author
            </h3>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{article.author.name}</p>
                <p className="text-sm text-cyan-300">{article.author.role}</p>
                <p className="mt-2 text-sm text-muted">{article.author.bio}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-400/25 bg-indigo-500/10 p-5">
            <h3 className="font-display text-lg font-semibold text-white">
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
        </article>

        <aside className="space-y-4">
          <section className="glass rounded-2xl p-5">
            <h3 className="font-display text-lg font-semibold text-white">
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
          <ArticleComments slug={article.slug} />
        </aside>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-h2 font-semibold text-white">
          Related Articles
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>
      </section>
    </>
  );
}
