import React, { lazy } from 'react';
import { IRedirect, IRoute } from 'types/route';
import Fallback from 'pages/fallback';

export const routes: { [name: string]: IRoute } = {
  home: {
    path: '/',
    component: lazy(() => import('pages/home')),
    exact: false,
    fallback: <Fallback />,
  },
  // login: {
  //   path: '/login',
  //   component: lazy(() => import('pages/login')),
  //   exact: false,
  //   fallback: <Fallback />,
  // },
};

export const redirectRoutes: IRedirect[] = [
  {
    path: ['/home', '/main', '/app'],
    redirect: '/',
  },
];
