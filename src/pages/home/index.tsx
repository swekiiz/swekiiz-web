import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';

const Home: React.FC = (): JSX.Element => {
  return (
    <Lending>
      <Helmet>
        <meta charSet="utf-8" />
        <title>swekiiz</title>
      </Helmet>
      <Screen className="bg-white">
        <div className="flex flex-row w-full h-full">
          <div className="center-with-flex w-1/2">
            <h1 className="text-gradient px-16 text-center text-5xl font-semibold">
              Hi, my name is thanadol sinananvanich <br />
              1234567890 <br />
              abcdefghijklm nopqrstuvwxyz ABCDEFGHIJKLM NOPQRSTUVWXYZ
            </h1>
          </div>
          <div className="w-1/2"></div>
        </div>
      </Screen>
    </Lending>
  );
};

export default Home;
