"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Border only appears once the page has moved, so the header sits flush with
  // the hero on load.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy. Only meaningful on the home page, where the sections exist.
  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry nearest the top of the viewport among those visible,
        // rather than the last one to fire — otherwise fast scrolling can
        // leave the wrong item highlighted.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Anchors must be absolute when we're on a project detail page.
  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const githubHref = site.socials.find((s) => s.icon === "github")?.href;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-bg/80 backdrop-blur-md transition-colors",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-fg"
            aria-label={`${site.name} — home`}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border bg-surface-raised font-display text-xs font-semibold text-fg-muted">
              {site.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element -- fixed
                // 32px chrome element; next/image adds no value at this size.
                <img
                  src={site.avatar}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                site.initials
              )}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight transition-colors group-hover:text-accent">
              Nancy
              <span className="text-accent">.QA</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                aria-current={
                  isHome && activeId === item.id ? "true" : undefined
                }
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isHome && activeId === item.id
                    ? "text-accent"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {githubHref ? (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg transition-colors hover:border-border-strong hover:bg-surface-raised sm:inline-flex"
              >
                GitHub
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3 w-3"
                >
                  <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
                </svg>
              </a>
            ) : null}
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-fg-muted transition-colors hover:text-fg md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-border bg-bg md:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-fg-muted transition-colors hover:bg-surface-raised hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
