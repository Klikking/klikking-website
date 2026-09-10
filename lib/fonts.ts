import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";

// Self-hosted via next/font: removes the render-blocking
// fonts.googleapis.com request (the single biggest performance win found
// in a Lighthouse audit — ~2.8s of render-blocking time) and Next bakes
// in size-adjusted fallback metrics to avoid layout shift on swap.
// latin-ext is required, not optional: Hungarian ő/ű (U+0150/0151/0170/0171)
// live outside the base "latin" subset.

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
