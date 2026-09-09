import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { LOCALES, SITE_URL, isLocale, type Locale } from "@/lib/routes";
import { THEME_INIT_JS } from "@/lib/scripts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from "@/components/GTM";
import CookieConsent from "@/components/CookieConsent";
import SiteEffects from "@/components/SiteEffects";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={dict.htmlLang}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Klikking",
              url: SITE_URL,
              email: "info@klikking.hu",
              founder: { "@type": "Person", name: "Szilveszter" },
              areaServed: "HU",
              address: { "@type": "PostalAddress", addressCountry: "HU" },
              serviceType: [
                "Web Development",
                "WordPress Development",
                "SEO",
                "Digital Marketing",
                "Website Maintenance",
                "Website Security",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_JS}
        </Script>
        <a href="#main" className="skip-link">
          {locale === "hu" ? "Ugrás a tartalomra" : "Skip to content"}
        </a>
        <div className="grain" aria-hidden="true" />
        <Header dict={dict} locale={locale} />
        <main id="main">{children}</main>
        <Footer dict={dict} locale={locale} />
        <CookieConsent locale={locale} labels={dict.cookie} />
        <GTM />
        <SiteEffects />
      </body>
    </html>
  );
}
