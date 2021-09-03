import React from 'react';
import Routes from './routes/routes';
import { WindowProvider } from 'contexts/WindowContext';

const App: React.FC = (): JSX.Element => {
  return (
    <WindowProvider>
      <Routes />
    </WindowProvider>
  );
};

export default App;
