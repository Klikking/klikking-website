import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/routes";

const LOCALE_COOKIE = "klikking_locale";

function detectLocale(req: NextRequest): Locale {
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale;
  }
  const acceptLanguage = req.headers.get("accept-language") ?? "";
  if (/^en\b/i.test(acceptLanguage) || acceptLanguage.toLowerCase().includes("en-")) {
    // Only prefer English if Hungarian isn't also present with equal/higher weight.
    if (!/hu/i.test(acceptLanguage.split(",")[0] ?? "")) return "en";
  }
  return DEFAULT_LOCALE;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    const res = NextResponse.redirect(url);
    res.cookies.set(LOCALE_COOKIE, locale, { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return res;
  }

  const first = pathname.split("/")[1];
  if (first === "hu" || first === "en") {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, first, { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon|images|legal|.*\\..*).*)"],
};
