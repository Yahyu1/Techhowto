import { articles } from "./articles";

export function getAllTags(): { slug: string; name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const article of articles) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ slug: tag, name: tag, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getAllTagSlugs(): string[] {
  return getAllTags().map((t) => t.slug);
}

export function getTagBySlug(slug: string) {
  return getAllTags().find((t) => t.slug === slug);
}
