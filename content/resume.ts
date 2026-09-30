export type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Bullet = {
  lead?: string;
  text: string;
};

export type Role = {
  title: string;
  dates: string;
};

export type ExperienceEntry = {
  company: string;
  url?: string;
  location?: string;
  note?: string;
  roles: Role[];
  dates: string;
  current?: boolean;
  bullets: Bullet[];
};

export type WorkItem = {
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  tags: string[];
  beforeAfter?: { label: string; before: string; after: string }[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type AiItem = {
  lead: string;
  text: string;
};

export type Resume = {
  identity: {
    name: string;
    shortName: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    phone?: string;
    site: string;
    resumeFile: string;
    links: { label: string; href: string }[];
    photo?: Img;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    summary: string;
  };
  stats: { value: string; label: string }[];
  experience: ExperienceEntry[];
  work: WorkItem[];
  skills: SkillGroup[];
  ai: {
    intro: string;
    items: AiItem[];
  };
  education: {
    degree: string;
    school: string;
    dates: string;
  };
  languages: string;
  contact: {
    heading: string;
    line: string;
  };
  nav: { label: string; href: string }[];
};

export const resume: Resume = {
  identity: {
    name: "Meysam Kiani",
    shortName: "MK",
    title: "Front-End Engineer",
    tagline: "Vue · React · Next.js · TypeScript",
    location: "Tehran, Iran",
    email: "dev.mysm@gmail.com",
    phone: "+98 9900800496",
    site: "https://mysm.ir",
    resumeFile: "/Meysam_Kiani_Resume.docx",
    links: [
      { label: "GitHub", href: "https://github.com/itmysm" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/itmysm/" },
      { label: "SliceGames", href: "https://slicegames.app" },
    ],
    photo: {
      src: "/images/me.webp",
      alt: "Portrait of Meysam Kiani",
      width: 584,
      height: 1024,
    },
  },
  hero: {
    eyebrow: "Front-End Engineer · Tehran",
    headline: "Meysam Kiani",
    subheadline:
      "I build large, production-grade web apps with Vue and Next.js, from national health systems to my own games platform.",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: {
      label: "Download resume",
      href: "/Meysam_Kiani_Resume.docx",
    },
  },
  about: {
    summary:
      "Front-end engineer with 5 years of experience building production web applications with Vue and React/Next.js. Front-End Lead at DAPA, owning the front end of a national health system used by 100k+ people and leading its Vue 2 → Vue 3 migration. Creator of SliceGames, a multilingual games platform that reaches ~16,000 monthly visits from organic search alone. Comfortable across the stack, and experienced in leading a squad and working with AI coding agents in a review-first workflow.",
  },
  stats: [
    { value: "5 yrs", label: "Front-end experience" },
    {
      value: "100k+",
      label: "Users on the health system I lead the front end of",
    },
    { value: "~16k", label: "Monthly organic visits on SliceGames" },
    { value: "6", label: "Languages on SliceGames" },
  ],
  experience: [
    {
      company: "DAPA (Danesh Parsian)",
      location: "Tehran",
      dates: "Jan 2023 - Present",
      current: true,
      roles: [
        { title: "Front-End Lead", dates: "Sep 2025 - Present" },
        { title: "Front-End Developer", dates: "Jan 2023 - Aug 2025" },
      ],
      bullets: [
        {
          lead: "Team lead:",
          text: "run a product squad of one designer and one front-end developer. I break features into tasks, prioritize and assign work, review pull requests, and keep design and implementation aligned.",
        },
        {
          lead: "Vue 2 → Vue 3 migration:",
          text: "led the migration of SIB, a national health system serving 100k+ users, after Vue 2 reached end-of-life and stopped receiving security patches. Rebuilt it as a greenfield Vue 3, Vuetify 3, Pinia, Vite and TypeScript app and ported it module by module, keeping the production deploy path unchanged.",
        },
        {
          lead: "Dependency overhaul:",
          text: "audited a heavy dependency tree and replaced deprecated or abandoned packages with maintained ones (Chart.js 2 → 4, a Persian datepicker rebuilt as a web component, new toast library). Moved internal HTTP and utility libraries from patched local tarballs to versioned private packages, and rewrote Vuex stores as Pinia modules.",
        },
        {
          lead: "Build tooling:",
          text: "fixed Webpack → Vite/ESM issues that only appeared in production builds (AG Grid imports, tree-shaken components) and replaced the Vue CLI PWA plugin with vite-plugin-pwa.",
        },
        {
          lead: "Video calls:",
          text: "designed and built the entire UI of a WebRTC video-call service, using LiveKit only as the client-side layer so the product experience stays fully in-house.",
        },
        {
          lead: "Finance-fund module:",
          text: "consolidated an outsourced module into the main codebase through a full refactor and dependency unification, reducing maintenance cost and improving stability.",
        },
        {
          lead: "Legacy support:",
          text: "wrote custom polyfills and optimizations so Vue 2 / Vuetify 2 systems run reliably on older browsers and devices across the country; containerized the SIB front end with Docker.",
        },
      ],
    },
    {
      company: "SliceGames",
      url: "https://slicegames.app",
      note: "personal product",
      dates: "Mar 2025 - Present",
      current: true,
      roles: [
        {
          title: "Founder & Full-Stack Developer · Next.js, React, TypeScript, Node.js, PostgreSQL",
          dates: "Mar 2025 - Present",
        },
      ],
      bullets: [
        {
          lead: "Growth:",
          text: "designed and built a multilingual (6 languages) browser-games platform end to end. It reaches ~16,000 monthly visits worldwide from organic search alone.",
        },
        {
          lead: "Quality:",
          text: "scores 100 for SEO and Accessibility and 96 for Best Practices in Lighthouse.",
        },
        {
          lead: "Architecture:",
          text: "pnpm + Turborepo monorepo where each game is an isolated package loaded through a common game contract, so game code never bloats the site bundle and UI and utilities are shared across games.",
        },
        {
          lead: "Back end and infra:",
          text: "Node.js/TypeScript API with PostgreSQL (Prisma), JWT and Google OAuth, and admin tooling; deployed on a VPS with Nginx, PM2 and Cloudflare.",
        },
        {
          lead: "Content pipeline:",
          text: "built an AI-assisted research → copywriting pipeline that produces localized page content for every game in all six languages.",
        },
      ],
    },
    {
      company: "Mentorjet",
      url: "https://mentorjet.org/",
      dates: "Nov 2023 - Present",
      current: true,
      roles: [
        {
          title: "Front-End Developer · Remote · MUI, i18n, SEO",
          dates: "Nov 2023 - Present",
        },
      ],
      bullets: [
        {
          text: "Built core product pages (login, dashboard, mentor listings) with MUI, plus multiple landing pages from design specs, optimized for load speed.",
        },
        {
          text: "Implemented JSON-LD structured data on profile pages, making them eligible for Google Rich Results.",
        },
        {
          text: "Refactored and configured i18n to open the product to non-Persian-speaking users.",
        },
      ],
    },
    {
      company: "Varzeshkar.com",
      url: "https://varzeshkar.com/",
      dates: "Ongoing",
      current: true,
      roles: [
        {
          title: "Contributor · Next.js · Private project built with a partner",
          dates: "Ongoing",
        },
      ],
      bullets: [
        {
          text: "Ship front-end features for a production sports platform.",
        },
      ],
    },
    {
      company: "Vafor Psychology Institute",
      location: "Tehran",
      dates: "Oct 2021 - Nov 2022",
      roles: [{ title: "Front-End Developer", dates: "Oct 2021 - Nov 2022" }],
      bullets: [
        {
          text: "Built and maintained front-end interfaces for the institute's web platform (first professional role).",
        },
      ],
    },
  ],
  work: [
    {
      title: "SIB: Vue 2 → Vue 3 migration",
      subtitle: "National health system, 100k+ users",
      description:
        "A ground-up migration of a large national health system to a supported, secure stack. Ported module by module into a greenfield app.",
      url: "https://sib.behdasht.gov.ir/",
      tags: ["Vue 3", "Vuetify 3", "Pinia", "Vite", "TypeScript"],
      beforeAfter: [
        { label: "Framework", before: "Vue 2.7", after: "Vue 3.5" },
        { label: "UI kit", before: "Vuetify 2.7", after: "Vuetify 3.12" },
        { label: "Build", before: "Vue CLI + Webpack 5", after: "Vite" },
        { label: "State", before: "Vuex 3", after: "Pinia" },
        { label: "CSS utilities", before: "WindiCSS", after: "Tailwind 3" },
        { label: "Package manager", before: "npm", after: "pnpm" },
      ],
    },
    {
      title: "SliceGames",
      subtitle: "Multilingual games platform",
      description:
        "A browser-games platform in 6 languages, built as a monorepo where each game is its own package. ~16,000 monthly visits from organic search alone.",
      url: "https://slicegames.app",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Turborepo",
      ],
    },
    {
      title: "Video-call service",
      subtitle: "Real-time, WebRTC",
      description:
        "Designed and built the full user interface myself. LiveKit is used only as the client-side WebRTC layer, so the product experience stays fully under our control.",
      tags: ["WebRTC", "LiveKit", "Vue"],
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SASS"],
    },
    {
      label: "Frameworks",
      items: ["Vue 3 / Vue 2", "Nuxt", "React", "Next.js"],
    },
    {
      label: "State & data",
      items: ["Pinia", "Vuex", "Zustand", "TanStack Query"],
    },
    {
      label: "UI & styling",
      items: ["Vuetify", "MUI", "HeroUI", "Tailwind CSS", "WindiCSS"],
    },
    {
      label: "Build & tooling",
      items: [
        "Vite",
        "Webpack",
        "pnpm",
        "Turborepo",
        "ESLint",
        "Git",
        "Docker",
        "PWA",
      ],
    },
    {
      label: "Real-time",
      items: ["WebRTC", "LiveKit"],
    },
    {
      label: "Back end & deployment",
      items: ["Node.js", "PostgreSQL", "Prisma", "Nginx", "PM2", "Cloudflare"],
    },
    {
      label: "Practices",
      items: [
        "Performance optimization",
        "i18n",
        "SEO & structured data",
        "legacy-browser compatibility",
        "code review",
        "technical leadership",
      ],
    },
  ],
  ai: {
    intro:
      "I treat AI coding agents as fast junior engineers: powerful, tireless, and in need of clear direction and review.",
    items: [
      {
        lead: "Tools:",
        text: "daily use of Cursor and Claude Code for engineering, and Google Flow for generative visual content.",
      },
      {
        lead: "Spec first, small diffs:",
        text: "I define goals, constraints and acceptance criteria up front and point the agent at existing code patterns. Nothing merges that I cannot explain line by line.",
      },
      {
        lead: "Migration workflow:",
        text: 'wrote reusable agent skills and "line-for-line parity" rules for the Vue 3 port so pages were never silently trimmed; used agents for codemods, scaffolding, test generation and evaluating replacement libraries.',
      },
      {
        lead: "Judgment stays human:",
        text: "architecture, security and trade-offs are mine; output is verified with type checks, tests and review. In my squad I introduced shared conventions and mandatory review for AI-assisted code.",
      },
    ],
  },
  education: {
    degree: "B.Sc., Computer Engineering",
    school: "University of Science and Technology, Tehran",
    dates: "2020 - 2024",
  },
  languages: "Persian (native) · English (intermediate)",
  contact: {
    heading: "Let's talk.",
    line: "Open to interesting front-end work. The fastest way to reach me is email.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
