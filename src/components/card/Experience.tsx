import React from 'react';

export interface IExperience {
  title?: string;
  year?: string;
  description?: string;
}

export const Experience: React.FC<IExperience> = ({
  title,
  year,
  description,
}: IExperience) => {
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="flex items-center justify-start w-full sm:justify-center md:w-2/12 xl:w-1/5">
        <p className="text-gradient mb-4 text-left whitespace-nowrap text-lg font-semibold sm:text-center sm:text-xl md:mb-0 md:text-2xl">
          {year}
        </p>
      </div>
      <div className="pl-2 w-full sm:pl-8 md:w-10/12 xl:w-4/5">
        <h1 className="text-gradient mb-2 text-lg font-semibold sm:text-2xl">
          {title}
        </h1>
        <p className="text-grey pl-8 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};
