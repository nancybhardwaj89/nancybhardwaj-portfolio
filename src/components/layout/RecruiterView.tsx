"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { socialIcons } from "@/components/ui/Icon";
import { recruiterSkills, recruiterStats } from "@/content/recruiter";
import { site } from "@/content/site";

/**
 * A one-screen summary for readers who have seconds, not minutes.
 *
 * Built on the native <dialog> element rather than a hand-rolled overlay:
 * showModal() gives focus trapping, Escape-to-close, background inerting and
 * correct assistive-tech semantics for free, all of which are easy to get
 * subtly wrong by hand.
 */
export function RecruiterView({
  className,
  onNavigate,
}: {
  className?: string;
  /** Lets the header close its mobile menu when this opens. */
  onNavigate?: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  function openDialog() {
    onNavigate?.();
    dialogRef.current?.showModal();
    setOpen(true);
  }

  // The page behind a modal shouldn't scroll. Native <dialog> inerts the
  // background but doesn't lock scrolling in every browser.
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  const linkClass =
    "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-raised";

  return (
    <>
      <button type="button" onClick={openDialog} className={className}>
        Recruiter view
      </button>

      <dialog
        ref={dialogRef}
        // close fires for Escape and for the form-method dismissal alike, so
        // this is the single place state gets reset.
        onClose={() => setOpen(false)}
        // Clicking the backdrop lands on the dialog element itself; clicks on
        // the content bubble from children, so this check dismisses only
        // genuine backdrop clicks.
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        aria-labelledby="recruiter-heading"
        className="w-[min(44rem,calc(100vw-2rem))] rounded-2xl border border-border bg-bg p-0 text-fg backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="recruiter-heading"
                className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
              >
                {site.name}
              </h2>
              <p className="mt-1 font-display text-base font-semibold text-accent">
                {site.role}
              </p>
              <p className="mt-1 font-mono text-xs text-fg-faint">
                {site.location}
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close recruiter view"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:text-fg"
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
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5">
            {recruiterStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-fg-muted">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {recruiterSkills.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-sm font-semibold tracking-tight">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2 font-mono text-xs text-fg-muted"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {site.resumeHref ? (
              <a
                href={site.resumeHref}
                download
                className={`${linkClass} border-accent bg-accent text-accent-fg hover:bg-accent-hover`}
              >
                Download CV
              </a>
            ) : null}

            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <span className="h-4 w-4">
                    <Icon />
                  </span>
                  {social.label}
                </a>
              );
            })}

            <a href={`mailto:${site.email}`} className={linkClass}>
              Email
            </a>
          </div>

          <p className="mt-6 text-center text-xs text-fg-faint">
            <button
              type="button"
              onClick={close}
              className="underline underline-offset-4 transition-colors hover:text-fg"
            >
              Or browse the full site
            </button>
          </p>
        </div>
      </dialog>
    </>
  );
}
