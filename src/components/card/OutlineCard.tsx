import React, { ReactNode } from 'react';

interface IOutlineCard {
  children?: ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

export const OutlineCard: React.FC<IOutlineCard> = ({
  children,
  className,
  height,
  width,
}: IOutlineCard) => {
  return (
    <div
      className="bg-gradient relative flex items-center box-border"
      style={{
        borderRadius: '32px',
        height: height || 'auto',
        width: width || 'auto',
      }}
    >
      <div
        className={`text-grey absolute z-10 bottom-0 left-0 right-0 top-0 m-1 p-4 bg-white ${className}`}
        style={{ borderRadius: '28px' }}
      >
        {children}
      </div>
    </div>
  );
};
