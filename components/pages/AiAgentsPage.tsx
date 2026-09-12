import type { Dictionary } from "@/lib/dictionaries";
import { KLIKKING_AI_APP_URL, MONTHLY_PRICE } from "@/lib/pricing";
import { pathFor, type Locale } from "@/lib/routes";
import PricingToggle from "@/components/PricingToggle";

export default function AiAgentsPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.aiAgents;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "KlikkingAI",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `https://klikking.hu${pathFor(locale, "aiAgents")}`,
            description: p.lede,
            offers: {
              "@type": "Offer",
              price: MONTHLY_PRICE,
              priceCurrency: "HUF",
              url: KLIKKING_AI_APP_URL,
            },
            provider: { "@type": "Organization", name: "Klikking" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <section
        className="section section--relative"
        style={{ paddingTop: "calc(76px + clamp(3rem,8vw,5rem))", paddingBottom: "clamp(2rem,5vw,3rem)" }}
      >
        <div className="blob-field" aria-hidden="true">
          <div className="blob blob--a"></div>
          <div className="blob blob--b"></div>
        </div>
        <div className="wrap center" style={{ maxWidth: 780 }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>
            {p.eyebrow}
          </p>
          <span className="tag reveal mt-2" style={{ borderColor: "var(--signal)", color: "var(--signal-ink)" }}>
            {p.badge}
          </span>
          <h1 className="mt-2 reveal">{p.h1}</h1>
          <p className="lede mx-auto mt-2 reveal">{p.lede}</p>
          <div className="mt-3 reveal" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#arak" className="btn magnetic">
              {p.ctaPrimary}
            </a>
            <a href="/blog" className="link-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
              Blog
            </a>
            <a href={KLIKKING_AI_APP_URL} className="link-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
              {p.ctaLogin} →
            </a>
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap">
          <h2 className="reveal center mx-auto" style={{ marginBottom: "2.5rem" }}>
            {p.howItWorksTitle}
          </h2>
          <div className="grid grid--3">
            {p.steps.map((step, i) => (
              <div className="card reveal" key={step.title}>
                <span
                  className="mono-label"
                  style={{
                    display: "inline-flex",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--signal)",
                    color: "var(--paper)",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p className="small mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight hairline">
        <div className="wrap">
          <h2 className="reveal center mx-auto">{p.featuresTitle}</h2>
          <p className="lede reveal center mx-auto mt-1" style={{ marginBottom: "2.5rem" }}>
            {p.featuresLede}
          </p>
          <div className="grid grid--3">
            {p.features.map((f) => (
              <div className="card bracket tilt reveal" key={f.title}>
                <h3 style={{ fontSize: "1.15rem" }}>{f.title}</h3>
                <p className="small mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="arak" className="section hairline">
        <div className="wrap center" style={{ maxWidth: 700 }}>
          <h2 className="reveal">{p.pricingTitle}</h2>
          <p className="lede mx-auto mt-2 reveal" style={{ marginBottom: "2.5rem" }}>
            {p.pricingLede}
          </p>
        </div>
        <PricingToggle dict={dict} locale={locale} />
      </section>

      <section className="section--tight hairline">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 className="reveal">{p.faqTitle}</h2>
          <div className="mt-3" style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            {p.faq.map((item) => (
              <div className="reveal" key={item.q}>
                <h3 style={{ fontSize: "1.1rem" }}>{item.q}</h3>
                <p className="small mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
