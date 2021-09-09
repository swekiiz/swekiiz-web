import React from 'react';
import Routes from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import { WindowProvider } from 'contexts/WindowContext';
import { ThemesProvider } from 'contexts/ThemesContext';

const App: React.FC = (): JSX.Element => {
  return (
    <HelmetProvider>
      <WindowProvider>
        <ThemesProvider>
          <Routes />
        </ThemesProvider>
      </WindowProvider>
    </HelmetProvider>
  );
};

export default App;
