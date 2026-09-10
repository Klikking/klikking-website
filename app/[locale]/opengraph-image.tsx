import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/routes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Klikking";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAFAF8",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(61,79,255,0.16), transparent 55%), radial-gradient(circle at 8% 92%, rgba(15,169,104,0.14), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
            <path
              d="M6 4 L6 25 L11.2 20.2 L14.8 27.5 L18.4 25.8 L14.8 18.5 L21.8 18.5 Z"
              fill="#15151B"
            />
            <circle cx="23.5" cy="8.5" r="3.6" fill="#3D4FFF" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 700, color: "#15151B", letterSpacing: "-0.02em" }}>
            klikking
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 56, maxWidth: 920 }}>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#15151B", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            {dict.home.h1.map((w) => w.text).join(" ")}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            fontFamily: "monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6E6E78",
          }}
        >
          {dict.home.eyebrow}
        </div>
      </div>
    ),
    { ...size }
  );
}
