import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Deals",
  description:
    "Exclusive discounts and limited-time software deals for developers, creators, and startup teams.",
  path: "/deals",
});

const deals = [
  {
    name: "Vercel Pro",
    offer: "20% off first 3 months",
    code: "THPRO20",
    expires: "Jun 30, 2026",
    description:
      "Scale your Next.js deployments with advanced observability, analytics, and collaboration features.",
    href: "https://vercel.com/pricing",
  },
  {
    name: "Framer Site Plan",
    offer: "3 months free annual",
    code: "TECHHOWTO-FRM",
    expires: "Jul 12, 2026",
    description:
      "Launch design-forward marketing sites with CMS and premium interactions without heavy engineering overhead.",
    href: "https://www.framer.com/pricing/",
  },
  {
    name: "Notion Plus",
    offer: "35% off annual plan",
    code: "BUILD35",
    expires: "Jun 21, 2026",
    description:
      "Consolidate docs, project planning, and workflows into one collaborative workspace.",
    href: "https://www.notion.so/pricing",
  },
  {
    name: "Linear Team",
    offer: "2 months free",
    code: "SHIPFAST",
    expires: "Jul 5, 2026",
    description:
      "Upgrade your product delivery with better planning, cycles, and issue triage automation.",
    href: "https://linear.app/pricing",
  },
];

export default function DealsPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Deals and Discounts
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">
            Save on tools you already use
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            We negotiate practical offers for real builder workflows. Offers are
            reviewed and updated regularly to keep this page high-signal.
          </p>
        </header>

        <div className="grid gap-5">
          {deals.map((deal) => (
            <article key={deal.name} className="glass glow-border rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold text-text">
                  {deal.name}
                </h2>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Expires {deal.expires}
                </span>
              </div>
              <p className="mt-2 text-lg font-semibold text-cyan-200">{deal.offer}</p>
              <p className="mt-3 text-sm text-muted">{deal.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="rounded-lg border border-border bg-black/30 px-3 py-2 font-mono text-sm text-text">
                  Code: {deal.code}
                </p>
                <Button href={deal.href} size="sm">
                  Claim Deal
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">
          Disclosure: Some offers may include affiliate compensation at no extra
          cost to you. We only feature products we would recommend regardless.
        </p>
      </div>
    </section>
  );
}
