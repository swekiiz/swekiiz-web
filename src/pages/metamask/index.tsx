import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Screen } from 'layouts';

const Metamask: React.FC = (): JSX.Element => {
  return (
    <Screen className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Metamask</title>
      </Helmet>
      <h1 className="text-center text-2xl">chain ID</h1>
    </Screen>
  );
};

export default Metamask;
