/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
