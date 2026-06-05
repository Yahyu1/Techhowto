import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { NewsletterSignupForm } from "./NewsletterSignupForm";

export const metadata: Metadata = createMetadata({
  title: "Newsletter",
  description:
    "Join the TechHowTo premium newsletter for high-signal AI updates, practical engineering playbooks, and curated tools.",
  path: "/newsletter",
});

const features = [
  "Weekly AI model releases decoded for builders",
  "Production engineering patterns from real teams",
  "Curated tool stack recommendations and benchmarks",
  "Exclusive templates, launch checklists, and playbooks",
];

export default function NewsletterPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Newsletter
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Your unfair edge in tech, every Tuesday
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            The best operators do not consume more content, they consume better
            content. TechHowTo distills what matters so you can ship faster.
          </p>
        </header>

        <NewsletterSignupForm />

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="glass rounded-xl border border-border p-4 text-sm text-muted"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
