export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: Author;
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
  trending?: boolean;
  content: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  tools: string[];
  projects: { title: string; description: string }[];
  phases: { title: string; duration: string; topics: string[] }[];
  resources: { title: string; url: string; type: string }[];
}

export interface DevTool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
