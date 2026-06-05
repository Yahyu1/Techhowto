import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import {
  TemplatesMarketplaceClient,
  type TemplateItem,
} from "./TemplatesMarketplaceClient";

export const metadata: Metadata = createMetadata({
  title: "Templates",
  description:
    "Premium website and app templates for landing pages, dashboards, blogs, SaaS products, and portfolio sites.",
  path: "/templates",
});

const templates: TemplateItem[] = [
  {
    id: "lp-convert-pro",
    name: "Convert Pro Landing Kit",
    category: "Landing Pages",
    description:
      "High-converting SaaS landing page kit with testimonials, pricing toggles, and strong CTA hierarchy.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    price: "$59",
    rating: 4.8,
  },
  {
    id: "dash-ops-board",
    name: "Ops Command Dashboard",
    category: "Dashboards",
    description:
      "Data-dense admin dashboard with role-aware navigation, chart-ready sections, and settings flows.",
    tech: ["React", "TypeScript", "Shadcn"],
    price: "$79",
    rating: 4.7,
  },
  {
    id: "blog-creator-studio",
    name: "Creator Blog Studio",
    category: "Blogs",
    description:
      "Editorial-ready blog template with category pages, rich article layout, and newsletter hooks.",
    tech: ["Next.js", "MDX", "SEO"],
    price: "$49",
    rating: 4.6,
  },
  {
    id: "saas-growth-starter",
    name: "SaaS Growth Starter",
    category: "SaaS",
    description:
      "Production-grade SaaS starter with auth pages, billing UI sections, and onboarding checklists.",
    tech: ["Next.js", "Stripe", "Prisma"],
    price: "$129",
    rating: 4.9,
  },
  {
    id: "portfolio-motion-v2",
    name: "Motion Portfolio Pro",
    category: "Portfolio",
    description:
      "Modern personal portfolio with case studies, smooth transitions, and project gallery filtering.",
    tech: ["React", "GSAP", "Tailwind"],
    price: "$39",
    rating: 4.7,
  },
  {
    id: "lp-ai-launch",
    name: "AI Product Launch Page",
    category: "Landing Pages",
    description:
      "Landing template optimized for AI startups with product demos, pricing modules, and FAQs.",
    tech: ["Next.js", "Tailwind", "A/B Ready"],
    price: "$69",
    rating: 4.8,
  },
  {
    id: "dash-finance-grid",
    name: "Finance Insights Dashboard",
    category: "Dashboards",
    description:
      "Fintech dashboard UI with KPI cards, portfolio tables, and clear transaction states.",
    tech: ["React", "Charts", "Design System"],
    price: "$89",
    rating: 4.6,
  },
  {
    id: "saas-support-hub",
    name: "Support SaaS Suite",
    category: "SaaS",
    description:
      "Customer support SaaS interface templates with ticketing, knowledge base, and onboarding flows.",
    tech: ["TypeScript", "Next.js", "tRPC-ready"],
    price: "$119",
    rating: 4.7,
  },
];

export default function TemplatesPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Template Marketplace
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Ship polished products in days, not weeks
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Browse conversion-first templates for modern web businesses, from
            lightweight portfolios to full SaaS products.
          </p>
        </header>

        <TemplatesMarketplaceClient templates={templates} />
      </div>
    </section>
  );
}
