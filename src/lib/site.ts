export const siteConfig = {
  name: "Adayane Coutinho",
  url: "https://adayanecoutinho.com",
  email: "hello@adayanecoutinho.com",
  github: "https://github.com/adayanecoutinho",
  linkedin: "https://br.linkedin.com/in/adayane-coutinho-76b19631",
  lastModified: "2026-11-23",
} as const;

export const projects = [
  { slug: "personal-brain-mcp", name: "Personal Brain MCP" },
  { slug: "openmonetis", name: "OpenMonetis Open Finance" },
  { slug: "treino-evolucao", name: "Treino Evolução" },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
] as const;

export type RoutePath = (typeof routes)[number]["path"];
