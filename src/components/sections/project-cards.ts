import { clientWork } from "@/content/client-work";
import { moreRepos, projects } from "@/content/projects";

/**
 * Everything a card needs. Client engagements, featured projects and
 * repo-only projects all normalise to this shape so one component renders
 * them — they used to be near-duplicate markup that drifted apart whenever
 * any one of them was edited.
 */
export interface ProjectCard {
  name: string;
  subtitle: string;
  category: string;
  status?: string;
  /** e.g. "Client engagement" — distinguishes delivery work from side projects. */
  context?: string;
  problemShort: string;
  built: string[];
  evaluation: string[];
  result: string[];
  primaryStack: string[];
  href?: string;
}

export const cards: ProjectCard[] = [
  // Client engagements lead: fourteen years of enterprise delivery is the
  // stronger signal, and it was previously buried in Experience bullets.
  ...clientWork.map((project) => ({
    name: project.name,
    subtitle: project.subtitle,
    category: project.category,
    context: project.context,
    problemShort: project.problemShort,
    built: project.built,
    evaluation: project.evaluation,
    result: project.result,
    primaryStack: project.primaryStack,
  })),
  ...projects.map((project) => ({
    name: project.name,
    subtitle: project.subtitle,
    category: project.category,
    status: project.status,
    problemShort: project.problemShort,
    built: project.built,
    evaluation: project.evaluation,
    result: project.result,
    primaryStack: project.primaryStack,
    href: project.links.find((link) => link.href.includes("github.com"))?.href,
  })),
  ...moreRepos.map((repo) => ({
    name: repo.name,
    subtitle: repo.subtitle,
    category: repo.category,
    problemShort: repo.problemShort,
    built: repo.built,
    evaluation: repo.evaluation,
    result: [] as string[],
    primaryStack: repo.primaryStack,
    href: repo.href,
  })),
];

/**
 * Filter groups, in the order the cards first use them, with "All" prepended.
 * Derived rather than hardcoded so adding a project with a new category can't
 * leave it unreachable behind a filter that doesn't exist.
 */
export const categories: string[] = [
  "All",
  ...Array.from(new Set(cards.map((card) => card.category))),
];
