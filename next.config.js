/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.orbitmedia.com', 'images.unsplash.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig

