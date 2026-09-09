import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { navItems, site } from "@/content/site";

/**
 * Phase 1 shell.
 *
 * Every section is stubbed so the layout, theme and navigation can be reviewed
 * before any real content exists. Each stub is replaced wholesale in the phase
 * that owns it — see the build plan.
 */
export default function Home() {
  return (
    <>
      {/* Hero — replaced in Phase 3 */}
      <section className="py-24 sm:py-32">
        <Container>
          <Badge variant="accent">Phase 1 · scaffold</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">{site.role}</p>
          <p className="mt-2 max-w-2xl text-base text-fg-faint">
            {site.tagline}
          </p>
        </Container>
      </section>

      {navItems.map((item) => (
        <Section
          key={item.id}
          id={item.id}
          title={item.label}
          lead="Placeholder — awaiting CV and project notes."
          className={item.id === "projects" ? "bg-surface" : undefined}
        >
          <div className="rounded-lg border border-dashed border-border-strong bg-surface-raised p-8">
            <p className="font-mono text-sm text-fg-faint">
              «{item.label} section — to be built»
            </p>
          </div>
        </Section>
      ))}
    </>
  );
}
