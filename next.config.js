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
  async headers() {
    return [
      {
        source: '/(.*)', // Match all pages and assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Set caching for static assets
          },
        ],
      },
      {
        source: '/_next/static/(.*)', // Match next.js static resources (js, css, images, fonts)
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Set caching for Next.js static resources to one year (31536000 seconds)
          },
        ],
      },
      {
        source: '/public/(.*)', // Match all assets in the public directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Set caching for public assets to one year (31536000 seconds)
          },
        ],
      },
    ];
  },
};


// 315360000