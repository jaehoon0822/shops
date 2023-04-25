// module.exports = function withSVG(nextConfig) {
//   return {
//     ...nextConfig,
//     webpack(config) {
//       const { isServer } = config
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//       })

//       if (!isServer) {
//         config.resolve.fallback = {
//           ...(config.resolve.fallback || {}),
//           fs: false,
//           module: false,
//           path: false,
//           os: false,
//           crypto: false,
//         }
//       }

//       return config
//     },
//   }
// }
