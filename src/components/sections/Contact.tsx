import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { socialIcons } from "@/components/ui/Icon";
import { site } from "@/content/site";

/**
 * Deliberately a mailto and profile links rather than a form: a static export
 * has no backend to receive a submission, and a form that silently fails is
 * worse than no form. A recruiter with your address in their clipboard is the
 * outcome either way.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      lead="Open to conversations about AI quality engineering, test automation leadership, and agentic QA."
    >
      <Reveal>
        <div className="flex flex-col gap-8">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-xl font-medium tracking-tight text-accent underline decoration-accent-border underline-offset-4 transition-colors hover:decoration-accent sm:text-2xl"
          >
            {site.email}
          </a>

          {site.phone ? (
            <p className="font-mono text-sm text-fg-muted">{site.phone}</p>
          ) : null}

          <ul className="flex flex-wrap items-center gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                  >
                    <span className="h-4 w-4">
                      <Icon />
                    </span>
                    {social.label}
                  </a>
                </li>
              );
            })}

            {site.resumeHref ? (
              <li>
                <a
                  href={site.resumeHref}
                  className="inline-flex items-center rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  Download CV
                </a>
              </li>
            ) : null}
          </ul>

          <p className="text-sm text-fg-faint">{site.location}</p>
        </div>
      </Reveal>
    </Section>
  );
}
