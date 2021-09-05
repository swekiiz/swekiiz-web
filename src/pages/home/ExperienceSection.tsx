import React, { Fragment } from 'react';
import { experiencesList } from 'constants/experiences';
import { Experience } from 'components/card';
import { GreyHr } from 'components/line';
import { IExperience } from 'types/experience';
import useViewport from 'hooks/useViewport';

export const ExperienceSection: React.FC = () => {
  const { width, lg } = useViewport();

  return (
    <div className="px-12 py-8 dark:bg-black bg-white space-y-4 sm:py-24 sm:space-y-6 md:space-y-16">
      {experiencesList.map((item: IExperience, index: number) => (
        <Fragment key={index}>
          <Experience {...item} />
          {index !== experiencesList.length - 1 && width < lg && <GreyHr />}
        </Fragment>
      ))}
    </div>
  );
};
