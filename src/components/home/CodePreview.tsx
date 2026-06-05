"use client";

const lines: { text: string; className: string }[][] = [
  [
    { text: "// TechHowTo — ship faster", className: "text-slate-500 dark:text-slate-400" },
  ],
  [{ text: "const ", className: "text-cyan-400" }, { text: "stack", className: "text-slate-200" }, { text: " = {", className: "text-slate-200" }],
  [
    { text: "  frontend: ", className: "text-cyan-400" },
    { text: '["React", "Next.js", "TypeScript"]', className: "text-emerald-400" },
    { text: ",", className: "text-slate-200" },
  ],
  [
    { text: "  backend: ", className: "text-cyan-400" },
    { text: '["Node", "PostgreSQL", "Redis"]', className: "text-emerald-400" },
    { text: ",", className: "text-slate-200" },
  ],
  [
    { text: "  deploy: ", className: "text-cyan-400" },
    { text: '["Vercel", "Docker", "CI/CD"]', className: "text-emerald-400" },
    { text: ",", className: "text-slate-200" },
  ],
  [{ text: "};", className: "text-slate-200" }],
  [{ text: "", className: "" }],
  [
    { text: "export ", className: "text-cyan-400" },
    { text: "async ", className: "text-cyan-400" },
    { text: "function ", className: "text-cyan-400" },
    { text: "launch", className: "text-amber-300" },
    { text: "(product: Product) {", className: "text-slate-200" },
  ],
  [
    { text: "  await ", className: "text-cyan-400" },
    { text: "validate", className: "text-amber-300" },
    { text: "(product);", className: "text-slate-200" },
  ],
  [
    { text: "  return ", className: "text-cyan-400" },
    { text: "deploy", className: "text-amber-300" },
    { text: "(product);", className: "text-slate-200" },
  ],
  [{ text: "}", className: "text-slate-200" }],
];

export function CodePreview() {
  return (
    <div className="glass glow-border aurora rounded-2xl p-1.5 animate-float">
      <div className="code-window overflow-hidden p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 dark:border-border">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
          <span className="ml-2 font-mono text-xs text-slate-400">launch.ts</span>
        </div>
        <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed sm:text-sm">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="min-h-[1.35em]">
                {line.map((part, j) => (
                  <span key={j} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
