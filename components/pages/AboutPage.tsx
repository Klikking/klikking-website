import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, type Locale } from "@/lib/routes";

export default function AboutPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const a = dict.about;
  return (
    <>
      <section className="section section--relative" style={{ paddingTop: "calc(76px + clamp(3rem,8vw,5rem))" }}>
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a"></div>
          <div className="blob blob--c"></div>
        </div>
        <div className="shape-field" aria-hidden="true">
          <div className="shape-wrap" style={{ top: "16%", left: "8%" }} data-parallax="0.06">
            <svg className="shape shape--float-b" width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="var(--amber)" />
            </svg>
          </div>
          <div className="shape-wrap" style={{ top: "72%", right: "8%" }} data-parallax="0.08">
            <svg className="shape shape--float-a" width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="17" fill="none" stroke="var(--growth)" strokeWidth="1.6" strokeDasharray="2 6" />
            </svg>
          </div>
        </div>
        <div className="wrap grid grid--2" style={{ alignItems: "center" }}>
          <div className="reveal">
            <p className="eyebrow">{a.eyebrow}</p>
            <h1 className="mt-2">{a.h1}</h1>
            <p className="lede mt-2">{a.lede}</p>
          </div>
          <div className="reveal" aria-hidden="true">
            <svg viewBox="0 0 300 300" style={{ width: "100%", maxWidth: 320, marginInline: "auto" }}>
              <rect x="0" y="0" width="300" height="300" fill="var(--paper-dim)" />
              <circle cx="150" cy="120" r="54" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
              <path d="M70 250 Q150 170 230 250" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
              <circle cx="150" cy="120" r="54" fill="none" stroke="var(--signal)" strokeWidth="1.4" strokeDasharray="4 8">
                <animateTransform attributeName="transform" type="rotate" from="0 150 120" to="360 150 120" dur="18s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap grid grid--2">
          <p className="eyebrow reveal">{a.storyEyebrow}</p>
          <div className="reveal">
            {a.storyParagraphs.map((p, i) => (
              <p className={`lede${i > 0 ? " mt-2" : ""}`} key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow reveal">{a.principlesEyebrow}</p>
          <div className="grid grid--2 mt-3">
            {a.principles.map((p) => (
              <div className="card bracket tilt reveal" key={p.title}>
                <h3>{p.title}</h3>
                <p className="small mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap grid grid--2">
          <p className="eyebrow reveal">{a.toolboxEyebrow}</p>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
            {a.toolbox.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
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
          <h2 style={{ color: "var(--paper)" }}>{a.ctaTitle}</h2>
          <Link href={pathFor(locale, "contact")} className="btn magnetic mt-3" style={{ background: "var(--signal)", borderColor: "var(--signal)" }}>
            {a.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
