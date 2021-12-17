import { useState } from 'react';

import getTheme from '../utils/getTheme';

type Theme = 'light' | 'dark';

const useTheme = () => {
  const [theme, updateTheme] = useState(() => getTheme());

  const setTheme = (updatedTheme: Theme) => {
    localStorage.setItem('theme', updatedTheme);
    updateTheme(updatedTheme);
  };

  return { theme, setTheme };
};

export default useTheme;
