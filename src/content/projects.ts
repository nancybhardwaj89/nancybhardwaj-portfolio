/**
 * The four AI / agentic QA projects, each with a detail page.
 *
 * Every detail page follows the same case-study spine — Problem → Test
 * strategy → Approach → Result → What I learned → Tools — so a reader can
 * compare projects instead of re-orienting on each page.
 *
 * SOURCING RULES:
 *  - `problem`, `testStrategy`, `approach`, `evaluation` and `stack` are
 *    rephrasings of CV bullets. Nothing invented.
 *  - `result` holds only figures traced to an artefact in Nancy's own repos
 *    or running systems, never to the CV's prose and never estimated:
 *      QAVentra        163 artifacts — read off its own UI screenshot
 *      SprintReadyAI   10 cases / 23 assertions — counted in promptfooconfig.yaml
 *      TestCase Compass RAGAS means — computed from results/ragas_results.csv,
 *                      with the sample size stated inline because it is small
 *    AssertPilot and the triage agent stay empty: no results artefact exists
 *    in either repo.
 *  - `learned` is DRAFT. It is inferred from the engineering choices visible
 *    in each architecture, not from anything Nancy has said. She must review
 *    or delete these before the site is shared — see the note in chat.
 */

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  /** One-sentence hook for the home-page card. */
  summary: string;
  status?: string;
  /** e.g. "Client engagement" — marks work delivered for a client. */
  context?: string;
  /** Filter group shown in the case studies section. */
  category: string;
  /** Shown on the card; the 4–5 most recognizable. */
  primaryStack: string[];
  /** Full technology list for the detail page sidebar. */
  stack: string[];

  /**
   * "What I built" — the concrete capabilities, shown on the card itself.
   * These exist so a recruiter gets the substance without clicking through to
   * the detail page, which most won't.
   */
  built: string[];

  /**
   * One-sentence framing for the card. A condensed form of `problem` below,
   * which runs to a paragraph and is too long for a card.
   */
  problemShort: string;

  /** Case-study spine. */
  problem: string;
  testStrategy: string;
  approach: string;
  /** The specific metrics or checks applied. */
  evaluation: string[];

  /**
   * Measured outcomes, shown on the card. Rendered only when non-empty, so a
   * project without figures never displays an empty Result heading.
   */
  result: string[];

  /** DRAFT — see sourcing rules above. */
  learned: string | null;

  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "qaventra",
    context: "Client engagement",
    category: "RAG & Evaluation",
    name: "QAVentra",
    subtitle: "QA Knowledge Intelligence Platform",
    summary:
      "A single, cited knowledge base over test cases, automation code, JIRA tickets, requirements and meeting notes — searchable by humans and by AI tools through MCP.",
    primaryStack: ["Python", "FastAPI", "Qdrant", "MCP", "DeepEval"],
    stack: [
      "Python",
      "FastAPI",
      "BAAI BGE-M3 (hybrid embeddings)",
      "Qdrant",
      "BGE-Reranker-v2-M3",
      "Groq",
      "Docker Compose",
      "JIRA REST API",
      "LangChain Text Splitters",
      "MCP (Model Context Protocol)",
      "APScheduler",
      "DeepEval",
    ],
    problemShort:
      "QA knowledge is scattered across test cases, automation code, JIRA tickets, requirements, and meeting notes, making it difficult to find reliable answers quickly.",
    built: [
      "Unified QA knowledge using hybrid search",
      "Semantic + keyword retrieval",
      "MCP interface for AI-assisted access",
      "Citation-backed responses",
      "Change-aware knowledge ingestion",
      "Retrieval and response evaluation",
    ],
    problem:
      "QA knowledge is scattered by default — test cases in one tool, tickets in another, requirements in a third, and the reasoning behind past decisions buried in meeting notes. The answer to “what did we already test here, and why” usually exists, but finding it means knowing where to look. A retrieval system over that content introduces a second problem: it can answer fluently and confidently while citing the wrong source.",
    testStrategy:
      "Treat retrieval and generation as separately testable stages. A wrong answer has two very different causes — the right material was never retrieved, or it was retrieved and then misrepresented — and conflating them makes failures undiagnosable. Retrieval is measured on whether the correct chunks surfaced; generation is measured on whether the answer is faithful to what was retrieved and whether the citations shown actually support the claims made.",
    approach:
      "Hybrid search combining lexical and dense retrieval, with a cross-encoder reranking the results. QA and defect queries hinge on precise identifiers and error strings that pure semantic search handles poorly, so lexical matching earns its place alongside embeddings. Scheduled ingestion with change detection keeps the knowledge base current without anyone remembering to re-index. The whole platform is packaged with Docker Compose and exposed over MCP, so AI tooling and a web chat interface query the same source — self-hosted throughout, because test cases and tickets are exactly the material that cannot be sent to a third-party service.",
    evaluation: [],
    result: [
      "Makes QA knowledge searchable, contextual, and accessible to both humans and AI tools",
      // Read off the running system's own UI (QAVentra-ProofImages).
      "163 artifacts indexed across test cases, automation code, JIRA tickets and requirements",
    ],
    learned:
      "Semantic similarity alone is a poor fit for defect-shaped questions: the terms that matter most are often exact strings that embeddings smooth over. Hybrid retrieval wasn't an optimization, it was the difference between usable and not. The second lesson was that a stale knowledge base is a correctness bug rather than a maintenance chore — it answers confidently from last quarter's requirements, which is worse than returning nothing.",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/nancybhardwaj89/QAVentra-Where-QA-Knowledge-Lives",
      },
    ],
  },
  {
    slug: "sprintreadyai",
    context: "Client engagement",
    category: "AI agents",
    name: "SprintReadyAI",
    subtitle: "QA Refinement Copilot",
    summary:
      "An n8n agent that reads a JIRA story, analyzes it from a QA perspective, and posts a readiness assessment to Slack for human review before anything reaches the ticket.",
    primaryStack: ["n8n", "OpenAI", "JIRA", "Slack", "Promptfoo"],
    stack: [
      "n8n",
      "OpenAI (LLM)",
      "JIRA",
      "Slack",
      "Promptfoo",
      "Human-in-the-Loop design",
    ],
    problemShort:
      "Every sprint, QA teams spend significant time repeatedly reviewing and refining JIRA stories. The work is repetitive and can still result in missed edge cases or inconsistent readiness decisions.",
    built: [
      "AI agent for JIRA story analysis",
      "Detects missing acceptance criteria",
      "Generates QA clarification questions",
      "Suggests functional, negative and edge scenarios",
      "Produces readiness score and QA estimate",
      "Human review through Slack",
      "Promptfoo evaluation for different story types",
    ],
    problem:
      "Refinement sessions stall on stories that were never ready to be refined — missing acceptance criteria, ambiguous scope, no consideration of regression impact. The team's time goes into discovering that a story is underspecified rather than into the judgment calls only people can make.",
    testStrategy:
      "The failure mode for this agent isn't a crash, it's confident output on a story with nothing in it. A story that says three words should produce an assessment saying so, not a plausible-looking set of invented test scenarios. So the test suite is organized by input quality rather than by feature: well-defined, vague, invalid and missing stories each get their own expectations.",
    approach:
      "An n8n workflow pulls story detail from JIRA and analyzes it from a QA angle, emitting structured output: a readiness score, the acceptance criteria that are absent, clarification questions worth asking, candidate test scenarios, likely regression impact and a QA estimate. Reports land in Slack for a QA engineer to review, and only reach JIRA as a comment once a person has approved them. The agent drafts; it does not decide.",
    evaluation: [],
    result: [
      "Reduces repetitive QA refinement effort while creating a more consistent readiness assessment",
      // Counted directly from eval_promptfoo/promptfooconfig.yaml in the repo:
      // 10 `- description:` cases, 23 `- type:` assertions.
      "10-case Promptfoo suite with 23 assertions, covering readiness banding, verdict consistency, prompt injection, jailbreak, credential leakage and toxicity refusal",
    ],
    learned:
      "The human-in-the-loop gate turned out to be the feature, not a safety compromise around it. An agent writing straight into the team's backlog is a trust problem before it is a productivity gain, and putting a review step in front of the write is what made it something colleagues would actually turn on. Testing by input quality rather than by function also surfaced far more than a happy-path suite would have.",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/nancybhardwaj89/SprintReadyAI-QARefinementCopilot",
      },
    ],
  },
  {
    slug: "testcase-compass",
    context: "Client engagement",
    category: "RAG & Evaluation",
    name: "TestCase Compass",
    subtitle: "Advanced RAG Assistant for Test Cases",
    summary:
      "A retrieval assistant over 5,000+ test cases, using HyDE, reranking and parent-document retrieval to answer what coverage already exists.",
    primaryStack: ["LangFlow", "ChromaDB", "Groq", "HyDE", "RAGAS"],
    stack: [
      "LangFlow",
      "Groq (LLM)",
      "Mistral Embeddings",
      "ChromaDB",
      "NVIDIA Rerank",
      "HyDE",
      "Contextual Compression",
      "Parent-Document Retrieval",
      "RAGAS",
    ],
    problemShort:
      "Finding relevant coverage across thousands of existing test cases can be time-consuming and often depends on manual searching.",
    built: [
      "RAG assistant over 5,000+ test cases",
      "HyDE-based query expansion",
      "Semantic retrieval",
      "NVIDIA reranking",
      "Contextual compression",
      "Parent-document retrieval",
      "RAGAS evaluation",
    ],
    problem:
      "Large test suites accumulate duplicate coverage because nobody can find what already exists. With 5,000+ test cases, the practical question — does something already cover this flow, and where are the gaps — becomes unanswerable by search alone.",
    testStrategy:
      "Measure retrieval quality and answer quality as separate concerns, using RAGAS across five metrics. A test-case corpus is a hostile case for naive retrieval: the documents are short, formulaic and highly similar to one another, so an embedding search will happily return five near-identical cases that are all slightly wrong. Context precision and recall catch that in a way answer-level scoring alone does not.",
    approach:
      "HyDE bridges the gap between how people phrase questions and how test cases are written, since the two share very little surface vocabulary. Retrieved candidates are reranked, then parent-document retrieval returns the full case rather than an isolated step, so the answer has enough context to be meaningful. Contextual compression trims retrieved material to what's relevant before it reaches the model, paired with grounded prompts — both aimed at the same failure mode of a fluent answer citing the wrong test case.",
    evaluation: [],
    result: [
      "Helps QA teams discover existing test coverage faster using advanced retrieval",
      // Means computed from results/ragas_results.csv; sample size stated
      // inline because the run is small.
      "RAGAS over a 10-question evaluation set: answer relevancy 0.85, faithfulness 0.80",
    ],
    learned:
      "Corpus shape drives pipeline design more than model choice does. A homogeneous corpus of short, near-identical documents defeats the default RAG recipe, and the fixes that mattered — HyDE, reranking, parent-document retrieval — were all about compensating for that shape rather than about the LLM at the end of the chain.",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/nancybhardwaj89/TestCaseCompass-AdvancedRAGAssistant",
      },
    ],
  },
  {
    slug: "assertpilot",
    category: "Agent QA & security",
    name: "AssertPilot",
    subtitle: "AI Agent QA & Security Observatory",
    summary:
      "Validates what an AI agent actually did — tool selection, parameters, execution path, policy compliance — rather than only judging its final response.",
    primaryStack: ["React", "Vite", "Python", "FastAPI", "MCP"],
    stack: ["React", "Vite", "Python", "FastAPI", "MCP"],
    problemShort:
      "Traditional AI testing often evaluates only the final response, making it difficult to detect incorrect tool selection, unsafe actions, or policy violations.",
    built: [
      "Observes actual agent execution paths",
      "Validates tool selection and parameters",
      "Captures execution traces",
      "Detects policy violations and unauthorized actions",
      "Tests prompt injection and privilege escalation scenarios",
      "Provides risk-based findings",
    ],
    problem:
      "Testing an agent by reading its final answer misses almost everything that matters. An agent can return a perfectly reasonable reply having called the wrong tool, passed parameters it should never have had access to, or taken an execution path that violates policy. The response looks correct; the behavior underneath it was not.",
    testStrategy:
      "Assert on the execution trace rather than the output, using an expected-vs-actual model: which tools were selected, what parameters they received, the path taken through them, and whether that path complied with policy. Alongside the functional expectations sit adversarial scenarios, because an agent with tool access has an attack surface, not just a correctness surface.",
    approach:
      "A behavior validation framework covering tool selection, parameters, execution paths, policy compliance and risk, with security scenarios for prompt injection, unauthorized data access, privilege escalation and high-impact actions — an unauthorized refund being the concrete case. A policy-driven risk and findings model classifies observed behavior, flags security and business-rule violations, and produces actionable recommendations rather than a bare pass/fail, so the output is readable by someone deciding whether an agent is safe to ship.",
    evaluation: [],
    result: [
      "Extends AI testing beyond the final answer to what the agent actually decided and did",
    ],
    learned:
      "Testing an agent has more in common with security testing than with functional testing. The useful frame turned out to be abuse cases — what could this agent be made to do — rather than acceptance criteria, and the questions that mattered were the ones any security-minded tester would already ask of an API with privileged access.",
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/nancybhardwaj89/AssertPilot-MCP-Agent-QA-Security-Observatory",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/**
 * Projects presented as cards but without a detail page — same shape as the
 * card view of a Project, so they render through the identical component.
 */
export interface RepoProject {
  name: string;
  subtitle: string;
  category: string;
  result: string[];
  problemShort: string;
  built: string[];
  evaluation: string[];
  primaryStack: string[];
  href: string;
}

export const moreRepos: RepoProject[] = [
  {
    name: "AI IT Support Triage",
    category: "AI agents",
    subtitle: "Human-in-the-Loop Multi-Agent Workflow",
    problemShort:
      "IT support teams spend time manually classifying, prioritizing, and routing incoming tickets.",
    built: [
      "Multi-agent ticket triage workflow",
      "Ticket classification and prioritization",
      "Confidence-based routing",
      "Automated vs. human-review paths",
      "Safe handling of uncertain cases",
      "Decision and workflow logging",
    ],
    evaluation: [],
    result: [
      "Automates repetitive triage while keeping humans in control of higher-risk or uncertain decisions",
    ],
    primaryStack: [
      "n8n",
      "Groq",
      "Multi-Agent",
      "Slack",
      "Human-in-the-loop",
    ],
    href: "https://github.com/nancybhardwaj89/AIAgent-IT-Support-Triage-multi-agent-n8n",
  },
];
