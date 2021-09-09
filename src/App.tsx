import React from 'react';
import Routes from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import { WindowProvider } from 'contexts/WindowContext';
import { ThemesProvider } from 'contexts/ThemesContext';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'services/getLibrary';

const App: React.FC = (): JSX.Element => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <WindowProvider>
          <ThemesProvider>
            <Routes />
          </ThemesProvider>
        </WindowProvider>
      </HelmetProvider>
    </Web3ReactProvider>
  );
};

export default App;
