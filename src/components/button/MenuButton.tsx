import React, { useRef, useEffect } from 'react';
import useHover from 'hooks/useHover';

export interface IMenuButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  closeModalEvent: () => void;
  setBackgroundText: (text: string | null) => void;
}

export const MenuButton: React.FC<IMenuButton> = ({
  children,
  setBackgroundText,
  closeModalEvent,
  ...rest
}: IMenuButton): JSX.Element => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  useEffect(() => {
    if (isHover) setBackgroundText(children);
    else setBackgroundText(null);
  }, [isHover]);

  return (
    <button
      className="explain-hover relative p-4 w-96 bg-transparent"
      ref={ref}
      onClick={closeModalEvent}
      {...rest}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0" />
      <span className="text-secondary-gradient relative z-1 text-center text-3xl font-semibold sm:text-6xl">
        {children}
      </span>
    </button>
  );
};
