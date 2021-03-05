import React, { FunctionComponent, useEffect, useState } from 'react';

import './styles.scss';

type BallProps = {
  width: string;
  color: string;
  title?: string;
  titleColor?: string;
  delay: number;
  isScalable: boolean;
  isVisible?: boolean;
};

const Ball: FunctionComponent<BallProps> = ({
  width,
  color,
  title,
  titleColor,
  delay,
  isScalable = false,
  isVisible
}) => {
  const transitionDelay = Math.random();
  let containerClassName = 'BallContainer';

  if (isScalable && !isVisible) {
    containerClassName += ' BallContainerInvisible';
  } else if (isScalable && isVisible) {
    containerClassName += ' BallContainerVisible';
  }

  return (
    <div
      className={containerClassName}
      style={{
        height: `${width}`,
        width: `${width}`,
        transitionDelay: `${transitionDelay}s`
      }}
    >
      <div
        className="BallContainer-Ball BallContainer-Bubble"
        style={{ background: `${color}`, animationDelay: `${delay}s` }}
      >
        {title && (
          <p
            className="BallContainer-Ball-Title"
            style={titleColor ? { color: `${titleColor}` } : {}}
          >
            {title}{' '}
          </p>
        )}
      </div>
    </div>
  );
};

export default Ball;
