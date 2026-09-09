import { cn } from "@/lib/cn";

/**
 * The single source of horizontal rhythm. Every full-width band puts its
 * contents in one of these so nothing drifts out of alignment.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
