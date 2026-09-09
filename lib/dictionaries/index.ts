import type { Locale } from "@/lib/routes";
import type { Dictionary } from "./types";
import hu from "./hu";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { hu, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
