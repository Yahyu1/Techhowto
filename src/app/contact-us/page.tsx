import type { Metadata } from "next";
import { Mail, Phone, Briefcase, MessageSquare, AlertCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { contactPageSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description: `Contact ${SITE.name} for editorial questions, business inquiries, feedback, and technical support.`,
  path: "/contact-us",
});

const sections = [
  {
    title: "Business Inquiries",
    icon: Briefcase,
    description: "Partnerships, sponsorships, affiliate collaborations, and media requests.",
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    description: "Suggest tutorials, report outdated content, or share ideas to improve our guides.",
  },
  {
    title: "Report an Issue",
    icon: AlertCircle,
    description: "Broken links, display problems, or accessibility concerns on any page.",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <SchemaScript data={contactPageSchema()} />
      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact Us</p>
            <h1 className="mt-4 font-display text-h1 font-bold text-text">We&apos;d love to hear from you</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
              Reach out for editorial questions, business opportunities, feedback, or support. We typically
              respond within 1–2 business days.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-5">
            <GlassCard glow padding="lg" className="lg:col-span-3">
              <h2 className="font-display text-xl font-semibold text-text">Send a message</h2>
              <p className="mt-2 text-sm text-muted">Fill out the form and our team will get back to you.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </GlassCard>

            <div className="space-y-5 lg:col-span-2">
              <GlassCard padding="md">
                <h2 className="font-display text-lg font-semibold text-text">Direct contact</h2>
                <div className="mt-4 space-y-4 text-sm">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-muted hover:text-cyan-400">
                    <Mail size={18} className="text-cyan-400" />
                    {SITE.email}
                  </a>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-muted hover:text-cyan-400">
                    <Phone size={18} className="text-cyan-400" />
                    {SITE.phone}
                  </a>
                </div>
              </GlassCard>

              {sections.map((section) => (
                <GlassCard key={section.title} padding="md">
                  <section.icon size={18} className="text-cyan-400" />
                  <h3 className="mt-3 font-semibold text-text">{section.title}</h3>
                  <p className="mt-2 text-sm text-muted">{section.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
