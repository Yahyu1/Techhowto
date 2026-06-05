import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Resources",
  description:
    "A curated, affiliate-ready stack of trusted resources for hosting, domains, development, AI, design, productivity, and learning.",
  path: "/resources",
});

const sections = [
  {
    title: "Hosting",
    items: [
      {
        name: "Vercel",
        description:
          "Best-in-class frontend hosting with instant rollbacks, preview URLs, and edge runtime support.",
        price: "Free to start",
        href: "https://vercel.com/",
      },
      {
        name: "Railway",
        description:
          "Simple developer platform for deploying APIs, workers, and databases with zero ops friction.",
        price: "Usage-based",
        href: "https://railway.app/",
      },
      {
        name: "DigitalOcean",
        description:
          "Reliable cloud infrastructure for droplets, managed databases, object storage, and Kubernetes.",
        price: "$4/month+",
        href: "https://www.digitalocean.com/",
      },
    ],
  },
  {
    title: "Domains",
    items: [
      {
        name: "Namecheap",
        description:
          "Affordable domain registration with useful DNS tools and transparent renewal pricing.",
        price: "$6/year+",
        href: "https://www.namecheap.com/",
      },
      {
        name: "Porkbun",
        description:
          "Clean UX, strong pricing, free WHOIS privacy, and quick DNS propagation.",
        price: "$4/year+",
        href: "https://porkbun.com/",
      },
      {
        name: "Cloudflare Registrar",
        description:
          "Domains at-cost with robust DNS, CDN, and security services in one dashboard.",
        price: "At cost",
        href: "https://www.cloudflare.com/products/registrar/",
      },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      {
        name: "Cursor",
        description:
          "AI-native code editor for fast edits, repo awareness, and intelligent refactors.",
        price: "Free + Pro",
        href: "https://cursor.com/",
      },
      {
        name: "GitHub",
        description:
          "Version control, pull requests, and CI/CD workflows with rich collaboration features.",
        price: "Free + Team",
        href: "https://github.com/",
      },
      {
        name: "Postman",
        description:
          "API development and testing platform with collaboration workspaces and mock servers.",
        price: "Free + Team",
        href: "https://www.postman.com/",
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      {
        name: "ChatGPT",
        description:
          "General-purpose assistant for drafting, analysis, coding, and workflow automation.",
        price: "Free + Plus",
        href: "https://chatgpt.com/",
      },
      {
        name: "Claude",
        description:
          "Strong long-context reasoning for planning, writing, and technical explanation tasks.",
        price: "Free + Pro",
        href: "https://claude.ai/",
      },
      {
        name: "Perplexity",
        description:
          "Research assistant with citations and fast web-grounded answers for decision-making.",
        price: "Free + Pro",
        href: "https://www.perplexity.ai/",
      },
    ],
  },
  {
    title: "Design Tools",
    items: [
      {
        name: "Figma",
        description:
          "Collaborative interface design and prototyping platform for modern product teams.",
        price: "Free + Pro",
        href: "https://www.figma.com/",
      },
      {
        name: "Framer",
        description:
          "Design-to-web publishing with animation support and a powerful visual CMS.",
        price: "Free + Pro",
        href: "https://www.framer.com/",
      },
      {
        name: "Canva",
        description:
          "Fast visual content creation for social graphics, presentations, and brand assets.",
        price: "Free + Pro",
        href: "https://www.canva.com/",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Notion",
        description:
          "Flexible docs and project management hub for teams and personal knowledge systems.",
        price: "Free + Plus",
        href: "https://www.notion.so/",
      },
      {
        name: "Linear",
        description:
          "Fast issue tracking and sprint planning built for high-performance product teams.",
        price: "Free + Team",
        href: "https://linear.app/",
      },
      {
        name: "Raycast",
        description:
          "Power launcher and automation command center for developers on macOS.",
        price: "Free + Pro",
        href: "https://www.raycast.com/",
      },
    ],
  },
  {
    title: "Learning Platforms",
    items: [
      {
        name: "Frontend Masters",
        description:
          "Deep technical courses taught by practitioners from leading engineering teams.",
        price: "$39/month",
        href: "https://frontendmasters.com/",
      },
      {
        name: "Coursera",
        description:
          "University-backed courses and professional certificates across engineering disciplines.",
        price: "Free + Subscription",
        href: "https://www.coursera.org/",
      },
      {
        name: "freeCodeCamp",
        description:
          "Hands-on coding curriculum with practical projects and certifications at no cost.",
        price: "Free",
        href: "https://www.freecodecamp.org/",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Resources
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Curated stack for building and scaling online
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Every recommendation is selected for value, reliability, and support
            quality. Designed for affiliate monetization without compromising trust.
          </p>
        </header>

        <div className="space-y-7">
          {sections.map((section) => (
            <section key={section.title} className="glass glow-border rounded-2xl p-6">
              <h2 className="font-display text-h3 font-semibold text-text">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass-hover rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-text">{item.name}</h3>
                      <span className="rounded-full bg-cyan-500/15 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
