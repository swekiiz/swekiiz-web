import React, { ReactNode } from 'react';
import { WindowContext } from 'contexts/WindowContext';

const { useState, useRef, useEffect, useContext } = React;

interface IFadeIn {
  children?: ReactNode;
  resetOffSetY?: number;
}

export const FadeIn: React.FC<IFadeIn> = ({
  children,
  resetOffSetY,
}: IFadeIn): JSX.Element => {
  const { offSetY } = useContext(WindowContext);

  const [isVisible, setVisible] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = domRef?.current;

    const observer = new IntersectionObserver(entries => {
      if (!isFinished)
        entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    if (!node) return;

    observer.observe(node);

    return () => observer.disconnect();
  }, [isFinished]);

  useEffect(() => {
    if (isVisible) setIsFinished(true);
  }, [isVisible]);

  useEffect(() => {
    if (resetOffSetY !== undefined && offSetY <= resetOffSetY && isFinished) {
      setIsFinished(false);
      console.log('reset');
    }
  }, [offSetY]);

  return (
    <div className="overflow-visible" ref={domRef}>
      <div className={isVisible ? 'fade-in-section' : ''}>{children}</div>
    </div>
  );
};
