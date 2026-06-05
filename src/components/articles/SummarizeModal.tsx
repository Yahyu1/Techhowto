"use client";

import { useState } from "react";
import { Loader2, Sparkles, X } from "lucide-react";

interface SummarizeModalProps {
  slug: string;
  title: string;
  content: string;
}

interface SummaryResponse {
  summary: string;
  provider: string;
}

export function SummarizeModal({ slug, title, content }: SummarizeModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SummaryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const summarize = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, title, content }),
      });

      const payload = (await response.json()) as Partial<SummaryResponse> & {
        error?: string;
      };

      if (!response.ok || !payload.summary) {
        throw new Error(payload.error || "Unable to summarize right now.");
      }

      setResult({
        summary: payload.summary,
        provider: payload.provider || "fallback",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate summary."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
      >
        <Sparkles size={16} className="mr-2" />
        AI Summarize
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="glass glow-border relative w-full max-w-2xl rounded-3xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-muted transition hover:text-white"
              aria-label="Close summary modal"
            >
              <X size={16} />
            </button>
            <h3 className="pr-10 font-display text-2xl font-semibold text-white">
              AI Summary
            </h3>
            <p className="mt-2 text-sm text-muted">
              Generate a concise summary for: {title}
            </p>

            {!result && (
              <button
                type="button"
                onClick={summarize}
                disabled={loading}
                className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Summary"
                )}
              </button>
            )}

            {error && (
              <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
                {error}
              </p>
            )}

            {result && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-cyan-300">
                  Provider: {result.provider}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-white/90">
                  {result.summary}
                </p>
                <button
                  type="button"
                  onClick={summarize}
                  disabled={loading}
                  className="mt-4 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-muted transition hover:text-white disabled:opacity-60"
                >
                  Regenerate
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
