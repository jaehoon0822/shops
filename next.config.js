/** @type {import('next').NextConfig} */
const withTwin = require('./src/commons/config/withTwin')

const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
})

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = nextConfig
