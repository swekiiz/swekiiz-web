import React from 'react';
import { Lending, Screen } from 'layouts';
import { Helmet } from 'react-helmet';
import { Introduce as Name } from 'components/label';
import { GradientHexagon, OutlineGradientHexagon } from 'components/shape';

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
          <div className="w-1/2">
            <GradientHexagon size={'jumbo'} />
            <GradientHexagon size={'extra'} />
            <GradientHexagon size={'large'} />
            <GradientHexagon size={'medium'} />
            <GradientHexagon size={'small'} />

            {/* <OutlineGradientHexagon size={'jumbo'} />
            <OutlineGradientHexagon size={'extra'} />
            <OutlineGradientHexagon size={'large'} />
            <OutlineGradientHexagon size={'medium'} />
            <OutlineGradientHexagon size={'small'} /> */}
          </div>
        </div>
      </Screen>
    </Lending>
  );
};

export default Home;
