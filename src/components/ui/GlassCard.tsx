import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({
  className,
  glow = false,
  hover = false,
  padding = "md",
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        glow && "glow-border",
        hover && "glass-hover transition-all duration-300 hover:-translate-y-0.5",
        paddingMap[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
