import type { PageKey, Locale } from "./routes";

export const PAGE_SEO: Record<Exclude<PageKey, "home">, Record<Locale, { title: string; description: string }>> = {
  services: {
    hu: {
      title: "Szolgáltatások — Klikking | Webfejlesztés, SEO, Marketing",
      description:
        "Webfejlesztés, WooCommerce, technikai SEO, Meta és Google hirdetéskezelés, karbantartás és biztonság — egy kézben, a Klikking-nél.",
    },
    en: {
      title: "Services — Klikking | Web Development, SEO, Marketing",
      description:
        "Web development, WooCommerce, technical SEO, Meta & Google ad management, maintenance and security — all under one roof at Klikking.",
    },
  },
  aiAgents: {
    hu: {
      title: "AI Ügynökök — KlikkingAI | Google-értékelés kezelő helyi vállalkozásoknak",
      description:
        "KlikkingAI: AI ügynök, ami válaszol a Google-értékeléseidre, kiszűri a panaszokat, mielőtt nyilvánossá válnának, és figyeli a helyi kereshetőségedet. 9 900 Ft/hó.",
    },
    en: {
      title: "AI Agents — KlikkingAI | Google review management for local businesses",
      description:
        "KlikkingAI: an AI agent that replies to your Google reviews, catches complaints before they go public, and tracks your local search visibility. From 9,900 Ft/mo.",
    },
  },
  work: {
    hu: {
      title: "Munkáim — Klikking | Referenciák és esettanulmányok",
      description:
        "Válogatott projektek: edzőterem-hálózat, B2B/B2C webshop, egészségügyi platform és zártkörű közösségi portál fejlesztése.",
    },
    en: {
      title: "Work — Klikking | Case studies and references",
      description:
        "Selected projects: a nationwide gym network, a B2B/B2C webshop, a healthcare platform, and a members-only community portal.",
    },
  },
  about: {
    hu: {
      title: "Rólam — Klikking | Szilveszter, fejlesztő és marketinges",
      description:
        "Szilveszter vagyok, informatikus végzettséggel — fejlesztőként és marketingesként dolgozom a Klikking név alatt.",
    },
    en: {
      title: "About — Klikking | Szilveszter, developer and marketer",
      description:
        "I'm Szilveszter, an IT graduate working as both a developer and a marketer under the name Klikking.",
    },
  },
  contact: {
    hu: {
      title: "Kapcsolat — Klikking",
      description: "Vedd fel velem a kapcsolatot: info@klikking.hu — 24 órán belül válaszolok.",
    },
    en: {
      title: "Contact — Klikking",
      description: "Get in touch: info@klikking.hu — I reply within 24 hours.",
    },
  },
  privacy: {
    hu: {
      title: "Adatvédelem — Klikking",
      description: "A klikking.hu weboldal adatvédelmi tájékoztatója.",
    },
    en: {
      title: "Privacy Policy — Klikking",
      description: "The privacy policy for the klikking.hu website.",
    },
  },
  imprint: {
    hu: {
      title: "Impresszum — Klikking",
      description: "A klikking.hu weboldal üzemeltetőjének impresszuma.",
    },
    en: {
      title: "Imprint — Klikking",
      description: "Legal notice for the operator of klikking.hu.",
    },
  },
};
