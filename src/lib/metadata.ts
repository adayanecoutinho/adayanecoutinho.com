import type { Metadata } from "next";

import { getDictionary } from "@/content";
import { localePath, ogLocale, type Locale } from "@/lib/i18n";
import { siteConfig, type RoutePath } from "@/lib/site";

type PageMetadataInput = {
  locale: Locale;
  path: RoutePath;
  title: string;
  description: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = localePath(locale, path);
  const homeTitle = `${siteConfig.name} — ${title}`;
  const pageTitle = `${title} — ${siteConfig.name}`;
  const resolvedTitle = absoluteTitle ? homeTitle : pageTitle;
  const image = {
    url: `${localePath(locale)}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: resolvedTitle,
  };

  return {
    title: absoluteTitle ? { absolute: homeTitle } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: localePath("en", path),
        "pt-BR": localePath("pt", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: [locale === "en" ? ogLocale.pt : ogLocale.en],
      // Home already emits this image from `opengraph-image.tsx`.
      ...(path === "" ? {} : { images: [image] }),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image.url],
    },
  };
}

export function rootMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${dict.meta.title}`,
      template: `%s — ${siteConfig.name}`,
    },
    description: dict.meta.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    robots: { index: true, follow: true },
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      alternateLocale: [locale === "en" ? ogLocale.pt : ogLocale.en],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
