import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SITE, LEGAL_LINKS } from "@/lib/constants";
import { SEO_CATEGORIES } from "@/lib/data/seo-categories";

const footerCategories = SEO_CATEGORIES.slice(0, 6);
const moreCategories = SEO_CATEGORIES.slice(6, 12);

const columns = [
  {
    title: "Categories",
    links: footerCategories.map((c) => ({ href: `/categories/${c.slug}`, label: c.name })),
  },
  {
    title: "More Topics",
    links: moreCategories.map((c) => ({ href: `/categories/${c.slug}`, label: c.name })),
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Resources" },
      { href: "/templates", label: "Templates" },
      { href: "/recommended-tools", label: "Recommended Tools" },
      { href: "/blog", label: "Blog" },
      { href: "/archive", label: "Archive" },
    ],
  },
  {
    title: "Roadmaps",
    links: [
      { href: "/roadmaps", label: "All Roadmaps" },
      { href: "/roadmaps/frontend-developer", label: "Frontend" },
      { href: "/roadmaps/full-stack-developer", label: "Full Stack" },
      { href: "/roadmaps/ai-engineer", label: "AI Engineer" },
    ],
  },
  {
    title: "Developer Tools",
    links: [
      { href: "/tools", label: "All Tools" },
      { href: "/tools/json-formatter", label: "JSON Formatter" },
      { href: "/tools/regex-tester", label: "Regex Tester" },
      { href: "/tools/sitemap-generator", label: "Sitemap Generator" },
    ],
  },
  {
    title: "Legal",
    links: [
      ...LEGAL_LINKS.map((l) => ({ href: l.href, label: l.label })),
      { href: "/partners", label: "Partners" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-x-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>
                <span className="font-medium text-text">Email: </span>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-cyan-400 transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-text">Phone: </span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400 transition-colors">
                  {SITE.phone}
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Twitter", href: "https://twitter.com/techhowto" },
                { label: "GitHub", href: "https://github.com/techhowto" },
                { label: "YouTube", href: "https://youtube.com/@techhowto" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-xs font-medium text-muted hover:text-text"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-cyan-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-2">
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/contact-us" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/authors" className="hover:text-cyan-400 transition-colors">
                  Authors
                </Link>
              </li>
              <li>
                <Link href="/tags" className="hover:text-cyan-400 transition-colors">
                  Tags
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-muted">
              Weekly programming tutorials, developer tools, and technology guides.
            </p>
            <Link
              href="/newsletter"
              className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Subscribe free
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
