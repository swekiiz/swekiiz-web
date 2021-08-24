import React, { ReactNode } from 'react';

interface IScreen {
  children: ReactNode;
  className?: string;
}

export const Screen: React.FC<IScreen> = ({ children, className }: IScreen) => (
  <div className={`m-0 w-screen h-screen ${className}`}>{children}</div>
);
