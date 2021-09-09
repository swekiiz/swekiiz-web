import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { Screen } from 'layouts/Screen';
import { getRoutesPath } from 'services/getRoutesPath';
import { MenuButton, ToggleThemeButton } from 'components/button';
import { anableWindowScroll, disableWindowScroll } from 'utils/windowScroll';

interface IMenuModal {
  isOpen?: boolean;
  closeModalEvent: () => void;
}

export const MenuModal: React.FC<IMenuModal> = ({
  closeModalEvent,
  isOpen,
}: IMenuModal): JSX.Element | null => {
  const routePath = getRoutesPath();

  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) disableWindowScroll();
    else anableWindowScroll();
  }, [isOpen]);

  return isOpen ? (
    <Screen className="z-90 bg-light-twotone fixed flex flex-col gap-8 items-center justify-center">
      <div className="menu-soft-text">{text}</div>
      <div className="absolute z-10 left-8 top-8">
        <button className="m-0 p-0" onClick={closeModalEvent}>
          <IoCloseOutline className="dark:hover:text-white w-14 h-14 dark:text-blue-600 text-grey hover:text-primary" />
        </button>
      </div>
      <div className="absolute z-10 right-8 top-8">
        <ToggleThemeButton />
      </div>
      {Object.keys(routePath).map((path, idx) => (
        <Link key={idx} to={routePath[path]}>
          <MenuButton
            closeModalEvent={closeModalEvent}
            setBackgroundText={(text: string | null) => setText(text)}
          >
            {path}
          </MenuButton>
        </Link>
      ))}
    </Screen>
  ) : null;
};
