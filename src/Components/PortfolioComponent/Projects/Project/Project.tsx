import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectInterface from '../../ProjectInterface';
import { BackgroundColorCode } from '../../ProjectList';

import './styles.scss';

type ProjectProps = {
  project: ProjectInterface;
};

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
  const { t }: { t: any } = useTranslation();

  let styles = {
    backgroundColor: project.thumbnailBackgroundColor,
    color: ''
  };

  if (project.thumbnailBackgroundColor === BackgroundColorCode.Grey) {
    styles = {
      backgroundColor: project.thumbnailBackgroundColor,
      color: BackgroundColorCode.DarkBlue
    };
  }

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
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default Project;
