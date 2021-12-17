import Document, { Head, Html, Main, NextScript } from 'next/document';

import getTheme from '../utils/getTheme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=optional"
            rel="stylesheet"
          ></link>
        </Head>
        <body className={getTheme()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
