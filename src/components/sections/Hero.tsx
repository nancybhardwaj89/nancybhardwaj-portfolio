import { Avatar } from "@/components/ui/Avatar";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon } from "@/components/ui/Icon";
import { site, stats } from "@/content/site";

/** Shared pill-button shape, so the CTA row stays consistent. */
const pill =
  "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
const pillOutline = `${pill} border border-border bg-surface text-fg hover:border-border-strong hover:bg-surface-raised`;

export function Hero() {
  const linkedin = site.socials.find((s) => s.icon === "linkedin");

  return (
    <section id="top" className="hero-grid relative pt-14 pb-20 sm:pt-20 sm:pb-28">
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

            <p className="mt-2.5 font-mono text-base text-fg-muted sm:text-lg">
              Test Automation Architect · Agentic AI QA
            </p>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-fg-muted">
              I test the systems that don&apos;t give the same answer twice —
              pairing fourteen years of{" "}
              <span className="font-mono text-sm text-fg">Playwright</span>,{" "}
              <span className="font-mono text-sm text-fg">Selenium</span> and
              CI/CD automation with{" "}
              <span className="font-medium text-fg">AI quality engineering</span>
              : <span className="font-mono text-sm text-fg">RAG</span> and{" "}
              <span className="font-mono text-sm text-fg">LLM evaluation</span>,
              agent behaviour validation, and Salesforce{" "}
              <span className="font-mono text-sm text-fg">Agentforce</span>{" "}
              testing.
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
                <a href={site.resumeHref} className={pillOutline}>
                  Résumé
                </a>
              ) : null}
            </div>
          </Reveal>

          {/* Portrait column */}
          <Reveal delay={120}>
            <div className="relative mx-auto w-fit lg:mx-0 lg:ml-auto">
              <div className="rounded-full p-[3px] ring-2 ring-accent">
                <Avatar
                  src={site.avatar}
                  alt={`${site.name}, ${site.role}`}
                  initials={site.initials}
                  size={288}
                  className="h-56 w-56 sm:h-72 sm:w-72"
                  textClassName="text-6xl"
                />
              </div>

              {site.availability ? (
                <p className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-fg-muted shadow-sm">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {site.availability}
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>

        {/* Stats band — every figure traceable to a CV claim. */}
        <Reveal delay={180}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
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
