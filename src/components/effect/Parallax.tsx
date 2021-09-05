import React, { ReactNode } from 'react';
import useParallaxScroll from 'hooks/useParallaxScroll';

type parallaxPropsType = {
  speedX?: number;
  speedY?: number;
  className?: string;
  children?: ReactNode;
};

export const Parallax: React.FC<parallaxPropsType> = ({
  speedX,
  speedY,
  className,
  children,
}: parallaxPropsType) => {
  const { offSetY } = useParallaxScroll();

  if (speedX !== undefined && speedY !== undefined)
    return (
      <div
        className={className}
        style={{
          transform: `translate(${offSetY * speedX}px,${offSetY * speedY}px)`,
        }}
      >
        {children}
      </div>
    );

  if (speedX !== undefined)
    return (
      <div
        className={className}
        style={{
          transform: `translateX(${offSetY * speedX}px)`,
        }}
      >
        {children}
      </div>
    );

  if (speedY !== undefined)
    return (
      <div
        className={className}
        style={{
          transform: `translateY(${offSetY * speedY}px)`,
        }}
      >
        {children}
      </div>
    );

  return <div className={className}>{children}</div>;
};
