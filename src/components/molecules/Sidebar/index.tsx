import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { createBreakpoint, useWindowSize } from 'react-use';

import Header from '../Header';
import docRoutes from './docRoutes';
import styles from './sidebar.module.scss';

export const primaryNavigation = 'primary-navigation';

const useBreakpoint = createBreakpoint({ desktop: 900, mobile: 0 });

const Sidebar = () => {
  const { height } = useWindowSize();
  const { route } = useRouter();
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
    if (isSidebarOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = `${height}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.height = `${height}px`;
    } else {
      document.documentElement.removeAttribute('style');
      document.body.removeAttribute('style');
    }
  }, [height, isSidebarOpen]);

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        variant="documentation"
      />
      <nav id={primaryNavigation} className={becameMobile ? styles.becameMobile : ''}>
        {docRoutes.map(({ label, routes }, i) => (
          <ul key={i} aria-labelledby={`nav-section-${i}`}>
            <h4 id={label}>{label}</h4>
            {routes.map(({ label, href, isExternal }, i) => (
              <li key={i}>
                {isExternal ? (
                  <a
                    href={href}
                    className={route === href ? styles.active : undefined}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href}>
                    <a aria-current={route === href ? 'page' : undefined}>{label}</a>
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
