import React from 'react';
import Book from 'assets/images/book.svg';
import { Circle } from './Circle';

export const BookAndBubble: React.FC = (): JSX.Element => (
  <div className="relative m-auto" style={{ height: '100%', width: '228px' }}>
    <img
      className="absolute block w-auto h-20"
      style={{
        bottom: '0',
        right: '0',
      }}
      src={Book}
    />
    <Circle
      radius={'10px'}
      angle={'0deg'}
      style={{
        position: 'absolute',
        bottom: '100px',
        right: '100px',
      }}
    />
    <Circle
      radius={'11px'}
      angle={'5deg'}
      style={{
        position: 'absolute',
        bottom: '110px',
        right: '90px',
      }}
    />
    <Circle
      radius={'12px'}
      angle={'10deg'}
      style={{
        position: 'absolute',
        bottom: '120px',
        right: '117px',
      }}
    />
    <Circle
      radius={'13px'}
      angle={'15deg'}
      style={{
        position: 'absolute',
        bottom: '135px',
        right: '110px',
      }}
    />
    <Circle
      radius={'14px'}
      angle={'20deg'}
      style={{
        position: 'absolute',
        bottom: '155px',
        right: '90px',
      }}
    />
    <Circle
      radius={'15px'}
      angle={'25deg'}
      style={{
        position: 'absolute',
        bottom: '170px',
        right: '130px',
      }}
    />
    <Circle
      radius={'16px'}
      angle={'30deg'}
      style={{
        position: 'absolute',
        bottom: '180px',
        right: '75px',
      }}
    />
    <Circle
      radius={'17px'}
      angle={'35deg'}
      style={{
        position: 'absolute',
        bottom: '190px',
        right: '101px',
      }}
    />
    <Circle
      radius={'18px'}
      angle={'40deg'}
      style={{
        position: 'absolute',
        bottom: '200px',
        right: '140px',
      }}
    />
    <Circle
      radius={'19px'}
      angle={'45deg'}
      style={{
        position: 'absolute',
        bottom: '210px',
        right: '84px',
      }}
    />
    <Circle
      radius={'20px'}
      angle={'50deg'}
      style={{
        position: 'absolute',
        bottom: '230px',
        right: '130px',
      }}
    />
    <Circle
      radius={'21px'}
      angle={'55deg'}
      style={{
        position: 'absolute',
        bottom: '245px',
        right: '160px',
      }}
    />
    <Circle
      radius={'22px'}
      angle={'60deg'}
      style={{
        position: 'absolute',
        bottom: '252px',
        right: '78px',
      }}
    />
    <Circle
      radius={'180px'}
      angle={'65deg'}
      style={{
        position: 'absolute',
        bottom: '280px',
        right: '48px',
      }}
    />
    <div
      className="center-with-flex absolute bg-white rounded-full"
      style={{
        width: '168px',
        height: '168px',
        bottom: '286px',
        right: '54px',
      }}
    >
      <div className="mark-img-lightbulb relative z-10 block w-28 h-28" />
    </div>
  </div>
);
