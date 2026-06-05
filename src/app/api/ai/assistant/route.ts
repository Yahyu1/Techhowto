import { NextResponse } from "next/server";
import { articles } from "@/lib/data/articles";
import { roadmaps } from "@/lib/data/roadmaps";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const query = message.toLowerCase();
    const matchedArticles = articles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.tags.some((t) => query.includes(t) || t.includes(query))
      )
      .slice(0, 3);

    const matchedRoadmaps = roadmaps
      .filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.skills.some((s) => query.includes(s.toLowerCase()))
      )
      .slice(0, 2);

    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openaiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are TechHowTo learning assistant. Give concise, actionable developer advice. Recommend relevant articles and roadmaps when helpful.",
            },
            { role: "user", content: message },
          ],
          max_tokens: 500,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return NextResponse.json({
            reply,
            articles: matchedArticles.map((a) => ({ title: a.title, href: `/blog/${a.slug}` })),
            roadmaps: matchedRoadmaps.map((r) => ({ title: r.title, href: `/roadmaps/${r.slug}` })),
            provider: "openai",
          });
        }
      }
    }

    const fallbackParts = [
      `Here's what I found for "${message}":`,
      matchedArticles.length
        ? `\n\nArticles:\n${matchedArticles.map((a) => `• ${a.title} — ${a.excerpt}`).join("\n")}`
        : "",
      matchedRoadmaps.length
        ? `\n\nRoadmaps:\n${matchedRoadmaps.map((r) => `• ${r.title} (${r.level})`).join("\n")}`
        : "",
      !matchedArticles.length && !matchedRoadmaps.length
        ? "\n\nTry searching at /search or browse our roadmaps at /roadmaps."
        : "",
    ];

    return NextResponse.json({
      reply: fallbackParts.join(""),
      articles: matchedArticles.map((a) => ({ title: a.title, href: `/blog/${a.slug}` })),
      roadmaps: matchedRoadmaps.map((r) => ({ title: r.title, href: `/roadmaps/${r.slug}` })),
      provider: "fallback",
    });
  } catch {
    return NextResponse.json({ error: "Assistant unavailable" }, { status: 500 });
  }
}
