import React from 'react';

type dataLabelPropsType = {
  title: string;
  value: string | number;
  emoji?: string;
};

export const DataLabel: React.FC<dataLabelPropsType> = ({
  title,
  value,
  emoji,
}: dataLabelPropsType): JSX.Element => (
  <p className="text-left text-secondary dark:text-white text-lg sm:text-xl">
    <span className="align-middle mr-4 text-xl sm:text-3xl">{emoji}</span>
    <span className="text-gradient align-middle mr-2 font-semibold">
      {title}
    </span>
    <br className="block sm:hidden" />
    <span className="hidden align-middle text-black dark:text-white font-normal sm:inline-block">
      :
    </span>
    <span className="inline-block align-middle w-48 text-center font-bold sm:w-55">
      {value}
    </span>
  </p>
);
