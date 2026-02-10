import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: hide X-Powered-By
  compress: true, // Enable Gzip compression
  images: {
    formats: ['image/avif', 'image/webp'], // Modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimization for responsive images
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Tree shaking optimization
  },
};

export default nextConfig;
