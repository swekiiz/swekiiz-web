import React from 'react';
import Routes from './routes/routes';
import { WindowProvider } from 'contexts/WindowContext';
import { ThemesProvider } from 'contexts/ThemesContext';

const App: React.FC = (): JSX.Element => {
  return (
    <WindowProvider>
      <ThemesProvider>
        <Routes />
      </ThemesProvider>
    </WindowProvider>
  );
};

export default App;
