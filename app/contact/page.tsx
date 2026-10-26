import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';
import { CONTACT_PAGE } from '@/lib/content/marketing';

export const metadata: Metadata = {
  title: CONTACT_PAGE.metaTitle,
  description: CONTACT_PAGE.metaDescription,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: CONTACT_PAGE.metaTitle,
    description: CONTACT_PAGE.metaDescription,
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
