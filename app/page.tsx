import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { MAIN_SERVICES, COMPANY_ONE_LINER } from '@/lib/content/services';

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
      areaServed: ['PK', 'International'],
      availableLanguage: ['English', 'Urdu'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    sameAs: ['https://qr-codify.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ZeeShad services',
      itemListElement: [
        ...MAIN_SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${service.title} sub-services`,
              itemListElement: service.subServices.map((sub) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: sub.name,
                  description: sub.summary,
                },
              })),
            },
          },
        })),
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Qr-Codify',
            url: 'https://qr-codify.com',
            description: 'QR code generation and management platform',
          },
        },
      ],
    },
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZeeShad',
    url: canonicalUrl,
    description:
      'Business Solutions, Digital Marketing and Consultancy from ZeeShad (Private) Limited.',
    publisher: { '@id': `${canonicalUrl}#organization` },
    inLanguage: 'en',
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does ZeeShad offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Three main lines: Business Solutions (custom ERP, SaaS and product builds, e-commerce, automation and integrations), Digital Marketing (SEO, paid media, social, creative, email/CRM and analytics), and Consultancy (transformation advisory, technology selection, operations, growth advisory, scoping and vendor oversight).',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is ZeeShad a good fit for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Owners, marketing leads and operations managers at SMEs and mid-size companies who need better systems, clearer demand generation, or independent advice before a major software or marketing investment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we combine services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many briefs mix lines—for example a Business Solutions build with Digital Marketing launch support, or Consultancy first to define scope before delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is ZeeShad based and how do you work with remote clients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ZeeShad (Private) Limited is based in Karachi, Pakistan. We work with clients over email, video calls and messaging, and we aim to overlap with UK afternoons and US Eastern mornings when needed. Business hours are Monday–Friday, 09:00–18:00 Pakistan Standard Time (PKT, UTC+5).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I start a project with ZeeShad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Send a short brief via the contact form, email info@zeeshad.com, or WhatsApp. Include which service line you care about. We reply with a written scope outline and estimate within two business days.',
        },
      },
    ],
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
