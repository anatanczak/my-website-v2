import React, { FunctionComponent } from 'react';

import Skill from './SkillBubble/SkillBubble';

import './styles.scss';

import {
  leftSkillBubblesCollection,
  upperSkillBubblesCollection,
  lowerSkillBubblesCollection,
  rightSkillBubblesCollection
} from './skillCollections';

type SkillsComponentProps = {
  title: string;
};

const SkillsComponent: FunctionComponent<SkillsComponentProps> = ({
  title
}) => {
  return (
    <div className="SkillCollectionsContainer">
      <div className="SkillCollectionsContainer-Left">
        {leftSkillBubblesCollection.map((skillBubble, index) => {
          return <Skill key={skillBubble.label + index} skill={skillBubble} />;
        })}
      </div>
      <div className="SkillCollectionsContainer-Center">
        <div className="SkillCollectionsContainer-Center-UpperBubblesContainer">
          {upperSkillBubblesCollection.map((skillBubble, index) => {
            return (
              <Skill key={skillBubble.label + index} skill={skillBubble} />
            );
          })}
        </div>
        <div className="SkillCollectionsContainer-Center-ComputerContainer">
          <h2 className="SkillCollectionsContainer-Center-ComputerContainer-Title">
            {title}
          </h2>
        </div>
        <div className="SkillCollectionsContainer-Center-LowerBubblesContainer">
          {lowerSkillBubblesCollection.map((skillBubble, index) => {
            return (
              <Skill key={skillBubble.label + index} skill={skillBubble} />
            );
          })}
        </div>
      </div>
      <div className="SkillCollectionsContainer-Right">
        {rightSkillBubblesCollection.map((skillBubble, index) => {
          return <Skill key={skillBubble.label + index} skill={skillBubble} />;
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
