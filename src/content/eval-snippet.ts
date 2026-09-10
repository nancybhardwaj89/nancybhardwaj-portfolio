/**
 * A short evaluation snippet for the hero panel.
 *
 * Shows how a RAG answer is asserted on, using the DeepEval API as it is
 * actually written — the same tooling and metrics listed for QAVentra on the
 * CV (relevance, faithfulness, contextual precision/recall).
 *
 * DELIBERATELY CARRIES NO SCORES. A panel reading "faithfulness: 0.94" would
 * be an invented evaluation result presented as fact in the most prominent
 * place on the page. Thresholds are configuration — what you decide to demand
 * — not results, so they are honest to show and say the more interesting
 * thing anyway: that grounding is asserted on, not assumed.
 */

export type Tone = "comment" | "fn" | "arg" | "plain" | "num";

export type Token = [text: string, tone: Tone];

export const evalFilename = "eval_rag_answer.py";

export const evalLines: Token[][] = [
  [["# assert the answer is grounded, not just fluent", "comment"]],
  [],
  [
    ["test", "plain"],
    [" = ", "arg"],
    ["LLMTestCase", "fn"],
    ["(", "arg"],
  ],
  [
    ["    input", "arg"],
    ["=question,", "plain"],
  ],
  [
    ["    actual_output", "arg"],
    ["=answer,", "plain"],
  ],
  [
    ["    retrieval_context", "arg"],
    ["=chunks,", "plain"],
  ],
  [[")", "arg"]],
  [],
  [
    ["assert_test", "fn"],
    ["(test, [", "arg"],
  ],
  [
    ["    FaithfulnessMetric", "fn"],
    ["(threshold=", "arg"],
    ["0.8", "num"],
    ["),", "arg"],
  ],
  [
    ["    ContextualPrecisionMetric", "fn"],
    ["(threshold=", "arg"],
    ["0.7", "num"],
    ["),", "arg"],
  ],
  [
    ["    AnswerRelevancyMetric", "fn"],
    ["(threshold=", "arg"],
    ["0.8", "num"],
    ["),", "arg"],
  ],
  [["])", "arg"]],
];

export const evalCaption = "DeepEval · thresholds gate the release, not vibes";
