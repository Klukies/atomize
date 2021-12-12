const { i18n } = require('./next-i18next.config');
const { join } = require('path');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n,
  reactStrictMode: true,
  sassOptions: { includePaths: [join(__dirname, 'src/scss')] },
};
