import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      title="The stack behind the testing"
      lead="The tools and technologies I use to build, automate, evaluate, and secure modern software and AI systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={Math.min(index, 4) * 60}
            // An odd final card would otherwise sit alone in its row. Let it
            // span the remaining columns so the grid reads as deliberate.
            className={
              index === skillGroups.length - 1
                ? [
                    skillGroups.length % 2 === 1 ? "sm:col-span-2" : "",
                    skillGroups.length % 3 === 1 ? "lg:col-span-3" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                : undefined
            }
          >
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
