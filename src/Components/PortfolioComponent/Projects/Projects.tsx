import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCouple from '../ProjectCoupleInterface';

import projectListFull from '../ProjectList';
import Project from './Project/Project';

import './styles.scss';

type ProjectsProps = {
  category: string;
};

const Projects: FunctionComponent<ProjectsProps> = ({ category }) => {
  const { t }: { t: any } = useTranslation();

  let projectList = projectListFull;

  //   if (category !== 'all'){
  //     projectList = projectListFull.filter((project) =>{
  // if (project.projectA.)
  //     })
  //   }

  return (
    <div className="ProjectsContainer">
      {projectList.map((projectCouple: ProjectCouple) => {
        return (
          <div
            key={projectCouple.projectA.name}
            className="ProjectsContainer-ProjectCoupleContainer"
          >
            <div className="ProjectsContainer-ProjectCoupleContainer-ProjectAContainer">
              <Project project={projectCouple.projectA} />
            </div>
            {projectCouple.projectB && (
              <div className="ProjectsContainer-ProjectCoupleContainer-ProjectBContainer">
                <Project project={projectCouple.projectB} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
