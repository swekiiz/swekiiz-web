import React, { useRef } from 'react';
import useHover from 'hooks/useHover';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer: React.FC = (): JSX.Element => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <div className="flex px-12 py-8 w-full bg-black">
      <div className="flex w-1/5">
        <h1 className="m-auto py-4 text-center text-white text-4xl font-normal">
          Contact me
        </h1>
      </div>
      <div className="flex flex-col w-4/5 space-y-4">
        <div className="ml-auto">
          <p className="inline-block align-middle text-right text-light-gray text-xl font-light">
            082-400-2211
          </p>
          <FiPhone className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
        </div>
        <div className="ml-auto">
          <p className="inline-block align-middle text-right text-light-gray text-xl font-light">
            best_n.dol@hotmail.com
          </p>
          <FiMail className="inline-block align-middle ml-4 w-6 h-6 text-light-gray" />
        </div>
        <div className="ml-auto">
          <p className="text-gradient inline-block align-middle mr-4 text-lg">
            click
            <div className="mark-img-arrow-forward inline-block align-middle ml-2 w-4 h-4" />
          </p>
          <a
            href="https://github.com/swekiiz"
            ref={ref}
            className="inline-block align-middle"
          >
            <p
              className={`inline-block align-middle text-right ${
                isHover ? 'text-gradient' : 'text-light-gray'
              } text-xl font-light`}
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
