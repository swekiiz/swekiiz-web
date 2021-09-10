import React from 'react';
import { IRedirect, IRoute } from 'types/route';
import Fallback from 'components/fallback';

const { lazy } = React;

export const freezeRoutes = {
  home: {
    path: '/',
    component: lazy(() => import('pages/home')),
    exact: true,
    fallback: <Fallback />,
  },
  metamask: {
    path: '/metamask',
    component: lazy(() => import('pages/metamask')),
    exact: false,
    fallback: <Fallback />,
  },
  play: {
    path: '/play',
    component: lazy(() => import('pages/playground')),
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

export const routes = freezeRoutes as { [name: string]: IRoute };

export const redirectRoutes: IRedirect[] = [
  {
    path: ['/home', '/main', '/app'],
    redirect: '/',
  },
  {
    path: ['connect'],
    redirect: '/metamask',
  },
];
