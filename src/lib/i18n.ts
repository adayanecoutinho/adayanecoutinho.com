import { notFound } from "next/navigation";

/**
 * Locales are static paths under `app/[locale]`.
 * English is primary at `/en`. `/` redirects with `public/index.html` and
 * `public/_redirects`, because `output: 'export'` cannot use middleware
 * or `redirects` in next.config.
 */
export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, "en" | "pt-BR"> = {
  en: "en",
  pt: "pt-BR",
};

export const ogLocale: Record<Locale, "en_US" | "pt_BR"> = {
  en: "en_US",
  pt: "pt_BR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = ""): string {
  const suffix = path === "" || path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${suffix}`;
}

export function localizePath(pathname: string, locale: Locale): string {
  const [pathAndQuery, hash = ""] = pathname.split("#");
  const hashSuffix = hash ? `#${hash}` : "";
  const segments = pathAndQuery.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `${localePath(locale)}${hashSuffix}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = locale;
    return `/${segments.join("/")}${hashSuffix}`;
  }

  return `${localePath(locale, `/${segments.join("/")}`)}${hashSuffix}`;
}

export async function getLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
