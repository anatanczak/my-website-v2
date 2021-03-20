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
    }
  }, [category]);

  useEffect(() => {
    console.log('projectList');
    console.log(projectList);
  }, [projectList]);

  return (
    <div className="ProjectsContainer">
      {projectList.map((project: ProjectType) => {
        return (
          <div
            key={project.name}
            className="ProjectsContainer-ProjectIndContainer"
          >
            <Project project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
