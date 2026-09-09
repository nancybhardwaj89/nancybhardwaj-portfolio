/**
 * Employment history, straight from the CV.
 *
 * Bullets are trimmed to what a reader will actually absorb — the full detail
 * lives on the CV itself. Nothing is added.
 */

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  /** Client or product names worked on in that role. */
  projects?: string[];
  highlights: string[];
}

export const roles: Role[] = [
  {
    title: "Team Lead",
    company: "QualityAI (Qualitest)",
    location: "Noida",
    period: "Aug 2021 — Present",
    projects: ["Baxter Credit Union", "Imperial Brands", "Genesys", "Keyloop"],
    highlights: [
      "Led distributed QA teams of up to 15 engineers across multiple time zones.",
      "Designed utterance-based test suites in Salesforce Agentforce Testing Center — authoring positive and negative utterances per topic to validate intent classification, action-sequence execution and response accuracy, using CSV batch testing and Topic/Action/Response pass-rate analysis to catch misrouting before production.",
      "Architected a Playwright + TypeScript automation framework on the Page Object Model, with Jenkins CI/CD for parallel execution.",
      "Led the initiative to set up Azure DevOps CI/CD pipelines with Newman, automating API test execution and reporting.",
      "Applied Playwright MCP for AI-assisted browser automation and natural-language-driven test execution.",
      "Automated Azure DevOps pipeline notifications via Power Automate, removing manual coordination.",
      "Delivered Salesforce quality across Sales Cloud (CRM & CPQ) and Service Cloud.",
    ],
  },
  {
    title: "Sr. Quality Analyst",
    company: "Classic Informatics",
    location: "Chandigarh",
    period: "Mar 2018 — Aug 2021",
    projects: ["360 Med Care", "Fair Go Finance"],
    highlights: [
      "REST API testing with Postman and Newman, including mock servers to simulate API interactions.",
      "Worked extensively on an established Java + Selenium framework following the Page Object Model.",
      "Responsive testing across BrowserStack, LambdaTest and Blisk.",
      "Managed version control with Git/GitHub, CI with Jenkins, and defect tracking in JIRA (Zephyr).",
    ],
  },
  {
    title: "QA Engineer",
    company: "Wolters Kluwer",
    location: "Chandigarh",
    period: "Oct 2015 — Mar 2018",
    projects: ["CCH iFirm"],
    highlights: [
      "Regression, integration, system and compatibility testing.",
      "Led client requirement-gathering sessions; the resulting analysis improvements contributed to a 25% increase in project success rate.",
    ],
  },
  {
    title: "Software Tester",
    company: "Xequre Solutions",
    location: "Chandigarh",
    period: "Nov 2011 — Sep 2015",
    projects: [
      "Youth Enrollment System",
      "Next Pawn",
      "Lone Star Realty",
      "Lewis Orthopedics",
    ],
    highlights: [
      "Began as a manual test engineer across four products in a Waterfall delivery model.",
      "Authored SRS documents, summary reports and user manuals for internal and external stakeholders.",
    ],
  },
];
