import React from 'react';
import { OButton } from 'components/button';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black">
      <h1 className="mb-8 text-center text-6xl font-semibold">Hello world</h1>
      <OButton onClick={() => alert('hi')} size="big">
        click me !
      </OButton>
    </div>
  );
};

export default Home;
