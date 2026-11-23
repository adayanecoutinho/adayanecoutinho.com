# Adayane Coutinho

Personal site for Adayane Coutinho, an AI Engineer in Brazil. The audience is international hiring teams looking for AI engineering and Forward Deployed Engineer work. English is the primary language. Portuguese (Brazil) is included.

This repository is the week-1 skeleton: a static, bilingual Next.js site with a small design-system foundation. Visual design and final copy come later. Placeholder sections are marked in the UI and in the dictionaries with a `TODO:` prefix.

Canonical domain: [https://adayanecoutinho.com](https://adayanecoutinho.com).

## Stack

- [Next.js](https://nextjs.org) App Router, TypeScript, `output: 'export'`
- React 19
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) (Base UI, CSS variable tokens, light and dark)
- ESLint and Prettier
- Node.js 22 (see `.nvmrc`)

The build writes plain static files to `out/`. There is no server runtime, no API routes, and no middleware. Images are configured with `images.unoptimized` so `next/image` stays compatible with static export.

## Internationalization

Routes live under `src/app/[locale]` and are prerendered with `generateStaticParams`.

| Locale              | Path  | `lang`  |
| ------------------- | ----- | ------- |
| English (primary)   | `/en` | `en`    |
| Portuguese (Brazil) | `/pt` | `pt-BR` |

Copy is typed in `src/content/en.ts` and `src/content/pt.ts`. `/` is not a Next.js page. Static hosts send it to `/en` with `public/_redirects` (301) and `public/index.html` (meta refresh fallback). That avoids middleware and `next.config` redirects, which static export does not support.

Each page sets a canonical URL and `hreflang` alternates (`en`, `pt-BR`, `x-default`) for `https://adayanecoutinho.com`.

In local dev, open `/en` or `/pt`. The root redirect is applied by the static host after `npm run build`, not by the Next.js dev server.

## Scripts

```bash
npm install
npm run dev          # http://localhost:3000/en
npm run lint
npm run format:check
npm run format
npm run build        # writes ./out
```

Preview the export with any static file server, for example:

```bash
npx serve out
```

There is no `next start` script. This project does not run a Node server in production.

## Cloudflare Pages

Use a static deployment. Do not use the Next.js runtime / Workers preset. That preset expects a server adapter. This site is the `out/` directory only.

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | None            |
| Build command          | `npm run build` |
| Build output directory | `out`           |
| Root directory         | `/`             |
| Node.js version        | `22`            |
| Environment variables  | none            |

Node 22 is pinned in `.nvmrc` and `.node-version`. If the project settings do not read those files, set the environment variable `NODE_VERSION` to `22`.

Production branch is `main` after this skeleton is merged. No secrets and no `.env` file are required.

`public/_headers` adds a few static response headers (nosniff, referrer policy, frame denial, permissions policy). `public/_redirects` sends `/` to `/en`.

## Project layout

```text
src/app/[locale]/     pages: home, about, projects, contact
src/app/sitemap.ts    static sitemap.xml
src/app/robots.ts     static robots.txt
src/content/          en and pt dictionaries
src/components/ui/    shadcn Button and Card
src/lib/site.ts       name, public URLs, project names
public/               root redirect, 404, headers
```

Public contact details, and only these:

- Email: hello@adayanecoutinho.com
- GitHub: https://github.com/adayanecoutinho
- LinkedIn: https://www.linkedin.com/in/naihara-lucas-b8a098424/

## Still TODO

- Final visual design on top of the existing tokens
- About page bio
- Case studies for Personal Brain MCP, OpenMonetis Open Finance, and Treino Evolução
- Optional contact note (timezone, what to include in a first message)
- Do not link private apps

## License

[MIT](LICENSE) © 2026 Adayane Coutinho
