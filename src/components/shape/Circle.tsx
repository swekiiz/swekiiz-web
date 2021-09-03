import React from 'react';

interface ICircle {
  radius?: string;
  angle?: string;
  style?: { [key: string]: string };
}

export const Circle: React.FC<ICircle> = ({
  radius,
  angle,
  style,
}: ICircle) => {
  return (
    <div
      className="rounded-full"
      style={{
        width: radius || '100px',
        height: radius || '100px',
        backgroundImage: `linear-gradient(${
          angle || '135deg'
        }, #c33799 0%, #2f41dd 100%)`,
        ...style,
      }}
    />
  );
};
