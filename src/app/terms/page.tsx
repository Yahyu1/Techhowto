import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Review the terms that govern use of TechHowTo content, products, and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Terms of Service
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Terms for using {SITE.name}
          </h1>
          <p className="mt-3 text-sm text-muted">
            Effective date: June 5, 2026
          </p>
        </header>

        <article className="glass glow-border space-y-6 rounded-3xl p-7 text-sm leading-relaxed text-muted sm:p-9">
          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Acceptance of terms
            </h2>
            <p className="mt-2">
              By accessing or using this site, you agree to these terms. If you do
              not agree, please discontinue use of the platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Content usage
            </h2>
            <p className="mt-2">
              All articles, guides, and resources are provided for informational
              purposes. You may reference content with attribution, but you may not
              republish full content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Affiliate and sponsor disclosures
            </h2>
            <p className="mt-2">
              Some pages include affiliate links or sponsored placements. This may
              result in compensation to {SITE.name} at no additional cost to you.
              Recommendations remain editorially independent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Disclaimer of warranties
            </h2>
            <p className="mt-2">
              Services are provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. We do not guarantee uninterrupted availability, absolute
              accuracy, or suitability for any specific purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Limitation of liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, {SITE.name} is not liable for
              indirect, incidental, or consequential damages arising from use of the
              site, resources, or linked third-party services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-text">
              Contact
            </h2>
            <p className="mt-2">
              Questions regarding these terms can be sent to {SITE.email}.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
