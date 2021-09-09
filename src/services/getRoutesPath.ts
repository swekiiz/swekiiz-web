import { routes } from 'routes/config';

export const getRoutesPath = (): { [key: string]: string } => {
  const routesPath = Object.keys(routes).reduce((obj, key) => {
    obj[key] = routes[key].path;
    return obj;
  }, {} as { [key: string]: string });

  return routesPath;
};
