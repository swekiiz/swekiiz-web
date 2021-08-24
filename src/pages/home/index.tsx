import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import { Introduce as Name } from 'components/label';

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
            <Name />
          </div>
          <div className="w-1/2">hello</div>
        </div>
      </Screen>
    </Lending>
  );
};

export default Home;
