/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.orbitmedia.com', 'images.unsplash.com'],
    unoptimized: false,
  },
    // Transpile packages if needed
  transpilePackages: [],
  // Explicitly set the output file tracing root to fix workspace detection
  outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig

