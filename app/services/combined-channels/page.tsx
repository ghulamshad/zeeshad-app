import type { Metadata } from 'next';
import ServiceTierContent from '@/components/pages/ServiceTierContent';
import { SERVICE_TIERS } from '@/lib/content/marketing';

const tier = SERVICE_TIERS[1];

export const metadata: Metadata = {
  title: tier.metaTitle,
  description: tier.metaDescription,
  alternates: { canonical: tier.href },
  openGraph: {
    title: tier.metaTitle,
    description: tier.metaDescription,
    url: tier.href,
  },
};

export default function CombinedChannelsPage() {
  return <ServiceTierContent tier={tier} />;
}
