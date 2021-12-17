type Theme = 'light' | 'dark';

const DEFAULT_THEME = 'dark';

const getTheme = (): Theme => {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const theme = localStorage.getItem('theme');

  if (!theme) {
    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    return isLight ? 'light' : 'dark';
  }

  return (localStorage.getItem('theme') as Theme) ?? DEFAULT_THEME;
};

export default getTheme;
