/** @type {import('next').NextConfig} */
// const nextConfig = {
//     distDir: 'build',
// }

// module.exports = nextConfig
module.exports = {
    async redirects() {
      return [
        {
          source: '/how-to-start-a-cryptocurrency-exchange',
          destination: '/steps-your-own-cryptocurrency-exchange', // Matched parameters can be used in the destination
          permanent: true,
        },
        {
            source: '/easy-ways-to-get-nft-whitelisting-and-benefits-of-nft-whitelist',
            destination: '/nft-whitelisting-and-benefits-of-nft-whitelist',
            permanent: true
        },
        {
            source: '/metaverse-virtual-world-the-future-of-the-virtual-games-online',
            destination: '/future-gaming-industry-metaverse-games',
            permanent: true
        }
      ]
    },
  }