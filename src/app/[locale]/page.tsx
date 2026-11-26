import { ExternalLink } from "@/components/external-link";
import { ProjectCard } from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/content";
import { getLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { projects, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);
  return createPageMetadata({
    locale,
    path: "",
    title: dict.meta.title,
    description: dict.meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col gap-6">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          {dict.home.title}
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="scroll-mt-32 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg text-pretty sm:text-xl">
            {dict.home.positioning}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ExternalLink
            href={siteConfig.linkedin}
            newTabLabel={dict.newTab}
            rel="me noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "min-h-11 px-4")}
          >
            {dict.contact.linkedinLabel}
          </ExternalLink>
          <ExternalLink
            href={siteConfig.github}
            newTabLabel={dict.newTab}
            rel="me noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-11 px-4",
            )}
          >
            {dict.contact.githubLabel}
          </ExternalLink>
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="selected-work">
        <h2 id="selected-work" className="text-xl font-semibold tracking-tight">
          {dict.home.workHeading}
        </h2>
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.slug}>
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
      </section>
    </div>
  );
}
