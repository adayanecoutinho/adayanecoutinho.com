import { TodoNote } from "@/components/todo-note";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <TodoNote>{dict.projects.todo}</TodoNote>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => {
          const copy = dict.projects.items[project.slug];
          return (
            <li key={project.slug} id={project.slug} className="scroll-mt-32">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h2 className="text-base leading-snug font-medium">
                      {project.name}
                    </h2>
                  </CardTitle>
                  <CardDescription>{copy.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <TodoNote>{copy.todo}</TodoNote>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
