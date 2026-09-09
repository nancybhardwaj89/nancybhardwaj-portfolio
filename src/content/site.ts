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
    "I test what happens when software starts thinking, deciding, and acting.",

  /** The supporting paragraph, and the meta description for search results. */
  intro:
    "I build quality systems for AI-powered software. With 14+ years of experience in Playwright, Selenium, CI/CD, and test automation, I specialize in LLM and RAG evaluation, agent behavior validation, security testing, observability, and Salesforce Agentforce quality engineering.",

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

  /** Short credentials strip above the headline. */
  eyebrow: ["AI Quality Engineering Lead", "14+ years", "India"],
} as const;

/** Home-page sections, in scroll order. Drives the nav and the scroll-spy. */
export const navItems = [
  { id: "skills", label: "Skills" },
  { id: "quality", label: "Quality" },
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
export const stats = [
  { value: "14+", label: "Years in quality engineering" },
  { value: "70%", label: "Regression execution time cut" },
  { value: "15", label: "Engineers led across time zones" },
  { value: "6+", label: "AI agents built" },
  { value: "∞", label: "Tests automated" },
] as const;
