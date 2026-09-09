import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
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
            <p>
              I&apos;ve spent fourteen years in quality engineering, starting as
              a manual tester in a Waterfall shop and working through to
              architecting automation frameworks and leading distributed teams
              of up to fifteen engineers.
            </p>
            <p>
              What holds my attention now is a harder version of the original
              problem. Testing deterministic software is a solved discipline —
              you assert on an output and it either matches or it doesn&apos;t.
              AI systems don&apos;t work that way. A model can return a fluent,
              confident answer that cites the wrong source, or an agent can
              produce a reasonable reply having called a tool it should never
              have had access to. The interesting question is what
              &ldquo;correct&rdquo; even means, and how you measure it
              repeatably.
            </p>
            <p>
              That&apos;s where most of my recent work sits: RAG evaluation with
              RAGAS and DeepEval, agent behaviour validation, AI red teaming,
              and Salesforce Agentforce testing — plus building the tooling to
              do it, because much of it doesn&apos;t exist off the shelf yet.
              The Playwright and API automation underneath hasn&apos;t gone
              anywhere; it&apos;s the foundation the rest is built on.
            </p>
            <p>
              Outside delivery, I speak at organisation-wide sessions, write
              about automation and Playwright, and mentor junior engineers.
            </p>
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
