import type { Metadata } from 'next';
import ResourcesContent from '@/components/pages/ResourcesContent';
import { RESOURCES_PAGE } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: RESOURCES_PAGE.metaTitle,
  description: RESOURCES_PAGE.metaDescription,
  alternates: { canonical: '/resources' },
  openGraph: {
    title: RESOURCES_PAGE.metaTitle,
    description: RESOURCES_PAGE.metaDescription,
    url: '/resources',
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
