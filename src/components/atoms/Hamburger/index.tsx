import { primaryNavigation } from '@components/molecules/Sidebar';
import { Dispatch, SetStateAction } from 'react';

import styles from './hamburger.module.scss';

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  return (
    <button
      aria-controls={primaryNavigation}
      aria-expanded={isSidebarOpen}
      aria-label="Toggle sidebar"
      className={styles.hamburger}
      onClick={() => setIsSidebarOpen((prevState) => !prevState)}
    >
      <i className={styles.wrapper}>
        <span />
        <span />
        <span />
      </i>
    </button>
  );
};

export default Hamburger;
