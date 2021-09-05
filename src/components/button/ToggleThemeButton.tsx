import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from 'hooks/useDarkMode';

type toggleThemeButtonPropsType = {
  className?: string;
};

export const ToggleThemeButton: React.FC<toggleThemeButtonPropsType> = ({
  className,
}: toggleThemeButtonPropsType): JSX.Element => {
  const [theme, , toggleTheme] = useDarkMode();

  return (
    <button
      className={`py-2 px-4 ${className || ''}`}
      onClick={() => toggleTheme()}
    >
      {theme === 'light' ? (
        <FaMoon className="w-6 h-6 text-gray-400" />
      ) : theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-yellow-400" />
      ) : null}
    </button>
  );
};
