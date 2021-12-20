import { ReactNode } from 'react';

import Sidebar from '../../components/molecules/Sidebar';
import styles from './documentation.module.scss';

type Props = {
  children?: ReactNode;
};

const Documentation = ({ children }: Props) => {
  return (
    <div className={styles.documentation}>
      <Sidebar />
      <main>
        <article>{children}</article>
      </main>
    </div>
  );
};

export default Documentation;
