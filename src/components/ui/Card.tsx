import { cn } from "@/lib/cn";

/**
 * Standard surface for grouped content. 16px radius matches the airier feel
 * of the reference site; `interactive` adds the hover lift used by links.
 */
export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        interactive &&
          "transition-colors duration-200 hover:border-accent-border hover:bg-surface-raised",
        className,
      )}
    >
      {children}
    </div>
  );
}
