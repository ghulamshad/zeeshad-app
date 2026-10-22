export type SubService = {
  name: string;
  summary: string;
  group: 'Build' | 'Automate' | 'Modernize' | 'Advisory';
};

export type ProcessStage = {
  stage: string;
  time: string;
  line: string;
};

export type PricingModel = {
  name: string;
  priceLine: string;
  description: string;
  points: string[];
  featured?: boolean;
};

export type ProblemCard = {
  problem: string;
  solution: string;
};

export const SOLUTIONS_SEO = {
  title: 'Custom Software, AI and Automation | ZeeShad',
  description:
    'Custom software, mobile apps, AI agents and automation for growing businesses in the US, UK and Europe. Fixed price per milestone. Book a free session.',
};

export const SOLUTIONS_HERO = {
  eyebrow: 'Business Solutions',
  h1: 'Systems that run the business, built around how it actually works',
  subhead:
    'When off-the-shelf tools fall short, we build the software, AI and automation that fit. Scoped in writing within 2 business days.',
  primaryCta: 'Free Discovery Session',
  secondaryCta: 'Estimate my project',
};

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    problem: 'Spreadsheets run the business',
    solution: 'Custom software',
  },
  {
    problem: 'Old software nobody wants to touch',
    solution: 'Business modernization',
  },
  {
    problem: 'The same data typed into three tools',
    solution: 'Integrations and APIs',
  },
  {
    problem: "Repetitive work eating your team's week",
    solution: 'Workflow automation and AI agents',
  },
  {
    problem: 'Customers and field teams stuck on phone calls',
    solution: 'Mobile apps',
  },
  {
    problem: 'A website that gets visits but no enquiries',
    solution: 'Websites and web apps',
  },
];

export const SOLUTION_SERVICES: SubService[] = [
  {
    group: 'Build',
    name: 'Custom software',
    summary: 'ERP-lite systems, portals and internal tools.',
  },
  {
    group: 'Build',
    name: 'Mobile apps',
    summary: 'iOS and Android for customers, field teams and staff.',
  },
  {
    group: 'Build',
    name: 'Websites and web apps',
    summary: 'Fast sites and web apps that turn visits into enquiries.',
  },
  {
    group: 'Build',
    name: 'Digital platforms',
    summary: 'Marketplaces, portals and SaaS products.',
  },
  {
    group: 'Automate',
    name: 'AI agents',
    summary: 'Agents that read, draft, decide and update your systems.',
  },
  {
    group: 'Automate',
    name: 'Workflow automation',
    summary: 'Approvals, documents and reports that run on their own.',
  },
  {
    group: 'Automate',
    name: 'Integrations and APIs',
    summary: 'Your store, CRM, accounts and warehouse, connected.',
  },
  {
    group: 'Modernize',
    name: 'Business modernization',
    summary: 'Move off legacy systems in safe stages.',
  },
  {
    group: 'Advisory',
    name: 'Consultancy',
    summary: 'Independent advice on IT, cloud and delivery.',
  },
];

export const HOW_IT_WORKS: ProcessStage[] = [
  {
    stage: 'Discover',
    time: '1 to 2 weeks',
    line: 'Map your processes, agree scope and a fixed price.',
  },
  {
    stage: 'Design',
    time: '1 to 2 weeks',
    line: 'Screens and data model signed off before any code.',
  },
  {
    stage: 'Build',
    time: '4 to 10 weeks',
    line: 'Milestones with a working demo every week.',
  },
  {
    stage: 'Launch',
    time: '1 to 2 weeks',
    line: 'Data migration, training and go-live support.',
  },
  {
    stage: 'Support',
    time: 'Ongoing',
    line: 'Optional monthly plan for fixes and new features.',
  },
];

export const PRICING_MODELS: PricingModel[] = [
  {
    name: 'Fixed-scope project',
    priceLine: 'Priced per milestone',
    description: 'A defined build, paid per milestone. Best for a first system.',
    points: ['Written scope in 2 days', 'Fixed price', 'You own the code'],
  },
  {
    name: 'Phased build',
    priceLine: 'Most chosen · priced per phase',
    description: 'Launch the core fast, then add modules as the business grows.',
    points: [
      'Live in weeks',
      'Budget spread over phases',
      'Priorities reset each phase',
    ],
    featured: true,
  },
  {
    name: 'Support and growth plan',
    priceLine: 'Monthly plan',
    description: 'Hosting, fixes and a monthly block of new work.',
    points: ['Response times in writing', 'Monthly report', 'Cancel with notice'],
  },
];

export const SOLUTIONS_FAQ = [
  {
    q: 'How much does custom software cost?',
    a: 'Most first systems are scoped to your process and budget. The free Project Cost Estimator gives a range for your project in about 3 minutes, and a Discovery Session produces a written scope within 2 business days.',
  },
  {
    q: 'How do you work across time zones?',
    a: 'You get a named lead, a fixed weekly demo slot and replies within agreed business hours. We aim to overlap UK afternoons and US Eastern mornings when needed.',
  },
  {
    q: 'Do we own what you build?',
    a: 'Yes. Code, data and accounts are yours from the first milestone.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Yes. We can build alongside your developers or hand over cleanly at the end.',
  },
];

export const CTA_BAND = {
  title: 'Get a written scope in 2 business days',
  line: 'Free 30-minute session. NDA first if you want one.',
  primary: 'Free Discovery Session',
  secondary: 'Estimate my project',
};

export const ESTIMATOR_BAND = {
  title: 'Not ready to talk?',
  line: 'Get a price range in 3 minutes.',
  cta: 'Try the Project Cost Estimator',
};

/** Homepage pillars matching the design system */
export const FOUR_WAYS = [
  {
    title: 'Digitize operations',
    line: 'Replace spreadsheets with one system for orders, stock and finance.',
    href: '#solutions',
  },
  {
    title: 'Modernize systems',
    line: 'Move off legacy software in safe stages, without stopping the business.',
    href: '#solutions',
  },
  {
    title: 'Enable AI',
    line: 'AI agents and automation that take repetitive work off your team.',
    href: '#solutions',
  },
  {
    title: 'Grow revenue',
    line: 'Paid media, SEO and content measured on enquiries and revenue.',
    href: '#marketing',
  },
];

export const HOME_HERO = {
  eyebrow: 'US · UK · EU',
  h1Lead: 'Software that runs your business.',
  h1Accent: 'Marketing that grows it.',
  subhead:
    'Custom software, AI agents and automation, plus performance marketing that fills the pipeline. Scoped in writing within 2 business days.',
  primaryCta: 'Free Discovery Session',
  secondaryCta: 'Free Marketing Audit',
  proofs: ['NDA before the first call', 'You own the code', 'Fixed price per milestone'],
};

export const MARKETING_TEASER = {
  eyebrow: 'Digital Marketing',
  h2: 'Marketing measured in pipeline, not likes',
  line: 'Paid media, SEO, social and brand, planned for one goal: qualified enquiries for any industry.',
  cta: 'Get my free marketing audit',
  items: [
    'Paid media — Google, Meta, LinkedIn, TikTok',
    'SEO and AEO — Rank in search and AI answers',
    'Organic social — Content that builds trust',
    'Branding — Identity and creative',
    'Email and CRM — Nurture that converts',
    'CRO and analytics — Tracking you can trust',
  ],
};

export const SERVICE_SELECT_OPTIONS = [
  'Business Solutions — Free Discovery Session',
  'Business Solutions — Custom software',
  'Business Solutions — Mobile apps',
  'Business Solutions — Websites and web apps',
  'Business Solutions — Digital platforms',
  'Business Solutions — AI agents',
  'Business Solutions — Workflow automation',
  'Business Solutions — Integrations and APIs',
  'Business Solutions — Business modernization',
  'Business Solutions — Consultancy',
  'Digital Marketing — Free Marketing Audit',
  'Digital Marketing — Paid media',
  'Digital Marketing — SEO and AEO',
  'Project Cost Estimator',
  'Other',
] as const;

/** Back-compat aliases used by older imports */
export const MAIN_SERVICES = [
  {
    id: 'business-solutions',
    num: '01',
    title: 'Business Solutions',
    tagline: 'Systems that run the business',
    description: SOLUTIONS_HERO.subhead,
    outcomes: [
      'Custom software, mobile apps, websites and platforms',
      'AI agents, workflow automation and integrations',
      'Modernization and consultancy before you invest',
    ],
    subServices: SOLUTION_SERVICES.map((s) => ({ name: s.name, summary: s.summary })),
  },
  {
    id: 'digital-marketing',
    num: '02',
    title: 'Digital Marketing',
    tagline: 'Demand that compounds',
    description: MARKETING_TEASER.line,
    outcomes: [
      'Paid and organic channels working as one plan',
      'Landing pages that turn visits into enquiries',
      'Reporting tied to pipeline, not vanity metrics',
    ],
    subServices: MARKETING_TEASER.items.map((item) => {
      const [name, summary] = item.split(' — ');
      return { name: name || item, summary: summary || item };
    }),
  },
  {
    id: 'consultancy',
    num: '03',
    title: 'Consultancy',
    tagline: 'Clarity before commitment',
    description:
      'Independent guidance on IT strategy, cloud, infrastructure and project delivery so the next big decision is the right one.',
    outcomes: [
      'Written recommendation and costed plan',
      'Buy, build or integrate — with the reasoning written down',
      'Delivery oversight when other vendors are involved',
    ],
    subServices: [
      {
        name: 'IT strategy and digital transformation',
        summary: 'A roadmap tied to business goals and budget.',
      },
      {
        name: 'Technology selection',
        summary: 'Buy, build or integrate, with the reasoning written down.',
      },
      {
        name: 'Cloud architecture and migration',
        summary: 'Secure, cost-aware cloud design and moves.',
      },
      {
        name: 'Project and program delivery',
        summary: 'Keep big programs on track with clear milestones.',
      },
    ],
  },
];

export const COMPANY_ONE_LINER =
  'ZeeShad is a software and growth partner for scaling businesses: custom software, AI and automation, plus performance marketing. Based in Karachi, serving US, UK and EU clients.';
