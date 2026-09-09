/**
 * The four AI / agentic QA projects, each with a detail page.
 *
 * SOURCING RULE: every sentence below is a rephrasing of a bullet on Nancy's
 * CV. Nothing is embellished — in particular, `outcome` is left null wherever
 * the CV states no measurable result, rather than inventing one. Those nulls
 * are prompts for Nancy to supply real numbers, not gaps to paper over.
 */

export interface ProjectSection {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  /** One-sentence hook for the home-page card. */
  summary: string;
  /** Short label such as "Prototype" — only where the CV supports it. */
  status?: string;
  /** Shown on the card; keep to the 4–5 most recognisable. */
  primaryStack: string[];
  /** Full technology list for the detail page. */
  stack: string[];
  /** Opening paragraph of the detail page. */
  overview: string;
  /** The approach, broken into named beats. */
  sections: ProjectSection[];
  /** How quality was actually measured — the differentiator for a QA portfolio. */
  evaluation: string[];
  /** TODO(nancy): supply a real, defensible metric for each of these. */
  outcome: string | null;
  /** TODO(nancy): repo / demo / write-up URLs where they exist and are public. */
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
    overview:
      "QA knowledge is scattered by default — test cases in one tool, tickets in another, requirements in a third, and the reasoning behind past decisions buried in meeting notes. QAVentra pulls those sources into one self-hosted knowledge base that answers questions with citations, so a QA engineer can ask what was tested and why without knowing where the answer lives.",
    sections: [
      {
        title: "Retrieval built for defect-shaped questions",
        body: "Hybrid search combined with reranking, rather than plain vector similarity. QA and defect queries tend to hinge on precise identifiers and error strings that pure semantic search handles poorly, so lexical and dense retrieval run together and a cross-encoder reranks what comes back.",
      },
      {
        title: "A knowledge base that stays current on its own",
        body: "Scheduled ingestion with change detection keeps content fresh without anyone remembering to re-index. A stale knowledge base is worse than none — it answers confidently from last quarter's requirements.",
      },
      {
        title: "Reachable from tools, not just a chat box",
        body: "Packaged with Docker Compose and exposed over MCP, so AI tooling and a web chat interface both query the same knowledge base. Self-hosting is the point: test cases and tickets are exactly the material teams cannot send to a third-party service.",
      },
    ],
    evaluation: [
      "DeepEval for answer relevance and faithfulness",
      "Contextual precision and recall on retrieved chunks",
      "Citation accuracy — whether the sources shown actually support the answer",
    ],
    outcome: null,
    links: [],
  },
  {
    slug: "sprintreadyai",
    name: "SprintReadyAI",
    subtitle: "QA refinement copilot",
    summary:
      "An n8n agent that reads a JIRA story, analyses it from a QA perspective, and posts a readiness assessment to Slack for human review before anything reaches the ticket.",
    primaryStack: ["n8n", "OpenAI", "JIRA", "Slack", "Promptfoo"],
    stack: [
      "n8n",
      "OpenAI (LLM)",
      "JIRA",
      "Slack",
      "Promptfoo",
      "Human-in-the-Loop design",
    ],
    overview:
      "Refinement sessions stall on stories that were never ready to be refined — missing acceptance criteria, ambiguous scope, no thought given to regression impact. SprintReadyAI does the first pass automatically, so the team spends its refinement time on judgement calls rather than on discovering that a story is underspecified.",
    sections: [
      {
        title: "What it produces",
        body: "For each story: a readiness score, the acceptance criteria that are missing, QA clarification questions worth asking, candidate test scenarios, likely regression impact, and a QA estimate. Structured output, so it can be scanned in seconds rather than read.",
      },
      {
        title: "Human-in-the-loop by design",
        body: "Reports land in Slack for a QA engineer to review, and only reach JIRA as a comment once a person has approved them. The agent drafts; it does not decide. That boundary is deliberate — an agent writing directly into the team's backlog is a trust problem, not a productivity gain.",
      },
    ],
    evaluation: [
      "Promptfoo evaluation across four input classes: well-defined, vague, invalid, and missing stories",
      "Checked for response reliability and consistency — the failure mode being confident output on a story with nothing in it",
    ],
    outcome: null,
    links: [],
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
    overview:
      "Large test suites accumulate duplicate coverage because nobody can find what already exists. TestCase Compass indexes 5,000+ test cases and answers questions about them directly — what covers this flow, what similar cases already exist, where the gaps are.",
    sections: [
      {
        title: "Why a naive RAG pipeline wasn't enough",
        body: "Test cases are short, formulaic and highly similar to one another, which is close to the worst case for plain embedding search. The pipeline uses HyDE to bridge the gap between how people ask questions and how test cases are written, then reranks results and retrieves the parent document so the answer has the full case rather than an isolated step.",
      },
      {
        title: "Keeping answers grounded",
        body: "Contextual compression trims retrieved context to what's actually relevant before it reaches the model, paired with grounded prompts — both aimed at the same failure mode of a fluent answer that cites the wrong test case.",
      },
    ],
    evaluation: [
      "RAGAS across five metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall and Answer Correctness",
    ],
    outcome: null,
    links: [],
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
    overview:
      "Testing an agent by reading its final answer misses almost everything that matters. An agent can return a perfectly reasonable reply while having called the wrong tool, passed parameters it shouldn't have had, or taken an execution path that violates policy. AssertPilot inspects the behaviour underneath the response.",
    sections: [
      {
        title: "Expected-vs-actual behaviour validation",
        body: "A framework for asserting on the trace rather than the output: which tools were selected, what parameters they received, the path taken through them, and whether that path complied with policy.",
      },
      {
        title: "Security scenarios",
        body: "Coverage for prompt injection, unauthorised data access, privilege escalation, and high-impact actions — an unauthorised refund being the concrete case. These are the agent equivalents of the abuse cases any security-minded tester would write for a conventional API.",
      },
      {
        title: "Policy-driven risk and findings model",
        body: "Classifies observed agent behaviour, flags security and business-rule violations, and produces actionable recommendations rather than a raw pass/fail. The output is meant to be read by someone deciding whether an agent is safe to ship.",
      },
    ],
    evaluation: [
      "Assertions on execution traces — tool selection, parameters and execution path",
      "Policy compliance and risk classification per scenario",
    ],
    outcome: null,
    links: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
