import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { alternateLinksFor, isLocale, LOCALES, type Locale } from "@/lib/routes";
import { notFound } from "next/navigation";
import HomePage from "@/components/pages/HomePage";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const alt = alternateLinksFor("home");

  const title =
    locale === "hu"
      ? "Klikking — Webfejlesztés, SEO és Marketing | Szilveszter"
      : "Klikking — Web Development, SEO & Marketing | Szilveszter";
  const description =
    locale === "hu"
      ? "Klikking: egyszemélyes webfejlesztő és marketing stúdió. Egyedi WordPress fejlesztés, SEO és hirdetéskezelés egy kézben."
      : "Klikking: a one-person web development and marketing studio. Custom WordPress development, SEO, and ad management, under one roof.";

  return {
    title,
    description,
    alternates: { canonical: alt[locale], languages: alt },
    openGraph: {
      title,
      description,
      url: alt[locale],
      siteName: "Klikking",
      locale: locale === "hu" ? "hu_HU" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  return <HomePage dict={dict} locale={locale} />;
}
