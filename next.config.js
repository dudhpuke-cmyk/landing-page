/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'standalone' - not compatible with Vercel
  // Vercel handles Next.js builds automatically
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig
