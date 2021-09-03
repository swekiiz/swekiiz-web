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
    <div className="flex flex-row w-full">
      <div className="center-with-flex w-1/5">
        <p className="text-gradient text-center text-2xl font-semibold">
          {year}
        </p>
      </div>
      <div className="pl-8 w-4/5">
        <h1 className="text-gradient text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-grey pl-8 text-base">{description}</p>
      </div>
    </div>
  );
};
