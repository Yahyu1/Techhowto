"use client";

import { useEffect, useMemo, useState } from "react";
import { Bookmark, Copy, Share2, ThumbsUp, Sparkles, Brain } from "lucide-react";

interface ArticleInteractionsProps {
  slug: string;
  title: string;
}

type ReactionKey = "helpful" | "amazing" | "learned";
type ReactionState = Record<ReactionKey, number>;

const defaultReactions: ReactionState = {
  helpful: 0,
  amazing: 0,
  learned: 0,
};

export function ArticleInteractions({ slug, title }: ArticleInteractionsProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reactions, setReactions] = useState<ReactionState>(defaultReactions);

  const storageKeys = useMemo(
    () => ({
      bookmark: `techhowto:bookmark:${slug}`,
      reactions: `techhowto:reactions:${slug}`,
    }),
    [slug]
  );

  useEffect(() => {
    const bookmarkValue = localStorage.getItem(storageKeys.bookmark);
    setBookmarked(bookmarkValue === "1");

    const reactionValue = localStorage.getItem(storageKeys.reactions);
    if (reactionValue) {
      try {
        const parsed = JSON.parse(reactionValue) as ReactionState;
        setReactions({
          helpful: parsed.helpful ?? 0,
          amazing: parsed.amazing ?? 0,
          learned: parsed.learned ?? 0,
        });
      } catch {
        setReactions(defaultReactions);
      }
    }
  }, [storageKeys]);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const toggleBookmark = () => {
    const nextValue = !bookmarked;
    setBookmarked(nextValue);
    localStorage.setItem(storageKeys.bookmark, nextValue ? "1" : "0");
  };

  const voteReaction = (reaction: ReactionKey) => {
    const next = {
      ...reactions,
      [reaction]: reactions[reaction] + 1,
    };
    setReactions(next);
    localStorage.setItem(storageKeys.reactions, JSON.stringify(next));
  };

  return (
    <section className="glass rounded-2xl p-5">
      <h3 className="font-display text-lg font-semibold text-white">
        Share and React
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={share}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <Share2 size={15} className="mr-2 inline-block" />
          Share
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <Copy size={15} className="mr-2 inline-block" />
          {copied ? "Copied" : "Copy Link"}
        </button>
        <button
          type="button"
          onClick={toggleBookmark}
          className={`rounded-xl border px-3 py-2 text-sm transition ${
            bookmarked
              ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300"
              : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white"
          }`}
        >
          <Bookmark size={15} className="mr-2 inline-block" />
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>

      <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">
        Reactions
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => voteReaction("helpful")}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <ThumbsUp size={15} className="mr-2 inline-block" />
          Helpful ({reactions.helpful})
        </button>
        <button
          type="button"
          onClick={() => voteReaction("amazing")}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <Sparkles size={15} className="mr-2 inline-block" />
          Amazing ({reactions.amazing})
        </button>
        <button
          type="button"
          onClick={() => voteReaction("learned")}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition hover:border-white/20 hover:text-white"
        >
          <Brain size={15} className="mr-2 inline-block" />
          Learned Something ({reactions.learned})
        </button>
      </div>
    </section>
  );
}
