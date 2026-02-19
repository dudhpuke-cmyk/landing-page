/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'standalone' - not compatible with Vercel
  // Vercel handles Next.js builds automatically
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Workaround for Next.js 15 route groups and client components
  // This ensures proper build artifact generation
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
