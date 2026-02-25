import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zeeshad.com"),
  title: {
    default: "ZeeShad (Private) Limited - IT Solutions & Digital Transformation",
    template: "%s | ZeeShad (Private) Limited",
  },
  description: "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation. Serving domestic and international markets from Karachi, Pakistan.",
  keywords: [
    "IT services",
    "software development",
    "cloud computing",
    "artificial intelligence",
    "cybersecurity",
    "digital transformation",
    "Pakistan",
    "Karachi IT company",
    "web development",
    "mobile app development",
    "ERP solutions",
    "POS systems",
    "QR code solutions",
    "IT training",
    "ZeeShad",
    "Qr-Codify",
    "Z-ERP",
    "Z-POS",
    "ZeeShad Academy",
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
    title: "ZeeShad - IT Solutions & Digital Transformation",
    description: "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation. Serving domestic and international markets from Karachi, Pakistan.",
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
    title: "ZeeShad - IT Solutions & Digital Transformation",
    description: "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
