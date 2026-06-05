"use client";

interface ToolShellProps {
  title: string;
  description: string;
  inputLabel?: string;
  outputLabel?: string;
  input: React.ReactNode;
  output: React.ReactNode;
}

export function ToolShell({
  title,
  description,
  inputLabel = "Input",
  outputLabel = "Output",
  input,
  output,
}: ToolShellProps) {
  return (
    <section className="glass glow-border rounded-2xl p-5 sm:p-6">
      <header className="mb-5 border-b border-white/10 pb-4">
        <h1 className="font-display text-h3 font-bold text-white">{title}</h1>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-xl border border-white/10 p-4">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {inputLabel}
          </h2>
          {input}
        </div>

        <div className="glass rounded-xl border border-white/10 p-4">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {outputLabel}
          </h2>
          {output}
        </div>
      </div>
    </section>
  );
}
