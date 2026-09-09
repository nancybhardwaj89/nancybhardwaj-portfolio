import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { qualitySignals } from "@/content/quality-signals";

/**
 * Rendered as a description list rather than a <table>.
 *
 * The content is genuinely tabular, but a two-column table at 375px either
 * overflows horizontally or crushes both columns. A dl stacks cleanly on
 * mobile and lines up into columns from `sm` upward, which gives the same
 * reading experience without the overflow container.
 */
export function QualitySignals() {
  return (
    <Section
      id="quality"
      title="What I actually test for"
      lead="AI quality isn't one measurement. These are the dimensions I evaluate against, and what each one means in practice."
      className="bg-surface-raised"
    >
      <dl className="overflow-hidden rounded-2xl border border-border">
        {qualitySignals.map((signal, index) => (
          <Reveal key={signal.dimension} delay={Math.min(index, 5) * 50}>
            <div
              className={`grid gap-2 bg-surface px-5 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-6 sm:px-7 sm:py-6 ${
                index > 0 ? "border-t border-border" : ""
              }`}
            >
              <dt className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold tracking-tight text-fg">
                  {signal.dimension}
                </span>
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {signal.tests.map((test) => (
                    <li
                      key={test}
                      className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                    >
                      {test}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
