import React, { FunctionComponent, useState, useEffect, useRef } from 'react';

import useIntersectionObserver from '../../../../CustomHooks/useIntersectionObserver';
import useWindowSize from '../../../../CustomHooks/useWindowSize';

import SkillBubbleType from '../SkillInterface';

import Ball from '../../../BallComponent/Ball';

import './styles.scss';

type SkillBubbleProps = {
  skill: SkillBubbleType;
  delay: number;
};

const SkillBubble: FunctionComponent<SkillBubbleProps> = ({ skill, delay }) => {
  const [windowWidth] = useWindowSize();
  const skillDivRef = useRef<HTMLDivElement | null>(null);

  const [skillsDivIsVisible] = useIntersectionObserver({
    elementRef: skillDivRef
  });
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

  let bubbleSize = skill.sizeRatio * 5 + 80;

  if (windowWidth < 767) {
    bubbleSize /= 2;
  }

  return (
    <div className="SkillBubbleContainer" ref={skillDivRef}>
      <Ball
        color={bubbleColor}
        width={`${bubbleSize}px`}
        title={skill.label}
        titleColor={bubbleColor == '#f3f2f2' ? '#122744' : ''}
        delay={delay}
        isScalable
        isVisible={skillsDivIsVisible}
      />
    </div>
  );
};

export default SkillBubble;
