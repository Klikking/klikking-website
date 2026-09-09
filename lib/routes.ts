export const LOCALES = ["hu", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "hu";

export const SITE_URL = "https://klikking.hu";

export const PAGE_KEYS = [
  "home",
  "services",
  "work",
  "about",
  "contact",
  "privacy",
  "imprint",
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

/** Per-locale slugs. Empty string = root of that locale. */
export const SLUGS: Record<PageKey, Record<Locale, string>> = {
  home: { hu: "", en: "" },
  services: { hu: "szolgaltatasok", en: "services" },
  work: { hu: "munkaim", en: "work" },
  about: { hu: "rolam", en: "about" },
  contact: { hu: "kapcsolat", en: "contact" },
  privacy: { hu: "adatvedelem", en: "privacy-policy" },
  imprint: { hu: "impresszum", en: "imprint" },
};

export function pathFor(locale: Locale, key: PageKey): string {
  const slug = SLUGS[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function resolvePageKey(locale: Locale, slugParts: string[] | undefined): PageKey | null {
  const slug = slugParts && slugParts.length > 0 ? slugParts.join("/") : "";
  if (slug === "") return "home";
  const entry = (Object.entries(SLUGS) as [PageKey, Record<Locale, string>][]).find(
    ([, byLocale]) => byLocale[locale] === slug
  );
  return entry ? entry[0] : null;
}

export function alternateLinksFor(key: PageKey): Record<Locale | "x-default", string> {
  return {
    hu: `${SITE_URL}${pathFor("hu", key)}`,
    en: `${SITE_URL}${pathFor("en", key)}`,
    "x-default": `${SITE_URL}${pathFor(DEFAULT_LOCALE, key)}`,
  };
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
