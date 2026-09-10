import type { Locale } from "./routes";

// Mirrors the live pricing/checkout links in the okosertekelesszuro
// (KlikkingAI) app itself — keep these in sync if that product's price
// ever changes (see MONTHLY_PRICE/ANNUAL_PRICE in that repo's app/page.tsx).
export const MONTHLY_PRICE = 9900;
export const ANNUAL_PRICE = 99900;

export const STRIPE_LINK_MONTHLY = "https://buy.stripe.com/00wcN60DYbFw2sx3ye0co04";
export const STRIPE_LINK_ANNUAL = "https://buy.stripe.com/fZu9AU2M6bFwgjnb0G0co02";

export const KLIKKING_AI_APP_URL = "https://okosertekelesszuro-blond.vercel.app";

export function formatFt(amount: number, locale: Locale): string {
  const separator = locale === "hu" ? " " : ",";
  return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
