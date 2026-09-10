import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs } from "@/content/about";
import {
  awards,
  certifications,
  contributions,
  education,
} from "@/content/credentials";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-fg-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4">
            <Card>
              <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
                Certifications
              </h3>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-fg-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
                Awards
              </h3>
              <ul className="mt-3 space-y-3">
                {awards.map((award) => (
                  <li key={award.title}>
                    <p className="text-sm font-medium text-fg">{award.title}</p>
                    <p className="text-xs text-fg-faint">{award.org}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
                Education
              </h3>
              <ul className="mt-3 space-y-2">
                {education.map((entry) => (
                  <li key={entry.qualification}>
                    <p className="text-sm text-fg">{entry.qualification}</p>
                    <p className="text-xs text-fg-faint">
                      {entry.institution} · {entry.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-display text-sm font-semibold tracking-tight text-fg">
                Community
              </h3>
              <ul className="mt-3 space-y-2">
                {contributions.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-fg-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
