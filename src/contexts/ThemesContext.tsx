import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { themeType } from 'types/themes';

type ContextType = {
  theme: themeType;
  setTheme: (theme: themeType) => void;
};

export const ThemesContext: React.Context<ContextType> = createContext(
  {} as ContextType,
);

export const ThemesProvider: React.FC = ({
  children,
}: React.PropsWithChildren<ReactNode>): JSX.Element => {
  const [theme, _setTheme] = useState<themeType>('light');
  const _toggleTheme: themeType = theme === 'light' ? 'dark' : 'light';

  const setTheme = (theme: themeType) => _setTheme(theme);

  const isThemeType = (arg: string): arg is themeType =>
    arg === 'light' || arg === 'dark';

  useEffect(() => {
    const themeFromlocalStorage = localStorage.getItem('theme');

    if (themeFromlocalStorage != null && isThemeType(themeFromlocalStorage)) {
      _setTheme(themeFromlocalStorage);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(_toggleTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
  );
};
