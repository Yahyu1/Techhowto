import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { getAllArticleSlugs } from "@/lib/data/articles";
import { getAllRoadmapSlugs } from "@/lib/data/roadmaps";
import { getAllDevToolSlugs } from "@/lib/data/dev-tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    "",
    "/blog",
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
    "/about",
    "/contact",
    "/privacy",
    "/terms",
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

  return [...staticPages, ...articles, ...roadmaps, ...tools];
}
