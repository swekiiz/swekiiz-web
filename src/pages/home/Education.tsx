import React from 'react';

export const Education: React.FC = (): JSX.Element => (
  <div className="flex flex-col items-start justify-start m-auto p-8 space-y-4 sm:p-16">
    <h1 className="text-gradient w-full text-center text-5xl font-semibold leading-tight md:w-auto md:text-left">
      Education
    </h1>
    <div className="pl-8 dark:text-gray-100 text-grey text-lg">
      <h1 className="block w-16 h-auto dark:text-primary text-secondary text-2xl sm:inline-block">
        Major
      </h1>
      <span className="hidden mx-2 sm:inline-block"> - </span>
      <p className="inline-block p-4 sm:p-0">Computer Engineering</p>
    </div>
    <div className="pl-8 dark:text-gray-100 text-grey text-lg">
      <h1 className="block w-16 h-auto dark:text-primary text-secondary text-2xl sm:inline-block">
        Minor
      </h1>
      <span className="hidden mx-2 sm:inline-block"> - </span>
      <p className="inline-block p-4 sm:p-0">
        Artificial Intelligence Engineering
      </p>
    </div>
    <div className="text-gradient-kmitl m-auto py-4 text-center text-6xl font-semibold tracking-wider uppercase">
      kmitl
    </div>
    <div className="w-full">
      <h1 className="w-full text-center text-kmitl font-semibold">
        King Mongkut&#39;s institute of Technology Ladkrabang
      </h1>
    </div>
  </div>
);
