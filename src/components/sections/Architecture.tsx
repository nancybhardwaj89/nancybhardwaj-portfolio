import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { architecture, type FlowLane } from "@/content/architecture";

/**
 * Flow diagram of the AI quality pipeline.
 *
 * Built from divs and 1px rules rather than as ASCII in a <pre> or a fixed
 * SVG: both would need horizontal scrolling on a phone, and this section
 * exists precisely for the recruiter reading on mobile. Connector lines are
 * drawn only from `sm` upward, where there's width for branches; below that
 * the stages stack into a single vertical run, which reads the same way.
 */

/** Where branch stems sit, as percentages across the connector. */
const BRANCH_POSITIONS: Record<number, number[]> = {
  2: [25, 75],
  3: [16.667, 50, 83.333],
};

function Connector({
  branches = 1,
  merge = false,
}: {
  branches?: number;
  /** true = many lanes converging into one, false = one splitting into many. */
  merge?: boolean;
}) {
  if (branches === 1) {
    return (
      <div aria-hidden="true" className="mx-auto h-8 w-px bg-border-strong" />
    );
  }

  const positions = BRANCH_POSITIONS[branches] ?? [50];
  const first = positions[0];
  const last = positions[positions.length - 1];

  return (
    <>
      {/* Phones get a plain vertical run — there's no width for branching. */}
      <div aria-hidden="true" className="mx-auto h-8 w-px bg-border-strong sm:hidden" />

      <div aria-hidden="true" className="relative hidden h-12 sm:block">
        {/* Trunk: below the bar when splitting, above it when merging. */}
        <span
          className="absolute left-1/2 h-6 w-px -translate-x-1/2 bg-border-strong"
          style={merge ? { bottom: 0 } : { top: 0 }}
        />
        {/* Horizontal bar spanning the outermost branches. */}
        <span
          className="absolute h-px bg-border-strong"
          style={{ top: "1.5rem", left: `${first}%`, right: `${100 - last}%` }}
        />
        {/* One stem per branch. */}
        {positions.map((position) => (
          <span
            key={position}
            className="absolute h-6 w-px bg-border-strong"
            style={
              merge
                ? { top: 0, left: `${position}%` }
                : { top: "1.5rem", left: `${position}%` }
            }
          />
        ))}
      </div>
    </>
  );
}

/** A single emphasized stage in the pipeline. */
function Stage({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "accent" | "solid";
}) {
  const styles = {
    default: "border-border bg-surface text-fg",
    accent: "border-accent-border bg-accent-subtle text-accent",
    solid: "border-accent bg-accent text-accent-fg",
  }[variant];

  return (
    <div
      className={`mx-auto w-full max-w-xs rounded-xl border px-5 py-3 text-center font-mono text-xs tracking-wide uppercase ${styles}`}
    >
      {label}
    </div>
  );
}

/** A branch column: a heading plus the concerns or tools beneath it. */
function Lane({ lane }: { lane: FlowLane }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
        {lane.label}
      </h3>
      <ul className="mt-3 space-y-1.5">
        {lane.items.map((item) => (
          <li
            key={item}
            className="font-mono text-[11px] leading-relaxed text-fg-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Architecture() {
  return (
    <Section
      id="architecture"
      title="How I engineer quality for AI systems"
      lead="Testing an AI system isn't one activity bolted onto the end. This is the pipeline I build — from the surfaces that fail, through evaluation, to a gate that can actually block a release."
    >
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <Stage label={architecture.source} variant="accent" />

          <Connector branches={2} />
          <div className="grid gap-4 sm:grid-cols-2">
            {architecture.surfaces.map((lane) => (
              <Lane key={lane.label} lane={lane} />
            ))}
          </div>

          <Connector branches={2} merge />
          <Stage label={architecture.hub} variant="accent" />

          <Connector branches={3} />
          <div className="grid gap-4 sm:grid-cols-3">
            {architecture.lanes.map((lane) => (
              <Lane key={lane.label} lane={lane} />
            ))}
          </div>

          <Connector branches={3} merge />
          <Stage label={architecture.gate} variant="accent" />

          <Connector />
          <Stage label={architecture.release} variant="solid" />
        </div>
      </Reveal>
    </Section>
  );
}
