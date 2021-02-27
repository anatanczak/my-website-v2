import React, { FunctionComponent } from 'react';

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
        {leftSkillBubblesCollection.map((leftSkillBubble, index) => {
          return <p>{leftSkillBubble.label}</p>;
        })}
      </div>
      <div className="SkillCollectionsContainer-Center">
        <div className="SkillCollectionsContainer-Center-UpperBubblesContainer">
          {upperSkillBubblesCollection.map((upperSkillBubble, index) => {
            return <p>{upperSkillBubble.label}</p>;
          })}
        </div>
        <div className="SkillCollectionsContainer-Center-ComputerContainer">
          <h2 className="SkillCollectionsContainer-Title">{title}</h2>
        </div>
        <div className="SkillCollectionsContainer-Center-LowerBubblesContainer">
          {lowerSkillBubblesCollection.map((lowerSkillBubble, index) => {
            return <p>{lowerSkillBubble.label}</p>;
          })}
        </div>
      </div>
      <div className="SkillCollectionsContainer-Right">
        {rightSkillBubblesCollection.map((rightSkillBubble, index) => {
          return <p>{rightSkillBubble.label}</p>;
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
