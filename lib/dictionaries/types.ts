export interface Dictionary {
  htmlLang: string;
  nav: {
    home: string;
    services: string;
    aiAgents: string;
    work: string;
    about: string;
    contact: string;
    quote: string;
    menu: string;
  };
  themeToggle: { light: string; dark: string; group: string };
  langToggle: { group: string; switchTo: string };
  footer: {
    tagline: string;
    navHeading: string;
    contactHeading: string;
    basedHeading: string;
    basedIn: string;
    designedLine: string;
    imprint: string;
    privacy: string;
  };
  cookie: {
    message: string;
    accept: string;
    reject: string;
    manage: string;
  };
  home: {
    eyebrow: string;
    h1: { text: string; emphasis?: boolean }[];
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    capabilitiesEyebrow: string;
    capabilitiesTitleA: string;
    capabilitiesTitleB: string;
    capabilitiesTitleC: string;
    capabilitiesLede: string;
    capabilities: { tag: string; title: string; text: string }[];
    workEyebrow: string;
    workAll: string;
    workCases: {
      slug: string;
      title: string;
      text: string;
      tags: string[];
    }[];
    aboutEyebrow: string;
    aboutTitleA: string;
    aboutTitleB: string;
    aboutTitleC: string;
    aboutText: string;
    aboutLink: string;
    ctaTitleA: string;
    ctaTitleB: string;
    ctaTitleC: string;
    ctaText: string;
    ctaButton: string;
  };
  services: {
    eyebrow: string;
    h1: string;
    lede: string;
    list: { tag: string; title: string; text: string; tags: string[] }[];
    processEyebrow: string;
    processTitle: string;
    steps: { title: string; text: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  aiAgents: {
    eyebrow: string;
    badge: string;
    h1: string;
    lede: string;
    ctaPrimary: string;
    ctaLogin: string;
    howItWorksTitle: string;
    steps: { title: string; text: string }[];
    featuresTitle: string;
    featuresLede: string;
    features: { title: string; text: string }[];
    pricingTitle: string;
    pricingLede: string;
    monthlyLabel: string;
    annualLabel: string;
    savingsLabel: string;
    perMonth: string;
    perYear: string;
    dailyPrice: string;
    dailyNote: string;
    included: string[];
    ctaButton: string;
    legalNote: { pre: string; terms: string; mid: string; privacy: string; post: string };
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  work: {
    eyebrow: string;
    h1: string;
    lede: string;
    cases: {
      slug: string;
      url: string;
      title: string;
      text: string;
      bullets: { label: string; text: string }[];
      tags: string[];
      image: string | null;
    }[];
    ctaTitle: string;
    ctaButton: string;
  };
  about: {
    eyebrow: string;
    h1: string;
    lede: string;
    storyEyebrow: string;
    storyParagraphs: string[];
    principlesEyebrow: string;
    principles: { title: string; text: string }[];
    toolboxEyebrow: string;
    toolbox: string[];
    ctaTitle: string;
    ctaButton: string;
  };
  contact: {
    eyebrow: string;
    h1: { text: string; emphasis?: boolean }[];
    lede: string;
    email: string;
    basedLabel: string;
    responseLabel: string;
    form: {
      honeypotLabel: string;
      name: string;
      email: string;
      website: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      required: string;
    };
  };
  legal: {
    imprint: { title: string; body: string };
    privacy: { title: string; body: string };
  };
  notFound: {
    title: string;
    text: string;
    button: string;
  };
}
