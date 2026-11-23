import type { MetadataRoute } from "next";

import { localePath, locales } from "@/lib/i18n";
import { routes, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => {
      const url = new URL(localePath(locale, route.path), siteConfig.url).href;
      return {
        url,
        lastModified: siteConfig.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            en: new URL(localePath("en", route.path), siteConfig.url).href,
            "pt-BR": new URL(localePath("pt", route.path), siteConfig.url).href,
            "x-default": new URL(localePath("en", route.path), siteConfig.url)
              .href,
          },
        },
      };
    }),
  );
}
