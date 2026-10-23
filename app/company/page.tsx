import type { Metadata } from 'next';
import CompanyContent from '@/components/pages/CompanyContent';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'ZeeShad (Private) Limited — Karachi-based software company for enterprise systems, custom SaaS, and AI automation.',
  alternates: { canonical: '/company' },
  openGraph: {
    title: 'Company | ZeeShad',
    description:
      'ZeeShad (Private) Limited — enterprise software, AI and digital transformation.',
    url: '/company',
  },
};

export default function CompanyPage() {
  return <CompanyContent />;
}
