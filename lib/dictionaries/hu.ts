import type { Dictionary } from "./types";

const hu: Dictionary = {
  htmlLang: "hu",
  nav: {
    home: "Főoldal",
    services: "Szolgáltatások",
    work: "Munkáim",
    about: "Rólam",
    contact: "Kapcsolat",
    quote: "Ajánlatkérés",
    menu: "Menü",
  },
  themeToggle: { light: "Világos mód", dark: "Sötét mód", group: "Világos / sötét mód" },
  langToggle: { group: "Nyelv váltó", switchTo: "Switch to English" },
  footer: {
    tagline:
      "Webfejlesztés és online marketing egy kézben — Szilveszter, Klikking. Fejlesztő szemmel, marketinges fejjel.",
    navHeading: "Navigáció",
    contactHeading: "Kapcsolat",
    basedHeading: "Székhely",
    basedIn: "Magyarország",
    designedLine: "Tervezve és fejlesztve saját kódból.",
    imprint: "Impresszum",
    privacy: "Adatvédelem",
  },
  cookie: {
    message:
      "Sütiket használunk a látogatottság méréséhez (Google Tag Manager). A méréshez szükséges sütiket csak a hozzájárulásod után töltjük be.",
    accept: "Elfogadom",
    reject: "Csak a szükségesek",
    manage: "Adatvédelem",
  },
  home: {
    eyebrow: "WEBFEJLESZTÉS · SEO · MARKETING",
    h1: [
      { text: "Egy" },
      { text: "kattintás", emphasis: true },
      { text: "választja" },
      { text: "el a" },
      { text: "látogatót" },
      { text: "az" },
      { text: "ügyféltől." },
    ],
    lede: "Klikking néven fejlesztek, optimalizálok és hirdetek — egy emberként, aki mindkét oldalt érti: a kódot és a megtérülést.",
    ctaPrimary: "Kérj ajánlatot",
    ctaSecondary: "Nézd meg a munkáimat →",
    stats: [
      { value: "1200+", label: "termék biztonságosan kezelve" },
      { value: "4", label: "különböző iparág kiszolgálva" },
      { value: "<24h", label: "átlagos válaszidő megkeresésre" },
    ],
    capabilitiesEyebrow: "NÉGY KÉPESSÉG, EGY EMBER",
    capabilitiesTitleA: "Négy képesség, ",
    capabilitiesTitleB: "egy",
    capabilitiesTitleC: " ember.",
    capabilitiesLede:
      "Nincs átadás fejlesztő és marketinges között — a stratégia és a kód ugyanabból a fejből jön.",
    capabilities: [
      {
        tag: "DEV",
        title: "Fejlesztés",
        text: "Egyedi WordPress és WooCommerce rendszerek, amik gyorsak, biztonságosak, és a saját kezed alatt formálhatók.",
      },
      {
        tag: "SEO",
        title: "Keresőoptimalizálás",
        text: "Technikai SEO-alapoktól a tartalomstratégiáig: úgy épül az oldal, hogy a Google is szeresse.",
      },
      {
        tag: "ADS",
        title: "Marketing",
        text: "Meta és Google hirdetések, amik nem csak kattintást, hanem ügyfelet hoznak.",
      },
      {
        tag: "SEC",
        title: "Karbantartás & Biztonság",
        text: "Proaktív felügyelet és hardening, hogy sose egy hiba miatt kelljen felébredned.",
      },
    ],
    workEyebrow: "VÁLOGATOTT MUNKÁK",
    workAll: "Az összes munka →",
    workCases: [
      {
        slug: "fitness5",
        title: "Országos edzőterem-hálózat",
        text: "Magyarország egyik legnagyobb edzőterem-hálózatának teljes körű digitális üzemeltetése és növekedési támogatása.",
        tags: ["Ads", "WP Maintenance", "Security"],
      },
      {
        slug: "inkreturn",
        title: "B2B/B2C kereskedelmi rendszer",
        text: "Bonyolult architektúrájú, fordított webshop logikára épülő kereskedelmi rendszer kiépítése.",
        tags: ["WooCommerce", "Custom PHP", "UI/UX"],
      },
    ],
    aboutEyebrow: "RÓLAM",
    aboutTitleA: "Egyszemélyes stúdió, ",
    aboutTitleB: "ügynökségi",
    aboutTitleC: " tudással.",
    aboutText:
      "Szilveszter vagyok — informatikus végzettséggel, fejlesztőként és marketingesként dolgozom nap mint nap, és minden nap egy kicsit jobb szeretnék lenni. A Klikking nem különböző szakemberek csapata: egyetlen ember, aki érti a kódot és a konverziót is.",
    aboutLink: "Tudj meg többet →",
    ctaTitleA: "Készen állsz az első ",
    ctaTitleB: "kattintásra",
    ctaTitleC: "?",
    ctaText: "Írj pár sort a projektedről — 24 órán belül válaszolok.",
    ctaButton: "Kapcsolatfelvétel",
  },
  services: {
    eyebrow: "SZOLGÁLTATÁSOK",
    h1: "Mindent, amit egy ügynökség tudna — egy emberben.",
    lede: "Fejlesztés, SEO, hirdetéskezelés, karbantartás és tartalom — külön-külön vagy egy csomagban, attól függően, mire van szükséged.",
    list: [
      {
        tag: "DEV",
        title: "Webfejlesztés",
        text: "Egyedi WordPress és WooCommerce fejlesztés, teljesítmény-optimalizálás, API-integrációk — olyan alapokra építve, ami bírja a terhelést és a jövőbeli bővítést is.",
        tags: ["WordPress", "WooCommerce", "Custom PHP", "API"],
      },
      {
        tag: "SEO",
        title: "Keresőoptimalizálás",
        text: "Technikai SEO-audit, kulcsszó-stratégia, tartalomoptimalizálás és helyi keresőoptimalizálás — mérhető, hosszú távú organikus növekedésért.",
        tags: ["Technical SEO", "Content", "Local SEO"],
      },
      {
        tag: "ADS",
        title: "Marketing & hirdetéskezelés",
        text: "Meta és Google Ads stratégia, kampánykezelés és konverzióoptimalizálás — a cél mindig a megtérülés, nem csak a forgalom.",
        tags: ["Meta Ads", "Google Ads", "CRO"],
      },
      {
        tag: "SEC",
        title: "Karbantartás & biztonság",
        text: "Proaktív technikai felügyelet, malware-védelem és biztonsági hardening — hogy egy oldal se álljon meg éjszaka.",
        tags: ["Monitoring", "Hardening", "Backups"],
      },
      {
        tag: "BUILD",
        title: "Egyedi fejlesztés",
        text: "Komplex PHP/Hooks rendszerek, automatizációk, előfizetéses és zártkörű platformok — ott, ahol egy sablon-megoldás már nem elég.",
        tags: ["Automation", "Subscriptions", "Custom Hooks"],
      },
      {
        tag: "CONTENT",
        title: "Tartalom & márkaépítés",
        text: "Blogmotorok, szakmai tartalomstratégia és konverzióra optimalizált szövegezés — ami bizalmat épít, nem csak feltölti az oldalt.",
        tags: ["Blog", "Strategy", "Copywriting"],
      },
    ],
    processEyebrow: "HOGYAN DOLGOZOM",
    processTitle: "Négy lépés a tervtől az eredményig.",
    steps: [
      {
        title: "Egyeztetés & audit",
        text: "Átnézem a jelenlegi oldalt, a célokat és a versenytársakat — pontos kiindulási pontot kapunk.",
      },
      {
        title: "Terv & ajánlat",
        text: "Konkrét terv, határidőkkel és árazással — nincs meglepetés útközben.",
      },
      {
        title: "Fejlesztés & optimalizálás",
        text: "Kódolás, tesztelés, SEO-alapok lerakása — folyamatos egyeztetéssel.",
      },
      {
        title: "Indulás & növekedés",
        text: "Élesítés után jön a mérés, a hirdetés és a folyamatos finomhangolás.",
      },
    ],
    ctaTitle: "Melyik szolgáltatás kellene neked?",
    ctaText: "Írj pár sort — segítek eldönteni, mire van igazán szükséged.",
    ctaButton: "Kapcsolatfelvétel",
  },
  work: {
    eyebrow: "MUNKÁIM",
    h1: "Négy projekt, négy különböző probléma.",
    lede: "Edzőterem-hálózattól a zártkörű közösségi portálig — mindegyik más kihívást adott, más megoldással.",
    cases: [
      {
        slug: "fitness5",
        url: "fitness5.hu",
        title: "Országos edzőterem-hálózat",
        text: "Magyarország egyik legnagyobb edzőterem-hálózatának teljes körű digitális üzemeltetése és növekedési támogatása.",
        bullets: [
          { label: "Marketing", text: "Stratégiai Meta és Google hirdetéskezelés" },
          { label: "Karbantartás", text: "Proaktív WordPress technikai felügyelet" },
          { label: "Biztonság", text: "Szigorú malware-védelem és biztonsági hardening" },
          { label: "Dev Core", text: "Egyedi fejlesztések és teljesítmény-optimalizálás" },
        ],
        tags: ["Ads", "WP Maintenance", "Security", "Performance"],
        image: "/images/work/fitness5.jpg",
      },
      {
        slug: "inkreturn",
        url: "inkreturn.com",
        title: "B2B/B2C kereskedelmi rendszer",
        text: "Bonyolult architektúrájú, fordított webshop logikára épülő kereskedelmi rendszer kiépítése.",
        bullets: [
          { label: "WooCommerce", text: "Egyedi, fordított vásárlási folyamat" },
          { label: "Kódolás", text: "Teljesen egyedi PHP / Hooks motor és funkciók" },
          { label: "Adatbázis", text: "1200+ komplex termék biztonságos, gyors kezelése" },
          { label: "UI/UX", text: "Nemzetközi tech-fókuszú, tűpontos felület" },
        ],
        tags: ["WooCommerce", "Custom PHP", "1200+ SKUs", "UI/UX"],
        image: null,
      },
      {
        slug: "rebusadiatetikus",
        url: "rebusadiatetikus.hu",
        title: "Egészségügyi személyes márka",
        text: "Magas konverziós rátájú, személyes márkaépítésre és automatizált ügyfélszerzésre kihegyezett egészségügyi platform.",
        bullets: [
          { label: "Konverzió", text: "UX-kutatásra épített, meggyőző felépítés" },
          { label: "Automatizáció", text: "Integrált, azonnali időpontfoglaló rendszer" },
          { label: "SEO Setup", text: "Kulcsszó-stratégia és technikai keresőoptimalizálás" },
          { label: "Content", text: "Organikus forgalmat terelő szakmai blog motor" },
        ],
        tags: ["CRO", "Booking", "SEO", "Content"],
        image: "/images/work/rebusadiatetikus.webp",
      },
      {
        slug: "vagyhangolo",
        url: "vagyhangolo.hu",
        title: "Zártkörű közösségi & oktató portál",
        text: "Zárt körű tagsági rendszerre épülő, egyedi funkciókkal és saját kártyajátékkal felszerelt online közösségi és oktató portál.",
        bullets: [
          { label: "Előfizetés", text: "Ismétlődő fizetési modell WooCommerce Subscriptions alapon" },
          { label: "Média", text: "Védett, belső videó portál és prémium tanfolyamkezelő" },
          { label: "Közösség", text: "Integrált zártkörű fórum és szakmai blog" },
          { label: "Custom Dev", text: "Egyedi tervezésű és lefejlesztett online kártyajáték" },
        ],
        tags: ["Subscriptions", "Video Portal", "Community", "Custom Game"],
        image: null,
      },
    ],
    ctaTitle: "A következő projekt a tiéd lehet.",
    ctaButton: "Kapcsolatfelvétel",
  },
  about: {
    eyebrow: "RÓLAM",
    h1: "Szilveszter vagyok. A Klikking mögött egy ember áll.",
    lede: "Informatikus végzettséggel, fejlesztőként és marketingesként dolgozom — és minden nap igyekszem egy kicsit jobb lenni abban, amit csinálok.",
    storyEyebrow: "A TÖRTÉNET",
    storyParagraphs: [
      "A legtöbb cég két külön csapattól kér weboldalt és marketinget — az egyik megépíti, a másik hirdeti, és a kettő között elveszik a kontextus. A Klikking ezt a szakadékot szünteti meg: a fejlesztő és a marketinges ugyanaz az ember, ugyanazzal a céllal a fejében a projekt minden pillanatában.",
      "Informatikus háttérrel kezdtem, és azóta is folyamatosan tanulok — új keretrendszerek, új hirdetési platformok, új SEO-algoritmusok. A cél mindig ugyanaz: olyan oldalt adni, ami nemcsak szépen néz ki, hanem tényleg hoz ügyfeleket.",
    ],
    principlesEyebrow: "AMIBEN HISZEK",
    principles: [
      {
        title: "Egy felelős, nem öt",
        text: 'Ha elakad valami, tudod, kihez fordulj. Nincs "ez a fejlesztő hibája, ez a marketinges hibája" ping-pong.',
      },
      {
        title: "A kód szolgálja a célt",
        text: "Egy weboldal nem műalkotás — egy eszköz. Minden technikai döntést az üzleti célhoz mérek.",
      },
      {
        title: "Folyamatos tanulás",
        text: "A web és a keresőmotorok folyamatosan változnak — ami tavaly működött, ma már nem biztos. Ezért fejlesztem magam nap mint nap.",
      },
      {
        title: "Mérhető eredmény",
        text: "Forgalom, konverzió, bevétel — a munkám eredményét számokban is meg tudod nézni, nem csak érzésben.",
      },
    ],
    toolboxEyebrow: "ESZKÖZTÁR",
    toolbox: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Hooks",
      "JavaScript",
      "Next.js",
      "Google Ads",
      "Meta Ads",
      "Technical SEO",
      "Analytics",
      "Security Hardening",
      "Content Strategy",
    ],
    ctaTitle: "Dolgozzunk együtt.",
    ctaButton: "Kapcsolatfelvétel",
  },
  contact: {
    eyebrow: "KAPCSOLAT",
    h1: [
      { text: "Írj" },
      { text: "pár" },
      { text: "sort" },
      { text: "—" },
      { text: "onnan", emphasis: true },
      { text: "indulunk.", emphasis: true },
    ],
    lede: "Mesélj a projektről: mit szeretnél elérni, mi a jelenlegi helyzet, és mikorra lenne szükséged rá. 24 órán belül válaszolok.",
    email: "info@klikking.hu",
    basedLabel: "Székhely: Magyarország",
    responseLabel: "Válaszidő: < 24 óra",
    form: {
      honeypotLabel: "Ne töltsd ki:",
      name: "Név",
      email: "Email",
      website: "Weboldal (ha van)",
      message: "Miben segíthetek?",
      submit: "Üzenet küldése",
      submitting: "Küldés...",
      success: "Köszönöm — 24 órán belül válaszolok.",
      error: "Hiba történt — kérlek írj közvetlenül az info@klikking.hu címre.",
      required: "Kérlek töltsd ki a kötelező mezőket.",
    },
  },
  legal: {
    imprint: {
      title: "Impresszum",
      body: `
<p><strong>[Cégnév / Egyéni vállalkozó neve — töltsd ki]</strong></p>
<p>Székhely: [cím]</p>
<p>Adószám: [adószám]</p>
<p>Nyilvántartási szám: [nyilvántartási szám]</p>
<p>Nyilvántartó hatóság: [pl. Budapest Főváros Kormányhivatala]</p>
<p>Email: info@klikking.hu</p>
<p>Tárhelyszolgáltató: [tárhelyszolgáltató neve és címe]</p>
<p style="margin-top:1.5rem;"><em>Ez az oldal jelenleg helyőrző adatokat tartalmaz — a tényleges cégadatokkal a közzététel előtt frissítendő.</em></p>
      `.trim(),
    },
    privacy: {
      title: "Adatvédelmi tájékoztató",
      body: `
<p>Jelen tájékoztató a klikking.hu weboldal használata során kezelt személyes adatokról nyújt tájékoztatást, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) és az információs önrendelkezési jogról szóló 2011. évi CXII. törvény alapján.</p>
<h3>Adatkezelő</h3>
<p>[Cégnév / Egyéni vállalkozó neve], [cím], info@klikking.hu</p>
<h3>Milyen adatokat kezelünk</h3>
<p>A kapcsolatfelvételi űrlap kitöltésekor megadott nevet, email címet, opcionálisan weboldal-címet és a beküldött üzenet tartalmát kizárólag a megkeresés megválaszolása céljából kezeljük, a válaszadást követő ésszerű ideig.</p>
<h3>Sütik (cookie-k)</h3>
<p>Az oldal a Google Tag Manager segítségével mérheti a látogatottságot. Mérési célú sütiket kizárólag a látogató kifejezett hozzájárulása után töltünk be, a sütikezelő sávban adott jóváhagyást követően. A hozzájárulás bármikor visszavonható a böngésző beállításaiban vagy a helyi tárolt adatok törlésével.</p>
<h3>Jogok</h3>
<p>Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és tiltakozhat az ilyen személyes adatok kezelése ellen. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, naih.hu) lehet élni.</p>
<p style="margin-top:1.5rem;"><em>Ez az oldal jelenleg helyőrző adatokat tartalmaz — a tényleges cégadatokkal a közzététel előtt frissítendő.</em></p>
      `.trim(),
    },
  },
  notFound: {
    title: "Ez az oldal nem található.",
    text: "A keresett oldal nem létezik, vagy elköltözött.",
    button: "Vissza a főoldalra",
  },
};

export default hu;
