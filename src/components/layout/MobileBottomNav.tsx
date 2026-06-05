"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Home, LayoutGrid, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categories", icon: LayoutGrid },
  { href: "/search", label: "Search", icon: Search },
  { href: "/blog?sort=trending", label: "Trending", icon: Flame },
  { href: "/about", label: "Profile", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 glass border-t border-white/10 lg:hidden"
      aria-label="Mobile bottom navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-2 py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href.split("?")[0]);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-h-[48px] min-w-[56px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[10px] font-medium transition-colors",
                active ? "text-cyan-400" : "text-muted hover:text-white"
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
