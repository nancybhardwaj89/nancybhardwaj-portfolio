import { site } from "@/content/site";

/**
 * JSON-LD `Person` schema. Helps search engines associate the name, role and
 * profile links, which is what surfaces a knowledge-panel-style result.
 *
 * Placeholder social entries are filtered out — publishing «github url» as a
 * `sameAs` value would be worse than omitting the field.
 */
export function personSchema() {
  const sameAs = site.socials
    .map((social) => social.href)
    .filter((href) => href.startsWith("http"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      "AI Quality Engineering",
      "LLM Evaluation",
      "RAG Evaluation",
      "AI Agent Testing",
      "Test Automation",
      "Playwright",
      "Salesforce Agentforce Testing",
    ],
  };
}
