import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, LegalSection } from "@/components/seo/LegalPageLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description: `Important disclaimers about educational content, affiliate links, and third-party tools on ${SITE.name}.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Website disclaimer"
      eyebrow="Disclaimer"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Disclaimer" },
      ]}
    >
      <LegalSection title="Educational purpose">
        <p>
          {SITE.name} publishes programming tutorials, technology guides, and developer resources for
          informational and educational purposes. Content reflects the authors&apos; experience and
          research at the time of publication and may become outdated as technologies evolve.
        </p>
      </LegalSection>

      <LegalSection title="No professional advice">
        <p>
          Nothing on this site constitutes legal, financial, medical, or professional engineering advice.
          Always verify critical decisions with qualified professionals and official documentation.
        </p>
      </LegalSection>

      <LegalSection title="Accuracy of information">
        <p>
          We strive for accuracy but cannot guarantee that all content is complete, current, or error-free.
          Code examples, tool recommendations, and configuration steps should be tested in your own
          environment before production use.
        </p>
      </LegalSection>

      <LegalSection title="Affiliate and sponsored content">
        <p>
          Some articles may include affiliate links or sponsored mentions. We only recommend tools we
          believe provide genuine value to developers. Affiliate relationships do not influence our
          editorial standards.
        </p>
      </LegalSection>

      <LegalSection title="Third-party tools and services">
        <p>
          References to third-party software, APIs, and platforms are provided for convenience. We are
          not affiliated with or endorsed by those companies unless explicitly stated.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Report factual errors at{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">{SITE.email}</a> or
          via our <a href="/contact-us" className="text-cyan-400 hover:underline">Contact page</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
