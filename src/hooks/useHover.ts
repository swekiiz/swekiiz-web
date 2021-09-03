import { RefObject, useEffect, useState } from 'react';

const useHover = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): boolean => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    const node = elementRef?.current;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [elementRef]);

  return isHover;
};

export default useHover;
