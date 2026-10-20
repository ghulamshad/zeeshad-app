import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3F5F7",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com"),
  title: {
    default: "Business Solutions, Digital Marketing & Consultancy | ZeeShad",
    template: "%s | ZeeShad",
  },
  description:
    "ZeeShad offers Business Solutions, Digital Marketing and Consultancy for growing companies. Clear scopes and written estimates in two business days. Karachi-based, remote-friendly.",
  keywords: [
    "business solutions",
    "digital marketing agency Karachi",
    "business consultancy Pakistan",
    "custom ERP development",
    "SEO and paid media",
    "digital transformation consulting",
    "ZeeShad",
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
    title: "Business Solutions, Digital Marketing & Consultancy | ZeeShad",
    description:
      "Systems, growth marketing and consultancy for SMEs. Written scope and estimate within two business days.",
    images: [
      {
        url: "/images/brand/hero-atmosphere.jpg",
        width: 1200,
        height: 630,
        alt: "ZeeShad business solutions studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Solutions, Digital Marketing & Consultancy | ZeeShad",
    description:
      "Business Solutions, Digital Marketing and Consultancy for growing businesses.",
    images: [
      {
        url: "/images/brand/hero-atmosphere.jpg",
        width: 1200,
        height: 630,
        alt: "ZeeShad",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body style={{ backgroundColor: "#F3F5F7" }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="grain" aria-hidden="true" />
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
