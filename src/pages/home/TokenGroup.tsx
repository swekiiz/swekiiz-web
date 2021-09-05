import React from 'react';
import { getImg } from 'services/getImages';
import useParallaxScroll from 'hooks/useParallaxScroll';

export const TokenGroup: React.FC = (): JSX.Element => {
  const { offSetY } = useParallaxScroll();

  return (
    <>
      <img
        className="absolute block w-60 h-60"
        src={getImg('ETH')}
        style={{
          top: '160px',
          left: '220px',
          transform: `translateY(${offSetY * 0.3}px)`,
        }}
      />
      <img
        className="absolute block w-30 h-30"
        src={getImg('BNB')}
        style={{
          top: '40px',
          left: '160px',
          transform: `translateY(-${offSetY * 0.33}px)`,
        }}
      />
      <img
        className="absolute block w-26 h-26"
        src={getImg('MATIC')}
        style={{
          top: '355px',
          left: '90px',
          transform: `translateY(-${offSetY * 0.32}px)`,
        }}
      />
      <img
        className="absolute block w-24 h-24"
        src={getImg('BTC')}
        style={{
          top: '0px',
          left: '410px',
          transform: `translateY(${offSetY * 0.52}px)`,
        }}
      />
      <img
        className="absolute block w-22 h-22"
        src={getImg('ADA')}
        style={{
          top: '145px',
          left: '436px',
          transform: `translateY(-${offSetY * 0.21}px)`,
        }}
      />
      <img
        className="absolute block w-18 h-18"
        src={getImg('CAKE')}
        style={{
          top: '390px',
          left: '440px',
          transform: `translateY(-${offSetY * 0.2}px)`,
        }}
      />
      <img
        className="absolute block w-20 h-20"
        src={getImg('UNI')}
        style={{
          top: '415px',
          left: '245px',
          transform: `translateY(-${offSetY * 0.7}px)`,
        }}
      />
    </>
  );
};
