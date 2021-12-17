import { useState } from 'react';

import useTheme from '../../../hooks/useTheme';
import styles from './themeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(() => theme === 'light');

  const updateTheme = () => {
    setIsChecked((prevState) => {
      const updatedTheme = isChecked ? 'dark' : 'light';
      document.body.className = updatedTheme;
      setTheme(updatedTheme);
      return !prevState;
    });
  };

  return (
    <input
      className={styles.themeToggle}
      type="checkbox"
      aria-label="Theme switch"
      onChange={updateTheme}
      checked={isChecked}
    />
  );
};

export default ThemeToggle;
