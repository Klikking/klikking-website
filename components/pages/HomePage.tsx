import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, type Locale } from "@/lib/routes";

export default function HomePage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.home;
  return (
    <>
      <section
        className="section section--relative"
        style={{ paddingTop: "calc(76px + clamp(3rem,8vw,6rem))" }}
      >
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a"></div>
          <div className="blob blob--b"></div>
          <div className="blob blob--c"></div>
        </div>
        <div className="shape-field" aria-hidden="true">
          <div className="shape-wrap" style={{ top: "12%", left: "6%" }} data-parallax="0.05">
            <svg className="shape shape--float-a" width="46" height="46" viewBox="0 0 46 46">
              <circle cx="23" cy="23" r="19" fill="none" stroke="var(--signal)" strokeWidth="1.6" strokeDasharray="3 6" />
            </svg>
          </div>
          <div className="shape-wrap" style={{ top: "68%", left: "9%" }} data-parallax="0.09">
            <svg className="shape shape--float-b" width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="7" fill="var(--growth)" />
            </svg>
          </div>
          <div className="shape-wrap" style={{ top: "18%", right: "7%" }} data-parallax="0.07">
            <svg className="shape shape--float-c" width="28" height="28" viewBox="0 0 28 28">
              <rect x="4" y="4" width="20" height="20" fill="none" stroke="var(--amber)" strokeWidth="1.6" transform="rotate(45 14 14)" />
            </svg>
          </div>
          <div className="shape-wrap" style={{ top: "58%", right: "13%" }} data-parallax="0.04">
            <svg className="shape shape--float-a" width="20" height="20" viewBox="0 0 20 20">
              <line x1="10" y1="1" x2="10" y2="19" stroke="var(--ink-soft)" strokeWidth="1.6" />
              <line x1="1" y1="10" x2="19" y2="10" stroke="var(--ink-soft)" strokeWidth="1.6" />
            </svg>
          </div>
        </div>

        <div className="wrap grid grid--12" style={{ alignItems: "center", gap: "2rem" }}>
          <div className="hero-copy">
            <p className="eyebrow reveal">{h.eyebrow}</p>
            <h1 className="mt-2">
              {h.h1.map((word, i) => (
                <span
                  key={i}
                  className="stagger-word"
                  style={{ animationDelay: `${0.05 + i * 0.07}s`, marginRight: "0.28em" }}
                >
                  {word.emphasis ? <em>{word.text}</em> : word.text}
                </span>
              ))}
            </h1>
            <p className="lede mt-2 reveal">{h.lede}</p>
            <div className="mt-3 reveal" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href={pathFor(locale, "contact")} className="btn magnetic">
                {h.ctaPrimary}
              </Link>
              <Link href={pathFor(locale, "work")} className="link-arrow">
                {h.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="reveal" aria-hidden="true" style={{ position: "relative", aspectRatio: "1", maxWidth: 340, marginInline: "auto" }}>
              <svg viewBox="0 0 300 300" style={{ width: "100%", overflow: "visible" }}>
                <circle cx="150" cy="150" r="130" fill="none" stroke="var(--line)" strokeWidth="1" />
                <circle className="ring-spin-slow" cx="150" cy="150" r="92" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 8" />
                <circle className="ring-spin-rev" cx="150" cy="150" r="70" fill="none" stroke="var(--signal)" strokeWidth="1" strokeDasharray="1 5" opacity=".6" />
                <circle cx="150" cy="150" r="54" fill="none" stroke="var(--signal)" strokeWidth="1" />
                <line x1="150" y1="4" x2="150" y2="26" stroke="var(--ink-soft)" strokeWidth="1" />
                <line x1="150" y1="274" x2="150" y2="296" stroke="var(--ink-soft)" strokeWidth="1" />
                <line x1="4" y1="150" x2="26" y2="150" stroke="var(--ink-soft)" strokeWidth="1" />
                <line x1="274" y1="150" x2="296" y2="150" stroke="var(--ink-soft)" strokeWidth="1" />
                <circle className="pulse-dot" cx="150" cy="150" r="4" fill="var(--signal)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap grid grid--3">
          {h.stats.map((stat, i) => {
            const numeric = parseFloat(stat.value.replace(/[^\d.]/g, ""));
            const suffix = stat.value.replace(/^[\d.]+/, "");
            const isNumeric = !Number.isNaN(numeric) && /^[\d.]+/.test(stat.value);
            return (
              <div className="stat reveal" key={i}>
                {isNumeric ? (
                  <span className="stat-num" data-target={numeric} data-suffix={suffix}>
                    0{suffix}
                  </span>
                ) : (
                  <span className="stat-num">
                    <span className="unit">&lt;</span>24h
                  </span>
                )}
                <span className="stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap">
          <div className="grid grid--2" style={{ alignItems: "end", marginBottom: "2.5rem" }}>
            <h2 className="reveal">
              {h.capabilitiesTitleA}
              <em>{h.capabilitiesTitleB}</em>
              {h.capabilitiesTitleC}
            </h2>
            <p className="lede reveal">{h.capabilitiesLede}</p>
          </div>

          <div className="grid grid--2">
            {h.capabilities.map((cap) => (
              <div className="card bracket tilt reveal" key={cap.tag}>
                <span className="tag">{cap.tag}</span>
                <h3 className="mt-2">{cap.title}</h3>
                <p className="mt-1 small">{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2" style={{ alignItems: "end", marginBottom: "2.5rem" }}>
            <p className="eyebrow reveal">{h.workEyebrow}</p>
            <Link href={pathFor(locale, "work")} className="link-arrow reveal mx-auto" style={{ justifySelf: "end" }}>
              {h.workAll}
            </Link>
          </div>

          <div className="grid grid--2">
            {h.workCases.map((c) => (
              <Link
                key={c.slug}
                href={`${pathFor(locale, "work")}#${c.slug}`}
                className="card bracket tilt reveal"
                style={{ display: "block" }}
              >
                <p className="mono-label">{c.slug}</p>
                <h3 className="mt-1">{c.title}</h3>
                <p className="mt-1 small">{c.text}</p>
                <div className="mt-2" style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                  {c.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap grid grid--2" style={{ alignItems: "center" }}>
          <div className="reveal">
            <p className="eyebrow">{h.aboutEyebrow}</p>
            <h2 className="mt-2">
              {h.aboutTitleA}
              <em>{h.aboutTitleB}</em>
              {h.aboutTitleC}
            </h2>
          </div>
          <div className="reveal">
            <p className="lede">{h.aboutText}</p>
            <Link href={pathFor(locale, "about")} className="link-arrow mt-2" style={{ display: "inline-block" }}>
              {h.aboutLink}
            </Link>
          </div>
        </div>
      </section>

      <section className="section--tight section--relative" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a" style={{ opacity: 0.5 }}></div>
          <div className="blob blob--b" style={{ opacity: 0.3 }}></div>
        </div>
        <div className="wrap center reveal" style={{ maxWidth: 640 }}>
          <h2 style={{ color: "var(--paper)" }}>
            {h.ctaTitleA}
            <em style={{ color: "var(--signal)" }}>{h.ctaTitleB}</em>
            {h.ctaTitleC}
          </h2>
          <p className="mt-2" style={{ color: "var(--band-muted)" }}>
            {h.ctaText}
          </p>
          <Link href={pathFor(locale, "contact")} className="btn magnetic mt-3" style={{ background: "var(--signal)", borderColor: "var(--signal)" }}>
            {h.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
