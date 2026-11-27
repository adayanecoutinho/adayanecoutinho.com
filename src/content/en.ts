import type { Dictionary } from "@/content/types";

/**
 * English copy.
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
    title: "AI Engineer | Forward Deployed Engineer | Senior Software Engineer",
    positioning:
      "I build practical LLM systems that plug into real workflows, and I can sit with a customer to make them work in production.",
    workHeading: "Selected work",
  },
  about: {
    heading: "About",
    body: "Senior Software Engineer with 15 years in backend and cloud: Java, Spring Boot, Kafka and AWS, most recently on high-volume credit systems in the financial sector. Now focused on applied AI: MCP servers, agents and LLM workflows that run inside real systems, with guardrails and production ownership. Open to Forward Deployed Engineer and applied-AI roles with international teams, remote.",
  },
  projects: {
    heading: "Projects",
    lede: "Selected work.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      stack: "Stack",
    },
    items: {
      "personal-brain-mcp": {
        problem:
          "My AI assistants don't share a trusted memory, and their answers don't show where they came from.",
        solution:
          "A personal memory service exposed over MCP. Health records come first; other domains, like training methodology, live side by side, and each client only sees the domains it was granted. Every answer cites its source, and anything an AI extracts stays pending until I confirm it. The public demo uses fictional data only.",
        result:
          "Phase 1 of 4 complete: real records running on my server with off-site backups. Retrieval evaluation on every push: 23/23 gating cases on the public set, 17/17 on the private set with real data, 0 scope violations. 58 tests and 14 architecture decision records.",
        stack: ["Python", "MCP", "SQLite FTS5", "Git"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/adayanecoutinho/personal-brain",
          },
        ],
      },
      openmonetis: {
        problem:
          "Tracking my finances by hand, typing or photographing card invoices, was slow and error-prone.",
        solution:
          "I extended OpenMonetis, an open-source self-hosted finance app by Felipe Coutinho, with an installment import API, a read-only snapshot API and Open Finance card sync via Pluggy. The sync runs as a dry-run by default and never deletes manual entries. Claude agents read invoices and act as a financial advisor, always asking before they write.",
        result:
          "In production on my own server since June 2026: 1,246 entries, 462 of them synced from Open Finance across 60 sync runs.",
        stack: [
          "TypeScript",
          "Next.js",
          "PostgreSQL",
          "Drizzle",
          "Pluggy",
          "Claude",
          "Docker",
        ],
      },
      "treino-evolucao": {
        problem:
          "My training data lived in three places (Hevy, Strava and my notes), with no consistent weekly feedback.",
        solution:
          "An idempotent Python ETL loads everything into PostgreSQL, with monitoring and an independent verification step. A Claude-based coach reads the weekly reports under explicit guardrails: no diagnosis, and every rule cites its source.",
        result:
          "152 workouts, 3,031 sets and 101 cardio sessions migrated with matching counts, running on my server with health-check alerts.",
        stack: ["Python", "PostgreSQL", "Docker", "Claude"],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/adayanecoutinho/training-tracker",
          },
        ],
      },
    },
  },
  contact: {
    heading: "Contact",
    lede: "Email is the best way to reach me.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
} satisfies Dictionary;
