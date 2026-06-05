import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Partners",
  description:
    "Partner with TechHowTo through sponsorships, affiliate collaborations, educational bundles, and co-marketing campaigns.",
  path: "/partners",
});

const partnerTracks = [
  {
    title: "Sponsored Features",
    details:
      "Product deep-dives, launch writeups, and educational breakdowns shared with our developer-first audience.",
  },
  {
    title: "Affiliate Partnerships",
    details:
      "Performance-based promotions with transparent attribution and conversion-focused placements.",
  },
  {
    title: "Bundle Collaborations",
    details:
      "Joint offers and value packs for creators, startups, and engineering teams buying modern software stacks.",
  },
  {
    title: "Newsletter Placements",
    details:
      "Premium ad slots in our weekly high-intent newsletter with strong open and click-through rates.",
  },
];

const stats = [
  { label: "Monthly readers", value: "185K+" },
  { label: "Newsletter subscribers", value: "32K+" },
  { label: "Average open rate", value: "51%" },
  { label: "Partner renewal rate", value: "78%" },
];

export default function PartnersPage() {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Partner Program
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-white">
            Grow your product with a high-intent builder audience
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            We collaborate with brands that solve real developer and creator
            problems. Every campaign is crafted for trust, usefulness, and measurable ROI.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 text-center">
              <p className="font-display text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partnerTracks.map((track) => (
            <article key={track.title} className="glass glow-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-white">
                {track.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {track.details}
              </p>
            </article>
          ))}
        </div>

        <div className="glass glow-border mt-8 rounded-3xl p-8 text-center">
          <h2 className="font-display text-h3 font-semibold text-white">
            Let us build your next growth campaign
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            Tell us your product, goals, and timeline. We reply with a custom plan
            and media kit within 2 business days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Contact Partnerships</Button>
            <Button
              href={`mailto:${SITE.email}?subject=Partnership%20Inquiry`}
              variant="secondary"
            >
              Email {SITE.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
