import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { freezeRoutes } from 'routes/config';
import { Screen } from 'layouts';
import { OButton } from 'components/button';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <Screen className="flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404...</title>
      </Helmet>
      <h1 className="text-gradient mb-4 text-center text-3xl font-semibold">
        404 - Not found
      </h1>
      <Link to={freezeRoutes.home.path}>
        <OButton>Go to home</OButton>
      </Link>
    </Screen>
  );
};

export default NotFound;
