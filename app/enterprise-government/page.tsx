import type { Metadata } from 'next';
import EnterpriseContent from '@/components/pages/EnterpriseContent';

export const metadata: Metadata = {
  title: 'Enterprise & Government',
  description:
    'Technology delivery pathway for enterprise and institutional buyers. Request a proposal or corporate profile from ZeeShad.',
  alternates: { canonical: '/enterprise-government' },
  openGraph: {
    title: 'Enterprise & Government | ZeeShad',
    description:
      'Technology delivery pathway for enterprise and institutional buyers.',
    url: '/enterprise-government',
  },
};

export default function EnterpriseGovernmentPage() {
  return <EnterpriseContent />;
}
