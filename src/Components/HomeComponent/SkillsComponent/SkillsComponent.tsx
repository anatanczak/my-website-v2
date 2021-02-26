import React, { FunctionComponent } from 'react';

import './styles.scss';
import skills from './skillList';

type SkillsComponentProps = {};

const SkillsComponent: FunctionComponent<SkillsComponentProps> = ({}) => {
  return (
    <div className="SkillBubblesContainer">
      {skills.map((skill, index) => {
        return (
          <div
            className="SkillBubblesContainer-SkillBubbleContainer"
            key={skill + index}
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsComponent;
