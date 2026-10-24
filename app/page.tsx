import dynamic from 'next/dynamic';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HomeHero from '@/components/home/HomeHero';
import Footer from '@/components/Footer';
import { COMPANY_ONE_LINER, MAIN_SERVICES, SOLUTIONS_FAQ } from '@/lib/content/solutions';
import { SOLUTION_PILLARS } from '@/lib/content/site';

const sectionLoading = () => (
  <div className="section-loading" aria-hidden="true">
    <span className="section-loading-spinner" />
  </div>
);

const StandTodaySection = dynamic(() => import('@/components/home/StandTodaySection'), {
  loading: sectionLoading,
});
const DeliveryCompareSection = dynamic(() => import('@/components/home/DeliveryCompareSection'), {
  loading: sectionLoading,
});
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  loading: sectionLoading,
});
const Products = dynamic(() => import('@/components/Products'), { loading: sectionLoading });
const StoriesSection = dynamic(() => import('@/components/home/StoriesSection'), {
  loading: sectionLoading,
});
const SecuritySection = dynamic(() => import('@/components/home/SecuritySection'), {
  loading: sectionLoading,
});
const HowWeWork = dynamic(() => import('@/components/HowWeWork'), { loading: sectionLoading });
const Faq = dynamic(() => import('@/components/Faq'), { loading: sectionLoading });
const DiscoverySection = dynamic(() => import('@/components/home/DiscoverySection'), {
  loading: sectionLoading,
});

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
      contactType: 'sales',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    sameAs: ['https://desk.zeeshad.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ZeeShad solutions',
      itemListElement: [
        ...SOLUTION_PILLARS.map((pillar) => ({
          '@type': 'Offer' as const,
          itemOffered: {
            '@type': 'Service' as const,
            name: pillar.title,
            description: pillar.outcome,
          },
        })),
        ...MAIN_SERVICES.map((service) => ({
          '@type': 'Offer' as const,
          itemOffered: {
            '@type': 'Service' as const,
            name: service.title,
            description: service.description,
          },
        })),
      ],
    },
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZeeShad',
    url: canonicalUrl,
    description: COMPANY_ONE_LINER,
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
    <main id="main-content" role="main" className="page-home">
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
      <HomeHero />
      <StandTodaySection />
      <DeliveryCompareSection />
      <ServicesSection />
      <Products />
      <StoriesSection />
      <SecuritySection />
      <HowWeWork />
      <Faq />
      <DiscoverySection />
      <Footer />
    </main>
  );
}
