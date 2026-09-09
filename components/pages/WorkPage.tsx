import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { pathFor, type Locale } from "@/lib/routes";

export default function WorkPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.work;
  return (
    <>
      <section
        className="section section--relative"
        style={{ paddingTop: "calc(76px + clamp(3rem,8vw,5rem))", paddingBottom: "clamp(2rem,5vw,3rem)" }}
      >
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a"></div>
          <div className="blob blob--c"></div>
        </div>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow reveal">{w.eyebrow}</p>
          <h1 className="mt-2 reveal">{w.h1}</h1>
          <p className="lede mt-2 reveal">{w.lede}</p>
        </div>
      </section>

      {w.cases.map((c, i) => (
        <section id={c.slug} className="section--tight hairline" key={c.slug}>
          <div className="wrap grid grid--2" style={{ alignItems: "center" }}>
            <div className="reveal tilt" style={{ order: i % 2 === 0 ? 2 : 1 }}>
              <div className="browser-frame">
                <div className="browser-frame__bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="browser-frame__url">{c.url}</span>
                </div>
                <div className="browser-frame__shot">
                  {c.image ? (
                    <Image src={c.image} alt={`${c.url} — ${c.title}`} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                  ) : (
                    <div className="shot-placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="14" rx="1.5" />
                        <path d="M3 16l5-4 3 3 4-5 6 6" />
                      </svg>
                      <span className="mono-label">Screenshot coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="reveal" style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <p className="mono-label">{c.url}</p>
              <h2 className="mt-1">{c.title}</h2>
              <p className="lede mt-2">{c.text}</p>
              <ul className="mt-2" style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {c.bullets.map((b) => (
                  <li className="small" key={b.label}>
                    <b>{b.label}:</b> {b.text}
                  </li>
                ))}
              </ul>
              <div className="mt-2" style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section--tight section--relative" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a" style={{ opacity: 0.5 }}></div>
          <div className="blob blob--b" style={{ opacity: 0.3 }}></div>
        </div>
        <div className="wrap center reveal" style={{ maxWidth: 640 }}>
          <h2 style={{ color: "var(--paper)" }}>{w.ctaTitle}</h2>
          <Link href={pathFor(locale, "contact")} className="btn magnetic mt-3" style={{ background: "var(--signal)", borderColor: "var(--signal)" }}>
            {w.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
