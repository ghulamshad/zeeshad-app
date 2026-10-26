import type { Metadata } from 'next';
import WhyZeeshadContent from '@/components/pages/WhyZeeshadContent';
import { WHY_PAGE } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: WHY_PAGE.metaTitle,
  description: WHY_PAGE.metaDescription,
  alternates: { canonical: '/why-zeeshad' },
  openGraph: {
    title: WHY_PAGE.metaTitle,
    description: WHY_PAGE.metaDescription,
    url: '/why-zeeshad',
  },
};

export default function WhyZeeshadPage() {
  return <WhyZeeshadContent />;
}
