/**
 * Site-wide identity, navigation and SEO defaults.
 *
 * Every fact here comes from Nancy's CV. Anything still unknown is marked
 * with a TODO and left as a placeholder rather than guessed.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export const site = {
  name: "Nancy Bhardwaj",

  /** Short role for the header, tab title and OG card. */
  role: "AI Quality Engineering Lead",

  /** Full positioning line, used in the hero. */
  roleLong: "AI Quality Engineering Lead · Test Automation Architect",

  /** The hook, shown at display size in the hero. */
  tagline:
    "Engineering quality for AI agents, RAG systems and intelligent applications.",

  /** The supporting paragraph in the hero. */
  intro:
    "I don't just test AI responses. I test the reasoning, retrieval, tools, safety and outcomes behind them.",

  /**
   * Meta description for search and social cards — deliberately NOT the hero
   * copy. The hero is written to be read; this is written to be matched, and
   * carries the concrete terms a recruiter actually searches for. Those terms
   * are all still on the page, in Skills and Experience.
   */
  metaDescription:
    "AI Quality Engineering Lead with 14+ years in test automation. LLM and RAG evaluation (RAGAS, DeepEval, Promptfoo), AI agent behavior validation, AI red teaming, Salesforce Agentforce testing, Playwright, TypeScript, Python and CI/CD.",

  location: "Noida, India",

  // TODO: replace once the site is deployed — drives canonical URLs, sitemap
  // and Open Graph.
  url: "https://example.vercel.app",

  email: "er.nancybhardwaj@gmail.com",

  /** On the CV but deliberately not published: a phone number on a public page
   *  attracts recruiter spam and cannot be withdrawn once indexed. Set to a
   *  string to show it in the contact section. */
  phone: null as string | null,

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/nancybhardwaj89",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nancy-bhardwaj/",
      icon: "linkedin",
    },
  ] as SocialLink[],

  /** Path under /public. Set to null to hide the download button. */
  resumeHref: "/Nancy-Bhardwaj-CV.pdf" as string | null,

  /**
   * Portrait, as a path under /public.
   *
   * Safe to point at a file that doesn't exist yet: components/ui/Avatar.tsx
   * falls back to an initials monogram if the image fails to load, so a
   * missing file degrades to a designed state rather than a broken icon.
   */
  avatar: "/nancy.jpg" as string | null,

  /** Fallback for the avatar slot. */
  initials: "NB",

  /** Availability badge on the portrait. Set to null to hide it entirely. */
  availability: "Open to work" as string | null,

  /**
   * Credentials strip above the headline. Deliberately excludes the role —
   * it appears directly below in the accent line, and repeating it two
   * elements apart reads as a mistake.
   */
  eyebrow: ["14+ years in quality engineering", "Noida, India"],
} as const;

/** Home-page sections, in scroll order. Drives the nav and the scroll-spy. */
export const navItems = [
  { id: "architecture", label: "Architecture" },
  { id: "framework", label: "Framework" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Headline numbers for the stats band.
 *
 * Each one is traceable to a specific CV claim — no rounding up, no derived
 * figures. If a number can't be sourced, it doesn't belong here.
 */
/**
 * Labels are kept short deliberately — five of these sit in one row, and a
 * label that wraps to two lines unbalances the whole band. The fuller context
 * for each figure lives in the Experience section.
 */
export const stats = [
  { value: "14+", label: "Years in QA" },
  { value: "70%", label: "Regression time cut" },
  { value: "15", label: "Engineers led" },
  { value: "6+", label: "AI agents built" },
  { value: "∞", label: "Tests automated" },
] as const;
