"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, resolvePageKey, type Locale, type PageKey } from "@/lib/routes";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";

const NAV_ITEMS: { key: PageKey; label: (d: Dictionary) => string }[] = [
  { key: "home", label: (d) => d.nav.home },
  { key: "services", label: (d) => d.nav.services },
  { key: "aiAgents", label: (d) => d.nav.aiAgents },
  { key: "work", label: (d) => d.nav.work },
  { key: "about", label: (d) => d.nav.about },
  { key: "contact", label: (d) => d.nav.contact },
];

export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pageKey = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean).slice(1); // drop the locale segment
    return resolvePageKey(locale, parts);
  }, [pathname, locale]);

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <Link href={pathFor(locale, "home")} className="brand" aria-label={dict.nav.home}>
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M6 4 L6 25 L11.2 20.2 L14.8 27.5 L18.4 25.8 L14.8 18.5 L21.8 18.5 Z"
              fill="var(--ink)"
            />
            <circle cx="23.5" cy="8.5" r="3.6" fill="var(--signal)" />
          </svg>
          <b>klikking</b>
        </Link>

        <nav className="nav__links" aria-label={dict.nav.menu}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={pathFor(locale, item.key)}
              aria-current={pageKey === item.key ? "page" : undefined}
            >
              {item.label(dict)}
            </Link>
          ))}
        </nav>

        <div className="nav__right">
          <ThemeToggle labels={dict.themeToggle} />
          <LangSwitcher locale={locale} pageKey={pageKey ?? "home"} groupLabel={dict.langToggle.group} />
          <Link href={pathFor(locale, "contact")} className="nav__cta">
            {dict.nav.quote}
          </Link>
          <button
            type="button"
            className="nav__burger"
            aria-label={dict.nav.menu}
            aria-expanded={open}
            aria-controls="nav-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div id="nav-mobile" className="nav__mobile" data-open={open} style={{ display: open ? "block" : "none" }}>
        <ul style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={pathFor(locale, item.key)}
                className="mono-label"
                aria-current={pageKey === item.key ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label(dict)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
