export type JsonValidationResult =
  | { valid: true; value: unknown }
  | { valid: false; error: string };

export function formatJson(input: string, indent = 2): string {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed, null, indent);
}

export function validateJson(input: string): JsonValidationResult {
  try {
    const value = JSON.parse(input);
    return { valid: true, value };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid JSON input.";
    return { valid: false, error: message };
  }
}

export function minifyCss(input: string): string {
  return input
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>+~])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

export function minifyHtml(input: string): string {
  return input
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function removeJsComments(code: string): string {
  let out = "";
  let i = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inRegex = false;
  let escape = false;

  while (i < code.length) {
    const char = code[i];
    const next = code[i + 1];

    if (inSingle || inDouble || inTemplate || inRegex) {
      out += char;

      if (escape) {
        escape = false;
      } else if (char === "\\") {
        escape = true;
      } else if (inSingle && char === "'") {
        inSingle = false;
      } else if (inDouble && char === '"') {
        inDouble = false;
      } else if (inTemplate && char === "`") {
        inTemplate = false;
      } else if (inRegex && char === "/") {
        inRegex = false;
      }

      i += 1;
      continue;
    }

    if (char === "/" && next === "/") {
      i += 2;
      while (i < code.length && code[i] !== "\n") i += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      i += 2;
      while (i < code.length && !(code[i] === "*" && code[i + 1] === "/")) {
        i += 1;
      }
      i += 2;
      continue;
    }

    if (char === "'") inSingle = true;
    else if (char === '"') inDouble = true;
    else if (char === "`") inTemplate = true;
    else if (
      char === "/" &&
      /[=(:[,!&|?;{}]/.test(out[out.length - 1] ?? "")
    ) {
      inRegex = true;
    }

    out += char;
    i += 1;
  }

  return out;
}

export function minifyJs(input: string): string {
  const withoutComments = removeJsComments(input);

  return withoutComments
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function encodeBase64(input: string): string {
  if (typeof btoa === "function" && typeof TextEncoder !== "undefined") {
    const bytes = new TextEncoder().encode(input);
    let binary = "";
    for (const byte of bytes) {
      binary += String.fromCharCode(byte);
    }
    return btoa(binary);
  }
  throw new Error("Base64 encoding is not supported in this environment.");
}

export function decodeBase64(input: string): string {
  if (typeof atob === "function" && typeof TextDecoder !== "undefined") {
    const binary = atob(input);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }
  throw new Error("Base64 decoding is not supported in this environment.");
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function markdownToHtml(markdown: string): string {
  const escaped = escapeHtml(markdown);
  const lines = escaped.split(/\r?\n/);
  const html: string[] = [];
  let inList = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${line.slice(2)}</li>`);
      continue;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }

    if (line.startsWith("### ")) {
      html.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith("# ")) {
      html.push(`<h1>${line.slice(2)}</h1>`);
    } else {
      html.push(`<p>${line}</p>`);
    }
  }

  if (inList) {
    html.push("</ul>");
  }

  return html
    .join("\n")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}

export interface RegexTestResult {
  success: boolean;
  error?: string;
  matches: Array<{
    index: number;
    match: string;
    groups: string[];
  }>;
}

export function runRegexTest(
  pattern: string,
  flags: string,
  text: string
): RegexTestResult {
  try {
    const regex = new RegExp(pattern, flags);
    const matches: RegexTestResult["matches"] = [];

    if (flags.includes("g")) {
      for (const item of text.matchAll(regex)) {
        matches.push({
          index: item.index ?? 0,
          match: item[0],
          groups: item.slice(1),
        });
      }
    } else {
      const single = regex.exec(text);
      if (single) {
        matches.push({
          index: single.index ?? 0,
          match: single[0],
          groups: single.slice(1),
        });
      }
    }

    return { success: true, matches };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid regular expression.";
    return { success: false, error: message, matches: [] };
  }
}

export interface TimestampConversionResult {
  iso: string;
  utc: string;
  local: string;
  unixSeconds: number;
  unixMilliseconds: number;
}

export function convertTimestamp(input: string): TimestampConversionResult {
  const cleaned = input.trim();
  if (!cleaned) {
    throw new Error("Timestamp input is empty.");
  }

  const numeric = Number(cleaned);
  let date: Date;

  if (!Number.isNaN(numeric) && Number.isFinite(numeric)) {
    date = cleaned.length <= 10 ? new Date(numeric * 1000) : new Date(numeric);
  } else {
    date = new Date(cleaned);
  }

  if (Number.isNaN(date.getTime())) {
    throw new Error("Could not parse timestamp input.");
  }

  const unixMilliseconds = date.getTime();
  const unixSeconds = Math.floor(unixMilliseconds / 1000);

  return {
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toString(),
    unixSeconds,
    unixMilliseconds,
  };
}
