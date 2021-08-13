import React from 'react';
import Routes from './routes/routes';

interface IApp {}

const App: React.FC<IApp> = ({}: IApp): JSX.Element => {
  return <Routes />;
};

export default App;
