import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about TechHowTo, our editorial standards, and our mission to help developers and creators build with confidence.",
  path: "/about",
});

const principles = [
  "Practical over theoretical: content must be immediately useful.",
  "Transparent recommendations: we disclose sponsorships and affiliate ties.",
  "Builder-first voice: write for people shipping real products.",
  "Quality over volume: fewer posts, higher signal.",
];

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About {SITE.name}
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Learn. Build. Launch.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            TechHowTo helps developers, creators, and operators move from confusion
            to execution. We publish practical guides, roadmaps, and curated
            recommendations that reduce research time and improve decision quality.
          </p>
        </header>

        <div className="glass glow-border rounded-3xl p-7 sm:p-9">
          <h2 className="font-display text-h3 font-semibold text-text">Our mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Modern tech moves quickly, and signal is hard to find. Our mission is to
            make high-quality technical knowledge easier to trust, easier to apply,
            and faster to turn into outcomes.
          </p>
          <h3 className="mt-7 font-display text-xl font-semibold text-text">
            Editorial principles
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {principles.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-elevated p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
