import type { Dictionary } from "@/lib/dictionaries";
import ContactForm from "@/components/ContactForm";

export default function ContactPage({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  return (
    <section className="section section--relative" style={{ paddingTop: "calc(76px + clamp(3rem,8vw,5rem))" }}>
      <div className="blob-field" aria-hidden="true">
        <div className="blob blob--a"></div>
        <div className="blob blob--c"></div>
      </div>
      <div className="wrap grid grid--2" style={{ alignItems: "start", gap: "3rem" }}>
        <div className="reveal">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-2">
            {c.h1.map((word, i) => (
              <span key={i} className="stagger-word" style={{ animationDelay: `${0.05 + i * 0.07}s`, marginRight: "0.28em" }}>
                {word.emphasis ? <em>{word.text}</em> : word.text}
              </span>
            ))}
          </h1>
          <p className="lede mt-2">{c.lede}</p>

          <div className="mt-3" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href={`mailto:${c.email}`} className="link-arrow" style={{ width: "fit-content" }}>
              {c.email}
            </a>
            <p className="mono-label">{c.basedLabel}</p>
            <p className="mono-label">{c.responseLabel}</p>
          </div>
        </div>

        <ContactForm dict={dict} />
      </div>
    </section>
  );
}
