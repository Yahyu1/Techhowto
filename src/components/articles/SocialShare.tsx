"use client";

import { SITE } from "@/lib/constants";
import { Twitter, Linkedin, Link2, Facebook } from "lucide-react";

interface SocialShareProps {
  title: string;
  path: string;
}

export function SocialShare({ title, path }: SocialShareProps) {
  const url = `${SITE.url}${path}`;
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const links = [
    { label: "Twitter", icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}` },
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">Share</span>
      {links.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-cyan-400"
        >
          <Icon size={16} />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-cyan-400"
      >
        <Link2 size={16} />
      </button>
    </div>
  );
}
