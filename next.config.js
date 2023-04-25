/** @type {import('next').NextConfig} */

const withTwin = require('./src/commons/config/withTwin')

const nextConfig = withTwin({
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'storage.googleapis.com'],
  },
  reactStrictMode: true,
})

module.exports = nextConfig
