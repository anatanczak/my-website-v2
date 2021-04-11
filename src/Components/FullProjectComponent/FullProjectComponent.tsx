import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import ProjectList from '../PortfolioComponent/ProjectList';
import ProjectType from '../PortfolioComponent/ProjectInterface';

import NavBar from '../NavBar/NavBar';
import MailSticky from '../MailSticky/MailSticky';
import Footer from '../Footer/Footer';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import './styles.scss';
import ProjectGeneralInfo from './ProjectGeneralInfo/ProjectGeneralInfo';
import Links from './Links/Links';
import Features from './Features/Features';

type FullProjectComponentProps = {};

const FullProjectComponent: FunctionComponent<FullProjectComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const { pathname } = window.location;
  const pathNameArray = pathname.split('/');
  let history = useHistory();

  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    const projectIdString = pathNameArray.slice(-1).pop();

    if (projectIdString != undefined) {
      const projectId = parseInt(projectIdString);
      let currentProject: ProjectType | null = null;
      ProjectList.forEach((indProject) => {
        if (indProject.id === projectId) {
          currentProject = indProject;
        }
      });

      if (currentProject) {
        setProject(currentProject);
      } else {
        history.push('/portfolio');
      }
    }
  }, []);

  return (
    <>
      {project && (
        <>
          <NavBar activePage="portfolio" />
          {/* <LanguageSelect /> */}
          <div className="FullProjectComonentContainer">
            <ProjectGeneralInfo
              title={project.name}
              technologies={project.technologies}
              description={project.longDescription}
              quote={project.quote}
              images={project.images}
            />
            {project.links && <Links links={project.links} />}
            {project.features && <Features features={project.features} />}
          </div>
          <MailSticky />
          <Footer />
        </>
      )}
    </>
  );
};

export default FullProjectComponent;
