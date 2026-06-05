import type { Metadata } from "next";
import { Mail, MessageSquare, Briefcase } from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact TechHowTo for editorial questions, partnerships, sponsorships, and support.",
  path: "/contact",
});

const contactCards = [
  {
    title: "General Inquiries",
    detail: "Questions, feedback, and editorial suggestions.",
    icon: MessageSquare,
    email: SITE.email,
    subject: "General Inquiry",
  },
  {
    title: "Partnerships",
    detail: "Sponsorships, affiliate programs, and collaborations.",
    icon: Briefcase,
    email: "partners@techhowto.com",
    subject: "Partnership Inquiry",
  },
  {
    title: "Support",
    detail: "Issues with links, resources, or technical pages.",
    icon: Mail,
    email: "support@techhowto.com",
    subject: "Support Request",
  },
];

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Let us connect
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            We reply to most messages within 1-2 business days. For urgent issues,
            include detailed context so our team can help quickly.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="glass glow-border rounded-2xl p-6">
              <card.icon size={18} className="text-cyan-300" />
              <h2 className="mt-4 font-display text-xl font-semibold text-text">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{card.detail}</p>
              <Button
                href={`mailto:${card.email}?subject=${encodeURIComponent(card.subject)}`}
                variant="secondary"
                className="mt-4"
                size="sm"
              >
                {card.email}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
