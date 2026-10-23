import type { Metadata } from 'next';
import SolutionsContent from '@/components/pages/SolutionsContent';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Enterprise business systems, custom software and SaaS, and AI automation from ZeeShad.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions | ZeeShad',
    description:
      'Enterprise business systems, custom software and SaaS, and AI automation from ZeeShad.',
    url: '/solutions',
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
