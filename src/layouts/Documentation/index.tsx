import { ReactNode, useEffect, useState } from 'react';

import Sidebar from '../../components/molecules/Sidebar';
import styles from './documentation.module.scss';

type Props = {
  children?: ReactNode;
};

const Documentation = ({ children }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <div className={styles.documentation}>
      {isClient && <Sidebar />}
      <main>
        <article>{children}</article>
      </main>
    </div>
  );
};

export default Documentation;
