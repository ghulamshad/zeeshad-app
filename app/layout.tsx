import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com"),
  title: {
    default: "ZeeShad - Custom ERP, SaaS MVP, E-commerce & Business Automation",
    template: "%s | ZeeShad",
  },
  description:
    "ZeeShad builds custom ERP systems, SaaS MVPs, e-commerce platforms, and business automation solutions for SMEs and enterprises. We help businesses modernize operations, integrate systems, and launch scalable digital products from Karachi, Pakistan to clients worldwide.",
  keywords: [
    "custom ERP development",
    "ERP solutions Pakistan",
    "SaaS MVP development",
    "SaaS product development",
    "e-commerce development",
    "e-commerce platforms",
    "business process automation",
    "workflow automation",
    "enterprise software development",
    "web application development",
    "Karachi software company",
    "IT services company Pakistan",
    "ZeeShad",
    "Z-ERP",
    "Z-POS",
    "Qr-Codify",
  ],
  authors: [{ name: "ZeeShad (Private) Limited" }],
  creator: "ZeeShad (Private) Limited",
  publisher: "ZeeShad (Private) Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ZeeShad",
    title: "ZeeShad - Custom ERP, SaaS MVP, E-commerce & Automation",
    description:
      "Custom ERP systems, SaaS MVPs, e-commerce platforms, and business automation solutions for SMEs and enterprises.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "ZeeShad (Private) Limited Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeShad - Custom ERP, SaaS MVP, E-commerce & Automation",
    description:
      "Custom ERP, SaaS MVP development, e-commerce platforms, and business automation solutions for growing businesses.",
    images: [{ url: "/favicon.png", width: 1200, height: 630, alt: "ZeeShad" }],
    creator: "@zeeshad",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: "your-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ backgroundColor: '#0a0a0f' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
