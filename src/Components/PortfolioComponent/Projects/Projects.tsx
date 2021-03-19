import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectType from '../ProjectInterface';

import projectListFull from '../ProjectList';
import Project from './Project/Project';

import './styles.scss';

type ProjectsProps = {
  category: string;
};

const Projects: FunctionComponent<ProjectsProps> = ({ category }) => {
  const { t }: { t: any } = useTranslation();
  const [projectList, setProjectList] = useState(projectListFull);

  useEffect(() => {
    if (category !== 'all') {
      console.log(category);

      const filteredProjectList: Array<
        Array<ProjectType>
      > = projectListFull.map((projectInnerArray: Array<ProjectType>) => {
        const filteredInnerArray = projectInnerArray.filter(
          (project: ProjectType) => {
            if (project.tags.includes(category)) {
              return project;
            }
          }
        );
        return filteredInnerArray;
      });
      console.log('filteredProjectList');
      console.log(filteredProjectList);
      setProjectList(filteredProjectList);
    }
  }, [category]);

  useEffect(() => {
    console.log('projectList');
    console.log(projectList);
  }, [projectList]);

  return (
    <div className="ProjectsContainer">
      {projectList.map((projectArray: Array<ProjectType>) => {
        if (projectArray.length > 0) {
          return (
            <div
              key={projectArray[0].name}
              className="ProjectsContainer-ProjectCoupleContainer"
            >
              <div className="ProjectsContainer-ProjectCoupleContainer-ProjectAContainer">
                <Project project={projectArray[0]} />
              </div>
              {projectArray[1] && (
                <div className="ProjectsContainer-ProjectCoupleContainer-ProjectBContainer">
                  <Project project={projectArray[1]} />
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
