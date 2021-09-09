import React, { ReactNode, CSSProperties } from 'react';

type addProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  isActive?: boolean;
  width?: string;
  size?: 'big' | 'medium' | 'small';
};

export type OutlineButtonPropsType = addProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const OutlineButton: React.FC<OutlineButtonPropsType> = ({
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
          ? 'text-light-gray border-light-gray bg-white cursor-not-allowed'
          : isActive
          ? 'text-secondary border-white bg-white'
          : 'text-secondary border-secondary bg-white active:border-secondary active:bg-secondary hover:bg-secondary hover:text-white'
      }`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
