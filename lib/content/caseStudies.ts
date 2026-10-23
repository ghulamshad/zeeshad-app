/**
 * Approved case studies only. Keep PUBLISHED empty until clients permit.
 * Do not invent names, logos, quotes, or results.
 */

export type CaseStudyStatus = 'draft' | 'approved' | 'published';

export type CaseStudy = {
  slug: string;
  status: CaseStudyStatus;
  /** Client name or anonymized industry descriptor (with permission) */
  clientLabel: string;
  industry: string;
  problem: string;
  scope: string;
  role: string;
  solution: string;
  approach: string;
  /** Verified results only; include measurement period when known */
  results: string[];
  quote?: { text: string; attribution: string };
  relatedServiceHref: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Published case studies shown on /case-studies. Currently none approved. */
export const PUBLISHED_CASE_STUDIES: CaseStudy[] = [];

/**
 * Schema placeholders for owner-approved entries (not rendered while status !== published).
 * Fill only with verified, permissioned content.
 */
export const CASE_STUDY_PIPELINE: CaseStudy[] = [
  // Example shape for owners — do not publish without approval:
  // {
  //   slug: 'example-trading-operations',
  //   status: 'draft',
  //   clientLabel: 'Anonymized trading house',
  //   industry: 'Wholesale / trading',
  //   problem: '',
  //   scope: '',
  //   role: '',
  //   solution: '',
  //   approach: '',
  //   results: [],
  //   relatedServiceHref: '/solutions#enterprise-business-systems',
  //   ctaLabel: 'Discuss a similar project',
  //   ctaHref: '/contact?interest=Custom%20software',
  // },
];
