import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, stats } from "@/content/site";

/**
 * The 30-second scan. Positioning first, proof immediately underneath.
 *
 * No rotating text or typewriter effect: on the mobile-first read this site is
 * designed for, motion in the headline costs legibility and buys nothing.
 */
export function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-wide text-accent">
            {site.location}
          </p>

          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Quality engineering for{" "}
            <span className="text-accent">AI systems</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {site.tagline}
          </p>

          <p className="mt-4 font-mono text-sm text-fg-faint">
            {site.roleLong}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-raised"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        {/* Stats band — every figure traceable to a CV claim. */}
        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              // column-reverse so the value reads first visually while the
              // markup keeps its natural dt-then-dd order for assistive tech.
              <div
                key={stat.label}
                className="flex flex-col-reverse bg-surface px-5 py-6"
              >
                <dt className="mt-1.5 text-sm leading-snug text-fg-muted">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-fg">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
