export type SubService = {
  name: string;
  summary: string;
};

export type MainService = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  subServices: SubService[];
};

export const MAIN_SERVICES: MainService[] = [
  {
    id: 'business-solutions',
    num: '01',
    title: 'Business Solutions',
    tagline: 'Systems that run the business',
    description:
      'We design and deliver the software your operations depend on—custom ERP, SaaS products, e-commerce, and automation that match how your teams actually work. Clear scopes, written estimates, and delivery by the people you speak with.',
    outcomes: [
      'One connected system instead of scattered spreadsheets and tools',
      'Finance, inventory, HR and sales data you can trust',
      'Faster fulfilment, fewer manual hand-offs, clearer reporting',
    ],
    subServices: [
      {
        name: 'Custom ERP systems',
        summary:
          'Finance, inventory, HR, procurement and reporting modules assembled around your process—not a rigid off-the-shelf template.',
      },
      {
        name: 'SaaS & product builds',
        summary:
          'From discovery to first release: multi-tenant architecture, auth, billing patterns and iteration plans for your own product.',
      },
      {
        name: 'E-commerce & marketplaces',
        summary:
          'Storefronts, catalogues, checkout, payments and fulfilment integrations for retail brands and multi-vendor platforms.',
      },
      {
        name: 'Business process automation',
        summary:
          'Workflows, approvals, notifications and system integrations that cut repetitive work across departments.',
      },
      {
        name: 'Integrations & legacy modernization',
        summary:
          'Connect existing tools via APIs, migrate critical data, and replace fragile manual bridges between systems.',
      },
      {
        name: 'Z-ERP & Z-POS frameworks',
        summary:
          'Internal delivery frameworks we adapt for client ERP and point-of-sale projects—assembled to fit, not sold as public SaaS.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    num: '02',
    title: 'Digital Marketing',
    tagline: 'Demand that compounds',
    description:
      'We plan and run digital marketing that supports real business goals—qualified leads, stronger brand presence and measurable growth—not vanity metrics. Strategy, creative, channels and reporting stay aligned with your offer and capacity to deliver.',
    outcomes: [
      'Clear positioning and messages your audience actually understands',
      'Paid and organic channels working as one plan',
      'Reporting tied to enquiries, pipeline and revenue—not only impressions',
    ],
    subServices: [
      {
        name: 'SEO & content strategy',
        summary:
          'Keyword and intent research, on-page structure, technical hygiene and content calendars built for search and sales conversations.',
      },
      {
        name: 'Paid media (Google & Meta)',
        summary:
          'Campaign structure, creative testing, audience targeting and budget pacing for search, display and social ads.',
      },
      {
        name: 'Social media management',
        summary:
          'Channel strategy, publishing cadence, community response and creative direction across the platforms your buyers use.',
      },
      {
        name: 'Brand & campaign creative',
        summary:
          'Landing pages, ad creatives, offer framing and campaign assets that match your brand and conversion goals.',
      },
      {
        name: 'Email, CRM & nurture',
        summary:
          'Sequences, segmented lists and CRM-friendly flows that turn new leads into booked conversations.',
      },
      {
        name: 'Analytics & conversion optimization',
        summary:
          'Tracking setup, funnel reviews, A/B tests and practical improvements on pages and forms that already get traffic.',
      },
    ],
  },
  {
    id: 'consultancy',
    num: '03',
    title: 'Consultancy',
    tagline: 'Clarity before commitment',
    description:
      'Independent advice when you need a decision, a roadmap or a second pair of eyes—before you invest in software, marketing or a larger transformation. We document options, trade-offs and next steps you can act on.',
    outcomes: [
      'A written view of priorities, risks and sequencing',
      'Technology and channel choices grounded in your constraints',
      'Scopes and briefs you can use with your team or vendors',
    ],
    subServices: [
      {
        name: 'Digital transformation advisory',
        summary:
          'Assess current processes and tools, define a pragmatic roadmap, and sequence change so operations keep running.',
      },
      {
        name: 'Technology selection & architecture',
        summary:
          'Compare build vs buy, stack options and integration approaches with cost, risk and time-to-value in mind.',
      },
      {
        name: 'Operations & process consulting',
        summary:
          'Map workflows, find bottlenecks and redesign hand-offs before you automate or replace systems.',
      },
      {
        name: 'Growth & go-to-market advisory',
        summary:
          'Clarify ICP, offer packaging, pricing signals and channel mix so marketing and product stay aligned.',
      },
      {
        name: 'Project scoping & estimates',
        summary:
          'Turn vague ideas into work packages, acceptance criteria and budget bands you can approve with confidence.',
      },
      {
        name: 'Vendor & delivery oversight',
        summary:
          'Review proposals, milestones and deliverables so you stay in control when work is shared across partners.',
      },
    ],
  },
];

export const SERVICE_SELECT_OPTIONS = [
  'Business Solutions',
  'Digital Marketing',
  'Consultancy',
  'Business Solutions — Custom ERP',
  'Business Solutions — SaaS / product build',
  'Business Solutions — E-commerce',
  'Business Solutions — Automation',
  'Digital Marketing — SEO & content',
  'Digital Marketing — Paid media',
  'Digital Marketing — Social media',
  'Digital Marketing — Analytics & CRO',
  'Consultancy — Transformation advisory',
  'Consultancy — Technology selection',
  'Consultancy — Growth advisory',
  'Other',
] as const;

export const COMPANY_ONE_LINER =
  'ZeeShad (Private) Limited helps growing businesses with Business Solutions, Digital Marketing and Consultancy—from systems that run operations to campaigns that create demand and advice that clarifies the next move.';
