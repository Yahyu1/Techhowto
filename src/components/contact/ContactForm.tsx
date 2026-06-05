"use client";

import { useState } from "react";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassButton } from "@/components/ui/GlassButton";

const SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "business", label: "Business Inquiry" },
  { value: "feedback", label: "Feedback" },
  { value: "issue", label: "Report an Issue" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. We received your message and will respond within 1–2 business days.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <GlassInput name="name" label="Your name" required placeholder="Jane Developer" />
        <GlassInput name="email" type="email" label="Email address" required placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-text outline-none focus:border-cyan-400/50"
        >
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-text outline-none focus:border-cyan-400/50"
        />
      </div>
      <GlassButton type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </GlassButton>
      {message && (
        <p className={`text-sm ${status === "error" ? "text-red-400" : "text-cyan-300"}`}>{message}</p>
      )}
    </form>
  );
}
