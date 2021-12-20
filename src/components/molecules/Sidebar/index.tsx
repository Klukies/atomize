import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '../Header';
import docRoutes from './docRoutes';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const { asPath } = useRouter();

  return (
    <div className={styles.sidebar}>
      <Header></Header>
      <nav>
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
