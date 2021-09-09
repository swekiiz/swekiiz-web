import React, { ReactNode } from 'react';

const { useState, useRef, useEffect } = React;

interface IFadeIn {
  children?: ReactNode;
}

export const FadeIn: React.FC<IFadeIn> = ({
  children,
}: IFadeIn): JSX.Element => {
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
    if (isVisible === true) {
      setIsFinished(true);
      //   console.log('isFinished = true');
    }
  }, [isVisible]);

  return (
    <div className="overflow-visible" ref={domRef}>
      <div className={isVisible ? 'fade-in-section' : ''}>{children}</div>
    </div>
  );
};
