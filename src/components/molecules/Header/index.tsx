import Link from 'next/link';
import { ReactNode } from 'react';

import Logo from '../../icons/Logo';
import styles from './header.module.scss';

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => (
  <header>
    <nav id={styles.navigation}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div>{children}</div>
    </nav>
  </header>
);

export default Header;
