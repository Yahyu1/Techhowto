import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read how TechHowTo collects, uses, and protects personal data across the website and newsletter.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Privacy Policy
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-white">
            Your privacy matters
          </h1>
          <p className="mt-3 text-sm text-muted">
            Effective date: June 5, 2026
          </p>
        </header>

        <article className="glass glow-border space-y-6 rounded-3xl p-7 text-sm leading-relaxed text-muted sm:p-9">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Information we collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name and
              email when subscribing to our newsletter or contacting us. We also
              collect basic analytics data such as page views and referral sources
              to improve site performance and content quality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              How we use information
            </h2>
            <p className="mt-2">
              We use your data to deliver newsletter content, respond to requests,
              improve editorial quality, and maintain platform security. We do not
              sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Third-party services
            </h2>
            <p className="mt-2">
              We may use third-party platforms for analytics, email delivery, and
              affiliate tracking. These providers process data according to their
              own privacy policies and contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Data retention
            </h2>
            <p className="mt-2">
              We retain personal data only as long as necessary for the purposes
              described here, legal compliance, and record-keeping. You can request
              deletion at any time by contacting {SITE.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Your rights
            </h2>
            <p className="mt-2">
              Depending on your region, you may have rights to access, correct,
              delete, or restrict processing of your personal data. Contact us at{" "}
              {SITE.email} to submit requests.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
