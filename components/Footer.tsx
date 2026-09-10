import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, type Locale } from "@/lib/routes";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer hairline">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="brand" style={{ marginBottom: "1rem" }}>
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 24, height: 24 }}>
                <path
                  d="M6 4 L6 25 L11.2 20.2 L14.8 27.5 L18.4 25.8 L14.8 18.5 L21.8 18.5 Z"
                  fill="var(--ink)"
                />
                <circle cx="23.5" cy="8.5" r="3.6" fill="var(--signal)" />
              </svg>
              <b>klikking</b>
            </div>
            <p className="small">{dict.footer.tagline}</p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h2>{dict.footer.navHeading}</h2>
              <Link href={pathFor(locale, "services")}>{dict.nav.services}</Link>
              <Link href={pathFor(locale, "aiAgents")}>{dict.nav.aiAgents}</Link>
              <Link href={pathFor(locale, "work")}>{dict.nav.work}</Link>
              <Link href={pathFor(locale, "about")}>{dict.nav.about}</Link>
              <Link href={pathFor(locale, "contact")}>{dict.nav.contact}</Link>
            </div>
            <div className="footer__col">
              <h2>{dict.footer.contactHeading}</h2>
              <a href="mailto:info@klikking.hu">info@klikking.hu</a>
              <a href="https://klikking.hu">klikking.hu</a>
            </div>
            <div className="footer__col">
              <h2>{dict.footer.basedHeading}</h2>
              <p>{dict.footer.basedIn}</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} Klikking — Szilveszter
          </span>
          <span style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <Link href={pathFor(locale, "imprint")}>{dict.footer.imprint}</Link>
            <Link href={pathFor(locale, "privacy")}>{dict.footer.privacy}</Link>
          </span>
          <span>{dict.footer.designedLine}</span>
        </div>
      </div>
    </footer>
  );
}
