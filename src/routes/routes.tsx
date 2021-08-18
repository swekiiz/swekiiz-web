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

const RedirectRoutes: JSX.Element[] = redirectRoutes.map(
  (route: IRedirect, key) => (
    <Route key={key} path={route.path} exact>
      <Redirect to={route.redirect} />
    </Route>
  ),
);

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {RedirectRoutes}
      {Object.keys(routes).map((key, index) => (
        <RouteWithSubRoutes key={index} {...routes[key]} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
