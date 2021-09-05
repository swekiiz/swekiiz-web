import { useContext } from 'react';
import { ThemesContext } from 'contexts/ThemesContext';
import { themeType } from 'types/themes';

const useDarkMode = (): [themeType, (theme: themeType) => void, () => void] => {
  const { theme, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return [theme, setTheme, toggleTheme];
};

export default useDarkMode;
