"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pathFor, type Locale } from "@/lib/routes";
import { CONSENT_KEY, CONSENT_EVENT } from "./GTM";

export default function CookieConsent({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { message: string; accept: string; reject: string; manage: string };
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // storage unavailable — skip the banner rather than block the page
    }
  }, []);

  function decide(value: "granted" | "denied") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={labels.manage} aria-live="polite">
      <p>
        {labels.message}{" "}
        <Link href={pathFor(locale, "privacy")} className="link-arrow">
          {labels.manage}
        </Link>
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--ghost" onClick={() => decide("denied")}>
          {labels.reject}
        </button>
        <button type="button" className="btn" onClick={() => decide("granted")}>
          {labels.accept}
        </button>
      </div>
    </div>
  );
}
