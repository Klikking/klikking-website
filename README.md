# Klikking — website

Next.js (App Router) rebuild of klikking.hu. Bilingual (`/hu`, `/en`) with
real per-locale URLs and `hreflang` tags, a Resend-backed contact form, a
consent-gated Google Tag Manager, and a shared design system ported from
the previous static build.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/hu` or `/en` based on
your browser language.

## Before this goes live

1. **Legal pages have placeholder data.** `/hu/impresszum`, `/hu/adatvedelem`
   (and their `/en` equivalents) contain bracketed placeholders —
   `[Cégnév]`, `[adószám]`, etc. — for real company name, registered
   address, tax number, and hosting provider. Edit
   `lib/dictionaries/hu.ts` and `lib/dictionaries/en.ts` (`legal.imprint`,
   `legal.privacy`) with the real details, then remove the
   `robots: { index: false }` override in
   `app/[locale]/[slug]/page.tsx` for those two pages so they get indexed.
2. **Two case-study screenshots are missing** (inkreturn.com,
   vagyhangolo.hu) — `components/pages/WorkPage.tsx` shows a placeholder
   box for any case with `image: null` in the dictionaries. Drop real
   screenshots into `public/images/work/` and update the `image` path in
   both dictionaries.
3. **Verify the klikking.hu domain in Resend** (resend.com → Domains) so
   `CONTACT_FROM_EMAIL` can send as `@klikking.hu` instead of the default
   `onboarding@resend.dev` sandbox address.
4. **Set `RESEND_API_KEY`** in Vercel project settings (Production +
   Preview) — the contact form's `/api/contact` route fails closed
   without it.

## Architecture notes

- **i18n**: `lib/routes.ts` maps each page to a distinct slug per locale
  (`/hu/szolgaltatasok` vs `/en/services`) rather than a client-side
  toggle — this is what makes bilingual SEO actually work (separate
  indexable URLs + `hreflang` alternates in every page's metadata).
  `middleware.ts` redirects `/` to the visitor's preferred locale once,
  then remembers it in a cookie.
- **Content**: all copy lives in `lib/dictionaries/hu.ts` / `en.ts`,
  typed against `lib/dictionaries/types.ts`. Add a new string there, not
  inline in a component.
- **Contact form**: `components/ContactForm.tsx` posts JSON to
  `app/api/contact/route.ts`, which emails `info@klikking.hu` via Resend.
  Includes a honeypot field and a basic per-IP rate limit.
- **Cookies/GTM**: `components/GTM.tsx` only injects the Google Tag
  Manager script after `components/CookieConsent.tsx` records consent in
  `localStorage` — no measurement cookies are set beforehand.
- **Legacy URLs**: `next.config.ts` 301-redirects the old WordPress site's
  indexed, locale-less URLs (`/szolgaltatasok`, `/munkaim`, `/rolam`,
  `/kapcsolat`, `/home`) to their `/hu/...` equivalents, preserving
  existing search-engine link equity.

## Deployment

Deploy on Vercel (same GitHub org as the other Klikking projects):

```bash
vercel link
vercel env add RESEND_API_KEY
vercel --prod
```

Then point the `klikking.hu` DNS at Vercel (Project Settings → Domains).
