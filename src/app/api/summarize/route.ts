import { NextResponse } from "next/server";

interface SummarizePayload {
  slug?: string;
  title?: string;
  content?: string;
}

function truncateWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  return words.length <= maxWords ? text : `${words.slice(0, maxWords).join(" ")}...`;
}

function extractFallbackSummary(content: string): string {
  const cleaned = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/##\s+/g, "")
    .replace(/[*`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) {
    return "This article provides practical insights, key takeaways, and step-by-step guidance on the topic.";
  }

  const sentences =
    cleaned.match(/[^.!?]+[.!?]+/g)?.map((item) => item.trim()) ?? [];
  const topSentences = sentences.slice(0, 4).join(" ");
  const source = topSentences.length > 0 ? topSentences : cleaned;
  return truncateWords(source, 90);
}

async function callOpenAI(prompt: string): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You summarize technical articles into concise, useful bullet points for readers.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 220,
    }),
  });

  if (!response.ok) return null;
  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return data.choices?.[0]?.message?.content?.trim() ?? null;
}

async function callGemini(prompt: string): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  if (!response.ok) return null;
  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
}

async function callClaude(prompt: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const model = process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest";
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 260,
      temperature: 0.3,
      system:
        "You summarize technical articles for fast comprehension while preserving key details.",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) return null;
  const data = (await response.json()) as {
    content?: Array<{ type?: string; text?: string }>;
  };

  const textBlock = data.content?.find((item) => item.type === "text");
  return textBlock?.text?.trim() ?? null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SummarizePayload;
    const title = body.title?.trim() || "Untitled Article";
    const content = body.content?.trim() || "";

    if (!content) {
      return NextResponse.json(
        { error: "Missing article content." },
        { status: 400 }
      );
    }

    const prompt = [
      `Summarize this article in 5-7 concise bullet points.`,
      `Start with a one-line TL;DR.`,
      `Keep practical details and avoid fluff.`,
      "",
      `Title: ${title}`,
      "",
      `Content:`,
      truncateWords(content, 900),
    ].join("\n");

    const providers: Array<{
      name: "openai" | "gemini" | "claude";
      run: () => Promise<string | null>;
    }> = [
      { name: "openai", run: () => callOpenAI(prompt) },
      { name: "gemini", run: () => callGemini(prompt) },
      { name: "claude", run: () => callClaude(prompt) },
    ];

    for (const provider of providers) {
      try {
        const summary = await provider.run();
        if (summary) {
          return NextResponse.json({
            summary,
            provider: provider.name,
          });
        }
      } catch {
        continue;
      }
    }

    return NextResponse.json({
      summary: extractFallbackSummary(content),
      provider: "fallback",
    });
  } catch {
    return NextResponse.json(
      {
        summary:
          "TL;DR: This article explains the core topic, key methods, and practical actions you can apply immediately.",
        provider: "fallback",
      },
      { status: 200 }
    );
  }
}
