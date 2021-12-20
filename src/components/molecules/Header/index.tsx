import Link from 'next/link';
import { ReactNode } from 'react';

import Logo from '../../icons/Logo';
import ThemeToggle from '../ThemeToggle';
import styles from './header.module.scss';

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.branding} aria-label="Home">
          <Logo />
        </a>
      </Link>
      <div className={styles.siteNavigation}>
        {children ? <nav>{children}</nav> : null}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
