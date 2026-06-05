import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = createMetadata({
  title: "Blog Archive",
  description: "Browse all TechHowTo articles by date and category.",
  path: "/blog/archive",
});

export default function BlogArchivePage() {
  const byYear = articles.reduce<Record<string, typeof articles>>((acc, a) => {
    const year = a.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(a);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Archive" }]} />
        <PageHeader
          eyebrow="Archive"
          title="All Articles"
          description={`${articles.length} articles published across ${years.length} year${years.length === 1 ? "" : "s"}.`}
          align="left"
        />

        <div className="mt-10 space-y-10">
          {years.map((year) => (
            <section key={year}>
              <h2 className="font-display text-2xl font-bold text-text">{year}</h2>
              <div className="mt-4 space-y-3">
                {byYear[year]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((article) => (
                    <GlassCard key={article.slug} hover padding="sm">
                      <Link href={`/blog/${article.slug}`} className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-xs font-semibold text-cyan-400">{article.category}</span>
                          <h3 className="font-semibold text-text">{article.title}</h3>
                        </div>
                        <span className="text-xs text-muted">{article.date}</span>
                      </Link>
                    </GlassCard>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
