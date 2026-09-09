export default function LegalPage({ title, html }: { title: string; html: string }) {
  return (
    <section className="section" style={{ paddingTop: "calc(76px + clamp(2.5rem,6vw,4rem))" }}>
      <div className="wrap">
        <h1 className="reveal">{title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="legal-body mt-3 reveal" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}
