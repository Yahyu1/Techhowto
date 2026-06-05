import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SITE } from "@/lib/constants";

const columns = [
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Resources" },
      { href: "/templates", label: "Templates" },
      { href: "/recommended-tools", label: "Recommended Tools" },
      { href: "/deals", label: "Deals" },
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
    title: "Tools",
    links: [
      { href: "/tools", label: "Developer Tools" },
      { href: "/tools/json-formatter", label: "JSON Formatter" },
      { href: "/tools/regex-tester", label: "Regex Tester" },
      { href: "/tools/markdown-previewer", label: "Markdown" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/newsletter", label: "Newsletter" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/partners", label: "Partners" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {["Twitter", "GitHub", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-xs font-medium text-muted hover:text-white"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Built for developers who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}
