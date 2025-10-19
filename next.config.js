/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  output: isExport ? 'export' : undefined,
  trailingSlash: true,
  distDir: isExport ? 'dist' : '.next',
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Always unoptimize for better compatibility with GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Only use basePath and assetPrefix if deploying to a subdirectory
  ...(isProd && process.env.GITHUB_REPOSITORY && !process.env.GITHUB_REPOSITORY.endsWith('.github.io') && {
    assetPrefix: `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`,
    basePath: `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`,
  }),
}

module.exports = nextConfig
