import React from 'react';
import { name, surname } from 'constants/name';

export const Greet: React.FC = (): JSX.Element => (
  <h1 className="text-gradient-fixed text-center text-2xl font-semibold leading-tight sm:text-left sm:text-5xl">
    Hi, my name is <br />
    {name} {surname}
  </h1>
);
