import { Hero } from "@/components/home/Hero";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/Button";
import { TRUSTED_BY } from "@/lib/constants";
import {
  getFeaturedArticles,
  getTrendingArticles,
  getLatestArticles,
} from "@/lib/data/articles";
import { roadmaps } from "@/lib/data/roadmaps";
import { devTools } from "@/lib/data/dev-tools";
import { categories } from "@/lib/data/categories";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Kim",
    role: "Frontend Engineer",
    company: "Stripe",
    quote:
      "TechHowTo roadmaps cut my learning time in half. The structure is exactly what senior engineers wish they had early on.",
    avatar: "SK",
  },
  {
    name: "Marcus Rivera",
    role: "DevOps Lead",
    company: "Vercel",
    quote:
      "The developer tools alone save me hours every week. Clean UI, zero bloat, everything works offline.",
    avatar: "MR",
  },
  {
    name: "Elena Park",
    role: "AI Researcher",
    company: "Anthropic",
    quote:
      "Best curated AI tool comparisons I've found. Honest ratings, real benchmarks, no affiliate fluff.",
    avatar: "EP",
  },
];

export default function HomePage() {
  const featured = getFeaturedArticles();
  const trending = getTrendingArticles();
  const latest = getLatestArticles(3);

  return (
    <>
      <Hero />

      <section className="border-y border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {TRUSTED_BY.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-muted/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Articles"
            subtitle="Hand-picked guides from our editorial team"
            href="/blog"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="🔥 Trending This Week"
            subtitle="Most-read articles right now"
            href="/blog?sort=trending"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trending.slice(0, 3).map((article, i) => (
              <ArticleCard key={article.id} article={article} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Developer Tools"
            subtitle="Free, fast, client-side utilities"
            href="/tools"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {devTools.slice(0, 8).map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="glass glass-hover group flex items-center gap-3 rounded-xl p-4 transition-all hover:-translate-y-0.5"
              >
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <div className="font-semibold text-text group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted">{tool.category}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular Categories"
            subtitle="Explore content by topic"
            href="/categories"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${encodeURIComponent(cat.name)}`}
                className="glass glow-border glass-hover group rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-text group-hover:text-cyan-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-muted line-clamp-2">{cat.description}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-cyan-400">
                  {cat.articleCount} article{cat.articleCount === 1 ? "" : "s"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Learning Roadmaps"
            subtitle="Structured paths from beginner to job-ready"
            href="/roadmaps"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roadmaps.slice(0, 6).map((roadmap) => (
              <Link
                key={roadmap.id}
                href={`/roadmaps/${roadmap.slug}`}
                className="glass glow-border glass-hover rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {roadmap.level}
                  </span>
                  <span className="text-xs text-muted">{roadmap.duration}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-text">
                  {roadmap.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {roadmap.description}
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-elevated">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-h2 font-bold text-text">
            Stay ahead of the curve
          </h2>
          <p className="mt-4 text-muted">
            Weekly AI reviews, developer roadmaps, and tool updates — no spam.
          </p>
          <Button href="/newsletter" size="lg" className="mt-8">
            Join Newsletter
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What developers say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6">
                <p className="text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-text">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-text">{t.name}</div>
                    <div className="text-xs text-muted">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest Articles" href="/blog" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="glass glow-border aurora relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
            <Wrench className="mx-auto mb-6 text-cyan-400" size={40} />
            <h2 className="font-display text-h2 font-bold text-text">
              Ready to level up?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Pick a roadmap, explore our tools, and start building production-grade projects today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/roadmaps" size="lg">
                Start Learning
              </Button>
              <Button href="/tools" variant="secondary" size="lg">
                Browse Tools
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
