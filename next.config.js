/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        additionalData: `@import "./src/styles/vars.scss"; @import "./src/styles/index.scss"; @import "./src/styles/ui-kit.scss"; @import "./src/styles/adaptive.scss"; `,
    },
    images: {
        domains: ['thumbs.dfs.ivi.ru'],
    },
    i18n,
};

export default nextConfig;
