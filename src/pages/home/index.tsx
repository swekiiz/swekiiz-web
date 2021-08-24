import React from 'react';
import { Lending, Screen } from 'layouts';

const Home: React.FC = (): JSX.Element => {
  return (
    <Lending>
      <Screen className="flex items-center justify-center bg-white">
        <h1 className="header-1 text-center">
          Hi, my name is <br />
          Thanadol sinananvanich
        </h1>
      </Screen>
      <Screen className="flex items-center justify-center">
        <h1 className="header-1">Hello world</h1>
      </Screen>
    </Lending>
  );
};

export default Home;
