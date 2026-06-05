import { articles } from "./articles";
import { roadmaps } from "./roadmaps";
import { devTools } from "./dev-tools";
import { categories } from "./categories";
import { SITE } from "@/lib/constants";

export type SearchEntryType =
  | "Article"
  | "Roadmap"
  | "Tool"
  | "Resource"
  | "Template"
  | "Category"
  | "Page";

export interface SearchEntry {
  id: string;
  type: SearchEntryType;
  title: string;
  excerpt: string;
  href: string;
  tags: string[];
}

const resourcePages = [
  { title: "Resources Directory", excerpt: "Hosting, domains, AI tools, and learning platforms.", href: "/resources", tags: ["resources", "hosting", "tools"] },
  { title: "Template Marketplace", excerpt: "Landing pages, dashboards, SaaS, and portfolio templates.", href: "/templates", tags: ["templates", "marketplace"] },
  { title: "Recommended Tools", excerpt: "Curated developer and AI tool recommendations.", href: "/recommended-tools", tags: ["tools", "recommendations"] },
  { title: "Deals & Discounts", excerpt: "Exclusive offers on developer tools and services.", href: "/deals", tags: ["deals", "discounts"] },
  { title: "Newsletter", excerpt: "Weekly AI reviews, roadmaps, and developer tips.", href: "/newsletter", tags: ["newsletter", "subscribe"] },
];

export function buildSearchIndex(): SearchEntry[] {
  return [
    ...articles.map((a) => ({
      id: `article-${a.id}`,
      type: "Article" as const,
      title: a.title,
      excerpt: a.excerpt,
      href: `/blog/${a.slug}`,
      tags: [...a.tags, a.category, a.author.name],
    })),
    ...roadmaps.map((r) => ({
      id: `roadmap-${r.id}`,
      type: "Roadmap" as const,
      title: r.title,
      excerpt: r.description,
      href: `/roadmaps/${r.slug}`,
      tags: [r.level, ...r.skills.slice(0, 6)],
    })),
    ...devTools.map((t) => ({
      id: `tool-${t.id}`,
      type: "Tool" as const,
      title: t.name,
      excerpt: t.description,
      href: `/tools/${t.slug}`,
      tags: [t.category, t.slug],
    })),
    ...categories.map((c) => ({
      id: `category-${c.id}`,
      type: "Category" as const,
      title: c.name,
      excerpt: c.description,
      href: `/blog?category=${encodeURIComponent(c.name)}`,
      tags: [c.slug, "category"],
    })),
    ...resourcePages.map((r, i) => ({
      id: `resource-${i}`,
      type: "Resource" as const,
      title: r.title,
      excerpt: r.excerpt,
      href: r.href,
      tags: r.tags,
    })),
    {
      id: "page-about",
      type: "Page" as const,
      title: "About TechHowTo",
      excerpt: "Our mission, team, and editorial standards.",
      href: "/about",
      tags: ["about", "team"],
    },
    {
      id: "page-contact",
      type: "Page" as const,
      title: "Contact",
      excerpt: `Reach the ${SITE.name} team.`,
      href: "/contact",
      tags: ["contact", "support"],
    },
  ];
}
