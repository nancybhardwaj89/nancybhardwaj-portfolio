/**
 * Site-wide identity, navigation and SEO defaults.
 *
 * ⚠️ PLACEHOLDER CONTENT — anything wrapped in «guillemets» is a stand-in
 * awaiting Nancy's CV and project notes. Nothing here is invented biography:
 * placeholders are deliberately obvious so they cannot ship unnoticed.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** Icon key resolved by components/ui/Icon.tsx */
  icon: "github" | "linkedin" | "email";
}

export const site = {
  /** Derived from the account email — confirm the preferred display spelling. */
  name: "Nancy Bhardwaj",
  role: "«QA / Test Automation Engineer»",
  tagline: "«One-line positioning statement — pending CV»",

  /** Used for canonical URLs, sitemap and Open Graph. Update after deploy. */
  url: "https://example.vercel.app",

  email: "«email to display — confirm»",

  socials: [
    { label: "GitHub", href: "«github url»", icon: "github" },
    { label: "LinkedIn", href: "«linkedin url»", icon: "linkedin" },
  ] as SocialLink[],

  /** Set to a path under /public once a CV PDF is supplied, or null to hide. */
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
