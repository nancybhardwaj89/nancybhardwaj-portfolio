/**
 * The condensed view: everything a recruiter needs in one screen.
 *
 * Curated separately from the main site stats rather than reused, because the
 * criteria differ — this list has to survive a ten-second skim, so every entry
 * must be independently checkable. The hero's "∞ tests automated" is fine as
 * a flourish in context but has no place here.
 *
 * ACCURACY NOTE(nancy): your source copy said "70% test-effort reduction".
 * Your CV says regression *execution time* was cut by 70%, which is a
 * narrower and more defensible claim — effort and runtime aren't the same
 * thing, and the broader version is the kind of number an interviewer will
 * ask you to substantiate. Kept as the CV states it.
 */

export const recruiterStats = [
  { value: "14+", label: "Years in quality engineering" },
  { value: "15", label: "Engineers led" },
  { value: "70%", label: "Regression execution time cut" },
];

export const recruiterSkills = [
  {
    title: "AI quality",
    items: [
      "LLM testing",
      "RAG evaluation",
      "Agentic AI testing",
      "RAGAS",
      "DeepEval",
      "Promptfoo",
      "AI red teaming",
      "Salesforce Agentforce",
    ],
  },
  {
    title: "Automation & delivery",
    items: [
      "Playwright",
      "TypeScript",
      "Python",
      "Selenium",
      "REST API testing",
      "CI/CD",
    ],
  },
];
