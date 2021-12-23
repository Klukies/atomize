import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { createBreakpoint } from 'react-use';

import Header from '../Header';
import docRoutes from './docRoutes';
import styles from './sidebar.module.scss';

export const PRIMARY_NAVIGATION = 'primary-navigation';

const useBreakpoint = createBreakpoint({ desktop: 900, mobile: 0 });

const Sidebar = () => {
  const { asPath } = useRouter();
  const breakpoint = useBreakpoint();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [becameMobile, setBecameMobile] = useState(false);

  useLayoutEffect(() => {
    if (breakpoint === 'mobile') setBecameMobile(true);
  }, [breakpoint]);

  useEffect(() => {
    if (becameMobile) setTimeout(() => setBecameMobile(false), 300);
  }, [becameMobile]);

  useEffect(() => {
    isSidebarOpen
      ? (document.body.style.overflow = 'hidden')
      : document.body.removeAttribute('style');
  }, [isSidebarOpen]);

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        variant="documentation"
      />
      <nav id={PRIMARY_NAVIGATION} className={becameMobile ? styles.becameMobile : ''}>
        {docRoutes.map(({ label, routes }, i) => (
          <ul key={i} aria-labelledby={`nav-section-${i}`}>
            <h4 id={label}>{label}</h4>
            {routes.map(({ label, href, isExternal }, i) => (
              <li key={i}>
                {isExternal ? (
                  <a
                    href={href}
                    className={asPath === href ? styles.active : undefined}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href}>
                    <a className={asPath === href ? styles.active : undefined}>{label}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
