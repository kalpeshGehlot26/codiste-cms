/** @type {import('next').NextConfig} */
// const nextConfig = {
//     distDir: 'build',
// }

// module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {

        source: '/4-pillars-of-oops',
        destination: '/empowering-token-sales-decentralised-launchpad',
        permanent: true,
      }

    ]
  },
}