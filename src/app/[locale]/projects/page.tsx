import { ProjectCard } from "@/components/project-card";
import { getDictionary } from "@/content";
import { getLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);
  return createPageMetadata({
    locale,
    path: "/projects",
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="scroll-mt-32 text-4xl font-semibold tracking-tight text-balance">
          {dict.projects.heading}
        </h1>
        <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
          {dict.projects.lede}
        </p>
      </header>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.slug} className="scroll-mt-32">
            <ProjectCard
              id={project.slug}
              name={project.name}
              copy={dict.projects.items[project.slug]}
              labels={dict.projects.labels}
              newTabLabel={dict.newTab}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
