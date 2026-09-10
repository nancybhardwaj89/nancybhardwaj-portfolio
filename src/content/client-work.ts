/**
 * Client engagements, anonymized.
 *
 * These lead the case studies section: the personal AI projects show range and
 * initiative, but fourteen years of enterprise delivery is the stronger
 * signal to a hiring manager, and it was previously buried in Experience
 * bullets.
 *
 * SOURCING: every line rephrases a bullet from the QualityAI (Qualitest) role
 * on Nancy's CV. Clients are described by nothing more specific than
 * "enterprise" — the CV names four, but nothing on it says which client had
 * which workstream, so attributing work to a named client would be a guess.
 *
 * The 70% regression figure is the only measured outcome anywhere on this
 * site, and it comes straight from the CV's professional summary.
 */

export interface ClientProject {
  name: string;
  subtitle: string;
  /** Small tag distinguishing this from the personal projects. */
  context: string;
  /** Filter group shown in the case studies section. */
  category: string;
  problemShort: string;
  built: string[];
  evaluation: string[];
  result: string[];
  primaryStack: string[];
}

export const clientWork: ClientProject[] = [
  {
    name: "Enterprise automation framework & CI/CD",
    subtitle: "Playwright + TypeScript framework for enterprise regression",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "Regression cycles were long enough to gate releases, and a distributed team of up to 15 engineers across multiple time zones needed a framework they could all extend without it fragmenting.",
    built: [
      "Playwright + TypeScript framework built on the Page Object Model",
      "Jenkins CI/CD integration for automated, parallel test execution",
      "Playwright MCP for AI-assisted, natural-language-driven test authoring",
    ],
    evaluation: [
      "Regression execution time measured before and after parallelization",
      "Suites executed on every Jenkins run rather than on request",
    ],
    result: ["70% reduction in regression execution time"],
    primaryStack: [
      "Playwright",
      "TypeScript",
      "Jenkins",
      "Azure DevOps",
      "Newman",
    ],
  },
  {
    name: "API CI/CD & pipeline reporting",
    subtitle: "Automated API regression and failure visibility in Azure DevOps",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "API regression was run and read by hand: results lived in whoever ran the collection, and a failed pipeline went unnoticed until somebody thought to check. The gap was filled by manual coordination.",
    built: [
      "Azure DevOps CI/CD pipelines running Postman collections through Newman",
      "API regression executed automatically on every pipeline run",
      "Newman reporting for visibility and analysis of API results",
      "Power Automate workflows linking Azure DevOps to Teams and email",
      "Pipeline failure notifications routed to the team automatically",
    ],
    evaluation: [
      "API responses validated against expected contract via Postman assertions",
      "Regression run on every pipeline execution rather than on request",
      "Pipeline events surfaced to the team rather than left in the runner",
    ],
    result: ["Manual coordination of pipeline status eliminated"],
    primaryStack: [
      "Postman",
      "Newman",
      "Azure DevOps",
      "Power Automate",
      "Teams",
    ],
  },
  {
    name: "Salesforce Agentforce agent testing",
    subtitle: "Utterance-based test suites for a conversational AI deployment",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "An Agentforce agent classifies each user utterance into a topic, then executes an action sequence. When classification is wrong the agent does not error — it confidently performs the wrong action, so misrouting reaches production looking like ordinary behavior.",
    built: [
      "Utterance-based test suites in Salesforce Agentforce Testing Center",
      "Positive and negative utterances authored per topic",
      "CSV-based batch execution across the full utterance set",
      "Topic / Action / Response pass-rate analysis",
      "Coverage across Sales Cloud (CRM & CPQ) and Service Cloud",
    ],
    evaluation: [
      "Intent classification accuracy per topic",
      "Action-sequence execution correctness",
      "Response accuracy against expected answers",
      "Pass-rate analysis by topic, action and response",
    ],
    result: ["Misrouting identified before production rather than in live conversations"],
    primaryStack: [
      "Agentforce",
      "Salesforce",
      "Sales Cloud",
      "Service Cloud",
      "Subagents",
    ],
  },
];
