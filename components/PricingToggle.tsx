"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import {
  ANNUAL_PRICE,
  KLIKKING_AI_APP_URL,
  MONTHLY_PRICE,
  STRIPE_LINK_ANNUAL,
  STRIPE_LINK_MONTHLY,
  formatFt,
} from "@/lib/pricing";
import type { Locale } from "@/lib/routes";

export default function PricingToggle({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const p = dict.aiAgents;

  const price = isAnnual ? ANNUAL_PRICE : MONTHLY_PRICE;
  const checkoutUrl = isAnnual ? STRIPE_LINK_ANNUAL : STRIPE_LINK_MONTHLY;
  const savings = MONTHLY_PRICE * 12 - ANNUAL_PRICE;
  const daily = Math.round(isAnnual ? ANNUAL_PRICE / 365 : MONTHLY_PRICE / 30);

  return (
    <div className="card reveal" style={{ maxWidth: 620, marginInline: "auto", borderColor: "var(--signal)", borderWidth: 2 }}>
      <div className="center" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "1.6rem" }}>
        <span className="mono-label" style={{ fontWeight: 600, color: isAnnual ? "var(--graphite)" : "var(--ink)" }}>
          {p.monthlyLabel}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isAnnual}
          aria-label={`${p.monthlyLabel} / ${p.annualLabel}`}
          onClick={() => setIsAnnual((v) => !v)}
          style={{
            width: 52,
            height: 28,
            borderRadius: 20,
            border: "1px solid var(--line-strong)",
            background: "var(--paper-dim)",
            position: "relative",
            padding: 3,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "var(--signal)",
              transform: isAnnual ? "translateX(24px)" : "translateX(0)",
              transition: "transform .2s var(--ease)",
            }}
          />
        </button>
        <span className="mono-label" style={{ fontWeight: 600, color: isAnnual ? "var(--ink)" : "var(--graphite)" }}>
          {p.annualLabel}{" "}
          <span style={{ color: "var(--growth)" }}>
            ({p.savingsLabel} {formatFt(savings, locale)} Ft)
          </span>
        </span>
      </div>

      <div className="center" style={{ marginBottom: "1.8rem" }}>
        <span className="stat-num" style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)" }}>
          {formatFt(price, locale)}
        </span>
        <span className="mono-label" style={{ fontSize: "1.1rem" }}>
          {" "}
          Ft / {isAnnual ? p.perYear : p.perMonth}
        </span>
        <div className="mt-1">
          <span className="tag" style={{ borderColor: "var(--growth)", color: "var(--growth)" }}>
            {p.dailyPrice.replace("{amount}", String(daily))}
          </span>
        </div>
        <p className="small mt-1">{p.dailyNote}</p>
      </div>

      <ul
        className="mt-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: ".8rem",
          marginBottom: "2rem",
        }}
      >
        {p.included.map((item) => (
          <li key={item} className="small" style={{ display: "flex", gap: ".5rem", alignItems: "flex-start" }}>
            <span aria-hidden="true" style={{ color: "var(--growth)", flex: "none" }}>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a href={checkoutUrl} className="btn magnetic" style={{ width: "100%", justifyContent: "center" }}>
        {p.ctaButton}
      </a>
      <p className="small center mt-2">
        {p.legalNote.pre}
        <a href={`${KLIKKING_AI_APP_URL}/terms`} className="link-arrow">
          {p.legalNote.terms}
        </a>
        {p.legalNote.mid}
        <a href={`${KLIKKING_AI_APP_URL}/privacy`} className="link-arrow">
          {p.legalNote.privacy}
        </a>
        {p.legalNote.post}
      </p>
    </div>
  );
}
