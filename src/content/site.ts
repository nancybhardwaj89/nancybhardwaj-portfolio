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

  tagline:
    "14+ years in quality engineering, now building and testing the AI agents, RAG pipelines and LLM systems that ship to production.",

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

  /** Set to a path under /public once a CV PDF is added, or null to hide. */
  resumeHref: null as string | null,
} as const;

/** Home-page sections, in scroll order. Drives the nav and the scroll-spy. */
export const navItems = [
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
export const stats = [
  { value: "14+", label: "Years in quality engineering" },
  { value: "15", label: "Engineers led across time zones" },
  { value: "70%", label: "Regression execution time cut" },
  { value: "8+", label: "Engineers mentored" },
] as const;
