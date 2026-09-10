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
      title="Projects & Case Studies"
      lead="A selection of AI and QA engineering systems I've designed, built, and evaluated — from RAG and AI agents to automation and quality workflows."
    >
      <ProjectGrid />
    </Section>
  );
}
