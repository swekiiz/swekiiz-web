import React from 'react';
import axios from 'axios';
import { Lending } from 'layouts';

const { useState, useEffect } = React;

const Playground: React.FC = (): JSX.Element => {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://randomuser.me/api/')
        .then(response => setData(JSON.stringify(response.data, null, 2)))
        .catch(error => setError(error));
    };

    fetchData();
  }, []);

  return (
    <Lending>
      <pre className="text-black dark:text-white text-sm">{data}</pre>
      {error && <h1 className="text-red-400">{error}</h1>}
    </Lending>
  );
};

export default Playground;
