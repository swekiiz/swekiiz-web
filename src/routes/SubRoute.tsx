import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from 'types/route';

const RouteWithSubRoutes: React.FC<IRoute> = (route: IRoute): JSX.Element => (
  <Suspense fallback={route.fallback}>
    <Route
      path={route.path}
      render={(props) => route.component && <route.component {...props} routes={route.routes} />}
    />
  </Suspense>
);

export default RouteWithSubRoutes;
