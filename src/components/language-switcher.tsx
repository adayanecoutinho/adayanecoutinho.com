"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { htmlLang, localizePath, locales, type Locale } from "@/lib/i18n";

const shortLabel: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

export function LanguageSwitcher({
  locale,
  label,
  names,
}: {
  locale: Locale;
  label: string;
  names: Record<Locale, string>;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={localizePath(pathname, item)}
            hrefLang={htmlLang[item]}
            lang={htmlLang[item]}
            aria-current={active ? "true" : undefined}
            aria-label={names[item]}
            className="inline-flex size-11 items-center justify-center rounded-md text-sm text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-[current=true]:font-medium aria-[current=true]:text-foreground"
          >
            {shortLabel[item]}
          </Link>
        );
      })}
    </nav>
  );
}
