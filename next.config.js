const { join } = require('path');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  sassOptions: { includePaths: [join(__dirname, 'src/scss')] },
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.ASSET_PREFIX,
};
