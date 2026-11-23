import type { ProjectSlug } from "@/lib/site";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    label: string;
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  language: {
    label: string;
    names: Record<"en" | "pt", string>;
  };
  theme: {
    label: string;
  };
  skip: string;
  newTab: string;
  footer: {
    role: string;
  };
  home: {
    title: string;
    positioning: string;
    availability: string;
    projectsCta: string;
    contactCta: string;
    workHeading: string;
    workNote: string;
  };
  about: {
    heading: string;
    lede: string;
    body: string;
    todo: string;
  };
  projects: {
    heading: string;
    lede: string;
    todo: string;
    items: Record<ProjectSlug, { summary: string; todo: string }>;
  };
  contact: {
    heading: string;
    lede: string;
    todo: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
};
