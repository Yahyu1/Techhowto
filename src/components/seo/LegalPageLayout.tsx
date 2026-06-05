import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";

interface LegalPageLayoutProps {
  title: string;
  eyebrow: string;
  effectiveDate?: string;
  breadcrumbs: { label: string; href?: string }[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  eyebrow,
  effectiveDate = "June 5, 2026",
  breadcrumbs,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="py-14 sm:py-18">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-text">{title}</h1>
          <p className="mt-3 text-sm text-muted">Effective date: {effectiveDate}</p>
        </header>
        <GlassCard glow padding="lg" className="space-y-8 text-sm leading-relaxed text-muted">
          {children}
        </GlassCard>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
