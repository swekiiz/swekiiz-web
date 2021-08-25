import React, { ReactNode } from 'react';

interface IHeaderLabel {
  children?: ReactNode;
}

export const HeaderLabel: React.FC<IHeaderLabel> = ({
  children,
}: IHeaderLabel) => {
  return <h1 className="text-gradient text-xl font-semibold">{children}</h1>;
};
