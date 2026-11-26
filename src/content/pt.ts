import type { Dictionary } from "@/content/types";

/**
 * Portuguese (Brazil) copy.
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
    title: "AI Engineer | Forward Deployed Engineer | Senior Software Engineer",
    positioning:
      "Construo sistemas práticos de LLM que entram no fluxo real de trabalho, e sei sentar com o cliente para fazê-los funcionar em produção.",
    workHeading: "Trabalhos",
  },
  about: {
    heading: "Sobre",
    body: "Senior Software Engineer com 15 anos em backend e cloud: Java, Spring Boot, Kafka e AWS, mais recentemente em sistemas de crédito de alto volume no setor financeiro. Hoje com foco em IA aplicada: servidores MCP, agentes e fluxos com LLM que rodam dentro de sistemas reais, com guardrails e responsabilidade pela produção. Aberta a vagas de Forward Deployed Engineer e de IA aplicada com times internacionais, remotas.",
  },
  projects: {
    heading: "Projetos",
    lede: "Trabalhos selecionados.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
      stack: "Stack",
    },
    items: {
      "personal-brain-mcp": {
        problem:
          "Meus assistentes de IA não compartilham uma memória confiável, e as respostas não mostram de onde vieram.",
        solution:
          "Um serviço de memória pessoal exposto por MCP, começando pelo histórico de saúde. Cada resposta cita a fonte, e o que uma IA extrai fica pendente até eu confirmar. A demonstração pública usa só dados fictícios.",
        result:
          "Fase 1 de 4. O servidor MCP só de leitura está público no GitHub, com 25 testes, CI com varredura de segredos e 10 registros de decisão de arquitetura (ADRs).",
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
          "Controlar minhas finanças à mão, digitando ou fotografando faturas de cartão, era lento e sujeito a erro.",
        solution:
          "Estendi o OpenMonetis, um app open source e self-hosted de finanças criado por Felipe Coutinho, com uma API de importação de parcelas, uma API de snapshot só de leitura e a sincronização de cartões pelo Open Finance (Pluggy). O sync roda em modo de prévia por padrão e nunca apaga lançamentos manuais. Agentes Claude leem faturas e atuam como assessor financeiro, sempre pedindo confirmação antes de gravar.",
        result:
          "Em produção no meu servidor desde junho de 2026: 1.246 lançamentos, 462 deles sincronizados pelo Open Finance em 60 execuções.",
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
          "Meus dados de treino estavam em três lugares (Hevy, Strava e minhas notas), sem um retorno semanal consistente.",
        solution:
          "Um ETL idempotente em Python carrega tudo no PostgreSQL, com monitoramento e uma verificação independente. Um coach baseado no Claude lê os relatórios semanais com guardrails explícitos: não faz diagnóstico, e cada regra cita a fonte.",
        result:
          "152 treinos, 3.031 séries e 101 sessões de cardio migrados com contagens iguais, rodando no meu servidor com alertas de monitoramento.",
        stack: ["Python", "PostgreSQL", "Docker", "Claude"],
      },
    },
  },
  contact: {
    heading: "Contato",
    lede: "O caminho mais direto é o e-mail.",
    emailLabel: "E-mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
} satisfies Dictionary;
