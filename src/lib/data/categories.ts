export interface Category {
  id: string;
  slug: string;
  seoSlug: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: "ai-tools",
    slug: "ai-tools",
    seoSlug: "ai",
    name: "AI Tools",
    description: "Reviews, comparisons, and workflows for modern AI assistants.",
    icon: "🧠",
    articleCount: 2,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "comparisons",
    slug: "comparisons",
    seoSlug: "ai",
    name: "Comparisons",
    description: "Head-to-head breakdowns to help you pick the right stack.",
    icon: "⚖️",
    articleCount: 1,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "windows",
    slug: "windows",
    seoSlug: "coding-tips",
    name: "Windows",
    description: "Troubleshooting guides for updates, boot, and system repair.",
    icon: "🪟",
    articleCount: 1,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "android",
    slug: "android",
    seoSlug: "mobile-development",
    name: "Android",
    description: "Battery, privacy, and performance optimization tips.",
    icon: "📱",
    articleCount: 1,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "news",
    slug: "news",
    seoSlug: "tech-news",
    name: "News",
    description: "Industry updates, model releases, and pricing changes.",
    icon: "📰",
    articleCount: 1,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "development",
    slug: "development",
    seoSlug: "web-development",
    name: "Development",
    description: "Frontend, backend, and full-stack engineering guides.",
    icon: "💻",
    articleCount: 0,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
