import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import useParallaxScroll from 'hooks/useParallaxScroll';

export const ScrollArrow: React.FC = (): JSX.Element => {
  const { offSetY } = useParallaxScroll();
  return (
    <div
      className="horizontal-center absolute bottom-10"
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: offSetY === 0 ? '1' : '0',
      }}
    >
      <HiArrowNarrowDown className="w-auto h-16 text-light-gray" />
    </div>
  );
};
