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
      },
      {
        // Set cache control headers for images, videos, and other assets
        source: '/assets/:path*', // Match any asset in the public/assets directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for one year (31536000 seconds)
          },
        ],
      },
      {
        // Set cache control headers for CSS files
        source: '/assets/css/:path*', // Match any CSS file in the public/assets/css directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache CSS files for one year (31536000 seconds)
          },
        ],
      },
      {
        // Set cache control headers for CSS files
        source: '/_next/static/css/:path*', // Match any CSS file in the _next/static/css directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache CSS files for one year (31536000 seconds)
          },
        ],
      },
      {
        // Set cache control headers for images, videos, and other assets
        source: '/_next/static/:path*', // Match any asset in the _next/static directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for one year (31536000 seconds)
          },
        ],
      },
    ];
  },
};


// 315360000 : 10 years
// 31536000 : 1 year