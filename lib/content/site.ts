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
  hours: 'Monday–Friday, 9 AM to 6 PM PKT. Calls booked in US business hours.',
  incorporationNote: 'Incorporated under the Companies Act, 2017. All rights reserved.',
  positioning:
    'A remote-first digital marketing agency headquartered in Karachi, Pakistan, working with businesses across the United States.',
} as const;

/** From ZeeShad_Website.pdf — home hero */
export const HOME_HERO = {
  eyebrow: 'Done-for-you digital marketing',
  h1: 'Marketing that shows up as calls, quotes',
  h1Accent: 'and booked jobs.',
  body: 'ZeeShad runs your ads, social, email and SEO and reports every Friday on what came in. One written scope, one account lead, month to month. You keep every account.',
  primaryCta: { label: 'Book a Scoping Call', href: '/contact' },
  secondaryCta: { label: 'See how it works', href: '/approach' },
} as const;

export const HOME_HERO_TAGS = [
  { label: 'One channel', href: '/services/one-channel' },
  { label: 'Combined channels', href: '/services/combined-channels' },
  { label: 'Full handoff', href: '/services/full-handoff' },
  { label: 'See the process', href: '/approach' },
] as const;

/** Trusted-by strip — text logos until files and permission collected */
export const CLIENTS = [
  { name: 'Vibe Metal', href: '/#results', note: 'US metal supply' },
  { name: 'Ascent Innovations', href: '/#results', note: 'B2B software' },
  { name: 'Dr Shahrukh Memon', href: '/#results', note: 'Aesthetic clinic' },
  { name: 'Lantis', href: '/#results', note: 'Messaging app' },
  { name: 'Mushaz Perfumes', href: 'https://www.mushaz.com/', note: 'Fragrance brand' },
  { name: 'Ornavibe', href: 'https://www.ornavibe.com/', note: 'ornavibe.com' },
  { name: 'Al Zohra Welfare Association', href: 'https://www.al-zohra.org/', note: 'Welfare & education' },
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
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/why-zeeshad', label: 'Why ZeeShad' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
] as const;

/** Header IA — Webskitters-style top nav (no Explore with AI) */
export const HEADER_NAV = [
  { id: 'about', label: 'About', href: '/about', mega: null },
  { id: 'services', label: 'Services', href: '/services', mega: 'services' as const },
  { id: 'solutions', label: 'Solutions', href: '/approach', mega: null },
  { id: 'case-studies', label: 'Case Studies', href: '/#portfolio', mega: null },
  { id: 'blog', label: 'Blog', href: '/resources', mega: null },
] as const;

export const HEADER_COMPANY_LINKS = [
  { href: '/about', title: 'About ZeeShad', desc: 'The company and the accounts that shaped it' },
  { href: '/approach', title: 'Approach', desc: 'Scope, setup, execute, report' },
  { href: '/why-zeeshad', title: 'Why ZeeShad', desc: 'The option between hiring and an agency' },
  { href: '/resources', title: 'Resources', desc: 'Guides, case studies and news' },
  { href: '/privacy', title: 'Privacy', desc: 'What the site collects and why' },
  { href: '/contact', title: 'Contact', desc: 'Book a scoping call' },
] as const;

export const HEADER_CTAS = {
  secondary: { label: 'See how it works', href: '/approach' },
  primary: { label: 'Hire Us', href: '/contact' },
} as const;

export const CONTACT_INTERESTS = [
  'Paid advertising',
  'Social media',
  'Email marketing',
  'SEO and content',
  'Lead generation',
  'All of it',
  'Not sure yet',
] as const;

export const COMPANY_OVERVIEW = {
  headline: 'A marketing department you can subscribe to.',
  paragraphs: [
    'ZeeShad (Private) Limited is a remote-first digital marketing agency headquartered in Karachi, Pakistan, working with businesses across the United States.',
    'We plan, build and run marketing for owners and small teams who need the output of a marketing department without the payroll, the term contract or the management overhead.',
    'Our clients are in the United States. Calls are booked in US business hours, all work and communication is in English and in writing, and your account lead replies within one business day, Monday to Friday.',
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

/** Live proof from ZeeShad_Website.pdf (named accounts with spend attached). */
export const PROOF_DRAFT = false;

export const PROOF_METRICS = [
  { value: '$499', label: 'From, per channel / month' },
  { value: '30 days', label: 'Written notice, month to month' },
  { value: 'Friday', label: 'Weekly note on what came in' },
] as const;

export const PROOF_RECOGNITIONS = [
  { label: 'One-page scope', note: 'Before any invoice' },
  { label: 'Account lead', note: 'Named on your scope' },
  { label: 'Your accounts', note: 'Stay in your name' },
  { label: 'US business hours', note: 'Calls booked for US clients' },
] as const;

export const PROOF_TESTIMONIALS = [
  {
    quote:
      'Vibe Metal runs Google Ads with ZeeShad on $1,500 a month of ad spend: 25 to 35 inbound calls a day and 5 to 8 qualified quote requests a day.',
    name: 'Vibe Metal',
    role: 'US metal supply and fabrication',
    result: 'Under $10 per qualified lead',
  },
  {
    quote:
      'Ascent Innovations: $1,600 of Google Ads spend over three months produced 46 qualified leads for a Microsoft Dynamics partner.',
    name: 'Ascent Innovations',
    role: 'B2B software',
    result: 'About $35 per qualified lead',
  },
  {
    quote:
      'Dr Shahrukh Memon clinic: PKR 25,000 Meta Ads spend produced 150+ WhatsApp conversations and 50+ qualified patients booked.',
    name: 'Dr Shahrukh Memon',
    role: 'Aesthetic clinic',
    result: 'About PKR 500 per patient',
  },
] as const;
