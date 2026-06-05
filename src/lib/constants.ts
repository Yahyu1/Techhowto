export const SITE = {
  name: "TechHowTo",
  tagline: "Learn. Build. Launch.",
  description:
    "TechHowTo provides practical programming tutorials, web development guides, developer roadmaps, and free tools for software engineers.",
  url: "https://techhowto.vercel.app",
  email: "yahyaumar775@gmail.com",
  phone: "+92 313 5608012",
  twitter: "@techhowto",
  founded: "2024",
} as const;

export const NAV_LINKS = [
  { href: "/categories", label: "Categories" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/tools", label: "Tools" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About" },
] as const;

export const MOBILE_NAV = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/search", label: "Search", icon: "search" },
  { href: "/roadmaps", label: "Roadmaps", icon: "roadmaps" },
  { href: "/tools", label: "Tools", icon: "tools" },
  { href: "/about-us", label: "Profile", icon: "profile" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
] as const;

export const TRUSTED_BY = [
  "Vercel",
  "Stripe",
  "Linear",
  "Raycast",
  "Framer",
  "Notion",
] as const;
