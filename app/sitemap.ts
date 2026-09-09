import type { MetadataRoute } from "next";
import { LOCALES, PAGE_KEYS, SITE_URL, alternateLinksFor, pathFor } from "@/lib/routes";

const PRIORITY: Record<string, number> = {
  home: 1.0,
  services: 0.9,
  work: 0.9,
  contact: 0.8,
  about: 0.6,
  privacy: 0.1,
  imprint: 0.1,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const key of PAGE_KEYS) {
    // Placeholder legal pages are marked noindex — leave them out of the sitemap too.
    if (key === "privacy" || key === "imprint") continue;
    const alt = alternateLinksFor(key);
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}${pathFor(locale, key)}`,
        changeFrequency: key === "home" || key === "services" || key === "work" ? "monthly" : "yearly",
        priority: PRIORITY[key] ?? 0.5,
        alternates: { languages: alt },
      });
    }
  }

  return entries;
}
