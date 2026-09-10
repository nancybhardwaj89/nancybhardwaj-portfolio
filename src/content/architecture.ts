/**
 * The AI quality engineering pipeline, rendered as a flow diagram.
 *
 * Positions Nancy as an architect of AI quality rather than an automation
 * engineer who uses AI tools — it shows a system, not a toolbox.
 *
 * SOURCING: almost everything here maps to CV evidence —
 *   Prompt validation / tool selection / guardrails → AssertPilot
 *   Hallucination, context, retrieval, chunking, reranking → QAVentra,
 *     TestCase Compass (BGE + NVIDIA rerank, LangChain splitters)
 *   Promptfoo → SprintReadyAI · RAGAS → TestCase Compass · DeepEval → QAVentra
 *   Prompt injection / jailbreak → AssertPilot security scenarios
 *   CI/CD gate → Jenkins, Azure DevOps, GitHub Actions
 *
 * NOTE(nancy): "Golden set" is the one item with no backing anywhere on your
 * CV or in your repos. Left in because it's standard practice and you asked
 * for it, but swap or remove it if you haven't actually built one.
 */

export interface FlowLane {
  label: string;
  items: string[];
}

export const architecture = {
  /** Where the system under test begins. */
  source: "AI application",

  /** The two surfaces that need testing, each with its failure modes. */
  surfaces: [
    {
      label: "LLM / Agent",
      items: [
        "Prompt validation",
        "Tool selection",
        "Guardrails",
        "Hallucination",
      ],
    },
    {
      label: "RAG pipeline",
      items: ["Retrieval quality", "Chunking", "Reranking", "Context"],
    },
  ] as FlowLane[],

  /** Where both surfaces converge. */
  hub: "AI evaluation",

  /** How evaluation is actually carried out. */
  lanes: [
    {
      label: "Functional evaluation",
      items: ["Promptfoo", "Golden set"],
    },
    {
      label: "Safety testing",
      items: ["Prompt injection", "Jailbreak"],
    },
    {
      label: "Quality metrics",
      items: ["RAGAS", "DeepEval", "LLM judge"],
    },
  ] as FlowLane[],

  gate: "CI/CD quality gate",
  release: "Release",
};
