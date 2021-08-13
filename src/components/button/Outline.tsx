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
      className={`${className} text-center rounded-full text-sm
      font-semibold transition-all duration-200 ease-in-out ${
        size ? padding[size] : 'py-1' // Default padding
      }
      ${
        rest.disabled
         
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
