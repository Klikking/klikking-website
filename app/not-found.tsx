// Root-level fallback, only reached when the [locale] segment itself is
// invalid (e.g. /xx/whatever) and the nested layout can't render its own
// <html> shell. Kept locale-agnostic and dependency-free on purpose.
export default function RootNotFound() {
  return (
    <html lang="hu">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1>404</h1>
        <p>Ez az oldal nem található. · This page can&apos;t be found.</p>
        <p>
          <a href="/hu">Magyar főoldal</a> · <a href="/en">English homepage</a>
        </p>
      </body>
    </html>
  );
}
