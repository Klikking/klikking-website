import Link from "next/link";
import { LOCALES, pathFor, type Locale, type PageKey } from "@/lib/routes";

const LABELS: Record<Locale, string> = { hu: "HU", en: "EN" };

export default function LangSwitcher({
  locale,
  pageKey,
  groupLabel,
}: {
  locale: Locale;
  pageKey: PageKey;
  groupLabel: string;
}) {
  return (
    <div className="toggle-group" role="group" aria-label={groupLabel}>
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={pathFor(l, pageKey)}
            aria-current={active ? "true" : undefined}
            style={active ? { background: "var(--ink)", color: "var(--paper)" } : undefined}
            hrefLang={l}
          >
            {LABELS[l]}
          </Link>
        );
      })}
    </div>
  );
}
