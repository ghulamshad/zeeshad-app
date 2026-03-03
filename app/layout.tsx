import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com"),
  title: {
    default: "ZeeShad - Custom ERP, SaaS MVP, E-commerce & Business Automation",
    template: "%s | ZeeShad",
  },
  description: "ZeeShad delivers custom ERP solutions, SaaS MVP builds, e-commerce systems, and business automation. From idea to launch—Karachi, Pakistan and worldwide.",
  keywords: [
    "custom ERP",
    "SaaS MVP",
    "e-commerce",
    "business automation",
    "ERP solutions",
    "software development",
    "digital transformation",
    "Pakistan",
    "Karachi IT company",
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
    description: "Custom ERP solutions, SaaS MVP builds, e-commerce systems, and business automation. From idea to launch.",
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
    description: "Custom ERP, SaaS MVP builds, e-commerce systems, and business automation.",
    images: ["/favicon.png"],
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
