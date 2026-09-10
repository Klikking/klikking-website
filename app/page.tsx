import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "@/lib/routes";

/**
 * Real fallback for "/" in case the proxy/middleware locale redirect
 * doesn't run on a given platform (some hosts lag behind the newest
 * Next.js edge conventions) — this Server Component redirect always
 * works because it's a normal route, not an edge function.
 */
export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  let locale: Locale = DEFAULT_LOCALE;
  const first = acceptLanguage.split(",")[0]?.toLowerCase() ?? "";
  if (first.startsWith("en")) locale = "en";
  redirect(`/${locale}`);
}
