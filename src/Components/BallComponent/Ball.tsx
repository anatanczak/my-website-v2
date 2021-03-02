import React, { FunctionComponent, useEffect, useState } from 'react';

import './styles.scss';

type BallProps = {
  width: string;
  color: string;
  title?: string;
  titleColor?: string;
  delay: number;
};

const Ball: FunctionComponent<BallProps> = ({
  width,
  color,
  title,
  titleColor,
  delay
}) => {
  return (
    <div
      className="BallContainer"
      style={{ height: `${width}`, width: `${width}` }}
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
