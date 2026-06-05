import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQSection } from "@/components/seo/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { organizationSchema } from "@/lib/seo/schema";
import { getFaqsForTopic } from "@/lib/data/faqs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description: `${SITE.name} helps developers learn modern technology through tutorials, roadmaps, guides, and free developer tools.`,
  path: "/about-us",
});

const offerings = [
  { title: "Tutorials", description: "Step-by-step programming lessons across web development, AI, DevOps, and more.", href: "/blog" },
  { title: "Developer Resources", description: "Curated links, templates, and references to accelerate your learning.", href: "/resources" },
  { title: "Learning Roadmaps", description: "Structured paths from beginner to job-ready across in-demand tech roles.", href: "/roadmaps" },
  { title: "Technology Guides", description: "Practical guides on frameworks, languages, and production workflows.", href: "/categories" },
  { title: "Developer Tools", description: "Free in-browser utilities for formatting, testing, and generating assets.", href: "/tools" },
];

export default function AboutUsPage() {
  const faqs = getFaqsForTopic("programming");

  return (
    <>
      <SchemaScript data={organizationSchema()} />
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">About Us</p>
            <h1 className="mt-4 font-display text-h1 font-bold text-text">
              Practical technology education for developers
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {SITE.name} is a technology blog and learning platform built for developers who want clear,
              actionable guidance—not hype. We publish programming tutorials, web development guides, and
              free tools to help you learn, build, and ship with confidence.
            </p>
          </header>

          <GlassCard glow padding="lg" className="mb-10">
            <h2 className="font-display text-h3 font-bold text-text">Our mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We believe every developer deserves access to high-quality, honest technology education.
              Our mission is to demystify complex topics—from React and Next.js to cloud computing and
              AI—and present them in formats you can apply immediately in real projects.
            </p>
          </GlassCard>

          <h2 className="font-display text-h3 font-bold text-text">What we provide</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => (
              <Link key={item.title} href={item.href}>
                <GlassCard hover padding="md" className="h-full">
                  <h3 className="font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </GlassCard>
              </Link>
            ))}
          </div>

          <GlassCard glow padding="lg" className="mt-10">
            <h2 className="font-display text-h3 font-bold text-text">Community focus</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {SITE.name} grows with its readers. We welcome feedback on tutorials, tool requests, and
              topic suggestions. Join our{" "}
              <Link href="/newsletter" className="text-cyan-400 hover:underline">newsletter</Link> for
              weekly updates, or{" "}
              <Link href="/contact-us" className="text-cyan-400 hover:underline">contact us</Link> to
              collaborate.
            </p>
          </GlassCard>

          <FAQSection title="Frequently asked questions" faqs={faqs} />
        </div>
      </section>
    </>
  );
}
