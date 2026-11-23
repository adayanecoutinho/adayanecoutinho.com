import type { Dictionary } from "@/content/types";

/**
 * Portuguese (Brazil) copy. Visible placeholders start with "TODO:".
 * Não linkar apps privados e não citar outro domínio além de adayanecoutinho.com.
 */
export const pt = {
  meta: {
    title: "Engenheira de IA",
    description:
      "Adayane Coutinho é engenheira de IA no Brasil e constrói aplicações práticas de LLM: servidores MCP, RAG, agentes e pipelines de dados. Aberta a vagas de engenharia de IA e Forward Deployed Engineer, com prioridade internacional.",
    aboutTitle: "Sobre",
    aboutDescription:
      "Sobre Adayane Coutinho, engenheira de IA focada em aplicações práticas de LLM.",
    projectsTitle: "Projetos",
    projectsDescription:
      "Trabalhos de Adayane Coutinho: Personal Brain MCP, OpenMonetis Open Finance e Treino Evolução.",
    contactTitle: "Contato",
    contactDescription:
      "Fale com Adayane Coutinho por e-mail, GitHub ou LinkedIn.",
  },
  nav: {
    label: "Principal",
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
  language: {
    label: "Idioma",
    names: {
      en: "English",
      pt: "Português",
    },
  },
  theme: {
    label: "Alternar tema de cor",
  },
  skip: "Ir para o conteúdo",
  newTab: "abre em uma nova aba",
  footer: {
    role: "Engenheira de IA",
  },
  home: {
    title: "Engenheira de IA",
    positioning:
      "Construo aplicações práticas de LLM: servidores MCP, RAG, agentes e pipelines de dados.",
    availability:
      "Aberta a vagas de engenharia de IA e Forward Deployed Engineer, com prioridade internacional.",
    projectsCta: "Ver projetos",
    contactCta: "Entrar em contato",
    workHeading: "Trabalhos",
    workNote: "TODO: Substituir por estudos de caso curtos.",
  },
  about: {
    heading: "Sobre",
    lede: "Uma apresentação curta vai ficar aqui.",
    body: "Sou engenheira de IA no Brasil. Trabalho com sistemas de LLM aplicados: as peças que ligam modelos a ferramentas, dados e fluxos reais.",
    todo: "TODO: Substituir este placeholder por uma bio curta, como você trabalha com times e as vagas que busca. Manter só o que for verdadeiro e público.",
  },
  projects: {
    heading: "Projetos",
    lede: "Trabalhos selecionados. Os textos abaixo são placeholders.",
    todo: "TODO: Transformar cada card em um estudo de caso curto: problema, seu papel e o que foi entregue. Não linkar apps privados.",
    items: {
      "personal-brain-mcp": {
        summary: "Um servidor MCP de conhecimento pessoal.",
        todo: "TODO: Descrever o que conecta, para quem é e o que pode ser público.",
      },
      openmonetis: {
        summary: "Trabalho em produto de Open Finance.",
        todo: "TODO: Descrever o problema, seu papel e o resultado. Não linkar app privado.",
      },
      "treino-evolucao": {
        summary: "Um produto de treino.",
        todo: "TODO: Descrever o problema, seu papel e o resultado.",
      },
    },
  },
  contact: {
    heading: "Contato",
    lede: "O caminho mais direto é o e-mail.",
    todo: "TODO: Incluir fuso horário e o que ajuda numa primeira mensagem, se quiser. Este site estático não tem formulário.",
    emailLabel: "E-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
} satisfies Dictionary;
