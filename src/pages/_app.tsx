import '../scss/app.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

import Documentation from '../layouts/Documentation';
import Landing from '../layouts/Landing';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDocs = router.pathname.includes('/docs');

  return (
    <ThemeProvider attribute="class">
      {isDocs ? (
        <Documentation>
          <Component {...pageProps} />
        </Documentation>
      ) : (
        <Landing>
          <Component {...pageProps} />
        </Landing>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
