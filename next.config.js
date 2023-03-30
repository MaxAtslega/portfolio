/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  compiler: {
    styledComponents: { ssr: true, displayName: false },
  },
}

module.exports = nextConfig
