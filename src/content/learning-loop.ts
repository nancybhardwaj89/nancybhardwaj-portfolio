/**
 * The learning loop shown in the hero panel.
 *
 * Every step maps to something real: "share" is the technical blogging,
 * organization-wide speaking and mentoring on the CV; "build" and "validate"
 * are the four AI projects and their evaluation harnesses.
 */

export interface LoopStep {
  label: string;
  detail: string;
}

export const loopSteps: LoopStep[] = [
  { label: "explore", detail: "AI, agents, RAG & emerging technologies" },
  { label: "experiment", detail: "new tools, frameworks & approaches" },
  { label: "build", detail: "turn ideas into working solutions" },
  { label: "validate", detail: "test, measure & learn from failures" },
  { label: "share", detail: "document, publish & give back" },
];

export const loopCycle = "learn → build → test → improve → repeat ↻";

export const loopNote = [
  "The goal isn't to know everything.",
  "It's to never stop learning.",
];
