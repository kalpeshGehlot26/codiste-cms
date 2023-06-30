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
      },
      {
        source: '/what-is-xnft-the-usecase-of-xnft-how-it-differ-from-nft',
        destination: '/exploring-xnfts-revolutionizing-digital-assets-empowering-marketers',
        permanent: true
      },
      {
        source: '/metaverse-vs-multiverse-far-better-future-than-your-imagination',
        destination: '/unlocking-infinite-metaverse-and-multiverse',
        permanent: true
      },
      {
        source: '/build-a-dex-now',
        destination: '/defi-crypto-lending-platforms-complete-guide', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/top-tools-software-for-startups',
        destination: '/10-key-lessons-tech-startup-success',
        permanent: true
      },
      {
        source: '/soulbound-tokens-social-credit-system-or-a-trigger-for-the-world',
        destination: '/explore-future-possibilities-soulbound-tokens',
        permanent: true
      },
      {
        source: '/basic-terms-of-artificial-intelligence',
        destination: '/artificial-intelligence-development-company',
        permanent: true
      },
      {
        source: '/artificial-intelligence-in-smartphones',
        destination: '/artificial-intelligence-development-company',
        permanent: true
      },
      {
        source: '/what-is-holochain',
        destination: '/holochain-decentralized-alternative-to-blockchain', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/blockchain-for-decetralized-identity',
        destination: '/blockchain-development-company',
        permanent: true
      },
      {
        source: '/what-is-blockchain-the-transformative-technology-behind-bitcoin-explained',
        destination: '/what-is-blockchain-transformative-technology',
        permanent: true
      },
      {
        source: '/history-of-blockchain-and-its-evolution-so-far-and-future-prediction',
        destination: '/blockchain-healthcare-use-cases-benefits',
        permanent: true
      },


    ]
  },
}