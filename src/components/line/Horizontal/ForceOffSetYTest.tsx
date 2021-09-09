import React from 'react';

type propsType = {
  height: string | number;
};

export const ForceOffSetYTest: React.FC<propsType> = ({
  height,
}: propsType) => (
  <div
    className="absolute z-100 w-screen h-4 border-t border-red-500"
    style={{ top: typeof height === 'number' ? `${height}px` : height }}
  />
);
