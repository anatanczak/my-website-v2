import React, { FunctionComponent } from 'react';
import PortfolioComponent from '../../Components/PortfolioComponent/PortfolioComponent';

import './styles.scss';

type PortfolioPageProps = {};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  return (
    <div className="PortfolioPageContainer">
      <PortfolioComponent />
    </div>
  );
};

export default PortfolioPage;
