import React, { FunctionComponent } from 'react';
import SkillBubbleType from '../SkillInterface';

import Ball from '../../../BallComponent/Ball';

import './styles.scss';

type SkillBubbleProps = {
  skill: SkillBubbleType;
};

const SkillBubble: FunctionComponent<SkillBubbleProps> = ({ skill }) => {
  const bubbleColor = (() => {
    switch (skill.section) {
      case 'Mobile':
        return '#a3d0cb';
      case 'Front':
        return '#c7a9c3';
      case 'Back':
        return '#122744';
      default:
        return '#f3f2f2';
    }
  })();

  const bubbleSize = skill.sizeRatio * 5 + 60;

  return (
    <div className="SkillBubbleContainer">
      <Ball
        color={bubbleColor}
        width={`${bubbleSize}px`}
        title={skill.label}
        titleColor={bubbleColor == '#f3f2f2' ? '#122744' : ''}
      />
    </div>
  );
};

export default SkillBubble;
