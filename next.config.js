/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },

  eslint: {
    ignoreDuringBuilds: true,
  },


  images: {
    domains: ['images.unsplash.com', 'firebasestorage.googleapis.com'],

 },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
