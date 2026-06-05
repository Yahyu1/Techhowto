"use client";

import { useMemo, useState } from "react";
import type { DevTool } from "@/types";
import { Button } from "@/components/ui/Button";
import { ToolShell } from "@/components/tools/ToolShell";
import {
  convertTimestamp,
  decodeBase64,
  encodeBase64,
  formatJson,
  markdownToHtml,
  minifyCss,
  minifyJs,
  runRegexTest,
  validateJson,
} from "@/lib/tools/formatters";
import { cn } from "@/lib/utils";

const codeAreaClasses =
  "w-full min-h-[240px] rounded-lg border border-border bg-black/35 p-3 text-sm text-text font-mono outline-none focus:border-cyan-400";

function formatHexToRgb(hex: string): string | null {
  const cleaned = hex.replace("#", "");
  const normalized =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((char) => char + char)
          .join("")
      : cleaned;

  if (!/^[a-fA-F0-9]{6}$/.test(normalized)) return null;

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function generatePassword({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}): string {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

  const sets = [
    includeUppercase ? upper : "",
    includeLowercase ? lower : "",
    includeNumbers ? numbers : "",
    includeSymbols ? symbols : "",
  ].filter(Boolean);

  if (sets.length === 0) {
    return "Select at least one character set.";
  }

  const pool = sets.join("");
  const output: string[] = [];
  const cryptoApi =
    typeof window !== "undefined" ? window.crypto || null : null;

  const randomIndex = (max: number): number => {
    if (cryptoApi) {
      const array = new Uint32Array(1);
      cryptoApi.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  };

  // Ensure at least one character from each selected set.
  for (const set of sets) {
    output.push(set[randomIndex(set.length)]);
  }

  while (output.length < length) {
    output.push(pool[randomIndex(pool.length)]);
  }

  // Shuffle result.
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = randomIndex(i + 1);
    const temp = output[i];
    output[i] = output[j];
    output[j] = temp;
  }

  return output.slice(0, length).join("");
}

function buildMetaTags(values: {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}): string {
  const { title, description, url, image, type } = values;
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join("\n");
}

export function ToolWorkspace({ tool }: { tool: DevTool }) {
  const [input, setInput] = useState("");
  const [regexPattern, setRegexPattern] = useState("\\w+");
  const [regexFlags, setRegexFlags] = useState("g");
  const [timestampInput, setTimestampInput] = useState(String(Date.now()));
  const [pickedColor, setPickedColor] = useState("#4f46e5");
  const [gradientStart, setGradientStart] = useState("#4f46e5");
  const [gradientEnd, setGradientEnd] = useState("#06b6d4");
  const [gradientAngle, setGradientAngle] = useState(135);
  const [passwordLength, setPasswordLength] = useState(16);
  const [passwordOptions, setPasswordOptions] = useState({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });
  const [metaValues, setMetaValues] = useState({
    title: "TechHowTo",
    description: "Learn faster with curated developer content and tools.",
    url: "https://techhowto.dev",
    image: "https://techhowto.dev/og-image.png",
    type: "website",
  });
  const [generatedCount, setGeneratedCount] = useState(1);

  const output = useMemo(() => {
    try {
      switch (tool.slug) {
        case "json-formatter":
          return input ? formatJson(input, 2) : "";
        case "json-validator": {
          if (!input) return "";
          const result = validateJson(input);
          return result.valid
            ? "Valid JSON. Parsed successfully."
            : `Invalid JSON: ${result.error}`;
        }
        case "css-minifier":
          return input ? minifyCss(input) : "";
        case "js-minifier":
          return input ? minifyJs(input) : "";
        case "html-formatter":
          return input ? formatHtml(input) : "";
        case "base64-encoder":
          return input ? encodeBase64(input) : "";
        case "base64-decoder":
          return input ? decodeBase64(input) : "";
        case "markdown-previewer":
          return input ? markdownToHtml(input) : "";
        default:
          return "";
      }
    } catch (caught) {
      return caught instanceof Error ? `Error: ${caught.message}` : "Error: Something went wrong.";
    }
  }, [input, tool.slug]);

  if (tool.slug === "regex-tester") {
    const result = runRegexTest(regexPattern, regexFlags, input);
    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-3">
            <input
              value={regexPattern}
              onChange={(event) => setRegexPattern(event.target.value)}
              placeholder="Regex pattern"
              className="w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
            />
            <input
              value={regexFlags}
              onChange={(event) => setRegexFlags(event.target.value)}
              placeholder="Flags (e.g. gmi)"
              className="w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
            />
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Text to test..."
              className={codeAreaClasses}
            />
          </div>
        }
        output={
          <div className="space-y-3">
            {!result.success && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                {result.error}
              </p>
            )}
            <p className="text-sm text-muted">Matches: {result.matches.length}</p>
            <pre className={cn(codeAreaClasses, "min-h-[180px]")}>
              {JSON.stringify(result.matches, null, 2)}
            </pre>
          </div>
        }
      />
    );
  }

  if (tool.slug === "timestamp-converter") {
    let converted = "";
    try {
      const result = convertTimestamp(timestampInput);
      converted = JSON.stringify(result, null, 2);
    } catch (caught) {
      converted =
        caught instanceof Error ? caught.message : "Invalid timestamp input.";
    }

    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-3">
            <input
              value={timestampInput}
              onChange={(event) => setTimestampInput(event.target.value)}
              placeholder="Unix seconds, milliseconds, or date string"
              className="w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
            />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setTimestampInput(String(Date.now()))}
            >
              Use Current Time
            </Button>
          </div>
        }
        output={<pre className={codeAreaClasses}>{converted}</pre>}
      />
    );
  }

  if (tool.slug === "color-picker") {
    const rgb = formatHexToRgb(pickedColor) ?? "Invalid HEX";
    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-3">
            <input
              type="color"
              value={pickedColor}
              onChange={(event) => setPickedColor(event.target.value)}
              className="h-12 w-full cursor-pointer rounded-lg border border-border bg-black/35"
            />
            <input
              value={pickedColor}
              onChange={(event) => setPickedColor(event.target.value)}
              className="w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
            />
          </div>
        }
        output={
          <div className="space-y-3">
            <div
              className="h-24 rounded-lg border border-border"
              style={{ backgroundColor: pickedColor }}
            />
            <pre className={codeAreaClasses}>{`${pickedColor}\n${rgb}`}</pre>
          </div>
        }
      />
    );
  }

  if (tool.slug === "gradient-generator") {
    const gradient = `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`;
    const css = `background: ${gradient};`;

    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="color"
                value={gradientStart}
                onChange={(event) => setGradientStart(event.target.value)}
                className="h-12 rounded-lg border border-border bg-black/35"
              />
              <input
                type="color"
                value={gradientEnd}
                onChange={(event) => setGradientEnd(event.target.value)}
                className="h-12 rounded-lg border border-border bg-black/35"
              />
            </div>
            <label className="block text-sm text-muted">
              Angle: {gradientAngle}deg
              <input
                type="range"
                min={0}
                max={360}
                value={gradientAngle}
                onChange={(event) => setGradientAngle(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
          </div>
        }
        output={
          <div className="space-y-3">
            <div
              className="h-24 rounded-lg border border-border"
              style={{ background: gradient }}
            />
            <pre className={codeAreaClasses}>{css}</pre>
          </div>
        }
      />
    );
  }

  if (tool.slug === "password-generator") {
    const generated = generatePassword({
      length: passwordLength,
      ...passwordOptions,
    });
    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-4">
            <label className="block text-sm text-muted">
              Length: {passwordLength}
              <input
                type="range"
                min={6}
                max={64}
                value={passwordLength}
                onChange={(event) => setPasswordLength(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {(
                Object.keys(passwordOptions) as Array<keyof typeof passwordOptions>
              ).map((key) => (
                <label key={key} className="flex items-center gap-2 text-muted">
                  <input
                    type="checkbox"
                    checked={passwordOptions[key]}
                    onChange={(event) =>
                      setPasswordOptions((prev) => ({
                        ...prev,
                        [key]: event.target.checked,
                      }))
                    }
                  />
                  {key.replace("include", "")}
                </label>
              ))}
            </div>
          </div>
        }
        output={<pre className={codeAreaClasses}>{generated}</pre>}
      />
    );
  }

  if (tool.slug === "uuid-generator") {
    const uuids = Array.from({ length: generatedCount }, () => crypto.randomUUID());
    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-3">
            <label className="block text-sm text-muted">
              Count
              <input
                type="number"
                min={1}
                max={20}
                value={generatedCount}
                onChange={(event) =>
                  setGeneratedCount(
                    Math.max(1, Math.min(20, Number(event.target.value) || 1))
                  )
                }
                className="mt-2 w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
              />
            </label>
          </div>
        }
        output={<pre className={codeAreaClasses}>{uuids.join("\n")}</pre>}
      />
    );
  }

  if (tool.slug === "meta-tag-generator") {
    const tags = buildMetaTags(metaValues);
    return (
      <ToolShell
        title={tool.name}
        description={tool.description}
        input={
          <div className="space-y-3">
            {(Object.keys(metaValues) as Array<keyof typeof metaValues>).map((key) => (
              <input
                key={key}
                value={metaValues[key]}
                onChange={(event) =>
                  setMetaValues((prev) => ({ ...prev, [key]: event.target.value }))
                }
                placeholder={key}
                className="w-full rounded-lg border border-border bg-black/35 px-3 py-2 font-mono text-sm outline-none focus:border-cyan-400"
              />
            ))}
          </div>
        }
        output={<pre className={codeAreaClasses}>{tags}</pre>}
      />
    );
  }

  const inputPlaceholderBySlug: Record<string, string> = {
    "json-formatter": '{\n  "hello": "world"\n}',
    "json-validator": '{\n  "valid": true\n}',
    "css-minifier": "body {\n  color: #fff;\n}",
    "js-minifier": "function greet(name) {\n  console.log('Hi ' + name);\n}",
    "html-formatter": "<section><h1>Title</h1></section>",
    "base64-encoder": "Plain text",
    "base64-decoder": "UGxhaW4gdGV4dA==",
    "markdown-previewer": "# Heading\n\nThis is **bold** and `inline code`.",
  };

  return (
    <ToolShell
      title={tool.name}
      description={tool.description}
      input={
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={inputPlaceholderBySlug[tool.slug] ?? "Enter input..."}
          className={codeAreaClasses}
        />
      }
      output={
        <div className="space-y-3">
          {tool.slug === "markdown-previewer" ? (
            <article
              className="prose prose-invert max-w-none rounded-lg border border-border bg-black/20 p-3"
              dangerouslySetInnerHTML={{ __html: output }}
            />
          ) : (
            <pre className={codeAreaClasses}>{output}</pre>
          )}
        </div>
      }
    />
  );
}

function formatHtml(input: string): string {
  const normalized = input.replace(/>\s+</g, "><").trim();
  let depth = 0;
  const lines: string[] = [];
  const tokens = normalized.match(/<\/?[^>]+>|[^<]+/g) ?? [];

  for (const token of tokens) {
    const trimmed = token.trim();
    if (!trimmed) continue;

    const isClosing = /^<\//.test(trimmed);
    const isSelfClosing =
      /\/>$/.test(trimmed) || /^<(br|hr|img|meta|input|link)/i.test(trimmed);

    if (isClosing) {
      depth = Math.max(0, depth - 1);
    }

    lines.push(`${"  ".repeat(depth)}${trimmed}`);

    if (!isClosing && !isSelfClosing && /^<[^!/][^>]*>$/.test(trimmed)) {
      depth += 1;
    }
  }

  return lines.join("\n");
}
