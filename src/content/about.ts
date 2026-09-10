/**
 * The About narrative, in Nancy's own words.
 *
 * Kept here rather than inline in the component for the same reason as every
 * other content module: editing the copy shouldn't mean editing markup, and
 * plain strings avoid the JSX entity escaping that made the previous version
 * awkward to change.
 */
export const aboutParagraphs = [
  "I've spent 14+ years in quality engineering, growing from hands-on manual testing to designing automation frameworks, shaping QA strategy, and leading distributed teams of up to 15 engineers.",

  "What interests me most today is the next evolution of quality engineering: AI systems where “correct” isn't always binary.",

  "A model can produce a confident answer that isn't grounded. A RAG system can retrieve the wrong context. An AI agent can choose the wrong tool, pass unsafe parameters, or take an action it shouldn't. Testing these systems requires more than traditional assertions — it requires understanding behavior, uncertainty, risk, and outcomes.",

  "That's where much of my recent work is focused: RAG evaluation with RAGAS and DeepEval, LLM and agent testing, AI red teaming, prompt evaluation, Agentforce testing, and building tools that make AI behavior observable and measurable.",

  "My traditional QA foundation remains at the core — Playwright, API automation, test strategy, CI/CD, and quality engineering practices — but I'm continuously exploring how AI can extend what QA teams can achieve.",

  "I believe in learning by building: explore a technology, experiment with it, build something useful, test it, learn from what breaks, and share what I discover.",

  "Outside of delivery, I enjoy writing about QA and AI, speaking at organization-wide sessions, sharing what I learn, and mentoring engineers.",
];
