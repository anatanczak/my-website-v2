import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ProjectInterface from '../../ProjectInterface';
import { BackgroundColorCode } from '../../ProjectList';

import './styles.scss';

type ProjectProps = {
  project: ProjectInterface;
};

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
  const { t }: { t: any } = useTranslation();
  let history = useHistory();

  let styles = {
    backgroundColor: project.thumbnailBackgroundColor,
    color: ''
  };

  let buttonStyles = {
    backgroundColor: BackgroundColorCode.Grey
  };

  let separatorStyles = {
    borderColor: ''
  };

  if (project.thumbnailBackgroundColor === BackgroundColorCode.Grey) {
    styles = {
      backgroundColor: project.thumbnailBackgroundColor,
      color: BackgroundColorCode.DarkBlue
    };
    buttonStyles = {
      backgroundColor: BackgroundColorCode.Lilly
    };
    separatorStyles = {
      borderColor: BackgroundColorCode.DarkBlue
    };
  }
  if (project.thumbnailBackgroundColor === BackgroundColorCode.DarkBlue) {
    buttonStyles = {
      backgroundColor: BackgroundColorCode.PaleGreen
    };
  }

  const buttonClickHandler = (projectId: number) => {
    history.push('/portfolio/projects/' + projectId);
  };

  return (
    <div className="ProjectContainer" style={styles}>
      <div className="ProjectContainer-CardFront">
        <h3 className="ProjectContainer-CardFront-Title">{project.name}</h3>
        <img
          className="ProjectContainer-CardFront-Image"
          src={project.thumbnail}
          alt="project image"
        />
        <p className="ProjectContainer-CardFront-Description">
          {t(project.shortDescription)}
        </p>
        {project.hasDetailedinfo ? (
          <button
            className="ProjectContainer-CardFront-Button"
            style={buttonStyles}
            onClick={() => {
              buttonClickHandler(project.id);
            }}
          >
            {t('portfolio.project.seeProjectLink')}
          </button>
        ) : (
          <a
            className="ProjectContainer-CardFront-Button"
            style={buttonStyles}
            href={project.githubLink}
          >
            {t('portfolio.project.seeCodeLink')}
          </a>
        )}
      </div>
      <div className="ProjectContainer-CardBack">
        <h3 className="ProjectContainer-CardBack-Title">{project.name}</h3>
        <div
          className="ProjectContainer-CardBack-Separator"
          style={separatorStyles}
        ></div>
        <p className="ProjectContainer-CardBack-Description">
          {t(project.shortDescription)}
        </p>
        {project.hasDetailedinfo ? (
          <button
            className="ProjectContainer-CardBack-Button"
            style={buttonStyles}
            onClick={() => {
              buttonClickHandler(project.id);
            }}
          >
            {t('portfolio.project.seeProjectLink')}
          </button>
        ) : (
          <a
            className="ProjectContainer-CardBack-Button"
            style={buttonStyles}
            href={project.githubLink}
          >
            {t('portfolio.project.seeCodeLink')}
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
