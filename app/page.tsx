import dynamic from 'next/dynamic';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HomeHero from '@/components/home/HomeHero';
import Footer from '@/components/Footer';
import { HOME_META, SERVICE_TIERS, WHY_PAGE } from '@/lib/content/marketing';
import { COMPANY } from '@/lib/content/site';

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
const StoriesSection = dynamic(() => import('@/components/home/StoriesSection'), {
  loading: sectionLoading,
});
const SecuritySection = dynamic(() => import('@/components/home/SecuritySection'), {
  loading: sectionLoading,
});
const Faq = dynamic(() => import('@/components/Faq'), { loading: sectionLoading });
const DiscoverySection = dynamic(() => import('@/components/home/DiscoverySection'), {
  loading: sectionLoading,
});

export const metadata = {
  title: HOME_META.title,
  description: HOME_META.description,
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zeeshad.com';
  const canonicalUrl = baseUrl.replace(/\/$/, '');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${canonicalUrl}#organization`,
    name: COMPANY.legalName,
    legalName: COMPANY.legalName,
    url: canonicalUrl,
    logo: `${canonicalUrl}/header-logo.png`,
    description: COMPANY.positioning,
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
      email: COMPANY.email,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ZeeShad marketing services',
      itemListElement: SERVICE_TIERS.map((tier) => ({
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: tier.title,
          description: tier.homeBlurb,
        },
      })),
    },
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZeeShad',
    url: canonicalUrl,
    description: HOME_META.description,
    publisher: { '@id': `${canonicalUrl}#organization` },
    inLanguage: 'en',
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHY_PAGE.faq.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <AnnouncementBar />
      <Header />
      <HomeHero />
      <StandTodaySection />
      <ServicesSection />
      <StoriesSection />
      <DeliveryCompareSection />
      <SecuritySection />
      <Faq />
      <DiscoverySection />
      <Footer />
    </main>
  );
}
