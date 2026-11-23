import Link from "next/link";

import { TodoNote } from "@/components/todo-note";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/content";
import { getLocale, localePath } from "@/lib/i18n";
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
          <p className="max-w-2xl text-pretty text-muted-foreground">
            {dict.home.availability}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, "/projects")}
            className={cn(buttonVariants({ size: "lg" }), "min-h-11 px-4")}
          >
            {dict.home.projectsCta}
          </Link>
          <Link
            href={localePath(locale, "/contact")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-11 px-4",
            )}
          >
            {dict.home.contactCta}
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="selected-work">
        <h2 id="selected-work" className="text-xl font-semibold tracking-tight">
          {dict.home.workHeading}
        </h2>
        <TodoNote>{dict.home.workNote}</TodoNote>
        <ul className="flex flex-col">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`${localePath(locale, "/projects")}#${project.slug}`}
                className="inline-flex min-h-11 items-center rounded-sm underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
