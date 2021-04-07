import React, { FunctionComponent } from 'react';
import FullProjectComponent from '../../Components/FullProjectComponent/FullProjectComponent';

import './styles.scss';

type ProjectPageProps = {};

const ProjectPage: FunctionComponent<ProjectPageProps> = () => {
  return (
    <div className="ProjectPageContainer">
      <FullProjectComponent />
    </div>
  );
};

export default ProjectPage;
