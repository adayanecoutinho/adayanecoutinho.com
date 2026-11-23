import { ExternalLink } from "@/components/external-link";
import { TodoNote } from "@/components/todo-note";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/content";
import { getLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { textLinkClass } from "@/lib/styles";
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
    path: "/contact",
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const dict = getDictionary(locale);

  const methods = [
    {
      label: dict.contact.emailLabel,
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
      external: false,
    },
    {
      label: dict.contact.githubLabel,
      href: siteConfig.github,
      value: siteConfig.github,
      external: true,
    },
    {
      label: dict.contact.linkedinLabel,
      href: siteConfig.linkedin,
      value: siteConfig.linkedin,
      external: true,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="scroll-mt-32 text-4xl font-semibold tracking-tight text-balance">
          {dict.contact.heading}
        </h1>
        <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
          {dict.contact.lede}
        </p>
      </header>
      <ul className="flex flex-col gap-4">
        {methods.map((method) => (
          <li key={method.href}>
            <Card>
              <CardHeader>
                <CardTitle>{method.label}</CardTitle>
                <CardDescription>
                  {method.external ? (
                    <ExternalLink
                      href={method.href}
                      newTabLabel={dict.newTab}
                      rel="me noopener noreferrer"
                      className={cn(textLinkClass, "break-all")}
                    >
                      {method.value}
                    </ExternalLink>
                  ) : (
                    <a
                      className={cn(textLinkClass, "break-all")}
                      href={method.href}
                    >
                      {method.value}
                    </a>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
      <TodoNote>{dict.contact.todo}</TodoNote>
    </div>
  );
}
