import type { Article } from "@/types";
import { authors } from "./authors";

export const articles: Article[] = [
  {
    id: "best-ai-tools-2026",
    slug: "best-ai-tools-2026",
    title: "Best AI Tools 2026",
    excerpt:
      "Our top picks for chatbots, coding assistants, image generators, and research tools this year.",
    category: "AI Tools",
    tags: ["ai", "tools", "chatgpt", "claude", "productivity"],
    author: authors["alex-chen"],
    date: "2026-05-28",
    readTime: "12 min",
    views: 48200,
    featured: true,
    trending: true,
    content: `2026 has brought faster models, better multimodal support, and sharper pricing tiers. Here are the tools we recommend for everyday users, developers, and creators.

## Best AI Chatbots

- **ChatGPT** — Best all-rounder for general tasks (9.6/10)
- **Claude** — Best for long-form writing and editing (9.5/10)
- **Grok** — Best for deep reasoning and math (9.8/10)
- **Perplexity** — Best for cited research (9.3/10)

## Best Coding Assistants

- **Cursor** — AI-native IDE with strong refactoring
- **GitHub Copilot** — Deep IDE integration across stacks
- **Claude Code** — Excellent for architecture reviews

## Best Image & Video Tools

- **Flux.1** — Photoreal generation leader
- **Midjourney** — Artistic and creative workflows
- **Runway** — Video generation and editing

## How We Rank Tools

We evaluate latency, output quality, pricing transparency, privacy controls, and real-world task completion across writing, coding, and research benchmarks.`,
  },
  {
    id: "chatgpt-vs-claude",
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    excerpt:
      "Head-to-head comparison on writing, coding, reasoning, pricing, and which to choose.",
    category: "Comparisons",
    tags: ["chatgpt", "claude", "comparison", "ai"],
    author: authors["alex-chen"],
    date: "2026-05-20",
    readTime: "10 min",
    views: 35600,
    featured: true,
    trending: true,
    content: `ChatGPT and Claude remain the two most popular general-purpose AI assistants. Both excel at different workflows.

## Writing Quality

Claude produces more natural long-form drafts with fewer filler phrases. ChatGPT is stronger at iterative brainstorming and structured outlines.

## Coding Performance

ChatGPT integrates tightly with developer tooling. Claude excels at reading large codebases and explaining architectural tradeoffs.

## Reasoning & Analysis

Grok and Claude lead on multi-step reasoning, but ChatGPT offers the broadest plugin ecosystem for research automation.

## Pricing

Both offer capable free tiers. Power users should compare token limits, file upload caps, and API pricing before committing.

## Verdict

Choose **Claude** for writing and document analysis. Choose **ChatGPT** for general productivity and coding workflows.`,
  },
  {
    id: "windows-11-fixes",
    slug: "windows-11-fixes",
    title: "Windows 11 Fixes",
    excerpt:
      "Solve update errors, slow boot, disk space issues, and system file corruption.",
    category: "Windows",
    tags: ["windows", "troubleshooting", "updates"],
    author: authors["jordan-lee"],
    date: "2026-05-15",
    readTime: "8 min",
    views: 29100,
    featured: false,
    trending: true,
    content: `Windows 11 issues often trace back to update services, corrupted system files, or startup bloat.

## Fix Windows Update Stuck

1. Run Windows Update Troubleshooter
2. Stop the Windows Update service
3. Clear the SoftwareDistribution folder
4. Restart the service and check for updates

## Repair System Files

Open an elevated terminal and run:

\`\`\`
sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth
\`\`\`

## Improve Boot Speed

Disable unnecessary startup apps via Task Manager and enable Fast Startup only if you do not dual-boot.

## Free Disk Space

Use Storage Sense, remove old Windows Update files, and uninstall unused Store apps.`,
  },
  {
    id: "android-tips",
    slug: "android-tips",
    title: "Android Tips",
    excerpt:
      "Battery life, storage cleanup, privacy settings, and performance tweaks.",
    category: "Android",
    tags: ["android", "battery", "privacy", "mobile"],
    author: authors["jordan-lee"],
    date: "2026-05-10",
    readTime: "7 min",
    views: 22400,
    featured: false,
    trending: false,
    content: `These Android optimizations deliver measurable battery and performance gains without rooting.

## Battery Life

- Enable Adaptive Battery
- Restrict background activity for social apps
- Lower refresh rate when not gaming

## Storage Cleanup

- Clear app caches monthly
- Move media to cloud storage
- Uninstall duplicate utility apps

## Privacy Settings

Review per-app permissions, disable ad personalization, and enable Google Play Protect scans.`,
  },
  {
    id: "ai-news",
    slug: "ai-news",
    title: "AI News Roundup",
    excerpt:
      "Latest model releases, pricing changes, and what they mean for everyday users.",
    category: "News",
    tags: ["ai", "news", "models", "industry"],
    author: authors["alex-chen"],
    date: "2026-06-01",
    readTime: "6 min",
    views: 18700,
    featured: true,
    trending: true,
    content: `June 2026 brings faster inference, cheaper API tiers, and broader multimodal support across major providers.

## Model Releases

OpenAI, Anthropic, and Google all shipped incremental upgrades focused on coding and agentic workflows.

## Pricing Changes

Several providers reduced entry-level API costs while introducing higher tiers for enterprise compliance features.

## What It Means For You

Everyday users benefit from better free tiers. Developers should re-benchmark latency before picking a default model.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getTrendingArticles(): Article[] {
  return [...articles]
    .filter((a) => a.trending)
    .sort((a, b) => b.views - a.views);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
