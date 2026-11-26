import { getDictionary } from "@/content";
import { getLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);
  return createPageMetadata({
    locale,
    path: "/about",
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <h1 className="scroll-mt-32 text-4xl font-semibold tracking-tight text-balance">
          {dict.about.heading}
        </h1>
      </header>
      <p className="max-w-2xl text-pretty leading-7">{dict.about.body}</p>
    </article>
  );
}
