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
  <p className="text-left text-secondary text-xl">
    <span className="align-middle mr-4 text-3xl">{emoji}</span>
    <span className="text-gradient align-middle">{title}</span> :{' '}
    <span className="inline-block align-middle w-55 text-center font-semibold">
      {value}
    </span>
  </p>
);
