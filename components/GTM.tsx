"use client";

import { useEffect, useState } from "react";

const GTM_ID = "GTM-K4GRF3PV";
export const CONSENT_KEY = "klikking_consent";
export const CONSENT_EVENT = "klikking-consent-changed";

function hasConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

/**
 * Loads Google Tag Manager only after the visitor has granted cookie
 * consent (GDPR: measurement cookies must not be set beforehand).
 */
export default function GTM() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (hasConsent()) setLoaded(true);
    const onChange = () => {
      if (hasConsent()) setLoaded(true);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if ((window as unknown as { __gtmLoaded?: boolean }).__gtmLoaded) return;
    (window as unknown as { __gtmLoaded?: boolean }).__gtmLoaded = true;

    const w = window as unknown as { dataLayer: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, [loaded]);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
