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
  title: "ZeeShad (Private) Limited - IT Solutions & Digital Transformation",
  description: "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation. Serving domestic and international markets from Karachi, Pakistan.",
  keywords: "IT services, software development, cloud computing, artificial intelligence, cybersecurity, digital transformation, Pakistan",
  authors: [{ name: "ZeeShad (Private) Limited" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ZeeShad (Private) Limited - IT Solutions & Digital Transformation",
    description: "Leading IT services company specializing in software development, cloud computing, AI, cybersecurity, and digital transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
