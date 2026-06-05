import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, LegalSection } from "@/components/seo/LegalPageLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: `Read the terms governing your use of ${SITE.name}, including content usage, user conduct, and liability.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of use"
      eyebrow="Terms & Conditions"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Terms & Conditions" },
      ]}
    >
      <LegalSection title="Agreement to terms">
        <p>
          By accessing {SITE.url}, you agree to these Terms and Conditions. If you do not agree, please
          discontinue use of the site.
        </p>
      </LegalSection>

      <LegalSection title="Use of content">
        <p>
          All tutorials, articles, roadmaps, and tools on {SITE.name} are provided for educational
          purposes. You may share links to our content with attribution. You may not republish full
          articles, scrape our content at scale, or use our materials for commercial redistribution
          without written permission.
        </p>
      </LegalSection>

      <LegalSection title="User conduct">
        <p>When using our site, you agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Submit false, misleading, or abusive content</li>
          <li>Attempt to disrupt site security or infrastructure</li>
          <li>Use automated systems to harvest data without permission</li>
          <li>Violate applicable laws or third-party rights</li>
        </ul>
      </LegalSection>

      <LegalSection title="Disclaimer of warranties">
        <p>
          Content is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that
          tutorials, tools, or recommendations will meet your specific requirements or produce particular
          outcomes. See our <a href="/disclaimer" className="text-cyan-400 hover:underline">Disclaimer</a>.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          {SITE.name} and its contributors shall not be liable for indirect, incidental, or consequential
          damages arising from your use of the site, including loss of data, revenue, or business
          opportunities.
        </p>
      </LegalSection>

      <LegalSection title="External links">
        <p>
          Our content may link to third-party websites. We are not responsible for the content, privacy
          practices, or availability of external sites.
        </p>
      </LegalSection>

      <LegalSection title="Changes to terms">
        <p>
          We may update these terms at any time. Continued use of the site after changes constitutes
          acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
