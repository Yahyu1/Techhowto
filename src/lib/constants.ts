export const SITE = {
  name: "TechHowTo",
  tagline: "Learn. Build. Launch.",
  description:
    "Master modern technology with premium tutorials, developer roadmaps, and production-ready tools.",
  url: "https://techhowto.vercel.app",
  email: "hello@techhowto.com",
  twitter: "@techhowto",
} as const;

export const NAV_LINKS = [
  { href: "/categories", label: "Categories" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export const TRUSTED_BY = [
  "Vercel",
  "Stripe",
  "Linear",
  "Raycast",
  "Framer",
  "Notion",
] as const;
