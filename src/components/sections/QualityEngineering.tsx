import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  challengeItems,
  engineerGroups,
  evaluateGroups,
  gateNote,
  gateOutcomes,
  gateSteps,
  qeIntro,
  qualityLens,
  stages,
  type Stage,
} from "@/content/quality-engineering";

/**
 * The one section describing how quality is engineered, in four stages.
 *
 * Replaces the separate architecture flow and pyramid, which said much the
 * same thing twice. Everything is laid out with grids and rules rather than
 * fixed-width diagrams, so it reflows on a phone instead of scrolling
 * sideways.
 */

const chip =
  "rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted";

function StageHeader({ stage }: { stage: Stage }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-mono text-xs text-accent">
        {stage.number} — {stage.kicker.toUpperCase()}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
        {stage.title}
      </h3>
    </div>
  );
}

/** A stage block: header, a rule, then its own content. */
function StageBlock({
  stage,
  children,
  delay = 0,
}: {
  stage: Stage;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-border pt-6">
        <StageHeader stage={stage} />
        <div className="mt-5">{children}</div>
      </div>
    </Reveal>
  );
}

export function QualityEngineering() {
  return (
    <Section
      id="approach"
      title="How I engineer quality for AI systems"
      lead={qeIntro[0]}
    >
      <Reveal>
        <p className="-mt-4 mb-10 max-w-2xl text-base leading-relaxed text-fg-muted">
          {qeIntro[1]}
        </p>
      </Reveal>

      <div className="space-y-10">
        {/* 01 — Engineer */}
        <StageBlock stage={stages.engineer}>
          <div className="grid gap-4 sm:grid-cols-3">
            {engineerGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h4 className="font-display text-sm font-semibold tracking-tight text-fg">
                  {group.title}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className={chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </StageBlock>

        {/* 02 — Challenge */}
        <StageBlock stage={stages.challenge} delay={60}>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {challengeItems.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg-muted"
              >
                <span aria-hidden="true" className="text-accent">
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </StageBlock>

        {/* 03 — Evaluate */}
        <StageBlock stage={stages.evaluate} delay={60}>
          <div className="grid gap-4 sm:grid-cols-2">
            {evaluateGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h4 className="font-display text-sm font-semibold tracking-tight text-fg">
                  {group.title}
                </h4>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-fg-muted">
                  {group.tools.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </StageBlock>

        {/* 04 — Gate */}
        <StageBlock stage={stages.gate} delay={60}>
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <ol className="mx-auto flex max-w-sm flex-col items-stretch">
              {gateSteps.map((step, index) => (
                <li key={step}>
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="mx-auto block h-4 w-px bg-border-strong"
                    />
                  ) : null}
                  <span className="block rounded-lg border border-border bg-surface-raised px-4 py-2.5 text-center font-mono text-[11px] text-fg">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <span
              aria-hidden="true"
              className="mx-auto my-4 block h-4 w-px bg-border-strong"
            />

            <ul className="mx-auto flex max-w-md flex-col gap-2">
              {gateOutcomes.map((outcome) => (
                <li
                  key={outcome.verdict}
                  className={`flex items-center justify-between gap-4 rounded-lg border px-4 py-2.5 font-mono text-[11px] ${
                    outcome.tone === "pass"
                      ? "border-accent bg-accent-subtle text-accent"
                      : "border-border bg-surface-raised text-fg-muted"
                  }`}
                >
                  <span className="font-semibold">{outcome.verdict}</span>
                  <span aria-hidden="true" className="flex-1 border-t border-dashed border-current opacity-40" />
                  <span>{outcome.result}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-sm text-fg-muted">{gateNote}</p>
          </div>
        </StageBlock>
      </div>

      {/* Closing footer — the questions asked of any AI system. */}
      <Reveal delay={80}>
        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-7">
          <h3 className="font-display text-base font-semibold tracking-tight text-fg">
            My quality lens
          </h3>
          <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {qualityLens.map((entry) => (
              <div
                key={entry.question}
                className="flex flex-wrap items-baseline gap-x-2"
              >
                <dt className="font-mono text-sm font-semibold text-accent">
                  {entry.question}
                </dt>
                <dd className="text-sm leading-relaxed text-fg-muted">
                  {entry.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
