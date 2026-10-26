import type { Metadata } from "next";
import { Inter, Inter_Tight, Manrope, Poppins } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
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
    default: "Enterprise Software, AI & Digital Transformation | ZeeShad",
    template: "%s | ZeeShad",
  },
  description:
    "ZeeShad designs, builds and supports business systems that simplify operations, connect teams and help organizations grow.",
  keywords: [
    "enterprise software",
    "custom software development",
    "AI automation",
    "ERP",
    "SaaS",
    "ZeeShad",
    "ZeeShad Desk",
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
    title: "Technology that moves your business forward | ZeeShad",
    description:
      "Enterprise software, AI and digital transformation from ZeeShad (Private) Limited.",
    images: [
      {
        url: "/images/brand/hero-atmosphere.jpg",
        width: 1200,
        height: 630,
        alt: "ZeeShad enterprise software and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology that moves your business forward | ZeeShad",
    description:
      "Enterprise software, AI and digital transformation from ZeeShad (Private) Limited.",
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
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${poppins.variable} ${manrope.variable}`}>
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
