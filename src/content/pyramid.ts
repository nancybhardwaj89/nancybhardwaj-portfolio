/**
 * The AI quality pyramid — layered from foundational engineering practice up
 * to the most AI-specific, highest-stakes testing.
 *
 * Ordered bottom-up in the array; the component renders it apex-first.
 *
 * SOURCING NOTES(nancy):
 *  - "Bias" has no backing on your CV or in your repos. It's a legitimate
 *    part of responsible-AI testing, but you have no stated evidence of doing
 *    it. Flagged — swap or remove if you haven't.
 *  - "Jailbreak" and "Planning" are adjacent to, but not literally stated in,
 *    your AssertPilot work (which covers prompt injection, tool selection and
 *    execution paths). Defensible; worth being ready to speak to.
 *  - Everything else maps directly to CV evidence.
 */

export interface PyramidTier {
  label: string;
  detail: string;
  /** Apex tiers carry accent emphasis; the base is deliberately quiet. */
  emphasis: "apex" | "mid" | "base";
}

/** Bottom of the pyramid first. */
export const pyramidTiers: PyramidTier[] = [
  {
    label: "Foundation",
    detail: "Automation · CI/CD · Observability",
    emphasis: "base",
  },
  {
    label: "Application quality",
    detail: "Functional · API · UI · Performance",
    emphasis: "base",
  },
  {
    label: "LLM quality",
    detail: "Faithfulness · Relevance · Bias",
    emphasis: "mid",
  },
  {
    label: "RAG quality",
    detail: "Retrieval · Groundedness",
    emphasis: "mid",
  },
  {
    label: "Agent quality",
    detail: "Tool selection · Planning",
    emphasis: "apex",
  },
  {
    label: "AI safety",
    detail: "Red teaming · Jailbreak",
    emphasis: "apex",
  },
];

export const pyramidNote =
  "Each layer depends on the one beneath it. Agent behavior can't be trusted if retrieval is unsound, and none of it means anything without automation and CI/CD underneath.";
