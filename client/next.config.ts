import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // This tells Next.js to ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
