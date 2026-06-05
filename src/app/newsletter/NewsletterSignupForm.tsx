"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

interface SubscribeResponse {
  success?: boolean;
  message?: string;
  provider?: string;
}

const providers = ["ConvertKit", "Resend", "Mailchimp"];

export function NewsletterSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [provider, setProvider] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");
    setProvider("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = (await response.json()) as SubscribeResponse;

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(
          data.message || "Unable to subscribe right now. Please try again."
        );
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setProvider(data.provider || "fallback");
      setMessage(
        data.message ||
          "You are in. Check your inbox for your welcome guide and weekly updates."
      );
    } catch {
      setStatus("error");
      setMessage(
        "Network issue detected. Please retry in a moment or contact support."
      );
    }
  }

  return (
    <div className="glass glow-border relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="aurora pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative">
        <div className="mb-6 flex items-center gap-2">
          <Sparkles className="text-cyan-300" size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Premium Weekly Brief
          </p>
        </div>

        <h2 className="font-display text-h3 font-semibold text-white">
          Join 32,000+ builders shipping smarter every week
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Actionable AI updates, high-signal dev workflows, and tested tools.
          No fluff, no spam, just practical wins you can use immediately.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Alex Carter"
                className="w-full rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe Free"
              )}
            </Button>
          </motion.div>
        </form>

        <AnimatePresence mode="wait">
          {status !== "idle" && (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`mt-5 rounded-xl border p-4 text-sm ${
                status === "success"
                  ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                  : status === "error"
                    ? "border-rose-400/30 bg-rose-500/10 text-rose-200"
                    : "border-white/20 bg-white/5 text-muted"
              }`}
            >
              <div className="flex items-start gap-2">
                {status === "success" ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertTriangle size={18} className="mt-0.5 shrink-0" />
                )}
                <div>
                  <p>{message}</p>
                  {provider && status === "success" && (
                    <p className="mt-1 text-xs opacity-80">
                      Delivery provider: {provider}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span>Provider-ready:</span>
          {providers.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
