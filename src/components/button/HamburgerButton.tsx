import React from 'react';
import { VscMenu } from 'react-icons/vsc';

interface IHamburgerButton {
  onClick: () => void;
}

export const HamburgerButton: React.FC<IHamburgerButton> = ({
  onClick,
}: IHamburgerButton): JSX.Element => {
  return (
    <div className="px-4 py-2 cursor-pointer" onClick={onClick}>
      <VscMenu className="dark:hover:text-white w-8 h-8 text-grey hover:text-primary dark:text-primary" />
    </div>
  );
};
