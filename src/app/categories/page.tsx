import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO_CATEGORIES } from "@/lib/data/seo-categories";
import { getArticlesByCategorySlug } from "@/lib/data/articles";

export const metadata: Metadata = createMetadata({
  title: "Categories",
  description:
    "Explore TechHowTo categories including web development, JavaScript, React, Next.js, Python, AI, DevOps, and more.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} />
        <PageHeader
          eyebrow="Categories"
          title="Explore by topic"
          description="Browse programming tutorials, technology guides, and developer resources organized by category."
          align="left"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SEO_CATEGORIES.map((category) => {
            const count = getArticlesByCategorySlug(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="glass glow-border glass-hover rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              >
                <p className="text-2xl">{category.icon}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-text">
                  {category.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-cyan-400">
                  {count > 0 ? `${count} article${count === 1 ? "" : "s"}` : "Guides coming soon"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
