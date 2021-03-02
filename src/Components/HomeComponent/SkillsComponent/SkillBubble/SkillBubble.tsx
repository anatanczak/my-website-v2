import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import SkillBubbleType from '../SkillInterface';
import useIntersectionObserver from '../../../../CustomHooks/useIntersectionObserver';

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const skillDivRef = useRef<HTMLDivElement | null>(null);

  const [skillsDivIsVisible, entry] = useIntersectionObserver({
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

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  });

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
