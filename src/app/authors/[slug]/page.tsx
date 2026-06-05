import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { getAuthorBySlug, getAllAuthorSlugs } from "@/lib/data/authors";
import { getArticlesByAuthor } from "@/lib/data/articles";
import { SITE } from "@/lib/constants";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) {
    return createMetadata({ title: "Author Not Found", description: "Author not found.", path: `/authors/${slug}` });
  }
  return createMetadata({
    title: `${author.name} — Author`,
    description: author.bio,
    path: `/authors/${slug}`,
  });
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorArticles = getArticlesByAuthor(slug);

  return (
    <div className="py-10 sm:py-14">
      <SchemaScript
        data={[
          personSchema(author),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Authors", url: `${SITE.url}/authors` },
            { name: author.name, url: `${SITE.url}/authors/${slug}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Authors", href: "/authors" }, { label: author.name }]} />
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-2xl font-bold text-white">
            {author.avatar}
          </div>
          <div>
            <h1 className="font-display text-h1 font-bold text-text">{author.name}</h1>
            <p className="text-cyan-400">{author.role}</p>
            <p className="mt-3 max-w-2xl text-muted">{author.bio}</p>
          </div>
        </header>
        <section className="mt-12">
          <h2 className="font-display text-h3 font-semibold text-text">Articles by {author.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authorArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
