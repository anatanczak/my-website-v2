import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCouple from '../ProjectCoupleInterface';

import projectList from '../ProjectList';
import Project from './Project/Project';

import './styles.scss';

type ProjectsProps = {};

const Projects: FunctionComponent<ProjectsProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="ProjectsContainer">
      {projectList.map((projectCouple: ProjectCouple, index) => {
        let projectAClassName =
          'ProjectsContainer-ProjectCoupleContainer-ProjectAContainer';
        let projectBClassName =
          'ProjectsContainer-ProjectCoupleContainer-ProjectAContainer';

        // switch (index) {
        //   case 0:
        //     projectAClassName +=
        //       ' ProjectsContainer-ProjectCoupleContainer-LillyBackground';
        //     projectBClassName +=
        //       ' ProjectsContainer-ProjectCoupleContainer-GreyBackground';
        //     break;
        //   case 1:
        //     projectAClassName +=
        //       ' ProjectsContainer-ProjectCoupleContainer-PaleGreenBackground';
        //     projectBClassName +=
        //       ' ProjectsContainer-ProjectCoupleContainer-GreyBackground';
        //     break;
        //   default:
        //     break;
        // }
        return (
          <div
            key={projectCouple.projectA.name}
            className="ProjectsContainer-ProjectCoupleContainer"
          >
            <div className={projectAClassName}>
              <Project project={projectCouple.projectA} />
            </div>

            <div className={projectBClassName}>
              {projectCouple.projectB && (
                <Project project={projectCouple.projectB} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
