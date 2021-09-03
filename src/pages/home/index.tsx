import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import { name, surname } from 'constants/name';

const Home: React.FC = (): JSX.Element => {
  return (
    <Lending>
      <Helmet>
        <meta charSet="utf-8" />
        <title>swekiiz</title>
      </Helmet>
      <Screen className="flex bg-white">
        <div className="flex flex-row m-auto w-full h-3/5">
          <div className="center-with-flex w-1/2">
            <h1 className="text-gradient px-16 text-left text-5xl font-semibold leading-tight">
              Hi, my name is <br />
              {name} {surname}
            </h1>
          </div>
          <div className="vertical-gradient" />
          <div className="w-1/2"></div>
        </div>
      </Screen>
    </Lending>
  );
};

export default Home;
