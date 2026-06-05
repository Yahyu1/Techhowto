import type { Author } from "@/types";

export const authors: Record<string, Author> = {
  "alex-chen": {
    slug: "alex-chen",
    name: "Alex Chen",
    role: "AI & Developer Tools Editor",
    avatar: "AC",
    bio: "Alex reviews AI assistants, coding tools, and developer workflows with a focus on practical, reproducible benchmarks.",
  },
  "jordan-lee": {
    slug: "jordan-lee",
    name: "Jordan Lee",
    role: "Systems & Mobile Editor",
    avatar: "JL",
    bio: "Jordan specializes in Windows troubleshooting, Android optimization, and cross-platform productivity setups.",
  },
  "yahya-umar": {
    slug: "yahya-umar",
    name: "Yahya Umar",
    role: "Founder & Lead Editor",
    avatar: "YU",
    bio: "Yahya founded TechHowTo to deliver clear programming tutorials, developer roadmaps, and practical technology guides.",
  },
};

export function getAllAuthorSlugs(): string[] {
  return Object.keys(authors);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
