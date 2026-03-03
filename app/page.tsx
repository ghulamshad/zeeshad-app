import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const sectionLoading = () => (
  <div className="section-loading" aria-hidden="true">
    <span className="section-loading-spinner" />
  </div>
);

const Features = dynamic(() => import('@/components/Features'), { loading: sectionLoading });
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), { loading: sectionLoading });
const Products = dynamic(() => import('@/components/Products'), { loading: sectionLoading });
const About = dynamic(() => import('@/components/About'), { loading: sectionLoading });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { loading: sectionLoading });
const CTASection = dynamic(() => import('@/components/CTASection'), { loading: sectionLoading });
const Contact = dynamic(() => import('@/components/Contact'), { loading: sectionLoading });

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com";
  const canonicalUrl = baseUrl.replace(/\/$/, "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${canonicalUrl}#organization`,
    "name": "ZeeShad (Private) Limited",
    "legalName": "ZeeShad (Private) Limited",
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/header-logo.png`,
    "description": "ZeeShad delivers custom ERP solutions, SaaS MVP builds, e-commerce systems, and business automation. From idea to launch—Karachi, Pakistan and worldwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D-17 Ground Floor, Gulistan Society",
      "addressLocality": "Quaidabad",
      "addressRegion": "Sindh",
      "addressCountry": "PK",
      "postalCode": ""
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-304-0058323",
      "email": "info@zeeshad.com",
      "contactType": "Customer Service",
      "areaServed": ["PK", "International"],
      "availableLanguage": ["English", "Urdu"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://qr-codify.com"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services and Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom ERP Solutions",
            "description": "Tailored enterprise resource planning systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS MVP Builds",
            "description": "Scalable SaaS products from idea to launch"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Systems",
            "description": "Online stores and marketplaces with payments and fulfillment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "Workflows, approvals, and system integrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Qr-Codify",
            "url": "https://qr-codify.com",
            "description": "Advanced QR code generation and management platform"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z-ERP",
            "description": "Comprehensive Enterprise Resource Planning solution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z-POS",
            "description": "Modern Point of Sale system for retail and hospitality"
          }
        }
      ]
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ZeeShad (Private) Limited",
    "image": `${canonicalUrl}/header-logo.png`,
    "@id": canonicalUrl,
    "url": canonicalUrl,
    "telephone": "+92-304-0058323",
    "email": "info@zeeshad.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D-17 Ground Floor, Gulistan Society",
      "addressLocality": "Quaidabad",
      "addressRegion": "Sindh",
      "postalCode": "",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8607,
      "longitude": 67.0011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ZeeShad",
    "url": canonicalUrl,
    "description": "ZeeShad builds custom ERP systems, SaaS MVPs, e-commerce platforms, and business automation solutions for SMEs and enterprises.",
    "publisher": { "@id": `${canonicalUrl}#organization` },
    "inLanguage": "en-US",
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does ZeeShad provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "ZeeShad provides custom ERP development, SaaS MVP builds, e-commerce platforms, and business automation solutions, along with related IT consulting and digital transformation services.",
        },
      },
      {
        "@type": "Question",
        "name": "Who is ZeeShad a good fit for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "ZeeShad is a good fit for SMEs and enterprises that want to modernize operations, integrate legacy systems, or launch new digital products such as SaaS platforms and e-commerce stores.",
        },
      },
      {
        "@type": "Question",
        "name": "Where is ZeeShad based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "ZeeShad (Private) Limited is based in Karachi, Pakistan and serves both domestic and international clients.",
        },
      },
      {
        "@type": "Question",
        "name": "How can I start a project with ZeeShad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "You can start a project by filling out the contact form on the ZeeShad website with details about your requirements. The team will review your request and get back to you within 48 hours.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
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
      <StatsSection />
      <Features />
      <CaseStudies />
      <Products />
      <About />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
