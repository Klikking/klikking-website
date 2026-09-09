"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { pathFor, isLocale, DEFAULT_LOCALE } from "@/lib/routes";

export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/")[1];
  const locale = isLocale(first) ? first : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <section className="section center" style={{ paddingTop: "calc(76px + clamp(3rem,10vw,6rem))" }}>
      <div className="wrap">
        <h1>{dict.notFound.title}</h1>
        <p className="lede mx-auto mt-2">{dict.notFound.text}</p>
        <Link href={pathFor(locale, "home")} className="btn magnetic mt-3">
          {dict.notFound.button}
        </Link>
      </div>
    </section>
  );
}
