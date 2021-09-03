import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type ContextType = {
  width: number;
  height: number;
  offSetY: number;
};

export const WindowContext: React.Context<ContextType> = createContext(
  {} as ContextType,
);

export const WindowProvider: React.FC = ({
  children,
}: React.PropsWithChildren<ReactNode>): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [offSetY, setOffSetY] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffSetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const value = useMemo(
    () => ({
      width,
      height,
      offSetY,
    }),
    [width, height, offSetY],
  );

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
};
