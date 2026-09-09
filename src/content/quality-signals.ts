/**
 * The dimensions along which an AI system's quality is assessed.
 *
 * This section exists to frame the discipline before the projects demonstrate
 * it: a skills list says which tools someone has used, this says what they
 * think the problem actually is.
 *
 * NOTE(nancy): every row below is backed by something on the CV except part of
 * "Performance" — token usage and cost don't appear anywhere in your
 * experience. Flagged rather than silently dropped; see the chat.
 */

export interface QualitySignal {
  dimension: string;
  tests: string[];
}

export const qualitySignals: QualitySignal[] = [
  {
    dimension: "Accuracy",
    tests: [
      "Grounded answers",
      "Factuality",
      "Relevance",
      "Citation quality",
    ],
  },
  {
    dimension: "Reliability",
    tests: ["Regression behavior", "Consistency", "Failure recovery"],
  },
  {
    dimension: "Safety",
    tests: ["Prompt injection", "Data leakage", "Unsafe tool use"],
  },
  {
    dimension: "Agent behavior",
    tests: ["Planning", "Tool selection", "Handoffs", "Loops", "Escalation"],
  },
  {
    dimension: "Observability",
    tests: ["Traces", "Evaluation logs", "Failure categories", "Metrics"],
  },
  {
    dimension: "Performance",
    tests: ["Latency", "Token usage", "Throughput", "Cost"],
  },
];
