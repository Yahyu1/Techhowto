import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { getAllRoadmapSlugs, getRoadmapBySlug } from "@/lib/data/roadmaps";
import { ChevronRight } from "lucide-react";

interface RoadmapDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoadmapSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RoadmapDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    return createMetadata({
      title: "Roadmap Not Found",
      description: "The requested roadmap does not exist.",
      path: `/roadmaps/${slug}`,
    });
  }

  return createMetadata({
    title: roadmap.title,
    description: roadmap.description,
    path: `/roadmaps/${roadmap.slug}`,
  });
}

export default async function RoadmapDetailPage({ params }: RoadmapDetailPageProps) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  const progress = Math.min(
    100,
    Math.max(10, Math.round((roadmap.phases.length / 6) * 100))
  );

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition hover:text-cyan-300">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/roadmaps" className="transition hover:text-cyan-300">
            Roadmaps
          </Link>
          <ChevronRight size={14} />
          <span className="text-text">{roadmap.title}</span>
        </nav>

        <header className="glass glow-border rounded-3xl p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
              {roadmap.level}
            </span>
            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
              {roadmap.duration}
            </span>
          </div>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            {roadmap.title}
          </h1>
          <p className="mt-4 max-w-4xl text-muted">{roadmap.description}</p>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted">Roadmap Completion Preview</span>
              <span className="font-semibold text-cyan-300">{progress}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="glass rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold text-text">
              Core Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {roadmap.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-elevated px-3 py-1.5 text-xs text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="glass rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold text-text">
              Recommended Tools
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {roadmap.tools.map((tool) => (
                <li key={tool} className="rounded-lg bg-elevated px-3 py-2">
                  {tool}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-2xl p-6">
            <h2 className="font-display text-xl font-semibold text-text">
              Projects to Build
            </h2>
            <ul className="mt-4 space-y-3">
              {roadmap.projects.map((project) => (
                <li key={project.title} className="rounded-xl bg-elevated p-3">
                  <h3 className="font-semibold text-text">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-10">
          <div className="glass glow-border rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-h2 font-semibold text-text">
              Phase Timeline
            </h2>
            <div className="mt-8 space-y-6">
              {roadmap.phases.map((phase, index) => (
                <article key={phase.title} className="grid gap-4 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-text">
                      {index + 1}
                    </span>
                    <div className="hidden h-full min-h-16 w-px bg-white/10 md:block" />
                  </div>
                  <div className="rounded-2xl border border-border bg-elevated p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-text">
                        {phase.title}
                      </h3>
                      <span className="text-xs text-cyan-300">{phase.duration}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {phase.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-lg bg-black/30 px-3 py-1 text-xs text-muted"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-h2 font-semibold text-text">
              Learning Resources
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {roadmap.resources.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-hover rounded-2xl border border-border bg-elevated p-4 transition"
                >
                  <p className="text-xs uppercase tracking-wide text-cyan-300">
                    {resource.type}
                  </p>
                  <p className="mt-1 font-semibold text-text">{resource.title}</p>
                  <p className="mt-2 text-xs text-muted">Open resource</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
