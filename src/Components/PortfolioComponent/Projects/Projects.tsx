import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isConstructSignatureDeclaration } from 'typescript';
import ProjectType from '../ProjectInterface';

import projectListFull from '../ProjectList';
import Project from './Project/Project';

import './styles.scss';

type ProjectsProps = {
  category: string;
};

function prepareProjectList(
  projects: Array<ProjectType>,
  projCategory = 'uiux'
): Array<Array<ProjectType>> {
  const sixElementArray: Array<ProjectType> = [];
  const tempProjectArray: Array<Array<ProjectType>> = [];

  projects.map((projectObj: ProjectType, index) => {
    if (projCategory === 'all' || projectObj.tags.includes(projCategory)) {
      if (sixElementArray.length === 6) {
        sixElementArray.length = 0;
      }
      sixElementArray.push(projectObj);
    }

    if (sixElementArray.length === 6 || projects.length - (index + 1) === 0) {
      tempProjectArray.push(sixElementArray);
    }
  });

  return tempProjectArray;
}

const Projects: FunctionComponent<ProjectsProps> = ({ category }) => {
  const { t }: { t: any } = useTranslation();
  const [projectList, setProjectList] = useState<Array<Array<ProjectType>>>();
  const [refreshComponent, setRefreshComponent] = useState(false);

  useEffect(() => {
    const tempArray = prepareProjectList(projectListFull, category);
    setProjectList(tempArray);
  }, [category]);

  return (
    <>
      {projectList?.map((sixProjectList, index) => {
        return (
          <div className="ProjectsContainer" key={'projectContainer' + index}>
            {sixProjectList.map((project: ProjectType) => {
              return (
                <div
                  key={project.name}
                  className="ProjectsContainer-ProjectIndContainer"
                >
                  <Project project={project} activeCategory={category} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Projects;
