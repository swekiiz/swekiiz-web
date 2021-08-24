import { useEffect, useState } from 'react';

type themeType = 'light' | 'dark';

const useDarkMode = (): [themeType, (theme: themeType) => void] => {
  const [theme, _setTheme] = useState<themeType>('light');
  const toggleTheme: themeType = theme === 'light' ? 'dark' : 'light';

  const setTheme = (theme: themeType) => _setTheme(theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(toggleTheme);
    root.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useDarkMode;
