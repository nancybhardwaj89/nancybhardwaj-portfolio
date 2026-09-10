/**
 * The single quality-engineering section, replacing the earlier architecture
 * flow and quality pyramid. Those covered overlapping ground; this states the
 * method once, as four stages.
 *
 * SOURCING NOTE(nancy): "Golden datasets" is the one item with no backing on
 * your CV or in your repos — everything else maps to real work (Promptfoo →
 * SprintReadyAI, RAGAS → TestCase Compass, DeepEval → QAVentra, injection /
 * data leakage / unauthorized actions / tool validation → AssertPilot,
 * retrieval and chunking → QAVentra and TestCase Compass, release gating →
 * Jenkins, Azure DevOps and GitHub Actions). "Instruction following",
 * "Planning", "Jailbreaks", "Context manipulation" and "Agent loops" are
 * adjacent to AssertPilot rather than literally stated — defensible, but be
 * ready to speak to them.
 */

export const qeIntro = [
  "AI quality isn't a final testing phase. I engineer quality across the system — from application behavior and retrieval to agent actions, safety, evaluation and release decisions.",
  "I test what the system says, what it retrieves, what it decides, what it does, and whether it should be trusted.",
];

export interface Stage {
  number: string;
  kicker: string;
  title: string;
}

export const stages: Record<string, Stage> = {
  engineer: {
    number: "01",
    kicker: "Engineer",
    title: "Application & AI behavior",
  },
  challenge: {
    number: "02",
    kicker: "Challenge",
    title: "Find where AI can fail",
  },
  evaluate: {
    number: "03",
    kicker: "Evaluate",
    title: "Measure what actually works",
  },
  gate: {
    number: "04",
    kicker: "Gate",
    title: "Turn quality into a release decision",
  },
};

/** 01 — the surfaces that carry quality. */
export const engineerGroups = [
  {
    title: "Application quality",
    items: ["Functional", "API", "UI", "Performance"],
  },
  {
    title: "LLM / Agent",
    items: [
      "Prompt validation",
      "Instruction following",
      "Tool selection",
      "Planning",
      "Guardrails",
      "Hallucination",
    ],
  },
  {
    title: "RAG",
    items: [
      "Retrieval quality",
      "Chunking",
      "Reranking",
      "Context",
      "Groundedness",
    ],
  },
];

/** 02 — the failure modes worth hunting. */
export const challengeItems = [
  "Hallucination & unsupported claims",
  "Wrong tool selection",
  "Invalid tool parameters",
  "Prompt injection",
  "Jailbreaks",
  "Data leakage",
  "Unauthorized actions",
  "Context manipulation",
  "Agent loops & failure recovery",
];

/** 03 — how each is measured. */
export const evaluateGroups = [
  {
    title: "Functional evaluation",
    tools: ["Golden datasets", "Promptfoo", "Regression"],
  },
  {
    title: "RAG evaluation",
    tools: ["RAGAS", "DeepEval", "Retrieval metrics"],
  },
  {
    title: "AI quality",
    tools: ["Faithfulness", "Relevance", "Groundedness", "Consistency"],
  },
  {
    title: "Agent evaluation",
    tools: ["Tool selection", "Parameters", "Execution path", "Outcome"],
  },
];

/** 04 — the release gate. */
export const gateSteps = [
  "Evaluation",
  "Quality thresholds",
  "Regression checks",
  "Safety validation",
  "Human review when required",
];

export const gateOutcomes = [
  { verdict: "PASS", result: "Release", tone: "pass" as const },
  { verdict: "FAIL", result: "Block / Fix / Re-evaluate", tone: "fail" as const },
];

export const gateNote = "Quality is not just a score. It is a release decision.";

/** The closing footer: the questions asked of any AI system. */
export const qualityLens = [
  { question: "Correct?", answer: "Is the answer accurate and grounded?" },
  { question: "Safe?", answer: "Can the system be manipulated or leak data?" },
  { question: "Reliable?", answer: "Does it behave consistently across runs?" },
  {
    question: "Responsible?",
    answer: "Does it know when to ask for human help?",
  },
  { question: "Observable?", answer: "Can I see what the AI actually did?" },
  {
    question: "Effective?",
    answer: "Does the system achieve the intended outcome?",
  },
];
