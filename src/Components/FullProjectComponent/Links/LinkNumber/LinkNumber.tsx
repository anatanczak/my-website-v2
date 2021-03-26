import React, { FunctionComponent, useState, useEffect } from 'react';

import './styles.scss';

type LinkNumberProps = {
  position: number;
};

const LinkNumber: FunctionComponent<LinkNumberProps> = ({ position }) => {
  return (
    <svg width="38" height="38">
      <g>
        <circle
          cx="19"
          cy="19"
          r="19"
          // transform="translate(336 1107)"
          fill="#c7a9c3"
        />
        <text className="projectLinkNumberText" x="50%" y="50%">
          1
        </text>
        {/* <text
          className="projectLinkNumberText"
          transform="translate(355 1135)"
          // fontSize="27"
          // fontWeight="700"
        >
          <tspan x="-7" y="0">
            {position}
          </tspan>
        </text> */}
      </g>
    </svg>
  );
};

export default LinkNumber;
