import type { Dictionary } from "@/content/types";

/**
 * English copy. Visible placeholders start with "TODO:".
 * Do not link private apps, and do not mention any domain other than
 * adayanecoutinho.com.
 */
export const en = {
  meta: {
    title: "AI Engineer",
    description:
      "Adayane Coutinho is an AI Engineer in Brazil, building practical LLM applications: MCP servers, RAG, agents, and data pipelines. Open to AI engineering and Forward Deployed Engineer roles, international first.",
    aboutTitle: "About",
    aboutDescription:
      "About Adayane Coutinho, an AI Engineer building practical LLM applications.",
    projectsTitle: "Projects",
    projectsDescription:
      "Selected work by Adayane Coutinho: Personal Brain MCP, OpenMonetis Open Finance, and Treino Evolução.",
    contactTitle: "Contact",
    contactDescription:
      "Contact Adayane Coutinho by email, GitHub, or LinkedIn.",
  },
  nav: {
    label: "Primary",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  language: {
    label: "Language",
    names: {
      en: "English",
      pt: "Português",
    },
  },
  theme: {
    label: "Toggle color theme",
  },
  skip: "Skip to content",
  newTab: "opens in a new tab",
  footer: {
    role: "AI Engineer",
  },
  home: {
    title: "AI Engineer",
    positioning:
      "I build practical LLM applications: MCP servers, RAG, agents, and data pipelines.",
    availability:
      "Open to AI engineering and Forward Deployed Engineer roles, international first.",
    projectsCta: "View projects",
    contactCta: "Get in touch",
    workHeading: "Selected work",
    workNote: "TODO: Replace these with short case studies.",
  },
  about: {
    heading: "About",
    lede: "A short introduction will live here.",
    body: "I am an AI engineer based in Brazil. I work on applied LLM systems: the pieces that connect models to tools, data, and real workflows.",
    todo: "TODO: Replace this placeholder with a concise bio, how you work with teams, and the roles you want. Keep every claim accurate and public.",
  },
  projects: {
    heading: "Projects",
    lede: "Selected work. The write-ups below are placeholders.",
    todo: "TODO: Turn each card into a short case study: problem, your role, and what shipped. Do not link private apps.",
    items: {
      "personal-brain-mcp": {
        summary: "A personal knowledge MCP server.",
        todo: "TODO: Describe what it connects, who it is for, and what is safe to show publicly.",
      },
      openmonetis: {
        summary: "Open Finance product work.",
        todo: "TODO: Describe the problem, your role, and the outcome. Do not link a private app.",
      },
      "treino-evolucao": {
        summary: "A training product.",
        todo: "TODO: Describe the problem, your role, and the outcome.",
      },
    },
  },
  contact: {
    heading: "Contact",
    lede: "Email is the best way to reach me.",
    todo: "TODO: Add timezone and what a useful first message includes, if you want that here. This static site has no contact form.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
} satisfies Dictionary;
