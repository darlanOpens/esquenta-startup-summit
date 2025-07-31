import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/esquenta',
  images: {
    formats: ['image/webp', 'image/avif'], // Formatos modernos para melhor qualidade
  },
  /* config options here */
};

export default nextConfig;
