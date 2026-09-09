"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icon";

/**
 * Light/dark switch.
 *
 * The <html> class is already correct before this mounts (see theme-script.ts);
 * this component only reads that state back and lets the visitor change it.
 * Icons stay hidden until mounted so the server-rendered markup — which cannot
 * know the visitor's theme — never mismatches during hydration.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode, blocked cookies) — the toggle still
      // works for this page view, it just won't be remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Switch color theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <span className="h-4 w-4">
        {mounted ? isDark ? <MoonIcon /> : <SunIcon /> : null}
      </span>
    </button>
  );
}
