import type { Metadata } from 'next';
import CaseStudiesContent from '@/components/pages/CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Delivery Approach',
  description:
    'How ZeeShad delivers software engagements: written scope, milestones, ownership, and handover. Case studies published when clients approve.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Delivery Approach | ZeeShad',
    description:
      'How ZeeShad delivers software engagements. Case studies published when clients approve.',
    url: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
