import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb' // Aumentamos el límite a 4MB
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.DOMAIN!,
      },
      {
        protocol: "https",
        hostname: process.env.DOMAIN!,
      },
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
      },
    ]
  }
};

export default nextConfig;
