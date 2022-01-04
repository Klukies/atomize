import Moon from '@assets/icons/moon.svg';
import Sun from '@assets/icons/sun.svg';
import { useTheme } from 'next-themes';

import styles from './themeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      aria-label="Switch theme"
      className={styles.themeToggle}
      value={theme}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <Sun role="presentation" /> : <Moon role="presentation" />}
    </button>
  );
};

export default ThemeToggle;
