import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../../CustomHooks/useWindowSize';

import LeftQuotes from '../../../assets/icons/quotes-leftside-icon.svg';
import RightQuotes from '../../../assets/icons/quotes-rightside-icon.svg';

import './styles.scss';

type ProjectGeneralInfoProps = {
  title: string;
  quote?: string;
  heroImage?: string;
  description: string;
};

const ProjectGeneralInfo: FunctionComponent<ProjectGeneralInfoProps> = ({
  title,
  quote,
  heroImage,
  description
}) => {
  const { t }: { t: any } = useTranslation();
  const [windowWidth] = useWindowSize();
  const projectLongDescription: string = t(description);
  const text = projectLongDescription.split('\n');

  return (
    <div className="ProjectGeneralContainer">
      <h1 className="ProjectGeneralContainer-Title">{title}</h1>
      {quote && (
        <div className="ProjectGeneralContainer-QuoteContainer">
          <img src={LeftQuotes} alt="left quotes" />
          <h4>{t(quote)}</h4>
          <img src={RightQuotes} alt="right quotes" />
        </div>
      )}
      {heroImage && (
        <img
          className="ProjectGeneralContainer-Image"
          src={heroImage}
          alt="project image"
        />
      )}
      <h2 className="ProjectGeneralContainer-Subtitle">About project</h2>
      <div className="ProjectGeneralContainer-Text">
        {text.map((paragraph, index) => {
          return (
            <p
              className="ProjectGeneralContainer-Text-Paragraph"
              key={'fullproject' + title + index}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGeneralInfo;
