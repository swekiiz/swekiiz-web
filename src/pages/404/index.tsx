import React from 'react';
import { Screen } from 'layouts';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <Screen className="flex items-center justify-center">
      <h1 className="text-gradient text-center text-3xl font-semibold">
        404 - Not found
      </h1>
    </Screen>
  );
};

export default NotFound;
