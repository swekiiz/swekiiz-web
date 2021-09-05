import React from 'react';

interface IGradientVerticalLine {
  className?: string;
}

export const GradientVerticalLine: React.FC<IGradientVerticalLine> = ({
  className,
}: IGradientVerticalLine) => (
  <div className={`vertical-gradient ${className || ''}`} />
);
