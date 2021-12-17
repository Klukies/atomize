import '../scss/app.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Documentation from '../layouts/Documentation';
import Landing from '../layouts/Landing';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDocs = router.pathname.includes('/docs');

  if (isDocs) {
    return (
      <Documentation>
        <Component {...pageProps} />
      </Documentation>
    );
  }

  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  );
}

export default MyApp;
