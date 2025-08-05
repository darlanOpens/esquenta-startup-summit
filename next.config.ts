import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/brunch-vip',
  images: {
    formats: ['image/webp', 'image/avif'], // Formatos modernos para melhor qualidade
  },
  /* config options here */
};

export default nextConfig;
