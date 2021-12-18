import { useTheme } from 'next-themes';

import styles from './themeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  const updateTheme = () => setTheme(isLight ? 'dark' : 'light');

  return (
    <input
      className={styles.themeToggle}
      type="checkbox"
      aria-label="Theme switch"
      onChange={updateTheme}
      checked={isLight}
    />
  );
};

export default ThemeToggle;
