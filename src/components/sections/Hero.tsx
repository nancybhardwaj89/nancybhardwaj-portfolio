import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon } from "@/components/ui/Icon";
import { site, stats } from "@/content/site";
import { qualitySignals } from "@/content/quality-signals";

/** Shared pill-button shape, so the CTA row stays consistent. */
const pill =
  "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
const pillOutline = `${pill} border border-border bg-surface text-fg hover:border-border-strong hover:bg-surface-raised`;

/**
 * Portrait paired with a panel showing the dimensions Nancy evaluates against.
 *
 * Deliberately carries NO scores or percentages. A hero dashboard reading
 * "Faithfulness 0.94" would be an invented evaluation result presented as fact
 * on a page recruiters treat as a factual claim. Listing the dimensions is
 * honest and says the more interesting thing anyway: that AI quality is
 * multidimensional and she has a framework for it.
 *
 * Rows come from the same `qualitySignals` data as the Quality section, so the
 * two can't drift apart.
 */
function IdentityCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="shrink-0 rounded-full p-[3px] ring-2 ring-accent">
          <Avatar
            src={site.avatar}
            alt={`${site.name}, ${site.role}`}
            initials={site.initials}
            size={112}
            className="h-24 w-24 sm:h-28 sm:w-28"
            textClassName="text-2xl"
          />
        </div>

        <div className="min-w-0">
          <p className="font-display text-lg font-semibold tracking-tight text-fg">
            {site.name}
          </p>
          <p className="mt-0.5 font-mono text-xs leading-relaxed text-fg-muted">
            {site.role}
          </p>
          {site.availability ? (
            <p className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-subtle px-2.5 py-1 font-mono text-[11px] leading-none text-accent">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {site.availability}
            </p>
          ) : null}
        </div>
      </div>

      {/* Quality signal panel */}
      <div className="mt-5 rounded-xl border border-border bg-bg p-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span aria-hidden="true" className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
          </span>
          <p className="font-mono text-[11px] tracking-wide text-fg-faint">
            agent-quality-index
          </p>
        </div>

        <ul className="mt-3 space-y-2">
          {qualitySignals.map((signal) => (
            <li
              key={signal.dimension}
              className="flex items-baseline gap-2 font-mono text-[11px] leading-relaxed"
            >
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              <span className="shrink-0 text-fg">
                {signal.dimension.toLowerCase()}
              </span>
              <span className="truncate text-fg-faint">
                {signal.tests.slice(0, 2).join(", ").toLowerCase()}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-3 border-t border-border pt-3 font-mono text-[11px] text-fg-faint">
          {qualitySignals.length} dimensions evaluated
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const linkedin = site.socials.find((s) => s.icon === "linkedin");

  return (
    // Bottom padding is deliberately small: the following <Section> supplies
    // its own generous top padding, and doubling them left a ~220px void.
    <section id="top" className="hero-grid relative pt-14 pb-8 sm:pt-20 sm:pb-12">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Text column */}
          <Reveal>
            {/* Credentials strip */}
            <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-fg-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {site.eyebrow.join(" · ")}
            </p>

            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>

            <p className="mt-5 font-display text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
              {site.role}
            </p>

            <p className="mt-4 max-w-xl font-display text-xl leading-snug tracking-tight text-fg sm:text-2xl">
              {site.tagline}
            </p>

            <p className="mt-3 font-mono text-sm text-fg-muted sm:text-base">
              Test Automation Architect · Agentic AI QA
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
              {site.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className={`${pill} bg-accent text-accent-fg hover:bg-accent-hover`}
              >
                Explore case studies
              </a>

              {linkedin ? (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pillOutline}
                >
                  <span className="h-3.5 w-3.5">
                    <LinkedInIcon />
                  </span>
                  LinkedIn
                </a>
              ) : null}

              <a href={`mailto:${site.email}`} className={pillOutline}>
                Email me
              </a>

              {site.resumeHref ? (
                <a href={site.resumeHref} download className={pillOutline}>
                  Download résumé
                </a>
              ) : null}
            </div>
          </Reveal>

          {/* Portrait + quality panel */}
          <Reveal delay={120}>
            <IdentityCard />
          </Reveal>
        </div>

        {/* Stats band — every figure traceable to a CV claim. */}
        <Reveal delay={180}>
          <dl className="mt-14 grid grid-cols-2 gap-px sm:mt-16 overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
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
