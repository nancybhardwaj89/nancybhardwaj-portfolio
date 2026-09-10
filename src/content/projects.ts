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
 *  - `result` is null on every project because the CV states no measurable
 *    outcome for any of them. Numbers must come from Nancy, not from here.
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

  /** Case-study spine. */
  problem: string;
  testStrategy: string;
  approach: string;
  /** The specific metrics or checks applied. */
  evaluation: string[];
  /** TODO(nancy): a real, defensible metric. */
  result: string | null;
  /** DRAFT — see sourcing rules above. */
  learned: string | null;

  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "qaventra",
    name: "QAVentra",
    subtitle: "Self-hosted hybrid RAG knowledge platform for QA teams",
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
    built: [
      "Hybrid search: semantic + keyword retrieval",
      "MCP interface for AI-assisted access to QA knowledge",
      "Citation-backed answers to reduce hallucination",
      "Scheduled ingestion with change detection",
      "Self-hosted architecture for controlled data access",
    ],
    problem:
      "QA knowledge is scattered by default — test cases in one tool, tickets in another, requirements in a third, and the reasoning behind past decisions buried in meeting notes. The answer to “what did we already test here, and why” usually exists, but finding it means knowing where to look. A retrieval system over that content introduces a second problem: it can answer fluently and confidently while citing the wrong source.",
    testStrategy:
      "Treat retrieval and generation as separately testable stages. A wrong answer has two very different causes — the right material was never retrieved, or it was retrieved and then misrepresented — and conflating them makes failures undiagnosable. Retrieval is measured on whether the correct chunks surfaced; generation is measured on whether the answer is faithful to what was retrieved and whether the citations shown actually support the claims made.",
    approach:
      "Hybrid search combining lexical and dense retrieval, with a cross-encoder reranking the results. QA and defect queries hinge on precise identifiers and error strings that pure semantic search handles poorly, so lexical matching earns its place alongside embeddings. Scheduled ingestion with change detection keeps the knowledge base current without anyone remembering to re-index. The whole platform is packaged with Docker Compose and exposed over MCP, so AI tooling and a web chat interface query the same source — self-hosted throughout, because test cases and tickets are exactly the material that cannot be sent to a third-party service.",
    evaluation: [
      "DeepEval for answer relevance and faithfulness",
      "Contextual precision and recall on retrieved chunks",
      "Citation accuracy — whether the sources shown actually support the answer",
    ],
    result: null,
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
    name: "SprintReadyAI",
    subtitle: "QA refinement copilot",
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
    built: [
      "n8n-based QA refinement agent over JIRA stories",
      "Identifies missing acceptance criteria and test scenarios",
      "Generates QA clarification questions",
      "Produces a readiness score and QA estimate",
      "Slack review gate before anything reaches the ticket",
      // Kept to what the CV states — Promptfoo covers four input classes.
      // "Regression and hallucination testing" would overstate it.
      "Promptfoo evaluation across well-defined, vague, invalid and missing stories",
    ],
    problem:
      "Refinement sessions stall on stories that were never ready to be refined — missing acceptance criteria, ambiguous scope, no consideration of regression impact. The team's time goes into discovering that a story is underspecified rather than into the judgment calls only people can make.",
    testStrategy:
      "The failure mode for this agent isn't a crash, it's confident output on a story with nothing in it. A story that says three words should produce an assessment saying so, not a plausible-looking set of invented test scenarios. So the test suite is organized by input quality rather than by feature: well-defined, vague, invalid and missing stories each get their own expectations.",
    approach:
      "An n8n workflow pulls story detail from JIRA and analyzes it from a QA angle, emitting structured output: a readiness score, the acceptance criteria that are absent, clarification questions worth asking, candidate test scenarios, likely regression impact and a QA estimate. Reports land in Slack for a QA engineer to review, and only reach JIRA as a comment once a person has approved them. The agent drafts; it does not decide.",
    evaluation: [
      "Promptfoo evaluation across four input classes: well-defined, vague, invalid and missing stories",
      "Response reliability and consistency — the failure mode being confident output on an empty story",
    ],
    result: null,
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
    name: "TestCase Compass",
    subtitle: "Advanced RAG pipeline over a test-case corpus",
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
    built: [
      "RAG assistant over 5,000+ test cases",
      "HyDE-based query expansion",
      // "Hybrid retrieval" belongs to QAVentra; this pipeline uses Mistral
      // embeddings over ChromaDB, so it's described as it actually is.
      "Mistral embeddings over ChromaDB",
      "NVIDIA reranking and contextual compression",
      "Parent-document retrieval for full-case context",
      "RAGAS evaluation across five metrics",
    ],
    problem:
      "Large test suites accumulate duplicate coverage because nobody can find what already exists. With 5,000+ test cases, the practical question — does something already cover this flow, and where are the gaps — becomes unanswerable by search alone.",
    testStrategy:
      "Measure retrieval quality and answer quality as separate concerns, using RAGAS across five metrics. A test-case corpus is a hostile case for naive retrieval: the documents are short, formulaic and highly similar to one another, so an embedding search will happily return five near-identical cases that are all slightly wrong. Context precision and recall catch that in a way answer-level scoring alone does not.",
    approach:
      "HyDE bridges the gap between how people phrase questions and how test cases are written, since the two share very little surface vocabulary. Retrieved candidates are reranked, then parent-document retrieval returns the full case rather than an isolated step, so the answer has enough context to be meaningful. Contextual compression trims retrieved material to what's relevant before it reaches the model, paired with grounded prompts — both aimed at the same failure mode of a fluent answer citing the wrong test case.",
    evaluation: [
      "RAGAS across five metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall and Answer Correctness",
    ],
    result: null,
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
    name: "AssertPilot",
    subtitle: "AI agent QA and security observatory",
    summary:
      "Validates what an AI agent actually did — tool selection, parameters, execution path, policy compliance — rather than only judging its final response.",
    status: "Prototype",
    primaryStack: ["React", "Vite", "Python", "FastAPI", "MCP"],
    stack: ["React", "Vite", "Python", "FastAPI", "MCP"],
    built: [
      "Observes the actual agent execution path, not just the final answer",
      "Validates tool selection and tool parameters",
      "Detects policy violations and unauthorized actions",
      "Captures execution traces for investigation",
      "Security scenarios: prompt injection, data access, privilege escalation",
      // "UAT validation" isn't supported anywhere on the CV, so this stops at
      // agent QA and security.
      "Policy-driven risk and findings model for agent QA and security",
    ],
    problem:
      "Testing an agent by reading its final answer misses almost everything that matters. An agent can return a perfectly reasonable reply having called the wrong tool, passed parameters it should never have had access to, or taken an execution path that violates policy. The response looks correct; the behavior underneath it was not.",
    testStrategy:
      "Assert on the execution trace rather than the output, using an expected-vs-actual model: which tools were selected, what parameters they received, the path taken through them, and whether that path complied with policy. Alongside the functional expectations sit adversarial scenarios, because an agent with tool access has an attack surface, not just a correctness surface.",
    approach:
      "A behavior validation framework covering tool selection, parameters, execution paths, policy compliance and risk, with security scenarios for prompt injection, unauthorized data access, privilege escalation and high-impact actions — an unauthorized refund being the concrete case. A policy-driven risk and findings model classifies observed behavior, flags security and business-rule violations, and produces actionable recommendations rather than a bare pass/fail, so the output is readable by someone deciding whether an agent is safe to ship.",
    evaluation: [
      "Assertions on execution traces — tool selection, parameters and execution path",
      "Policy compliance and risk classification per scenario",
    ],
    result: null,
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
 * Secondary repositories worth surfacing without a full write-up.
 *
 * Deliberately short — this strip exists to show range, and every entry added
 * here dilutes the four featured projects above it.
 */
export const moreRepos = [
  {
    name: "AI Agent — IT Support Triage",
    description:
      "Human-in-the-loop multi-agent workflow for IT ticket triage, built in n8n.",
    href: "https://github.com/nancybhardwaj89/AIAgent-IT-Support-Triage-multi-agent-n8n",
    stack: ["n8n", "Multi-Agent", "Human-in-the-Loop"],
  },
];
