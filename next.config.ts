import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.webskitters.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.goodfirms.co',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/company', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
    ];
  },
  async headers() {
    const security = [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];

    // Long-lived static caching breaks Turbopack HMR in development.
    if (process.env.NODE_ENV === "production") {
      security.push({
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }

    return security;
  },
};

export default nextConfig;
