/**
 * Website copy from ZeeShad_Website.pdf (October 2026).
 * Confirm-marked items kept as stated in the brief.
 */

export const SCOPING_CTA = {
  label: 'Book a Scoping Call',
  href: '/contact',
} as const;

export const CALENDLY_URL = 'https://calendly.com/marketing-alihamza/30min';

export const TOP_BAR = {
  line: 'Monday to Friday, 9 AM to 6 PM PKT · Calls booked in US business hours · Karachi, Pakistan · info@zeeshad.com',
  note: 'LinkedIn and Instagram URLs: confirm before linking.',
} as const;

export const CLOSING_BLOCK = {
  title: 'Ready to hand it off?',
  body: 'Book a 30-minute scoping call. Tell us about the business and the number that needs to move. Within three business days you get a one-page scope with the deliverables, the dates and the price. You decide from there, and there is no invoice until you approve it.',
  cta: SCOPING_CTA,
} as const;

export const HQ = {
  legalName: 'ZeeShad (Private) Limited',
  blurb:
    'A remote-first digital marketing agency headquartered in Karachi, Pakistan, working with businesses across the United States.',
  address: 'D-17 Ground Floor, Gulistan Society, Quaidabad, Karachi, Pakistan',
  phone: '+92 304 0058323',
  email: 'info@zeeshad.com',
  site: 'zeeshad.com',
} as const;

export const WHERE_WE_WORK = {
  title: 'Built for US businesses, run from Karachi',
  body: 'Our clients are in the United States. Calls are booked in US business hours, all work and communication is in English and in writing, and your account lead replies within one business day, Monday to Friday.',
} as const;

export const HOME_META = {
  title: 'Done-for-You Digital Marketing Agency for US Businesses',
  description:
    'ZeeShad runs your ads, social, email and SEO and reports every Friday on what came in. One written scope, one account lead, month to month.',
} as const;

export const HOME_HERO = {
  h1: 'Marketing that shows up as calls, quotes and booked jobs.',
  body: 'ZeeShad runs your ads, social, email and SEO and reports every Friday on what came in. One written scope, one account lead, month to month. You keep every account.',
  primaryCta: SCOPING_CTA,
  secondaryCta: { label: 'See how it works', href: '/approach' },
  underButtons:
    '30 minutes. You leave with a one-page scope and a price within three business days, whether or not you hire us.',
  facts: [
    'From $499 per month, per channel',
    'Month to month, 30 days written notice',
    'Accounts, assets and data in your name',
  ],
} as const;

export const HOME_PILLAR_CARDS = [
  {
    title: 'Our approach',
    body: 'Five steps, and you show up for two of them: the scoping call and the approval. Everything after that runs on a weekly rhythm you can see.',
    cta: { label: 'See the process', href: '/approach' },
  },
  {
    title: 'Our experience',
    body: 'Google Ads, Meta Ads, email and SEO for US B2B suppliers, software partners, clinics and consumer apps. Four accounts are on this site with the spend and the cost per lead attached.',
    cta: { label: 'See the results', href: '/#results' },
  },
  {
    title: 'Our value',
    body: 'The output of a marketing department at a fraction of the payroll, with the terms of a subscription rather than an agency contract. Scope first, invoice second, leave with everything in 30 days.',
    cta: { label: 'Why ZeeShad', href: '/why-zeeshad' },
  },
] as const;

export const HOME_SERVICES_INTRO = {
  title: 'Three ways to hand it off',
  body: 'Start with the one channel that moves the number you care about most, combine two or three under one scope, or hand over the whole function. Every engagement has the same account lead, the same Friday note and the same terms. Only the price line changes.',
} as const;

export const SERVICE_TIERS = [
  {
    slug: 'one-channel',
    title: 'One channel',
    href: '/services/one-channel',
    homeBlurb:
      'One channel, one scope, one target. Paid ads, social, email, SEO or lead generation, run end to end. Most clients start here.',
    bestFor: 'One number to move this quarter',
    channels: '1',
    fee: 'From $499 per month',
    hero: 'One channel. One scope. One number to move.',
    heroBody:
      'Pick the channel that reaches your buyers and hand it over. ZeeShad plans it, builds it, runs it and reports on it every Friday. Most clients start here, and most add a second channel once the first is running.',
    metaTitle: 'Single-Channel Marketing Management from $499/mo',
    metaDescription:
      'Paid ads, social, email, SEO or lead generation run end to end against one target. Written scope first, Friday note every week.',
  },
  {
    slug: 'combined-channels',
    title: 'Combined channels',
    href: '/services/combined-channels',
    homeBlurb:
      'Two or three channels planned together so the ad traffic has a landing page, the leads have a follow-up sequence and the content has somewhere to go.',
    bestFor: 'A funnel that needs its parts connected',
    channels: '2 or 3',
    fee: 'From $998 per month',
    hero: 'Two or three channels, planned as one.',
    heroBody:
      'Ads bring the traffic, the landing page converts it, the email sequence follows it up, the content gives it a reason to come back. When those are run by different people they fight each other. Under one scope and one account lead they are built to hand off to each other.',
    metaTitle: 'Multi-Channel Marketing Under One Scope | ZeeShad',
    metaDescription:
      'Ads, landing pages, email and content planned together so leads do not go cold between channels. One account lead, one report.',
  },
  {
    slug: 'full-handoff',
    title: 'Full handoff',
    href: '/services/full-handoff',
    homeBlurb:
      'ZeeShad becomes the marketing department: planning, production, publishing, reporting and the weekly decisions in between. You approve the plan and read the note.',
    bestFor: 'No one owns marketing and you want that to stop',
    channels: 'Every channel in the scope',
    fee: 'From $1,497 per month',
    hero: 'Your marketing department, without the payroll.',
    heroBody:
      'ZeeShad takes the whole function: the quarterly plan, every channel in it, the creative, the publishing, the tracking, the reporting and the weekly decisions in between. You approve the plan once a quarter and read the Friday note. That is the job.',
    metaTitle: 'Outsourced Marketing Department for US Businesses',
    metaDescription:
      'ZeeShad runs the whole marketing function: quarterly plan, every channel, weekly notes, monthly reports. Month to month, from $1,497.',
  },
] as const;

export const SERVICES_OVERVIEW = {
  hero: 'Done-for-you digital marketing, three ways in.',
  body: 'Every ZeeShad engagement is done for you. The difference between the three options is how much of your marketing you hand over, and that is the only thing that changes the price. The scope, the account lead, the Friday note and the month-to-month terms are the same on all three.',
  metaTitle: 'Digital Marketing Services for Small Business | ZeeShad',
  metaDescription:
    'Hand over one channel, combine two or three, or the whole function. Every engagement scoped in writing, priced per channel, month to month.',
  priceNote: 'Prices assume $499 per channel. Confirm the figure; it appears on every service page.',
} as const;

export const ONE_CHANNEL_PAGE = {
  whyTitle: 'The fastest way to find out if we are worth it',
  whyBody:
    'A single channel has a single target: cost per qualified lead, cost per booked job, return on ad spend. It is written into the scope, reviewed every month, and it is the number we are judged on. You do not need a full marketing plan to start. You need one thing that is not working and the willingness to let someone else fix it.',
  channels: [
    {
      title: 'Paid advertising',
      body: 'Google Ads and Meta Ads campaigns built, launched and adjusted weekly against the target in your scope. Two ad variants in test at all times. You receive the campaigns in your own ad accounts, the creative files, and a weekly report on spend, cost per lead and what changed.',
    },
    {
      title: 'Social media',
      body: 'A monthly content calendar you approve once, then posts designed, written, scheduled and published on the agreed platforms, with replies monitored. You receive the approved calendar, the published posts, and a monthly report on reach, engagement and profile actions.',
    },
    {
      title: 'Email marketing',
      body: 'Welcome, nurture, promotional and win-back sequences written, designed and automated inside your email platform, with list hygiene and deliverability checks. You receive live sequences in your account, the copy files, and a monthly report on open, click and conversion rates.',
    },
    {
      title: 'SEO and content',
      body: 'Keyword research, on-page fixes, a technical issue list for your developer, and content planned, written and published around the searches your buyers make. Expect three to six months before rankings move. You receive a keyword and page plan, the published content, and a monthly ranking and traffic report.',
    },
    {
      title: 'Lead generation',
      body: 'Landing pages, forms, lead magnets and campaigns connected to your CRM so every lead arrives with its source, then follow-up sequences so none sit untouched. You receive the pages and forms in your accounts, the CRM setup, and a weekly lead report by source.',
    },
  ],
  cost: 'From $499 per month management fee, plus a one-time setup fee stated on your scope. Ad spend is paid by you directly to Google or Meta and never passes through us. Month to month, 30 days written notice.',
  proof:
    'Vibe Metal, a US metal supply and fabrication business, runs Google Ads with ZeeShad on $1,500 a month of ad spend. The account produces 25 to 35 inbound calls a day and 5 to 8 qualified quote requests a day, at under $10 per qualified lead.',
} as const;

export const COMBINED_PAGE = {
  whyTitle: 'The lead you paid for should not go cold in your inbox',
  whyBody:
    'Most lost revenue in small-business marketing sits between channels: the ad click that lands on a page nobody tested, the quote request nobody followed up, the list nobody emailed. A combined scope assigns each handoff an owner and a deliverable, so the gaps are closed on purpose rather than discovered in the monthly report.',
  combos: [
    {
      title: 'Ads plus lead generation',
      body: 'Google or Meta campaigns feeding a landing page and a form wired to your CRM, with a follow-up sequence that goes out within minutes of the enquiry. For service businesses that need booked appointments, not just traffic.',
    },
    {
      title: 'Ads plus email',
      body: 'Paid traffic to grow the list and automated sequences to turn the list into repeat revenue. For ecommerce and any business with a product people buy more than once.',
    },
    {
      title: 'SEO plus social',
      body: 'Content written for the searches your buyers make, cut into posts for the platforms they use, so one piece of work publishes in two places. For businesses building a presence that compounds rather than a campaign that stops when the budget does.',
    },
  ],
  receive: [
    'One scope naming every channel, every deliverable and every handoff between them',
    'One account lead who plans across the channels and reviews everything before it ships',
    'One Friday note covering all channels, not one per channel',
    'One monthly report with the numbers against the targets in the scope, and the plan for next month',
  ],
  cost: 'From $998 per month for two channels and $1,497 for three, plus a one-time setup fee stated on your scope. Ad spend is separate and paid by you to the platforms. Month to month, 30 days written notice.',
  proof:
    'Ascent Innovations, a B2B software company and Microsoft Dynamics partner, runs Google Ads with ZeeShad into a lead capture and follow-up setup. Over three months, $1,600 of ad spend produced 46 qualified leads, about $35 each.',
} as const;

export const FULL_HANDOFF_PAGE = {
  whoForTitle: 'Businesses where marketing has no owner, or the wrong one',
  whoFor: [
    'The owner is doing it in the evenings and it is not getting done',
    'One person is doing everything and burning out',
    'An agency is sending reports and nobody can say what changed',
    'A first marketing hire would cost more than the budget for marketing itself',
  ],
  changesTitle: 'A plan, a rhythm and one person to call',
  changesBody:
    'Each quarter starts with a plan you approve: the number to move, the channels that will move it, the budget split and the targets. Each week ends with the Friday note on what shipped and what came in. Each month ends with a report against the targets and a planning call with your account lead. Nothing is published without a plan behind it, and nothing is reported that you cannot check in your own accounts.',
  receive: [
    'A quarterly marketing plan with channel targets, approved by you before the quarter starts',
    'Every channel in the scope run end to end: paid ads, social, email, SEO and content, lead generation, landing pages, tracking',
    'An account lead who plans, reviews and reports, and a monthly planning call',
    'The Friday note and the monthly report, plus a quarterly review with next quarter\'s plan',
    'Every account, page, list, asset and report in your name, from the first week',
  ],
  cost: 'From $1,497 per month for three channels, priced per channel from there, plus a one-time setup fee stated on your scope. Ad spend is separate and paid by you to the platforms. Month to month, 30 days written notice, the same as every other engagement.',
  compare: [
    {
      label: 'First marketing hire',
      monthly: 'Salary, benefits, tools, management time',
      who: 'One generalist',
      see: 'Whatever they report',
      ends: 'Notice period, handover risk',
    },
    {
      label: 'Traditional agency',
      monthly: 'Retainer, often with a 6 or 12 month term',
      who: 'A team you rarely see',
      see: 'A monthly deck',
      ends: 'Term lock-in, accounts often held',
    },
    {
      label: 'ZeeShad full handoff',
      monthly: 'From $1,497, month to month',
      who: 'One account lead plus specialists',
      see: 'A note every Friday, in writing',
      ends: '30 days, everything already in your name',
    },
  ],
} as const;

export const PROOF_ACCOUNTS = [
  {
    account: 'Vibe Metal, US metal supply and fabrication',
    channel: 'Google Ads',
    spend: '$1,500 per month',
    result: '25 to 35 inbound calls a day, plus 5 to 8 qualified quote requests a day',
    cpl: 'Under $10 per qualified lead',
  },
  {
    account: 'Ascent Innovations, B2B software, Microsoft Dynamics partner',
    channel: 'Google Ads',
    spend: '$1,600 over 3 months',
    result: '46 qualified leads',
    cpl: 'About $35',
  },
  {
    account: 'Dr Shahrukh Memon, aesthetic clinic',
    channel: 'Meta Ads',
    spend: 'PKR 25,000 (about $90)',
    result: '150+ WhatsApp conversations, 50+ qualified patients booked',
    cpl: 'About PKR 500 per patient',
  },
  {
    account: 'Lantis, private messaging app',
    channel: 'App install campaign',
    spend: 'AUD 1,500 in September',
    result: '405 installs',
    cpl: 'About AUD 3.70 per install',
  },
] as const;

export const PROOF_DISCLAIMER =
  "Figures from each client's ad account reporting as of October 2026. Spend is the client's media budget and is separate from ZeeShad's management fee. Results describe these accounts, not a forecast for yours. Confirm: Lantis installs (an earlier note recorded 4 to 5 installs on this spend).";

export const TRUSTED_BY = [
  'Vibe Metal',
  'Ascent Innovations',
  'Dr Shahrukh Memon',
  'Lantis',
  'Mushaz Perfumes',
  'Ornavibe',
  'Al Zohra Welfare Association',
] as const;

export const APPROACH_PAGE = {
  hero: 'Everything we will do for you fits on one page. Then we do it, every week.',
  body: "ZeeShad's approach comes from running ad accounts, inboxes and content calendars for owners who did not have time to manage any of them. It is built to be written down before it is paid for, visible while it is happening, and easy to leave if it stops working.",
  metaTitle: 'How ZeeShad Works: Scope, Setup, Execute, Report',
  metaDescription:
    'Five steps, you show up for two. Written scope in three business days, output visible every Friday, your accounts stay yours.',
  principles: [
    {
      title: 'In writing first',
      body: 'Nothing starts without a one-page scope naming the channels, the deliverables, the dates, what we need from you and the price. You approve it before any invoice. It is the document we are judged against every month.',
    },
    {
      title: 'Visible every week',
      body: 'Every Friday your account lead sends a short note on what shipped and what came in. If a week goes by with nothing shipped, you will know on Friday, not at the end of the quarter.',
    },
    {
      title: 'Yours to keep',
      body: 'Every ad account, page, list and asset is created in your name from the first week. If you leave, you take all of it, with logins and documentation handed over in the final week. The work has to be good enough that you stay; the contract does not do that job for us.',
    },
  ],
  steps: [
    {
      step: '1. Scoping call',
      what: '30 minutes. You describe the business, what you have tried and the number that needs to move.',
      who: 'You and us',
    },
    {
      step: '2. Written scope',
      what: 'Within three business days you get the one-page scope: channels, deliverables, timeline, what we need from you, and the price. Work starts when you approve it.',
      who: 'You approve',
    },
    {
      step: '3. Setup',
      what: 'We collect access, set up conversion tracking, record baseline numbers and gather creative assets. Usually the first week.',
      who: 'ZeeShad',
    },
    {
      step: '4. Execution',
      what: 'We plan, build and run the agreed work. Every Friday a short note on what shipped and what came in.',
      who: 'ZeeShad',
    },
    {
      step: '5. Review',
      what: 'A monthly report with the numbers against the target in your scope, what we learned, and what changes next month.',
      who: 'ZeeShad',
    },
  ],
  proof:
    'A US fabricator on $1,500 a month of Google Ads spend takes 25 to 35 inbound calls a day and 5 to 8 qualified quote requests a day, at under $10 per qualified lead. The account, the spend and the numbers are on the Results section of the home page.',
} as const;

export const WHY_PAGE = {
  introTitle: 'Why ZeeShad?',
  intro:
    'Because the two usual options for a growing US business are both expensive in a way that is hard to see. Hiring takes months and locks in a salary before anything has worked. Agencies lock in a term and hold your accounts. ZeeShad is the third option: the work of a marketing department, on the terms of a subscription.',
  metaTitle: 'Why ZeeShad: The Option Between Hiring and an Agency',
  metaDescription:
    'Specialist breadth without the payroll, agency output without the term. Six things you can hold us to, and a FAQ.',
  six: [
    {
      title: 'Written',
      body: 'The scope comes before the invoice. You see channels, deliverables and price on one page before anything starts.',
    },
    {
      title: 'Weekly',
      body: 'Output you can see every Friday: ads, posts, emails, pages and what came in, listed in a note.',
    },
    {
      title: 'Owned',
      body: 'One account lead, named on your scope, who plans the work, reviews it and answers you within one business day.',
    },
    {
      title: 'Measured',
      body: 'Every scope has a target. Every month is reported against it, in numbers you can check in your own accounts.',
    },
    {
      title: 'Portable',
      body: 'Every account and asset is in your name. Leave with 30 days notice and take all of it.',
    },
    {
      title: 'Priced per channel',
      body: 'From $499 a month per channel. Add one and only the price line changes.',
    },
  ],
  compare: [
    {
      label: 'Hire in-house',
      time: '2 to 4 months to recruit',
      commit: 'Salary and notice period',
      breadth: "One person's skills",
      visibility: 'Depends on the hire',
      accounts: 'Yours',
    },
    {
      label: 'Traditional agency',
      time: 'Weeks of onboarding',
      commit: '6 to 12 month term',
      breadth: 'Full team, rarely seen',
      visibility: 'Monthly deck',
      accounts: 'Often held by the agency',
    },
    {
      label: 'ZeeShad',
      time: 'Scope in 3 business days, live within 2 weeks',
      commit: 'Month to month, 30 days',
      breadth: 'Specialists in ads, design, copy and SEO, one account lead',
      visibility: 'Friday note, monthly report',
      accounts: 'Yours from week one',
    },
  ],
  stages: [
    {
      title: 'Pre-launch',
      body: 'You have a product or service and no customers yet. We build the launch scope: the landing page, the tracking, the first campaign and the follow-up sequence, so the first dollar of ad spend has somewhere to land.',
    },
    {
      title: 'Growing',
      body: 'You have customers and referrals, and you want a channel that brings new ones on a schedule. We start with one channel against one target and add the second once the first is paying for itself.',
    },
    {
      title: 'Established',
      body: 'You have been marketing for years and the numbers have gone flat. We audit what is running, put the targets in writing, and rebuild the channels that are underperforming before adding anything new.',
    },
  ],
  expertise: [
    'Google Ads search and Performance Max',
    'Meta Ads lead generation and sales campaigns',
    'App install campaigns',
    'Social media management',
    'Email sequences and campaigns',
    'SEO and content',
    'Landing pages and conversion fixes',
    'Conversion tracking, GA4 and GTM',
    'CRM setup and lead routing',
    'Ad creative and design',
    'Monthly reporting and planning',
  ],
  faq: [
    {
      q: 'Why three options, and which one is right for me?',
      a: 'Because businesses hand over marketing in different amounts. If you are not sure, book the call. The scope we send names the option, and you can change it later without a new contract.',
    },
    {
      q: 'What does it cost?',
      a: 'Management starts at $499 per month per channel, plus a one-time setup fee. Ad spend is separate and paid by you to the platforms. The exact figure for your work is on the written scope you receive after the call, before any invoice.',
    },
    {
      q: 'Why should I trust a team I will never meet in person?',
      a: 'Because you do not have to take anything on trust. The scope is in writing, the output is visible every Friday, the numbers are in your own accounts, and you can leave with everything in 30 days. Four accounts are on this site with the spend and the results attached.',
    },
    {
      q: 'Can you work alongside my existing marketing person or agency?',
      a: 'Yes, if the scope says who owns what. We put the split in writing so nothing is done twice or not at all.',
    },
    {
      q: 'Do you work in regulated industries?',
      a: "Yes, with the compliance rules written into the scope: approval steps, claims we will not make, and platforms' own policies for your category. Healthcare, finance and legal clients get a review step before anything is published.",
    },
    {
      q: 'How long before results?',
      a: 'Paid campaigns are usually live by the end of week two and reported weekly from then on. Email and lead generation show in the first month. SEO takes three to six months before rankings move, and we say so on the scope.',
    },
    {
      q: 'Is my information confidential?',
      a: 'Yes. We sign your NDA if you have one, and ours is on the scope if you do not. Access is granted to named accounts in your name and revoked in the final week if you leave.',
    },
    {
      q: 'What proof do you have?',
      a: 'Four client accounts on the home page, each with the spend, the result and the cost per lead. Approved client quotes and case studies are on the Resources page as they are collected.',
    },
    {
      q: 'How do I cancel?',
      a: '30 days written notice. The engagement ends at the end of that month. In the final week we hand over logins and documentation, and nothing is switched off without your say.',
    },
    {
      q: 'What results should I expect?',
      a: 'Whatever the scope says, and nothing we have not seen in your numbers. We set the target after the setup week, when we have your baseline, and we report against it every month.',
    },
  ],
  hireReasons: [
    'Breadth: specialists in ads, copy, design and SEO for less than one generalist salary',
    'Speed: a scope in three business days, live within two weeks',
    'Visibility: output in writing every Friday, not a quarterly review',
    'Flexibility: add a channel or stop with 30 days notice, no restructuring',
    'Time back: approve the plan and read the note, nothing else',
    'Ownership: everything stays in your name if you leave',
  ],
} as const;

export const ABOUT_PAGE = {
  hero: 'A marketing department you can subscribe to.',
  body: 'ZeeShad (Private) Limited is a remote-first digital marketing agency headquartered in Karachi, Pakistan, working with businesses across the United States. We plan, build and run marketing for owners and small teams who need the output of a marketing department without the payroll, the term contract or the management overhead.',
  metaTitle: 'About ZeeShad, Done-for-You Marketing Agency',
  metaDescription:
    'A Karachi-based team running digital marketing for US businesses, the accounts that shaped how we work, and what we hold ourselves to.',
  accounts: [
    {
      title: 'The fabricator that needed calls, not clicks',
      body: 'A US metal supply and fabrication business came to us with ad spend that produced traffic and no quotes. We rebuilt the Google Ads account around the searches that end in a phone call, put call and form tracking in place, and set the target at cost per qualified quote request. On $1,500 a month the account now takes 25 to 35 inbound calls a day. That account is where the Friday note started: the owner wanted to know what had changed each week, so we wrote it down.',
    },
    {
      title: 'The software partner that needed qualified, not many',
      body: 'A Microsoft Dynamics partner needed B2B leads that its sales team would call back. We cut the campaigns to the searches a buyer makes late in a decision and accepted fewer leads for better ones. $1,600 over three months produced 46 qualified leads, about $35 each. That account is where the target line on the scope comes from.',
    },
    {
      title: 'The clinic that needed bookings on a small budget',
      body: 'An aesthetic clinic had almost no ad budget and a WhatsApp number. We ran Meta lead campaigns straight into WhatsApp and counted booked patients rather than messages. PKR 25,000 of spend, about $90, produced 150 conversations and 50 booked patients. That account is why we price per channel: a small, well-run scope can outperform a large unfocused one.',
    },
  ],
  existsTitle: 'Owners knew they needed marketing. Nobody would just do it.',
  existsBody:
    'ZeeShad grew out of the same conversation, repeated: an owner who knew marketing mattered, had tried a freelancer or an agency, and was now doing it in the evenings. The advice was never the problem. The execution was. So we built an agency around execution you can see: a scope you approve, a note every Friday, numbers in your own accounts, and the right to leave with everything in 30 days.',
  stat: 'Nearly half of businesses, 47 percent, have no digital marketing strategy at all, and only around one in five has a defined one, according to Smart Insights, citing the Managing the Future of Digital Marketing research report. If you are in the first group, the scoping call is where the strategy gets written down.',
  values: [
    { title: 'Written', body: 'If it is not on the scope, it is not promised. If it is on the scope, it ships.' },
    { title: 'Weekly', body: 'Every Friday, in writing, whether the week was good or not.' },
    {
      title: 'Measured',
      body: 'Every target is a number you can check in your own account. We do not report what you cannot verify.',
    },
    {
      title: 'Portable',
      body: 'Everything in your name from the first week. We keep clients by doing the work, not by holding the logins.',
    },
  ],
  careers:
    'We hire specialists in paid media, email, SEO, design and copy, and account leads who can run a scope end to end and write a clear Friday note. Send your resume and three lines on which client account on this site you would want to run, and why, to info@zeeshad.com. Follow us on LinkedIn for open roles.',
} as const;

export const CONTACT_PAGE = {
  hero: 'Tell us what needs handling.',
  body: 'One campaign or the whole marketing function, the first step is the same. Fill in the short form or book the call directly. Within one business day you will hear from an account lead, and within three business days of the call you will have a one-page scope with a price.',
  metaTitle: 'Book a Scoping Call with ZeeShad',
  metaDescription:
    'Tell us what needs handling. A 30-minute call and a one-page scope with a price within three business days.',
  formNote:
    'Not sure which service you need? Pick Not sure yet. Most first calls start there. Or skip the form and pick a time directly on the calendar.',
  needOptions: [
    'Paid advertising',
    'Social media',
    'Email marketing',
    'SEO and content',
    'Lead generation',
    'All of it',
    'Not sure yet',
  ],
  submitLabel: 'Book My Scoping Call',
  thankYouTitle: 'Got it. Here is what happens next.',
  thankYouSteps: [
    'An account lead reads your message the same business day.',
    'You get an email within one business day with two or three call times, unless you already booked one.',
    'We talk for 30 minutes about the business and what needs to move.',
    'You get a one-page scope with deliverables and a price within three business days. You decide from there.',
  ],
} as const;

export const RESOURCES_PAGE = {
  hero: 'Notes for owners, not marketers.',
  body: 'What we are seeing in client accounts, written so you can act on it without hiring anyone. Filter by Guides, Case studies and News.',
  metaTitle: 'Marketing Notes for Owners | ZeeShad',
  metaDescription:
    'Case studies with the spend attached and guides on scopes, cost per lead and choosing an agency.',
  items: [
    {
      type: 'Case study' as const,
      title: 'Vibe Metal: 25 to 35 calls a day on $1,500 a month',
      summary:
        "How a US fabricator's Google Ads account was rebuilt around the searches that end in a phone call, with the tracking, the targets and the weekly changes.",
    },
    {
      type: 'Case study' as const,
      title: 'Ascent Innovations: 46 qualified B2B leads on $1,600',
      summary:
        'Why fewer, later-stage searches beat broad ones for a Microsoft Dynamics partner, and how qualified was defined and counted.',
    },
    {
      type: 'Guide' as const,
      title: 'What a one-page marketing scope should contain',
      summary: 'The seven lines every scope needs before you pay an agency anything, with a template to download.',
    },
    {
      type: 'Guide' as const,
      title: 'Five questions to ask any agency before you sign',
      summary:
        'Output before signing, month to month, who does the work, what happens to your accounts, results with spend attached. What good answers sound like.',
    },
    {
      type: 'Guide' as const,
      title: 'Cost per lead: the only number most owners need to track',
      summary:
        'How to calculate it from your own ad account in ten minutes, what is normal for service businesses, and when to worry.',
    },
    {
      type: 'News' as const,
      title: 'ZeeShad opens to US clients',
      summary: 'What changed, who it is for, and the terms: scope first, month to month, your accounts stay yours.',
    },
  ],
  note: 'Case studies need written client permission before publishing. The Dr Shahrukh Memon and Lantis accounts follow in month two.',
} as const;

export const PRIVACY_PAGE = {
  effective: 'October 2026',
  sections: [
    {
      title: 'What we collect',
      body: 'When you fill in the contact form or book a call, we collect your name, email, phone if you give it, company, website if you give it, and what you tell us about your needs. The site also uses analytics and advertising tags, which collect usage data such as pages viewed, device type and approximate location.',
    },
    {
      title: 'Why we collect it',
      body: 'To reply to your enquiry, schedule and run the scoping call, prepare your scope, and, if you become a client, deliver the work. Analytics data is used to understand how the site is used and to measure our own advertising.',
    },
    {
      title: 'Who we share it with',
      body: 'Scheduling runs on Calendly. Form submissions may be stored in our CRM and email tools. Analytics and advertising tags are provided by Google and Meta. We do not sell your information and we do not share it with anyone outside the tools needed to respond to you.',
    },
    {
      title: 'How long we keep it',
      body: 'Enquiry details are kept for 24 months after our last contact, or for the length of the engagement plus 24 months if you become a client, unless you ask us to delete them sooner.',
    },
    {
      title: 'Your choices',
      body: 'Email info@zeeshad.com to see, correct or delete what we hold about you, or to opt out of marketing emails. You can decline non-essential cookies in the banner when you first visit.',
    },
    {
      title: 'Changes',
      body: 'If this policy changes, the new version is posted here with a new effective date.',
    },
  ],
  confirmNote:
    'Confirm: the tools in use (CRM, email platform, analytics, ad tags) and have the policy reviewed for the US states you sell into before publishing.',
} as const;

export const CONTACT_NEED_OPTIONS = CONTACT_PAGE.needOptions;
