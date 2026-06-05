import { faqSchema } from "@/lib/seo/schema";
import { SchemaScript } from "./SchemaScript";
import { GlassCard } from "@/components/ui/GlassCard";

export interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ title, faqs }: { title: string; faqs: FAQ[] }) {
  return (
    <>
      <SchemaScript data={faqSchema(faqs)} />
      <GlassCard glow padding="lg" className="mt-10">
        <h2 className="font-display text-h3 font-bold text-text">{title}</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-elevated p-4"
            >
              <summary className="cursor-pointer font-semibold text-text marker:content-none list-none flex justify-between items-center">
                {faq.question}
                <span className="text-cyan-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </GlassCard>
    </>
  );
}
