import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, type Locale } from "@/lib/routes";

const ICONS = [
  <svg key="dev" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <polyline points="24,16 10,32 24,48" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="40,16 54,32 40,48" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="3" fill="var(--signal)" />
  </svg>,
  <svg key="seo" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="30" cy="38" r="16" stroke="var(--line-strong)" strokeWidth="1.6" />
    <circle cx="30" cy="38" r="8" stroke="var(--ink)" strokeWidth="1.6" />
    <path d="M14 54 L30 38 L38 46 L54 14" stroke="var(--signal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 14 H54 V24" stroke="var(--signal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="ads" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="20" cy="44" r="3.5" fill="var(--signal)" />
    <path d="M26 38 A13 13 0 0 1 33 22" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M30 40 A21 21 0 0 1 42 12" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M34 44 A29 29 0 0 1 50 6" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>,
  <svg key="sec" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <path d="M32 8 L52 16 V32 C52 45 43 53 32 57 C21 53 12 45 12 32 V16 Z" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    <polyline points="23,32 29,39 43,23" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="build" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="26" cy="32" r="16" stroke="var(--line-strong)" strokeWidth="1.6" strokeDasharray="2 5" />
    <circle cx="40" cy="32" r="16" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="2 5" />
    <circle cx="33" cy="32" r="3" fill="var(--signal)" />
  </svg>,
  <svg key="content" className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <line x1="14" y1="18" x2="50" y2="18" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14" y1="30" x2="50" y2="30" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14" y1="42" x2="36" y2="42" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="42" y="38" width="8" height="8" fill="var(--signal)" />
  </svg>,
];

export default function ServicesPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const s = dict.services;
  return (
    <>
      <section
        className="section section--relative"
        style={{ paddingTop: "calc(76px + clamp(3rem,8vw,5rem))", paddingBottom: "clamp(2.5rem,6vw,4rem)" }}
      >
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a"></div>
          <div className="blob blob--c"></div>
        </div>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow reveal">{s.eyebrow}</p>
          <h1 className="mt-2 reveal">{s.h1}</h1>
          <p className="lede mt-2 reveal">{s.lede}</p>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap">
          {s.list.map((item, i) => (
            <div
              className="hairline reveal"
              key={item.tag}
              style={{ paddingBlock: "2.2rem", display: "grid", gridTemplateColumns: "56px 1fr", gap: "1.6rem" }}
            >
              {ICONS[i]}
              <div>
                <span className="tag">{item.tag}</span>
                <h3 className="mt-2">{item.title}</h3>
                <p className="small mt-1" style={{ maxWidth: "60ch" }}>
                  {item.text}
                </p>
                <div className="mt-2" style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                  {item.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow reveal">{s.processEyebrow}</p>
          <h2 className="mt-2 reveal" style={{ maxWidth: "16ch" }}>
            {s.processTitle}
          </h2>

          <div className="grid grid--2 mt-3">
            {s.steps.map((step, i) => (
              <div className="reveal" key={step.title} style={{ display: "flex", gap: "1.2rem" }}>
                <span className="mono-label" style={{ fontSize: "1.6rem", color: "var(--line-strong)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p className="small mt-1">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight section--relative" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a" style={{ opacity: 0.5 }}></div>
          <div className="blob blob--b" style={{ opacity: 0.3 }}></div>
        </div>
        <div className="wrap center reveal" style={{ maxWidth: 640 }}>
          <h2 style={{ color: "var(--paper)" }}>{s.ctaTitle}</h2>
          <p className="mt-2" style={{ color: "var(--band-muted)" }}>
            {s.ctaText}
          </p>
          <Link href={pathFor(locale, "contact")} className="btn magnetic mt-3" style={{ background: "var(--signal)", borderColor: "var(--signal)" }}>
            {s.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
