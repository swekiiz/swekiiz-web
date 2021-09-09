import React from 'react';
import { Screen } from 'layouts';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <Screen className="flex items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404...</title>
      </Helmet>
      <h1 className="text-gradient text-center text-3xl font-semibold">
        404 - Not found
      </h1>
    </Screen>
  );
};

export default NotFound;
