import React, { useRef } from 'react';
import useHover from 'hooks/useHover';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer: React.FC = (): JSX.Element => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <div className="flex flex-col px-12 py-8 w-full bg-black sm:flex-row sm:w-auto">
      <div className="flex w-full sm:w-1/2 xl:w-1/5">
        <h1 className="my-auto py-4 text-left text-white text-xl font-medium sm:text-4xl sm:font-normal xl:m-auto xl:text-center">
          Contact me
        </h1>
      </div>
      <div className="flex flex-col items-start w-full space-y-4 sm:items-end sm:w-1/2 xl:w-4/5">
        <div className="p-0">
          <p className="inline-block align-middle text-left text-light-gray text-lg font-light sm:text-right sm:text-xl">
            082-400-2211
          </p>
          <FiPhone className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
        </div>
        <div className="p-0">
          <p className="inline-block align-middle text-left text-light-gray text-lg font-light sm:text-right sm:text-xl">
            best_n.dol@hotmail.com
          </p>
          <FiMail className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
        </div>
        <div className="p-0">
          <p className="text-gradient hidden align-middle mr-4 text-lg sm:inline-block">
            click
            <div className="mark-img-arrow-forward inline-block align-middle ml-2 w-4 h-4" />
          </p>
          <a
            href="https://github.com/swekiiz"
            ref={ref}
            className="inline-block align-middle"
          >
            <p
              className={`inline-block align-middle text-left sm:text-right ${
                isHover ? 'text-gradient' : 'text-light-gray'
              } text-lg sm:text-xl font-light`}
            >
              github.com/swekiiz
            </p>
            <div
              className={`mark-img-github ${
                isHover ? 'mark-img-github-hover' : ''
              } inline-block align-middle ml-4 w-6 h-6`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
