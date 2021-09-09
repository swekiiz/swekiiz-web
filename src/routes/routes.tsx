import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import RouteWithSubRoutes from './SubRoute';
import { routes, redirectRoutes } from './config';
import { IRedirect } from 'types/route';
import NotFound from 'pages/404';

const RedirectRoutesMap: Array<JSX.Element> = redirectRoutes.map(
  (route: IRedirect, index: number) => (
    <Route key={index} path={route.path} exact>
      <Redirect to={route.redirect} />
    </Route>
  ),
);

const RoutesMap: Array<JSX.Element> = Object.keys(routes).map(
  (key, index: number) => <RouteWithSubRoutes key={index} {...routes[key]} />,
);

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {RoutesMap}
      {RedirectRoutesMap}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
