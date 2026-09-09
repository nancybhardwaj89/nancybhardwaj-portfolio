"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Fades and lifts its children into view once, when they first intersect.
 *
 * The `.reveal` class in globals.css neutralises itself entirely under
 * `prefers-reduced-motion`, so this is safe to wrap anything in. Content is
 * present in the HTML either way — this is presentation only, never a gate
 * on the content being readable or crawlable.
 */
export function Reveal({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, show the content immediately
    // rather than leaving it stuck at opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.visible = "true";
            observer.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
