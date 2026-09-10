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
    name: "Salesforce Agentforce Quality Engineering",
    subtitle: "Testing AI agents across enterprise workflows",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "Conversational AI introduces new testing challenges beyond traditional Salesforce testing, including intent, topics, actions, subagents, and AI-generated responses.",
    built: [
      "Agentforce testing approach",
      "Intent and utterance validation",
      "Topics and actions testing",
      "Subagent validation",
      "CRM workflow validation",
      "AI response and behavior testing",
    ],
    evaluation: [],
    result: [
      "Brings structured quality engineering practices to Salesforce AI agents and business workflows",
      // From the CV bullet on Topic/Action/Response pass-rate analysis.
      "Misrouting identified before production rather than in live conversations",
    ],
    primaryStack: [
      "Agentforce",
      "Sales Cloud",
      "Service Cloud",
      "CRM",
      "CPQ",
    ],
  },
  {
    name: "Playwright Automation Framework",
    subtitle: "Scalable test automation architecture",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "Growing automation suites require reusable architecture, reliable execution, and maintainable test code rather than script-by-script development.",
    built: [
      "Playwright + TypeScript framework",
      "Page Object Model",
      "Reusable fixtures and utilities",
      "Parallel execution",
      "Reliable synchronization and waits",
      "CI/CD integration",
    ],
    evaluation: [],
    result: [
      "Built a scalable foundation for maintainable and efficient regression automation",
      // From the CV summary — the only hard figure on the site, kept alongside
      // the qualitative line rather than replaced by it.
      "70% reduction in regression execution time",
    ],
    primaryStack: ["Playwright", "TypeScript", "POM", "CI/CD"],
  },
  {
    name: "API CI/CD & Newman Reporting",
    subtitle: "Automated API quality pipeline",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "API regression testing required repeatable execution and better visibility into results and failures.",
    built: [
      "Automated Postman collection execution",
      "Newman-based regression testing",
      "Azure DevOps CI/CD integration",
      "Automated HTML reporting",
      "Pipeline-based test execution",
      "Centralized test results",
    ],
    evaluation: [],
    result: [
      "Turned API regression into a repeatable CI/CD process with visible test results",
    ],
    primaryStack: ["Postman", "Newman", "Azure DevOps", "REST API"],
  },
  {
    name: "QA Pipeline Notifications",
    subtitle: "Automated failure visibility",
    context: "Client engagement",
    category: "Automation",
    problemShort:
      "Teams had to manually monitor pipelines to identify failures and communicate them to the right people.",
    built: [
      "Azure DevOps pipeline event integration",
      "Automated email notifications",
      "Microsoft Teams notifications",
      "Failure details in notifications",
      "Automated workflow using Power Automate",
    ],
    evaluation: [],
    result: [
      "Improved pipeline visibility and reduced dependency on manual monitoring",
    ],
    primaryStack: ["Power Automate", "Azure DevOps", "Teams", "Email"],
  },
];
