import type { ProjectSlug } from "@/lib/site";

export type ProjectLinks = { label: string; href: string }[];

export type ProjectCopy = {
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  links?: ProjectLinks;
};

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
    workHeading: string;
  };
  about: {
    heading: string;
    body: string;
  };
  projects: {
    heading: string;
    lede: string;
    labels: {
      problem: string;
      solution: string;
      result: string;
      stack: string;
    };
    items: Record<ProjectSlug, ProjectCopy>;
  };
  contact: {
    heading: string;
    lede: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
};
