import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "./ProjectGrid";

/**
 * Server component: the section chrome stays on the server, and only the
 * filterable grid ships as client JS.
 */
export function Projects() {
  return (
    <Section
      id="projects"
      title="Case studies"
      lead="Enterprise delivery, and the AI systems I've built to explore how we can test, evaluate, and trust AI behavior beyond the final response."
    >
      <ProjectGrid />
    </Section>
  );
}
