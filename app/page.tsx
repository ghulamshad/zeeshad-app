import dynamic from 'next/dynamic';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { COMPANY_ONE_LINER, MAIN_SERVICES, SOLUTIONS_FAQ } from '@/lib/content/solutions';

const sectionLoading = () => (
  <div className="section-loading" aria-hidden="true">
    <span className="section-loading-spinner" />
  </div>
);

const Features = dynamic(() => import('@/components/Features'), { loading: sectionLoading });
const Products = dynamic(() => import('@/components/Products'), { loading: sectionLoading });
const About = dynamic(() => import('@/components/About'), { loading: sectionLoading });
const Faq = dynamic(() => import('@/components/Faq'), { loading: sectionLoading });
const CTASection = dynamic(() => import('@/components/CTASection'), { loading: sectionLoading });
const Contact = dynamic(() => import('@/components/Contact'), { loading: sectionLoading });

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zeeshad.com';
  const canonicalUrl = baseUrl.replace(/\/$/, '');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${canonicalUrl}#organization`,
    name: 'ZeeShad (Private) Limited',
    legalName: 'ZeeShad (Private) Limited',
    url: canonicalUrl,
    logo: `${canonicalUrl}/header-logo.png`,
    description: COMPANY_ONE_LINER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D-17 Ground Floor, Gulistan Society',
      addressLocality: 'Quaidabad',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-304-0058323',
      email: 'info@zeeshad.com',
      contactType: 'Customer Service',
      areaServed: ['PK', 'US', 'GB', 'EU'],
      availableLanguage: ['English', 'Urdu'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    sameAs: ['https://qr-codify.com', 'https://desk.zeeshad.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ZeeShad services',
      itemListElement: MAIN_SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZeeShad',
    url: canonicalUrl,
    description: 'Software and growth partner for scaling businesses.',
    publisher: { '@id': `${canonicalUrl}#organization` },
    inLanguage: 'en',
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SOLUTIONS_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main id="main-content" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <AnnouncementBar />
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Faq />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
