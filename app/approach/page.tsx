import type { Metadata } from 'next';
import ApproachContent from '@/components/pages/ApproachContent';
import { APPROACH_PAGE } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: APPROACH_PAGE.metaTitle,
  description: APPROACH_PAGE.metaDescription,
  alternates: { canonical: '/approach' },
  openGraph: {
    title: APPROACH_PAGE.metaTitle,
    description: APPROACH_PAGE.metaDescription,
    url: '/approach',
  },
};

export default function ApproachPage() {
  return <ApproachContent />;
}
