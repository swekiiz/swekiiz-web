import React, { ReactNode } from 'react';

type addProps = {
  children?: ReactNode;
  className?: string;
  style?: { [key: string]: string | number };
  active?: boolean;
  width?: string;
  size?: 'big' | 'medium' | 'small';
};

export type OutlineButtonPropsType = addProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton: React.FC<OutlineButtonPropsType> = ({
  children,
  className,
  style,
  active,
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
          ? 'text-light-gray border-light-gray bg-gray-800 cursor-not-allowed'
          : active
          ? 'text-black border-white bg-white'
          : 'text-white border-white bg-black active:text-black active:border-gray-700 active:bg-gray-700 hover:bg-white hover:text-black'
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
