import { cn } from "@/lib/cn";

/**
 * A small pill for tool and framework names. Monospace on purpose — it reads
 * as "this is a tool, not prose", which is exactly the scan a recruiter does.
 */
export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-xs leading-none",
        variant === "accent"
          ? "border-accent-border bg-accent-subtle text-accent"
          : "border-border bg-surface-raised text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
