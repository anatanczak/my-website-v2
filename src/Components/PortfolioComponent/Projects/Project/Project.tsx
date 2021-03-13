import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectInterface from '../../ProjectInterface';

import './styles.scss';

type ProjectProps = {
  project: ProjectInterface;
};

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="ProjectContainer">
      <h3>{project.name}</h3>
    </div>
  );
};

export default Project;
