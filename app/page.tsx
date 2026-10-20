import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

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
    description:
      'ZeeShad builds custom ERP systems, SaaS MVPs, e-commerce platforms, and business automation for growing businesses. Based in Karachi, Pakistan.',
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
      name: 'Software delivery services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom ERP Solutions',
            description: 'Tailored enterprise resource planning systems for finance, inventory, HR and operations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS MVP Builds',
            description: 'Scoped, secure SaaS products from idea to first release',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Systems',
            description: 'Online stores and marketplaces with payments and fulfillment integrations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Automation',
            description: 'Workflows, approvals and system integrations that reduce manual work',
          },
        },
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
      'Custom ERP, SaaS MVP, e-commerce and business automation delivery for SMEs and mid-size companies.',
    publisher: { '@id': `${canonicalUrl}#organization` },
    inLanguage: 'en',
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does ZeeShad build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ZeeShad builds custom ERP systems, SaaS MVPs, e-commerce platforms and business automation. We focus on software delivery for growing businesses that need systems that work together—not a long menu of unrelated IT services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is ZeeShad a good fit for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Owners and operations leads at SMEs and mid-size companies who need a custom ERP, a first SaaS product, an online store or marketplace, or automation that connects existing tools. If you need a large multi-vendor IT department for hardware, networking and cybersecurity, we are not the right fit.',
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
          text: 'Send a short brief via the contact form, email info@zeeshad.com, or WhatsApp. We reply with a written scope outline and estimate within two business days—so you know what we propose before any build starts.',
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
