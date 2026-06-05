export interface SeoCategory {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
}

export const SEO_CATEGORIES: SeoCategory[] = [
  { slug: "web-development", name: "Web Development", description: "Guides on building modern websites and web applications.", metaDescription: "Web development tutorials covering HTML, CSS, JavaScript, and full-stack workflows.", keywords: ["web development", "frontend", "full stack"], icon: "🌐" },
  { slug: "javascript", name: "JavaScript", description: "JavaScript fundamentals, patterns, and modern ES features.", metaDescription: "JavaScript tutorials for beginners and experienced developers.", keywords: ["javascript", "js tutorials", "es6"], icon: "📜" },
  { slug: "typescript", name: "TypeScript", description: "Type-safe JavaScript for scalable applications.", metaDescription: "TypeScript guides for building maintainable codebases.", keywords: ["typescript", "type safety"], icon: "🔷" },
  { slug: "react", name: "React", description: "Component architecture, hooks, and React best practices.", metaDescription: "React tutorials for building interactive user interfaces.", keywords: ["react", "react hooks", "components"], icon: "⚛️" },
  { slug: "nextjs", name: "Next.js", description: "Server components, routing, and production Next.js patterns.", metaDescription: "Next.js tutorials for modern full-stack React applications.", keywords: ["next.js", "nextjs", "app router"], icon: "▲" },
  { slug: "nodejs", name: "Node.js", description: "Backend APIs, runtime patterns, and Node ecosystem tools.", metaDescription: "Node.js guides for server-side JavaScript development.", keywords: ["node.js", "nodejs", "backend"], icon: "🟢" },
  { slug: "python", name: "Python", description: "Python for scripting, automation, and application development.", metaDescription: "Python programming tutorials and practical examples.", keywords: ["python", "programming"], icon: "🐍" },
  { slug: "ai", name: "AI", description: "AI tools, assistants, and workflows for developers.", metaDescription: "AI tutorials and tool reviews for software developers.", keywords: ["ai tools", "artificial intelligence"], icon: "🤖" },
  { slug: "machine-learning", name: "Machine Learning", description: "ML concepts, models, and practical implementation guides.", metaDescription: "Machine learning guides for developers getting started with ML.", keywords: ["machine learning", "ml"], icon: "🧠" },
  { slug: "cybersecurity", name: "Cybersecurity", description: "Security fundamentals, hardening, and safe development practices.", metaDescription: "Cybersecurity guides for developers and IT professionals.", keywords: ["cybersecurity", "security"], icon: "🔒" },
  { slug: "cloud-computing", name: "Cloud Computing", description: "Cloud platforms, deployment, and infrastructure basics.", metaDescription: "Cloud computing tutorials for modern software teams.", keywords: ["cloud computing", "aws", "azure"], icon: "☁️" },
  { slug: "devops", name: "DevOps", description: "CI/CD, containers, monitoring, and release automation.", metaDescription: "DevOps tutorials for reliable software delivery.", keywords: ["devops", "ci/cd", "docker"], icon: "⚙️" },
  { slug: "mobile-development", name: "Mobile Development", description: "Android, iOS, and cross-platform mobile guides.", metaDescription: "Mobile development tutorials and optimization tips.", keywords: ["mobile development", "android", "ios"], icon: "📱" },
  { slug: "programming-tutorials", name: "Programming Tutorials", description: "Step-by-step coding lessons across languages and paradigms.", metaDescription: "Programming tutorials for learners at every skill level.", keywords: ["programming tutorials", "coding"], icon: "💻" },
  { slug: "coding-tips", name: "Coding Tips", description: "Practical shortcuts, patterns, and productivity advice.", metaDescription: "Coding tips and tricks to write better software faster.", keywords: ["coding tips", "best practices"], icon: "💡" },
  { slug: "developer-tools", name: "Developer Tools", description: "Reviews and guides for tools that speed up development.", metaDescription: "Developer tool reviews, comparisons, and setup guides.", keywords: ["developer tools", "productivity"], icon: "🛠️" },
  { slug: "career-guides", name: "Career Guides", description: "Interview prep, portfolios, and career growth for developers.", metaDescription: "Developer career guides including interview preparation.", keywords: ["career guides", "coding interview"], icon: "🎯" },
  { slug: "tech-news", name: "Tech News", description: "Industry updates, releases, and technology trends.", metaDescription: "Technology news and analysis for developers.", keywords: ["tech news", "technology"], icon: "📰" },
];

export function getSeoCategoryBySlug(slug: string): SeoCategory | undefined {
  return SEO_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllSeoCategorySlugs(): string[] {
  return SEO_CATEGORIES.map((c) => c.slug);
}
