const { join } = require('path');
const { createRemarkPlugin } = require('@atomiks/mdx-pretty-code');
const fs = require('fs');

const getTheme = (path) => JSON.parse(fs.readFileSync(require.resolve(path), 'utf-8'));

const prettyCode = createRemarkPlugin({
  shikiOptions: { theme: getTheme('./src/assets/themes/OneDark-Pro.json') },
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [prettyCode],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withMDX({
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  sassOptions: { includePaths: [join(__dirname, 'src/assets/scss')] },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
