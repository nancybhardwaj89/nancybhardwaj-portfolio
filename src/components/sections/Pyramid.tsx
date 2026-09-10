import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { pyramidNote, pyramidTiers } from "@/content/pyramid";

/**
 * The pyramid, rendered apex-first.
 *
 * Tier widths taper toward the top from `sm` upward; below that every tier is
 * full width, because a 52%-wide box on a 375px screen leaves room for about
 * two words. The stacked-order meaning survives without the taper.
 */

/** Apex → base. Narrow at the top, full width at the foundation. */
const TIER_WIDTHS = ["54%", "63%", "72%", "81%", "90%", "100%"];

const EMPHASIS_STYLES = {
  apex: "border-accent bg-accent-subtle",
  mid: "border-accent-border bg-surface",
  base: "border-border bg-surface",
} as const;

export function Pyramid() {
  // Rendered top-down, so reverse the bottom-up source order.
  const tiers = [...pyramidTiers].reverse();

  return (
    <Section
      id="framework"
      title="The AI quality pyramid"
      lead="The model I work to. Layers of testing that build on each other, from engineering fundamentals at the base to the AI-specific risks at the top."
    >
      <Reveal>
        <ol className="mx-auto flex max-w-3xl flex-col items-center gap-2">
          {tiers.map((tier, index) => (
            <li
              key={tier.label}
              style={{ "--tier-w": TIER_WIDTHS[index] } as React.CSSProperties}
              className={`w-full rounded-xl border px-5 py-4 text-center sm:w-[var(--tier-w)] ${
                EMPHASIS_STYLES[tier.emphasis]
              }`}
            >
              <p
                className={`font-display text-sm font-semibold tracking-tight sm:text-base ${
                  tier.emphasis === "apex" ? "text-accent" : "text-fg"
                }`}
              >
                {tier.label}
              </p>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-fg-muted">
                {tier.detail}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-fg-muted">
          {pyramidNote}
        </p>
      </Reveal>
    </Section>
  );
}
