import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { roles } from "@/content/experience";

/**
 * A left-ruled timeline. Dates sit in their own column on desktop so the
 * chronology is scannable without reading a word of the bullets.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      lead="Fourteen years from manual testing to architecting automation and AI-quality practice."
    >
      <ol className="space-y-10">
        {roles.map((role, index) => (
          <li key={`${role.company}-${role.period}`}>
            <Reveal delay={Math.min(index, 3) * 60}>
              <div className="border-l border-border pl-6 sm:pl-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                    {role.title}
                    <span className="text-fg-faint"> · </span>
                    <span className="text-fg-muted">{role.company}</span>
                  </h3>
                  <p className="shrink-0 font-mono text-xs text-fg-faint">
                    {role.period}
                  </p>
                </div>

                <p className="mt-1 text-sm text-fg-faint">{role.location}</p>

                {role.projects ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {role.projects.map((project) => (
                      <li
                        key={project}
                        className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                      >
                        {project}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-4 space-y-2.5">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
