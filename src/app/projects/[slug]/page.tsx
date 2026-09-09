import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

/**
 * One beat of the case-study spine. Numbered so the structure is legible at a
 * glance and consistent from project to project.
 */
function CaseStudySection({
  step,
  title,
  lead = false,
  children,
}: {
  step: string;
  title: string;
  lead?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-3">
        <span aria-hidden="true" className="font-mono text-xs text-accent">
          {step}
        </span>
        <h2 className="font-display text-lg font-semibold tracking-tight text-fg">
          {title}
        </h2>
      </div>
      <p
        className={`mt-3 leading-relaxed text-fg-muted ${lead ? "text-lg" : ""}`}
      >
        {children}
      </p>
    </section>
  );
}

/** One static route per project — the same data that feeds the home-page cards. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — ${project.subtitle}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted transition-colors hover:text-accent"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <path d="M13 8H3M7 4L3 8l4 4" />
          </svg>
          All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {project.name}
            </h1>
            {project.status ? (
              <span className="rounded-md border border-border px-2 py-1 font-mono text-[11px] leading-none text-fg-faint">
                {project.status}
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-lg text-fg-muted">{project.subtitle}</p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
          {/* Case-study spine — identical order on every project page. */}
          <div className="min-w-0 space-y-12">
            <CaseStudySection step="01" title="Problem" lead>
              {project.problem}
            </CaseStudySection>

            <CaseStudySection step="02" title="Test strategy">
              {project.testStrategy}
            </CaseStudySection>

            <CaseStudySection step="03" title="Evaluation approach">
              {project.approach}
            </CaseStudySection>

            {/* The metrics get their own tinted block: for a QA portfolio,
                how quality was measured is the whole point. */}
            <section className="rounded-2xl border border-accent-border bg-accent-subtle p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold tracking-tight text-fg">
                What was measured
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.evaluation.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {project.result ? (
              <CaseStudySection step="04" title="Result">
                {project.result}
              </CaseStudySection>
            ) : null}

            {project.learned ? (
              <CaseStudySection
                step={project.result ? "05" : "04"}
                title="What I learned"
              >
                {project.learned}
              </CaseStudySection>
            ) : null}
          </div>

          {/* Metadata column */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-sm font-semibold tracking-tight text-fg">
              Tools used
            </h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-surface-raised px-2 py-1 font-mono text-[11px] leading-none text-fg-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.links.length > 0 ? (
              <>
                <h2 className="mt-8 font-display text-sm font-semibold tracking-tight text-fg">
                  Links
                </h2>
                <ul className="mt-3 space-y-2">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent underline decoration-accent-border underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </aside>
        </div>
      </Container>
    </article>
  );
}
