/**
 * Verified / audit-aligned site content.
 * Do not add unverified metrics, client names, certifications, or product claims.
 */

export const SITE_VERSION = '1.0.0.1';

export const COMPANY = {
  legalName: 'ZeeShad (Private) Limited',
  shortName: 'ZeeShad',
  email: 'info@zeeshad.com',
  phoneDisplay: '+92 304 0058323',
  phoneTel: '+923040058323',
  whatsappUrl: 'https://wa.me/923040058323',
  addressLines: [
    'D-17 Ground Floor, Gulistan Society',
    'Quaidabad, Karachi, Pakistan',
  ],
  hours: 'Monday–Friday, 09:00–18:00 Pakistan Standard Time (PKT, UTC+5)',
  incorporationNote: 'Incorporated under Companies Act, 2017 (XIX of 2017)',
} as const;

/** Audit-recommended positioning (owner-authorized via audit.md) */
export const HOME_HERO = {
  eyebrow: 'Enterprise Software · AI · Digital Transformation',
  h1: 'Technology that moves your business forward.',
  body: 'We design, build and support business systems that simplify operations, connect teams and help organizations grow—for mid-market teams that need software that fits how they work.',
  primaryCta: { label: 'Book a discovery conversation', href: '/contact' },
  secondaryCta: { label: 'Explore Our Solutions', href: '/solutions' },
} as const;

/**
 * Owner-approved client names only. No logos, quotes, or results unless separately cleared.
 */
export const CLIENTS = [
  {
    name: 'Mushaz Perfumes',
    href: 'https://www.mushaz.com/',
    note: 'Fragrance brand',
  },
  {
    name: 'Ornavibe',
    href: 'https://www.ornavibe.com/',
    note: 'ornavibe.com',
  },
  {
    name: 'Al Zohra Welfare Association',
    href: 'https://www.al-zohra.org/',
    note: 'Welfare & education',
  },
] as const;

export const HOW_WE_WORK = [
  {
    title: 'Written scope',
    line: 'After discovery, you receive a written scope outline so expectations are clear before build starts.',
  },
  {
    title: 'Milestone delivery',
    line: 'Work is delivered in milestones with working software you can review, not slide decks alone.',
  },
  {
    title: 'You own the work',
    line: 'Code, data and accounts for custom builds are yours from the first milestone, as agreed in the engagement.',
  },
  {
    title: 'Named lead',
    line: 'A named lead stays with the engagement from scope through delivery and handover.',
  },
] as const;

export const SOLUTION_PILLARS = [
  {
    slug: 'enterprise-business-systems',
    title: 'Enterprise Business Systems',
    problem: 'Operations run on spreadsheets, disconnected tools, or software that no longer fits.',
    outcome: 'A system that matches how your team actually sells, stocks, invoices and reports.',
    deliverables: [
      'ERP and business operations',
      'POS and retail workflows',
      'Inventory, sales and reporting',
      'Workflow and document processes',
    ],
    href: '/solutions#enterprise-business-systems',
  },
  {
    slug: 'custom-software-saas',
    title: 'Custom Software & SaaS',
    problem: 'Off-the-shelf products force workarounds, or you need a product of your own.',
    outcome: 'Web apps, portals and SaaS platforms scoped to your process and owned by you.',
    deliverables: [
      'Web applications and SaaS',
      'Business portals',
      'APIs and integrations',
      'Modernization and maintenance',
    ],
    href: '/solutions#custom-software-saas',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    problem: 'Repetitive work, slow hand-offs and reports that take a day to assemble.',
    outcome: 'Automation and AI workflows that reduce re-typing and keep a person in the loop where it matters.',
    deliverables: [
      'AI assistants and knowledge workflows',
      'Process automation',
      'Integration into existing systems',
      'Reporting workflows',
    ],
    href: '/solutions#ai-automation',
  },
] as const;

export type ProductStatus =
  | 'Commercial product'
  | 'Available for demonstration'
  | 'Pilot / beta'
  | 'Internal delivery framework'
  | 'Concept / prototype';

export type ProductRecord = {
  slug: string;
  name: string;
  status: ProductStatus;
  purpose: string;
  customer: string;
  features: string[];
  href?: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Only verified public products and honestly labelled frameworks */
export const PRODUCTS: ProductRecord[] = [
  {
    slug: 'zeeshad-desk',
    name: 'ZeeShad Desk',
    status: 'Commercial product',
    purpose:
      'A browser-based desk for trading houses: follow-ups, quotes, yard stock, deliveries and invoices in Pakistani rupees.',
    customer: 'Owners and sales heads of trading houses that quote, keep a yard, and invoice in rupees.',
    features: [
      'Follow-ups on the account',
      'Quote to order to delivery to invoice',
      'Stock and books from the same records',
      'Company subscription with roles',
    ],
    href: 'https://desk.zeeshad.com/',
    ctaLabel: 'Open ZeeShad Desk',
    ctaHref: 'https://desk.zeeshad.com/',
  },
  {
    slug: 'z-erp-framework',
    name: 'Z-ERP framework',
    status: 'Internal delivery framework',
    purpose:
      'An internal ERP delivery framework used on client projects for finance, inventory, HR and reporting modules. Not a public SaaS product.',
    customer: 'Clients engaging ZeeShad for a custom ERP-style build.',
    features: [
      'Financial management modules',
      'Inventory building blocks',
      'HR and payroll patterns',
      'Reporting tailored per engagement',
    ],
    ctaLabel: 'Discuss an ERP build',
    ctaHref: '/contact?interest=Custom%20software',
  },
  {
    slug: 'z-pos-framework',
    name: 'Z-POS framework',
    status: 'Internal delivery framework',
    purpose:
      'A POS-oriented delivery framework adapted for retail and hospitality projects. Not a public SaaS product.',
    customer: 'Retail and hospitality operators needing counter sales tied to inventory.',
    features: [
      'Sales processing patterns',
      'Inventory hooks',
      'Payment integration patterns',
      'Multi-location patterns',
    ],
    ctaLabel: 'Discuss a POS build',
    ctaHref: '/contact?interest=Custom%20software',
  },
];

export const DELIVERY_STEPS = [
  {
    title: 'Discovery and requirements',
    line: 'Map processes, constraints and success criteria with the people who will use the system.',
  },
  {
    title: 'Scope, milestones and proposal',
    line: 'A written scope and milestone plan so price and timeline are clear before build starts.',
  },
  {
    title: 'Design and architecture',
    line: 'Screens, data model and integrations agreed before expensive build work.',
  },
  {
    title: 'Iterative development',
    line: 'Working software reviewed on a regular cadence, not a big reveal at the end.',
  },
  {
    title: 'QA and acceptance',
    line: 'Testing against the agreed scope, with acceptance criteria you can check.',
  },
  {
    title: 'Deployment, handover and support',
    line: 'Go-live support, documentation and an optional ongoing support plan when you need it.',
  },
] as const;

export const NAV_PRIMARY = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/case-studies', label: 'Delivery' },
  { href: '/enterprise-government', label: 'Enterprise' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
] as const;

export const CONTACT_INTERESTS = [
  'Discuss a project',
  'Request a proposal',
  'ZeeShad Desk demo / trial',
  'Enterprise / government inquiry',
  'Custom software',
  'AI & automation',
  'Digital marketing',
  'Other',
] as const;

export const COMPANY_OVERVIEW = {
  headline: 'A Karachi-based software and growth partner',
  paragraphs: [
    'ZeeShad (Private) Limited designs, builds and supports business systems for organizations that need software that fits how they work—not a generic brochure of every IT category.',
    'Our commercial focus is enterprise business systems, custom software and SaaS, and AI-enabled automation, alongside live products such as ZeeShad Desk.',
    'We work with clients over email, video calls and messaging. We aim to overlap UK afternoons and US Eastern mornings when a project needs it.',
  ],
} as const;

export const ENTERPRISE_PAGE = {
  headline: 'Technology delivery for enterprise and institutional needs.',
  intro:
    'Corporate and institutional buyers can request a discussion of scope, delivery approach and a corporate capability statement. We do not claim prequalification for any specific tender unless documentary proof is provided separately.',
  capabilities: [
    'Custom business software and systems integration',
    'ERP-style operations, portals and workflow software',
    'AI and automation pilots with clear ownership of data',
    'Documented scope, milestones and handover',
  ],
  process: [
    'Share a brief or RFP summary via the contact form or email.',
    'We confirm fit and request any documents needed for a proposal.',
    'You receive a written response outlining approach, assumptions and next steps.',
  ],
  ctaNote:
    'Sensitive tax, registration or identity documents are shared only through a controlled process when a legitimate buyer requests them—not published on this website.',
} as const;

export const CASE_STUDIES_INTRO = {
  headline: 'Delivery you can evaluate—without invented proof.',
  body: 'Approved case studies will be published here as clients permit. Until then, this page explains how we deliver so you can judge the approach, not marketing claims.',
} as const;

/**
 * DRAFT proof layout (Code District–style structure).
 * Replace every value with owner-approved ZeeShad facts, then set PROOF_DRAFT = false.
 * Do not treat placeholder copy as live company claims.
 */
export const PROOF_DRAFT = true;

export const PROOF_METRICS = [
  { value: 'XX', label: 'Replace — client outcomes / savings' },
  { value: 'XX+', label: 'Replace — solutions delivered' },
  { value: 'X+', label: 'Replace — years in business' },
] as const;

export const PROOF_RECOGNITIONS = [
  { label: 'Recognition 1', note: 'Replace when verified' },
  { label: 'Recognition 2', note: 'Replace when verified' },
  { label: 'Certification', note: 'Replace when verified' },
  { label: 'Listing / award', note: 'Replace when verified' },
] as const;

export const PROOF_TESTIMONIALS = [
  {
    quote: 'Replace with an approved client quote. Do not publish without permission.',
    name: 'Client name',
    role: 'Title, organisation',
    result: 'Replace — outcome headline (only if verified)',
  },
  {
    quote: 'Replace with an approved client quote. Do not publish without permission.',
    name: 'Client name',
    role: 'Title, organisation',
    result: 'Replace — outcome headline (only if verified)',
  },
  {
    quote: 'Replace with an approved client quote. Do not publish without permission.',
    name: 'Client name',
    role: 'Title, organisation',
    result: 'Replace — outcome headline (only if verified)',
  },
] as const;
