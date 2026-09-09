import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import {
  alternateLinksFor,
  isLocale,
  LOCALES,
  PAGE_KEYS,
  resolvePageKey,
  SLUGS,
  type Locale,
  type PageKey,
} from "@/lib/routes";
import { PAGE_SEO } from "@/lib/seo";
import ServicesPage from "@/components/pages/ServicesPage";
import WorkPage from "@/components/pages/WorkPage";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
import LegalPage from "@/components/pages/LegalPage";

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const key of PAGE_KEYS) {
      if (key === "home") continue;
      const slug = SLUGS[key][locale];
      if (slug) params.push({ locale, slug });
    }
  }
  return params;
}

function resolve(rawLocale: string, rawSlug: string): { locale: Locale; key: PageKey } | null {
  if (!isLocale(rawLocale)) return null;
  const key = resolvePageKey(rawLocale, [rawSlug]);
  if (!key || key === "home") return null;
  return { locale: rawLocale, key };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const resolved = resolve(rawLocale, slug);
  if (!resolved) return {};
  const { locale, key } = resolved;
  const seo = PAGE_SEO[key as Exclude<PageKey, "home">][locale];
  const alt = alternateLinksFor(key);

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: alt[locale], languages: alt },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: alt[locale],
      siteName: "Klikking",
      locale: locale === "hu" ? "hu_HU" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
    // The imprint/privacy copy still has bracketed placeholders for real
    // company data — keep them out of search results until that's filled in.
    ...(key === "privacy" || key === "imprint" ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const resolved = resolve(rawLocale, slug);
  if (!resolved) notFound();
  const { locale, key } = resolved;
  const dict = getDictionary(locale);

  switch (key) {
    case "services":
      return <ServicesPage dict={dict} locale={locale} />;
    case "work":
      return <WorkPage dict={dict} locale={locale} />;
    case "about":
      return <AboutPage dict={dict} locale={locale} />;
    case "contact":
      return <ContactPage dict={dict} />;
    case "privacy":
      return <LegalPage title={dict.legal.privacy.title} html={dict.legal.privacy.body} />;
    case "imprint":
      return <LegalPage title={dict.legal.imprint.title} html={dict.legal.imprint.body} />;
    default:
      notFound();
  }
}
