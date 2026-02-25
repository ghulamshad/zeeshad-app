import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import PartnersStrip from '@/components/PartnersStrip';
import Services from '@/components/Services';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZeeShad (Private) Limited",
    "legalName": "ZeeShad (Private) Limited",
    "url": "https://zeeshad.com",
    "logo": "https://zeeshad.com/header-logo.png",
    "description": "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation.",
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
      "contactType": "Customer Service",
      "areaServed": ["PK", "International"],
      "availableLanguage": ["English", "Urdu"]
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
            "name": "Software Development",
            "description": "Web, mobile, and enterprise application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Computing",
            "description": "Cloud-based solutions and digital infrastructure management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consultancy",
            "description": "Digital transformation and business process optimization"
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ZeeShad Academy",
            "description": "Professional IT training and certification programs"
          }
        }
      ]
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ZeeShad (Private) Limited",
    "image": "https://zeeshad.com/header-logo.png",
    "@id": "https://zeeshad.com",
    "url": "https://zeeshad.com",
    "telephone": "+92-304-0058323",
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <Header />
      <Hero />
      <StatsSection />
      <PartnersStrip />
      <Services />
      <Products />
      <About />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
