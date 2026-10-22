import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  themeColor: "#F5F7FB",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com"),
  title: {
    default: "Software and Growth Partner | ZeeShad",
    template: "%s | ZeeShad",
  },
  description:
    "Custom software, AI agents and automation, plus performance marketing for scaling businesses in the US, UK and EU. Written scope in 2 business days.",
  keywords: [
    "custom software development",
    "AI agents",
    "business automation",
    "digital marketing",
    "ERP-lite",
    "ZeeShad",
    "Free Discovery Session",
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
    title: "Software and Growth Partner | ZeeShad",
    description:
      "Software that runs your business. Marketing that grows it. Scoped in writing within 2 business days.",
    images: [
      {
        url: "/images/brand/hero-atmosphere.jpg",
        width: 1200,
        height: 630,
        alt: "ZeeShad software and growth partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software and Growth Partner | ZeeShad",
    description:
      "Custom software, AI and automation, plus performance marketing for scaling businesses.",
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body style={{ backgroundColor: "#F5F7FB" }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
