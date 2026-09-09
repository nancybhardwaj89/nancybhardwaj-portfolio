import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      title="The stack behind the testing"
      lead="Grouped by what it's for, not alphabetised. The AI-quality work leads because that's where the newest problems are."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={Math.min(index, 4) * 60}>
            <Card className="h-full">
              <h3 className="font-display text-base font-semibold tracking-tight text-fg">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {group.note}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
