/** @type {import('next').NextConfig} */

const withTwin = require('./src/commons/config/withTwin')

const nextConfig = withTwin({
  images: {
    domains: ['unsplash.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
