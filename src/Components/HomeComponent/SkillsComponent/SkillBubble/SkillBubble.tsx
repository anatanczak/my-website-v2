import React, { FunctionComponent, useState, useEffect } from 'react';
import SkillBubbleType from '../SkillInterface';

import Ball from '../../../BallComponent/Ball';

import './styles.scss';

type SkillBubbleProps = {
  skill: SkillBubbleType;
  makeVisible?: Boolean;
  delay: number;
};

const SkillBubble: FunctionComponent<SkillBubbleProps> = ({
  skill,
  makeVisible = true,
  delay
}) => {
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

  const bubbleSize = skill.sizeRatio * 5 + 80;

  return (
    <div
      className={
        makeVisible ? 'SkillBubbleContainerVisible' : 'SkillBubbleContainer'
      }
    >
      <Ball
        color={bubbleColor}
        width={`${bubbleSize}px`}
        title={skill.label}
        titleColor={bubbleColor == '#f3f2f2' ? '#122744' : ''}
        delay={delay}
      />
    </div>
  );
};

export default SkillBubble;
