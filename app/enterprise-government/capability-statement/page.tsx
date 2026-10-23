import type { Metadata } from 'next';
import CapabilityStatementContent from '@/components/pages/CapabilityStatementContent';

export const metadata: Metadata = {
  title: 'Request Corporate Profile',
  description:
    'Request a ZeeShad corporate capability statement for enterprise or institutional procurement. Sensitive documents are shared on request, not published publicly.',
  alternates: { canonical: '/enterprise-government/capability-statement' },
  openGraph: {
    title: 'Request Corporate Profile | ZeeShad',
    description:
      'Request a ZeeShad corporate capability statement for enterprise or institutional procurement.',
    url: '/enterprise-government/capability-statement',
  },
};

export default function CapabilityStatementPage() {
  return <CapabilityStatementContent />;
}
