interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={alignClass}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 font-display text-h1 font-bold text-text">{title}</h1>
      {description && (
        <p
          className={`mt-4 max-w-3xl text-muted ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
