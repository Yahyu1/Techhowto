import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, LegalSection } from "@/components/seo/LegalPageLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description: `Understand how ${SITE.name} uses cookies for analytics, functionality, and advertising.`,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="How we use cookies"
      eyebrow="Cookie Policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Cookie Policy" },
      ]}
    >
      <LegalSection title="What are cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help sites
          remember preferences, measure traffic, and deliver relevant content.
        </p>
      </LegalSection>

      <LegalSection title="Cookies we use">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Essential cookies</strong> — Required for core functionality such as theme preferences and session security.</li>
          <li><strong>Analytics cookies</strong> — Help us understand how visitors use our tutorials and tools so we can improve content.</li>
          <li><strong>Advertising cookies</strong> — May be set by partners like Google AdSense to show relevant ads and measure campaign performance.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Managing cookies">
        <p>
          You can control cookies through your browser settings. Blocking certain cookies may affect site
          functionality. For Google ad personalization, visit{" "}
          <a href="https://adssettings.google.com" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="Updates">
        <p>
          We may update this Cookie Policy as our practices change. See also our{" "}
          <a href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions? Email{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">{SITE.email}</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
