import { useContext } from 'react';
import { WindowContext } from 'contexts/WindowContext';

const useParallaxScroll = (): {
  offSetY: number;
} => {
  const { offSetY } = useContext(WindowContext);

  return { offSetY };
};

export default useParallaxScroll;
