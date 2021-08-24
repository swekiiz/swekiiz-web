import React, { ReactNode } from 'react';

interface ILending {
  children: ReactNode;
}

export const Lending: React.FC<ILending> = ({
  children,
}: ILending): JSX.Element => (
  <div className="m-0 w-screen min-h-screen border-0">{children}</div>
);
