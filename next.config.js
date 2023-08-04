// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // distDir: 'build',
// }

// module.exports = nextConfig
// // module.exports = {
// //   async redirects() {
// //     return [
// //       {

// //         source: '/4-pillars-of-oops',
// //         destination: '/empowering-token-sales-decentralised-launchpad',
// //         permanent: true,
// //       }

// //     ]
// //   },
// // }
module.exports = {
  reactStrictMode: true,
  disableServerSideStrictMimeTypes: true,
  async headers() {
    return [
      {
        source: '/(.*)', // Match all pages and assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Set caching for assets to one year (31536000 seconds)
          },
        ],
      }
    ];
  },
};


// 315360000 : 10 years
// 31536000 : 1 year