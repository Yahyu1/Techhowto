"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Map, Wrench, User } from "lucide-react";
import { MOBILE_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  search: Search,
  roadmaps: Map,
  tools: Wrench,
  profile: User,
} as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 glass border-t border-border lg:hidden"
      aria-label="Mobile bottom navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-2 py-2">
        {MOBILE_NAV.map(({ href, label, icon }) => {
          const Icon = iconMap[icon];
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[10px] font-medium transition-colors",
                active ? "text-cyan-400" : "text-muted hover:text-text"
              )}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
