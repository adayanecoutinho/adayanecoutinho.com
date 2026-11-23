import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Dictionary } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const items = [
    { href: localePath(locale), label: dict.nav.home },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/projects"), label: dict.nav.projects },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={localePath(locale)}
            className="rounded-sm text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-1">
            <LanguageSwitcher
              locale={locale}
              label={dict.language.label}
              names={dict.language.names}
            />
            <ThemeToggle label={dict.theme.label} />
          </div>
        </div>
        <SiteNav label={dict.nav.label} items={items} />
      </div>
    </header>
  );
}
