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
            value: 'public, max-age=3600', // Set caching for assets to one hour (3600 seconds)
          },
        ],
      },
      {
        source: '/_next/static/(.*)', // Match next.js static resources (js, css, images, fonts)
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Set caching for CSS files to one year (31536000 seconds)
          },
        ],
      },
      {
        source: '/public/(.*)', // Match all assets in the public directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', // Set caching for CSS files to one year (31536000 seconds)
          },
        ],
      }
    ];
  },
  revalidate: 60
};


// 315360000 : 10 years
// 31536000 : 1 year