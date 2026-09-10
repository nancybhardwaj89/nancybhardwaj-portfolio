"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cards, categories, type ProjectCard } from "./project-cards";

const blockLabel =
  "font-mono text-[11px] tracking-wide text-fg-faint uppercase";
const bullet =
  "relative pl-4 text-sm leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent";

function Card({ card, wide = false }: { card: ProjectCard; wide?: boolean }) {
  return (
    <div className="depth-card flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent-border">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={blockLabel}>{card.category}</p>
          <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-fg">
            {card.name}
          </h3>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          {card.context ? (
            <span className="rounded-md border border-accent-border bg-accent-subtle px-2 py-1 font-mono text-[11px] leading-none text-accent">
              {card.context}
            </span>
          ) : null}
          {card.status ? (
            <span className="rounded-md border border-border px-2 py-1 font-mono text-[11px] leading-none text-fg-faint">
              {card.status}
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-1.5 text-sm text-fg-faint">{card.subtitle}</p>

      <h4 className={`${blockLabel} mt-5`}>Problem</h4>
      <p
        className={`mt-2 text-sm leading-relaxed text-fg-muted ${
          wide ? "max-w-3xl" : ""
        }`}
      >
        {card.problemShort}
      </p>

      {/* When the card spans the full grid, the two lists sit side by side.
          Left as one column they would stretch to ~1100px per line, which is
          well past comfortable reading width.
          flex-1 keeps the stack and link aligned across cards in a row. */}
      <div
        className={
          wide
            ? "mt-5 grid flex-1 gap-x-10 gap-y-5 sm:grid-cols-2"
            : "mt-5 flex-1"
        }
      >
        <div>
          <h4 className={blockLabel}>What I built</h4>
          <ul className="mt-2.5 space-y-1.5">
            {card.built.map((item) => (
              <li key={item} className={bullet}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={wide ? undefined : "mt-5"}>
          <h4 className={blockLabel}>Quality / evaluation</h4>
          <ul className="mt-2.5 space-y-1.5">
            {card.evaluation.map((item) => (
              <li key={item} className={bullet}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Results carry accent weight — for a hiring manager this is the block
          that matters most. Rendered only when there are real figures; an
          empty "Result" heading would advertise the gap. */}
      {card.result.length > 0 ? (
        <div className="mt-5 rounded-xl border border-accent-border bg-accent-subtle p-4">
          <h4 className={blockLabel}>Result</h4>
          <ul className="mt-2.5 space-y-1.5">
            {card.result.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-relaxed font-medium text-fg before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {card.primaryStack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {card.href ? (
        <div className="mt-6 border-t border-border pt-5">
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-hover"
          >
            View GitHub
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
            </svg>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export function ProjectGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? cards
        : cards.filter((card) => card.category === active),
    [active],
  );

  return (
    <>
      {/* A toolbar rather than tabs: these filter one list in place, they do
          not switch between panels, so tab semantics would mislead a
          screen-reader user about what pressing one does. */}
      <div
        role="toolbar"
        aria-label="Filter case studies by category"
        aria-controls="case-study-grid"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const isActive = category === active;
          const count =
            category === "All"
              ? cards.length
              : cards.filter((card) => card.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg"
              }`}
            >
              {category}
              <span className={isActive ? "opacity-70" : "text-fg-faint"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Announces the change for anyone not watching the grid visually. */}
      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {cards.length} case studies
        {active === "All" ? "" : ` in ${active}`}.
      </p>

      <div id="case-study-grid" className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((card, index) => {
          // An odd final card would sit alone in the two-column grid.
          const wide = index === visible.length - 1 && visible.length % 2 === 1;

          return (
            <Reveal
              key={card.name}
              delay={Math.min(index, 4) * 60}
              className={wide ? "sm:col-span-2" : undefined}
            >
              <Card card={card} wide={wide} />
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
