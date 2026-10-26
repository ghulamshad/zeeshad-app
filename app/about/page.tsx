import type { Metadata } from 'next';
import AboutMarketingContent from '@/components/pages/AboutMarketingContent';
import { ABOUT_PAGE } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: ABOUT_PAGE.metaTitle,
  description: ABOUT_PAGE.metaDescription,
  alternates: { canonical: '/about' },
  openGraph: {
    title: ABOUT_PAGE.metaTitle,
    description: ABOUT_PAGE.metaDescription,
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutMarketingContent />;
}
