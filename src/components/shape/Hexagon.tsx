import React from 'react';

interface ICustomizableHexagon {
  scale?: number;
  bgClass?: string;
}

const CustomizableHexagon: React.FC<ICustomizableHexagon> = ({
  scale,
  bgClass,
}: ICustomizableHexagon): JSX.Element => {
  return (
    <div
      className="hexagon-wrapper-transform relative bg-transparent overflow-hidden"
      style={{
        width: `${scale}px`,
        height: `${scale}px`,
      }}
    >
      <div
        className={`${
          bgClass || 'bg-white'
        } hexagon-inner-transform absolute bottom-0 top-0`}
        style={{ left: '6.7%', right: '6.7%' }}
      />
    </div>
  );
};

export interface IHexagon {
  size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo';
}

export const GradientHexagon: React.FC<IHexagon> = ({
  size = 'medium',
}: IHexagon): JSX.Element => {
  const scale = {
    small: 50,
    medium: 100,
    large: 150,
    extra: 200,
    jumbo: 250,
  };

  return (
    <div
      className="hexagon-wrapper-transform relative bg-transparent overflow-hidden"
      style={{
        width: `${scale[size]}px`,
        height: `${scale[size]}px`,
      }}
    >
      <div
        className="bg-gradient hexagon-inner-transform absolute bottom-0 top-0"
        style={{ left: '6.7%', right: '6.7%' }}
      />
    </div>
  );
};

export const WhiteHexagon: React.FC<IHexagon> = ({
  size = 'medium',
}: IHexagon): JSX.Element => {
  const scale = {
    small: 50,
    medium: 100,
    large: 150,
    extra: 200,
    jumbo: 250,
  };

  return (
    <div
      className="hexagon-wrapper-transform relative bg-transparent overflow-hidden"
      style={{
        width: `${scale[size]}px`,
        height: `${scale[size]}px`,
      }}
    >
      <div
        className="hexagon-inner-transform absolute bottom-0 top-0 bg-white"
        style={{ left: '6.7%', right: '6.7%' }}
      />
    </div>
  );
};

export const OutlineGradientHexagon: React.FC<IHexagon> = ({
  size = 'medium',
}: IHexagon): JSX.Element => {
  const scale = {
    small: 50,
    medium: 100,
    large: 150,
    extra: 200,
    jumbo: 250,
  };

  return (
    <div
      className="hexagon-wrapper-transform relative bg-transparent overflow-hidden"
      style={{
        width: `${scale[size]}px`,
        height: `${scale[size]}px`,
      }}
    >
      <div
        className="bg-gradient hexagon-inner-transform absolute bottom-0 top-0 flex items-center justify-center"
        style={{ left: '6.7%', right: '6.7%' }}
      >
        <CustomizableHexagon bgClass="bg-white" scale={scale[size] - 20} />
      </div>
    </div>
  );
};
