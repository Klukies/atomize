import { useTheme } from 'next-themes';

import Moon from '../../icons/Moon';
import Sun from '../../icons/Sun';
import styles from './themeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      aria-label="Switch theme"
      className={`${styles.themeToggle} ${isLight ? styles.active : ''}`}
      value={theme}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
