import React from 'react';

export const GreyHorizontalLine: React.FC<IHorizontalLine> = ({
  className,
}: IHorizontalLine): JSX.Element => (
  <div className={`w-full border-t border-light-gray ${className || ''}`} />
);
