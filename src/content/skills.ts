/**
 * Skills, grouped for scanning rather than transcribed flat from the CV.
 *
 * Order is deliberate: the AI-quality groups lead because that's the site's
 * positioning and the scarcest capability on offer. The long-standing
 * automation and delivery skills follow as supporting evidence.
 */

export interface SkillGroup {
  title: string;
  /** One line on why this group matters — keeps the grid from reading as a
   *  keyword dump. */
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI-Augmented QA & Agentic Automation",
    note: "Building AI-powered QA workflows, agents, and intelligent automation.",
    items: [
      "AI Agent Design & Orchestration",
      "Multi-Agent Systems",
      "MCP (Model Context Protocol)",
      "n8n",
      "LangFlow",
      "Prompt Engineering",
      "LLM Integration (Claude, Groq, OpenAI)",
      "Advanced RAG Pipelines",
      "Vector Databases (Qdrant, ChromaDB, Pinecone)",
      "Human-in-the-Loop Design",
    ],
  },
  {
    title: "GenAI / LLM Evaluation & Responsible AI",
    note: "Evaluating AI for accuracy, groundedness, safety, and reliability.",
    items: [
      "RAGAS",
      "DeepEval",
      "Promptfoo",
      "Faithfulness & Groundedness",
      "Context Precision / Recall",
      "Answer Relevance & Correctness",
      "AI Red Teaming",
      "Citation Accuracy",
    ],
  },
  {
    title: "Salesforce Quality Engineering",
    note: "Testing Salesforce applications and AI agents across business-critical workflows.",
    items: [
      "Agentforce Testing Center",
      "Topics, Actions & Utterances",
      "Subagents",
      "Intent Classification Validation",
      "Sales Cloud",
      "Service Cloud",
      "CRM & CPQ Testing",
      "Case Management",
    ],
  },
  {
    title: "Test Automation & Programming",
    note: "Engineering scalable automation frameworks, not just test scripts.",
    items: [
      "Playwright (TypeScript)",
      "Playwright MCP",
      "Selenium WebDriver",
      "Page Object Model",
      "TypeScript",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "API & Performance Testing",
    note: "Validating APIs, integrations, and performance before failures reach users.",
    items: [
      "REST API Testing",
      "Postman",
      "Newman",
      "API Mocking & Mock Servers",
      "JMeter",
    ],
  },
  {
    title: "CI/CD, Reporting & Test Management",
    note: "Turning testing into a visible, measurable part of the delivery pipeline.",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Azure DevOps",
      "Power Automate",
      "Allure",
      "Playwright Trace Viewer",
      "JIRA (Zephyr)",
      "Azure Test Plans",
      "Git & GitHub",
      "MySQL",
    ],
  },
  {
    title: "Testing Expertise & Methodologies",
    note: "The judgement layer that decides what's worth automating.",
    items: [
      "Risk-Based Testing",
      "Regression",
      "Functional",
      "Exploratory",
      "Mobile App",
      "Responsive",
      "Shift-Left Testing",
      "Agile / Scrum",
      "SAFe",
    ],
  },
];
