import { en } from "@/content/en";
import { pt } from "@/content/pt";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
