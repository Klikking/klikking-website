import type { Dictionary } from "./types";

const en: Dictionary = {
  htmlLang: "en",
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    quote: "Get a quote",
    menu: "Menu",
  },
  themeToggle: { light: "Light mode", dark: "Dark mode", group: "Light / dark mode" },
  langToggle: { group: "Language switch", switchTo: "Váltás magyarra" },
  footer: {
    tagline:
      "Web development and online marketing, under one roof — Szilveszter, Klikking. A developer's eye, a marketer's head.",
    navHeading: "Navigate",
    contactHeading: "Contact",
    basedHeading: "Based in",
    basedIn: "Hungary",
    designedLine: "Designed and built from scratch.",
    imprint: "Imprint",
    privacy: "Privacy",
  },
  cookie: {
    message:
      "We use cookies to measure traffic (Google Tag Manager). Measurement cookies are only loaded after you consent.",
    accept: "Accept",
    reject: "Necessary only",
    manage: "Privacy",
  },
  home: {
    eyebrow: "WEB DEVELOPMENT · SEO · MARKETING",
    h1: [
      { text: "One" },
      { text: "click", emphasis: true },
      { text: "separates" },
      { text: "a" },
      { text: "visitor" },
      { text: "from" },
      { text: "a" },
      { text: "customer." },
    ],
    lede: "Under the name Klikking, I build, optimize and advertise — one person who understands both sides: the code, and the return on it.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "See my work →",
    stats: [
      { value: "1200+", label: "products securely managed" },
      { value: "4", label: "different industries served" },
      { value: "<24h", label: "average response time" },
    ],
    capabilitiesEyebrow: "FOUR SKILLS, ONE PERSON",
    capabilitiesTitleA: "Four skills, ",
    capabilitiesTitleB: "one",
    capabilitiesTitleC: " person.",
    capabilitiesLede:
      "No hand-off between developer and marketer — the strategy and the code come from the same head.",
    capabilities: [
      {
        tag: "DEV",
        title: "Development",
        text: "Custom WordPress and WooCommerce systems — fast, secure, and fully yours to shape.",
      },
      {
        tag: "SEO",
        title: "Search optimization",
        text: "From technical SEO foundations to content strategy — built so Google finds it too.",
      },
      {
        tag: "ADS",
        title: "Marketing",
        text: "Meta and Google ads that bring customers, not just clicks.",
      },
      {
        tag: "SEC",
        title: "Maintenance & Security",
        text: "Proactive monitoring and hardening, so a broken site never wakes you up.",
      },
    ],
    workEyebrow: "SELECTED WORK",
    workAll: "All work →",
    workCases: [
      {
        slug: "fitness5",
        title: "Nationwide gym network",
        text: "Full digital operations and growth support for one of Hungary's largest gym chains.",
        tags: ["Ads", "WP Maintenance", "Security"],
      },
      {
        slug: "inkreturn",
        title: "B2B/B2C commerce system",
        text: "A complex, custom-built commerce system running on reversed webshop logic.",
        tags: ["WooCommerce", "Custom PHP", "UI/UX"],
      },
    ],
    aboutEyebrow: "ABOUT",
    aboutTitleA: "A one-person studio with ",
    aboutTitleB: "agency-level",
    aboutTitleC: " range.",
    aboutText:
      "I'm Szilveszter — an IT graduate working as both a developer and a marketer, trying to get a little sharper every day. Klikking isn't a team of different specialists — it's one person who understands both the code and the conversion.",
    aboutLink: "Learn more →",
    ctaTitleA: "Ready for the first ",
    ctaTitleB: "click",
    ctaTitleC: "?",
    ctaText: "Send a few lines about your project — I'll reply within 24 hours.",
    ctaButton: "Get in touch",
  },
  services: {
    eyebrow: "SERVICES",
    h1: "Everything an agency could do — in one person.",
    lede: "Development, SEO, advertising, maintenance and content — separately, or as one package, depending on what you need.",
    list: [
      {
        tag: "DEV",
        title: "Web development",
        text: "Custom WordPress and WooCommerce development, performance optimization, API integrations — built on foundations that hold up under load and future growth.",
        tags: ["WordPress", "WooCommerce", "Custom PHP", "API"],
      },
      {
        tag: "SEO",
        title: "Search engine optimization",
        text: "Technical SEO audits, keyword strategy, content optimization, and local SEO — for measurable, long-term organic growth.",
        tags: ["Technical SEO", "Content", "Local SEO"],
      },
      {
        tag: "ADS",
        title: "Marketing & ad management",
        text: "Meta and Google Ads strategy, campaign management, and conversion optimization — the goal is always return, not just traffic.",
        tags: ["Meta Ads", "Google Ads", "CRO"],
      },
      {
        tag: "SEC",
        title: "Maintenance & security",
        text: "Proactive technical monitoring, malware protection, and security hardening — so no site goes down overnight.",
        tags: ["Monitoring", "Hardening", "Backups"],
      },
      {
        tag: "BUILD",
        title: "Custom development",
        text: "Complex PHP/Hooks systems, automations, subscription and membership platforms — for when an off-the-shelf plugin isn't enough.",
        tags: ["Automation", "Subscriptions", "Custom Hooks"],
      },
      {
        tag: "CONTENT",
        title: "Content & branding",
        text: "Blog engines, content strategy, and conversion-focused copywriting — that builds trust, not just fills space.",
        tags: ["Blog", "Strategy", "Copywriting"],
      },
    ],
    processEyebrow: "HOW I WORK",
    processTitle: "Four steps from plan to result.",
    steps: [
      {
        title: "Discovery & audit",
        text: "I review the current site, goals, and competitors — so we start from a clear baseline.",
      },
      {
        title: "Plan & proposal",
        text: "A concrete plan with timelines and pricing — no surprises along the way.",
      },
      {
        title: "Build & optimize",
        text: "Development, testing, SEO foundations — with ongoing check-ins.",
      },
      {
        title: "Launch & grow",
        text: "After launch comes measurement, advertising, and continuous tuning.",
      },
    ],
    ctaTitle: "Which service do you need?",
    ctaText: "Send a few lines — I'll help you figure out what you actually need.",
    ctaButton: "Get in touch",
  },
  work: {
    eyebrow: "WORK",
    h1: "Four projects, four different problems.",
    lede: "From a nationwide gym chain to a members-only community portal — each one brought a different challenge, and a different solution.",
    cases: [
      {
        slug: "fitness5",
        url: "fitness5.hu",
        title: "Nationwide gym network",
        text: "Full digital operations and growth support for one of Hungary's largest gym chains.",
        bullets: [
          { label: "Marketing", text: "Strategic Meta & Google ads management" },
          { label: "Maintenance", text: "Proactive WordPress technical monitoring" },
          { label: "Security", text: "Strict malware protection & security hardening" },
          { label: "Dev Core", text: "Custom development & performance optimization" },
        ],
        tags: ["Ads", "WP Maintenance", "Security", "Performance"],
        image: "/images/work/fitness5.jpg",
      },
      {
        slug: "inkreturn",
        url: "inkreturn.com",
        title: "B2B/B2C commerce system",
        text: "A complex, custom-built commerce system running on reversed webshop logic.",
        bullets: [
          { label: "WooCommerce", text: "Custom, reversed purchase flow" },
          { label: "Coding", text: "Fully custom PHP / Hooks engine and functions" },
          { label: "Database", text: "Secure, fast handling of 1,200+ complex products" },
          { label: "UI/UX", text: "Internationally-minded, pixel-precise interface" },
        ],
        tags: ["WooCommerce", "Custom PHP", "1200+ SKUs", "UI/UX"],
        image: null,
      },
      {
        slug: "rebusadiatetikus",
        url: "rebusadiatetikus.hu",
        title: "Healthcare personal brand",
        text: "A high-conversion healthcare platform built for personal branding and automated client acquisition.",
        bullets: [
          { label: "Conversion", text: "Persuasive structure built on UX research" },
          { label: "Automation", text: "Integrated, instant booking system" },
          { label: "SEO Setup", text: "Keyword strategy & technical SEO" },
          { label: "Content", text: "Editorial blog engine driving organic traffic" },
        ],
        tags: ["CRO", "Booking", "SEO", "Content"],
        image: "/images/work/rebusadiatetikus.webp",
      },
      {
        slug: "vagyhangolo",
        url: "vagyhangolo.hu",
        title: "Members-only community & learning portal",
        text: "A members-only community and learning portal with custom features and its own card game.",
        bullets: [
          { label: "Subscription", text: "Recurring billing on WooCommerce Subscriptions" },
          { label: "Media", text: "Protected internal video portal & premium course management" },
          { label: "Community", text: "Integrated private forum & editorial blog" },
          { label: "Custom Dev", text: "Custom-designed, custom-built online card game" },
        ],
        tags: ["Subscriptions", "Video Portal", "Community", "Custom Game"],
        image: null,
      },
    ],
    ctaTitle: "The next project could be yours.",
    ctaButton: "Get in touch",
  },
  about: {
    eyebrow: "ABOUT",
    h1: "I'm Szilveszter. There's one person behind Klikking.",
    lede: "I have an IT degree and I work as both a developer and a marketer — trying to get a little better at both, every single day.",
    storyEyebrow: "THE STORY",
    storyParagraphs: [
      "Most companies get their website from one team and their marketing from another — one builds it, the other advertises it, and the context gets lost in between. Klikking closes that gap: the developer and the marketer are the same person, holding the same goal in mind at every stage of the project.",
      "I started with an IT background, and I've kept learning ever since — new frameworks, new advertising platforms, new SEO algorithms. The goal is always the same: a site that doesn't just look good, but actually brings in customers.",
    ],
    principlesEyebrow: "WHAT I BELIEVE",
    principles: [
      {
        title: "One owner, not five",
        text: "If something breaks, you know exactly who to call. No \"that's the developer's fault, that's the marketer's fault\" ping-pong.",
      },
      {
        title: "Code serves the goal",
        text: "A website isn't a piece of art — it's a tool. Every technical decision gets measured against the business goal.",
      },
      {
        title: "Continuous learning",
        text: "The web and search engines keep changing — what worked last year might not today. That's why I keep sharpening my skills, every day.",
      },
      {
        title: "Measurable results",
        text: "Traffic, conversion, revenue — you can look at the result of my work in numbers, not just in a feeling.",
      },
    ],
    toolboxEyebrow: "TOOLBOX",
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
    ctaTitle: "Let's work together.",
    ctaButton: "Get in touch",
  },
  contact: {
    eyebrow: "CONTACT",
    h1: [
      { text: "Send" },
      { text: "a" },
      { text: "few" },
      { text: "lines" },
      { text: "—" },
      { text: "we'll", emphasis: true },
      { text: "start", emphasis: true },
      { text: "from", emphasis: true },
      { text: "there.", emphasis: true },
    ],
    lede: "Tell me about the project: what you want to achieve, where things stand today, and your timeline. I reply within 24 hours.",
    email: "info@klikking.hu",
    basedLabel: "Based in: Hungary",
    responseLabel: "Response time: < 24 hours",
    form: {
      honeypotLabel: "Leave blank:",
      name: "Name",
      email: "Email",
      website: "Website (if any)",
      message: "What do you need help with?",
      submit: "Send message",
      submitting: "Sending...",
      success: "Thanks — I'll reply within 24 hours.",
      error: "Something went wrong — please email info@klikking.hu directly.",
      required: "Please fill in the required fields.",
    },
  },
  legal: {
    imprint: {
      title: "Imprint",
      body: `
<p><strong>[Company / sole trader name — fill in]</strong></p>
<p>Registered seat: [address]</p>
<p>Tax number: [tax number]</p>
<p>Registration number: [registration number]</p>
<p>Registering authority: [e.g. Budapest Government Office]</p>
<p>Email: info@klikking.hu</p>
<p>Hosting provider: [hosting provider name and address]</p>
<p style="margin-top:1.5rem;"><em>This page currently contains placeholder data — update with real company details before going live.</em></p>
      `.trim(),
    },
    privacy: {
      title: "Privacy Policy",
      body: `
<p>This notice explains how personal data is handled on klikking.hu, in line with Regulation (EU) 2016/679 (GDPR) and Hungarian Act CXII of 2011 on informational self-determination.</p>
<h3>Data controller</h3>
<p>[Company / sole trader name], [address], info@klikking.hu</p>
<h3>What we collect</h3>
<p>Name, email, optional website URL, and message content submitted through the contact form are processed solely to respond to your enquiry, for a reasonable period after the reply is sent.</p>
<h3>Cookies</h3>
<p>The site may measure traffic via Google Tag Manager. Measurement cookies are only loaded after you give explicit consent in the cookie banner. Consent can be withdrawn at any time via your browser settings or by clearing local site data.</p>
<h3>Your rights</h3>
<p>You may request access to, rectification, erasure, or restriction of your personal data, and may object to its processing. Complaints can be filed with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH, naih.hu).</p>
<p style="margin-top:1.5rem;"><em>This page currently contains placeholder data — update with real company details before going live.</em></p>
      `.trim(),
    },
  },
  notFound: {
    title: "This page can't be found.",
    text: "The page you're looking for doesn't exist, or has moved.",
    button: "Back to homepage",
  },
};

export default en;
