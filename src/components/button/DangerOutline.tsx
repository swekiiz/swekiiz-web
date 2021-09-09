import React, { ReactNode, CSSProperties } from 'react';

type addProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  isActive?: boolean;
  width?: string;
  size?: 'big' | 'medium' | 'small';
};

type OutlineButtonPropsType = addProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const DangerOutlineButton: React.FC<OutlineButtonPropsType> = ({
  children,
  className,
  style,
  isActive,
  size,
  width,
  onClick,
  ...rest
}: OutlineButtonPropsType): JSX.Element => {
  const padding = {
    big: 'py-1.5',
    medium: 'py-1',
    small: '',
  };

  return (
    <button
      style={{ width: width || 'auto', ...style }}
      className={`${className} text-center rounded-full text-base border-2 px-2
      font-semibold transition-all duration-200 ease-in-out ${
        size ? padding[size] : 'py-1' // Default padding
      }
      ${
        rest.disabled
          ? 'text-light-gray border-light-gray bg-white dark:bg-black dark:border-grey dark:text-grey cursor-not-allowed'
          : isActive
          ? 'text-red-500 border-white bg-white dark:bg-black'
          : 'text-red-500 border-red-500 bg-white dark:bg-black dark:hover:bg-red-500 active:border-red-500 active:bg-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white'
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
