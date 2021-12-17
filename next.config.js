const { join } = require('path');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  sassOptions: { includePaths: [join(__dirname, 'src/scss')] },
};
