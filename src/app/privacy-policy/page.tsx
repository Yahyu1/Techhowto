import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout, LegalSection } from "@/components/seo/LegalPageLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Learn how ${SITE.name} collects, uses, and protects your personal information across our tutorials, tools, and newsletter.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Your privacy matters"
      eyebrow="Privacy Policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
    >
      <LegalSection title="Introduction">
        <p>
          {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates a technology education
          platform at {SITE.url}. This Privacy Policy explains how we collect, use, disclose, and safeguard
          information when you visit our website, subscribe to our newsletter, or contact us.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          We may collect information you provide directly, such as your name and email address when you
          subscribe to our newsletter, submit a contact form, or leave comments. We also collect technical
          data automatically, including IP address, browser type, device information, pages visited, and
          referral sources through analytics tools.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <p>We use collected information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Deliver tutorials, guides, and developer resources</li>
          <li>Send newsletter updates you have opted into</li>
          <li>Respond to inquiries and support requests</li>
          <li>Improve site performance, content quality, and user experience</li>
          <li>Comply with legal obligations and prevent abuse</li>
        </ul>
      </LegalSection>

      <LegalSection title="Cookies and tracking">
        <p>
          We use cookies and similar technologies for essential site functionality, analytics, and
          advertising where applicable. You can manage cookie preferences through your browser settings.
          See our <a href="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</a> for details.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          We may use third-party services for hosting, analytics, email delivery, and advertising
          (including Google AdSense). These providers may collect information according to their own
          privacy policies. We encourage you to review those policies.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain personal information only as long as necessary to fulfill the purposes described in
          this policy, unless a longer retention period is required by law.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete, or restrict
          processing of your personal data. To exercise these rights, contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">{SITE.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          For privacy-related questions, email{" "}
          <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">{SITE.email}</a> or
          call {SITE.phone}.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
