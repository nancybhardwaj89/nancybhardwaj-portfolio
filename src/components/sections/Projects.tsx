import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { moreRepos, projects } from "@/content/projects";
import { site } from "@/content/site";

export function Projects() {
  return (
    <Section
      id="projects"
      title="AI & agentic QA projects"
      lead="Four systems built to answer a question conventional test tooling doesn't: how do you know an AI system is behaving correctly?"
      className="bg-surface-raised"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index, 4) * 60}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent-border"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                {project.status ? (
                  <span className="shrink-0 rounded-md border border-border px-2 py-1 font-mono text-[11px] leading-none text-fg-faint">
                    {project.status}
                  </span>
                ) : null}
              </div>

              <p className="mt-1.5 text-sm text-fg-faint">{project.subtitle}</p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
                {project.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.primaryStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                Read the write-up
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Secondary repositories — one row, not a second grid, so the featured
          four keep their weight. */}
      <Reveal delay={80}>
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="font-mono text-xs tracking-wide text-fg-faint">
            ALSO ON GITHUB
          </h3>

          <ul className="mt-4 space-y-3">
            {moreRepos.map((repo) => (
              <li key={repo.href}>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent-border sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                      {repo.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                      {repo.description}
                    </p>
                  </div>
                  <ul className="flex shrink-0 flex-wrap gap-1.5">
                    {repo.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.socials.find((s) => s.icon === "github")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-hover"
          >
            All repositories
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3 w-3"
            >
              <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
            </svg>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
