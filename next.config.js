const { join } = require('path');
const { createRemarkPlugin } = require('@atomiks/mdx-pretty-code');
const fs = require('fs');

const prettyCode = createRemarkPlugin({
  shikiOptions: {
    theme: JSON.parse(fs.readFileSync(require.resolve('./src/assets/OneDark-Pro.json'), 'utf-8')),
  },
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
  sassOptions: { includePaths: [join(__dirname, 'src/scss')] },
});
