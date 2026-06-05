import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { getAllArticleSlugs } from "@/lib/data/articles";
import { getAllRoadmapSlugs } from "@/lib/data/roadmaps";
import { getAllDevToolSlugs } from "@/lib/data/dev-tools";
import { getAllSeoCategorySlugs } from "@/lib/data/seo-categories";
import { getAllTagSlugs } from "@/lib/data/tags";
import { getAllAuthorSlugs } from "@/lib/data/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    "",
    "/blog",
    "/blog/archive",
    "/archive",
    "/roadmaps",
    "/tools",
    "/newsletter",
    "/resources",
    "/templates",
    "/recommended-tools",
    "/deals",
    "/partners",
    "/search",
    "/categories",
    "/tags",
    "/authors",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/cookie-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = getAllArticleSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const roadmaps = getAllRoadmapSlugs().map((slug) => ({
    url: `${base}/roadmaps/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tools = getAllDevToolSlugs().map((slug) => ({
    url: `${base}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categories = getAllSeoCategorySlugs().map((slug) => ({
    url: `${base}/categories/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const tags = getAllTagSlugs().map((slug) => ({
    url: `${base}/tags/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const authorPages = getAllAuthorSlugs().map((slug) => ({
    url: `${base}/authors/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articles, ...roadmaps, ...tools, ...categories, ...tags, ...authorPages];
}
