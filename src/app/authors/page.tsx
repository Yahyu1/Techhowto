import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { authors } from "@/lib/data/authors";
import { getArticlesByAuthor } from "@/lib/data/articles";

export const metadata: Metadata = createMetadata({
  title: "Authors",
  description: "Meet the TechHowTo editorial team writing programming tutorials and technology guides.",
  path: "/authors",
});

export default function AuthorsPage() {
  const authorList = Object.values(authors);

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Authors" }]} />
        <PageHeader
          eyebrow="Authors"
          title="Our editorial team"
          description="Experienced developers and technology writers creating practical tutorials for our community."
          align="left"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authorList.map((author) => {
            const count = getArticlesByAuthor(author.slug).length;
            return (
              <Link key={author.slug} href={`/authors/${author.slug}`}>
                <GlassCard hover padding="lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-bold text-white">
                    {author.avatar}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold text-text">{author.name}</h2>
                  <p className="text-sm text-cyan-400">{author.role}</p>
                  <p className="mt-3 text-sm text-muted">{author.bio}</p>
                  <p className="mt-4 text-xs text-muted">{count} article{count === 1 ? "" : "s"}</p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
