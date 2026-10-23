import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ZeeShad to discuss a project, request a proposal, or ask about ZeeShad Desk.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | ZeeShad',
    description: 'Discuss a project with ZeeShad (Private) Limited.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
