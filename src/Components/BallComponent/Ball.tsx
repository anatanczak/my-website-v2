import React, { FunctionComponent, useEffect, useState } from 'react';

import './styles.scss';

type BallProps = {};

const Ball: FunctionComponent<BallProps> = ({}) => {
  return (
    <div className="Stage">
      <figure className="Ball Bubble"></figure>
    </div>
  );
};

export default Ball;
