import React from 'react';
import { experiencesList } from 'constants/experiences';
import { Experience } from 'components/card';
import { GreyHr } from 'components/line';
import { FadeIn } from 'components/effect';
import { IExperience } from 'types/experience';
import useViewport from 'hooks/useViewport';

export const ExperienceSection: React.FC = () => {
  const { height, width, lg } = useViewport();

  return (
    <div className="px-12 py-8 dark:bg-black bg-white space-y-4 sm:py-24 sm:space-y-6 md:space-y-16">
      {experiencesList.map((item: IExperience, index: number) => (
        <FadeIn key={index} resetOffSetY={height}>
          <Experience {...item} />
          {index !== experiencesList.length - 1 && width < lg && (
            <GreyHr className="mt-4 sm:mt-6 md:mt-16" />
          )}
        </FadeIn>
      ))}
    </div>
  );
};
