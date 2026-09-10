import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { moreRepos, projects } from "@/content/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Case studies"
      lead="Four systems built to answer a question conventional test tooling doesn't: how do you know an AI system is behaving correctly?"
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
                Read the case study
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

        {/* Repositories without a full write-up sit in the same grid, marked
            as external so it's clear they lead to source rather than to a
            case study. */}
        {moreRepos.map((repo, index) => (
          <Reveal key={repo.href} delay={Math.min(projects.length + index, 4) * 60}>
            <a
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-dashed border-border bg-surface p-6 transition-colors duration-200 hover:border-accent-border"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                  {repo.name}
                </h3>
                <span className="shrink-0 rounded-md border border-border px-2 py-1 font-mono text-[11px] leading-none text-fg-faint">
                  Repo
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
                {repo.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {repo.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                View on GitHub
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
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
