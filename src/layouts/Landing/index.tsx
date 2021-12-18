import Link from 'next/link';
import { ReactNode } from 'react';

import Header from '../../components/molecules/Header';

type Props = {
  children?: ReactNode;
};

const Landing = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Link href="/docs/installation">
          <a>Docs</a>
        </Link>
        <Link href="https://github.com/inthepocket/cookie-though">
          <a target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </Link>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default Landing;
