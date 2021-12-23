import { Dispatch, SetStateAction } from 'react';

import { PRIMARY_NAVIGATION } from '../../molecules/Sidebar';
import styles from './hamburger.module.scss';

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  return (
    <button
      aria-controls={PRIMARY_NAVIGATION}
      aria-expanded={isSidebarOpen}
      aria-label="Toggle sidebar"
      className={`${styles.hamburger} ${isSidebarOpen ? styles.active : ''}`}
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
