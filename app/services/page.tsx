import type { Metadata } from 'next';
import ServicesOverviewContent from '@/components/pages/ServicesOverviewContent';
import { SERVICES_OVERVIEW } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: SERVICES_OVERVIEW.metaTitle,
  description: SERVICES_OVERVIEW.metaDescription,
  alternates: { canonical: '/services' },
  openGraph: {
    title: SERVICES_OVERVIEW.metaTitle,
    description: SERVICES_OVERVIEW.metaDescription,
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
