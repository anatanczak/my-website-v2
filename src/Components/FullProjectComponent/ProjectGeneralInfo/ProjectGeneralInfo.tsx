import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../CustomHooks/useWindowSize';
import Carousel from '../Carousel/Carousel';

import LeftQuotes from '../../../assets/icons/quotes-leftside-icon.svg';
import RightQuotes from '../../../assets/icons/quotes-rightside-icon.svg';
import BackToProjectsIcon from '../../../assets/icons/back_to_projects_icon.svg';

import './styles.scss';

type ProjectGeneralInfoProps = {
  title: string;
  technologies?: Array<string>;
  quote?: string;
  images?: Array<string>;
  description: string;
};

const ProjectGeneralInfo: FunctionComponent<ProjectGeneralInfoProps> = ({
  title,
  technologies,
  quote,
  images,
  description
}) => {
  const { t }: { t: any } = useTranslation();
  const [windowWidth] = useWindowSize();
  const projectLongDescription: string = t(description);
  const text = projectLongDescription.split('\n');
  let previousURL = '/portfolio';
  const projectCategory = window.sessionStorage.getItem('projectCategory');
  if (projectCategory) {
    previousURL = '/portfolio/' + projectCategory;
  }

  return (
    <div className="ProjectGeneralContainer">
      <Link to={previousURL} className="ProjectGeneralContainer-ReturnLink">
        <img
          className="ProjectGeneralContainer-ReturnLink-Image"
          src={BackToProjectsIcon}
          alt="back icon"
        />
      </Link>
      <h1 className="ProjectGeneralContainer-Title">{title}</h1>

      {quote && (
        <div className="ProjectGeneralContainer-QuoteContainer">
          <img src={LeftQuotes} alt="left quotes" />
          <h4>{t(quote)}</h4>
          <img src={RightQuotes} alt="right quotes" />
        </div>
      )}
      {technologies && (
        <div className="ProjectGeneralContainer-TechnologiesContainer">
          {technologies.map((technology, index) => {
            return <p key={title + index + technology}>{technology}</p>;
          })}
        </div>
      )}
      {images && <Carousel images={images} />}
      {/* {heroImage && (
        <img
          className="ProjectGeneralContainer-Image"
          src={heroImage}
          alt="project image"
        />
      )} */}
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
