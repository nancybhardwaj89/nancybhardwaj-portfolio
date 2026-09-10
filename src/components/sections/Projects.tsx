import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { moreRepos, projects } from "@/content/projects";

/**
 * Everything a card needs. Both featured projects and repo-only projects are
 * normalised to this shape so a single component renders them — the two used
 * to be near-duplicate markup that drifted apart whenever one was edited.
 */
interface ProjectCard {
  name: string;
  subtitle: string;
  status?: string;
  problemShort: string;
  built: string[];
  evaluation: string[];
  primaryStack: string[];
  href?: string;
}

const blockLabel =
  "font-mono text-[11px] tracking-wide text-fg-faint uppercase";
const bullet =
  "relative pl-4 text-sm leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent";

const cards: ProjectCard[] = [
  ...projects.map((project) => ({
    name: project.name,
    subtitle: project.subtitle,
    status: project.status,
    problemShort: project.problemShort,
    built: project.built,
    evaluation: project.evaluation,
    primaryStack: project.primaryStack,
    href: project.links.find((link) => link.href.includes("github.com"))?.href,
  })),
  ...moreRepos.map((repo) => ({
    name: repo.name,
    subtitle: repo.subtitle,
    problemShort: repo.problemShort,
    built: repo.built,
    evaluation: repo.evaluation,
    primaryStack: repo.primaryStack,
    href: repo.href,
  })),
];

function Card({ card, wide = false }: { card: ProjectCard; wide?: boolean }) {
  return (
    <div className="depth-card flex h-full flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent-border">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
          {card.name}
        </h3>
        {card.status ? (
          <span className="shrink-0 rounded-md border border-border px-2 py-1 font-mono text-[11px] leading-none text-fg-faint">
            {card.status}
          </span>
        ) : null}
      </div>

      <p className="mt-1.5 text-sm text-fg-faint">{card.subtitle}</p>

      <h4 className={`${blockLabel} mt-5`}>Problem</h4>
      <p
        className={`mt-2 text-sm leading-relaxed text-fg-muted ${
          wide ? "max-w-3xl" : ""
        }`}
      >
        {card.problemShort}
      </p>

      {/* When the card spans the full grid, the two lists sit side by side.
          Left as one column they would stretch to ~1100px per line, which is
          well past comfortable reading width.
          flex-1 keeps the stack and link aligned across cards in a row. */}
      <div
        className={
          wide
            ? "mt-5 grid flex-1 gap-x-10 gap-y-5 sm:grid-cols-2"
            : "mt-5 flex-1"
        }
      >
        <div>
          <h4 className={blockLabel}>What I built</h4>
          <ul className="mt-2.5 space-y-1.5">
            {card.built.map((item) => (
              <li key={item} className={bullet}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={wide ? undefined : "mt-5"}>
          <h4 className={blockLabel}>Quality / evaluation</h4>
          <ul className="mt-2.5 space-y-1.5">
            {card.evaluation.map((item) => (
              <li key={item} className={bullet}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {card.primaryStack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {card.href ? (
        <div className="mt-6 border-t border-border pt-5">
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-hover"
          >
            View GitHub
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
            </svg>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Case studies"
      lead="Real-world AI systems built to explore how we can test, evaluate, and trust AI behavior beyond the final response."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card, index) => {
          // An odd final card would sit alone in the two-column grid.
          const wide =
            index === cards.length - 1 && cards.length % 2 === 1;

          return (
            <Reveal
              key={card.name}
              delay={Math.min(index, 4) * 60}
              className={wide ? "sm:col-span-2" : undefined}
            >
              <Card card={card} wide={wide} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
