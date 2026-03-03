import type { CaseStudy, CaseStudyCategory } from '@/store/slices/caseStudiesSlice';
import type { ContactFormState } from '@/store/slices/contactSlice';

const MOCK_DELAY = 800;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Unified ERP for Manufacturing',
    category: 'erp',
    description: 'End-to-end ERP covering finance, inventory, HR, and production for a mid-size manufacturer.',
    client: 'Manufacturing Co.',
    year: '2024',
    tags: ['ERP', 'Finance', 'Inventory', 'HR'],
  },
  {
    id: '2',
    title: 'Retail ERP & POS Integration',
    category: 'erp',
    description: 'Custom ERP with multi-store POS integration and real-time reporting.',
    client: 'Retail Chain',
    year: '2024',
    tags: ['ERP', 'POS', 'Retail'],
  },
  {
    id: '3',
    title: 'B2B SaaS Platform MVP',
    category: 'saas',
    description: 'Subscription-based platform for vendor management and procurement.',
    client: 'ProcureTech',
    year: '2024',
    tags: ['SaaS', 'MVP', 'B2B'],
  },
  {
    id: '4',
    title: 'HealthTech SaaS Dashboard',
    category: 'saas',
    description: 'MVP for clinic management with appointments, billing, and patient records.',
    client: 'HealthCare Plus',
    year: '2023',
    tags: ['SaaS', 'MVP', 'Healthcare'],
  },
  {
    id: '5',
    title: 'Multi-vendor E-commerce Marketplace',
    category: 'ecommerce',
    description: 'Custom marketplace with vendor onboarding, payments, and fulfillment.',
    client: 'MarketPlace Inc',
    year: '2024',
    tags: ['E-commerce', 'Marketplace', 'Payments'],
  },
  {
    id: '6',
    title: 'D2C E-commerce with Subscription',
    category: 'ecommerce',
    description: 'Brand store with subscription boxes and recurring billing.',
    client: 'Brand Direct',
    year: '2023',
    tags: ['E-commerce', 'Subscription', 'D2C'],
  },
  {
    id: '7',
    title: 'Order & Inventory Automation',
    category: 'automation',
    description: 'Automated order processing, stock sync, and supplier integrations.',
    client: 'Logistics Pro',
    year: '2024',
    tags: ['Automation', 'Integration', 'Inventory'],
  },
  {
    id: '8',
    title: 'Workflow & Approval Automation',
    category: 'automation',
    description: 'Custom workflows for approvals, notifications, and document routing.',
    client: 'Enterprise Corp',
    year: '2023',
    tags: ['Automation', 'Workflow', 'BPM'],
  },
];

export async function fetchCaseStudiesApi(): Promise<CaseStudy[]> {
  await delay(MOCK_DELAY);
  return mockCaseStudies;
}

export async function submitContactApi(payload: ContactFormState): Promise<{ ok: boolean }> {
  await delay(MOCK_DELAY);
  if (process.env.NODE_ENV === 'development') {
    console.log('[Mock API] Contact submitted:', payload);
  }
  return { ok: true };
}

export function filterCaseStudies(
  items: CaseStudy[],
  filter: CaseStudyCategory
): CaseStudy[] {
  if (filter === 'all') return items;
  return items.filter((item) => item.category === filter);
}
