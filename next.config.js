/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./src/styles/vars.scss"; @import "./src/styles/index.scss"; @import "./src/styles/ui-kit.scss"; @import "./src/styles/adaptive.scss"; `,
  },
  images: {
    domains: ['thumbs.dfs.ivi.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.images.ru',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.ivi.ru',
        port: '',
      },
    ],
  },
  i18n,
}

module.exports = nextConfig
