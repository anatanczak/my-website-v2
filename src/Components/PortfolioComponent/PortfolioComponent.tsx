import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

type PortfolioComponentProps = {};

const PortfolioComponent: FunctionComponent<PortfolioComponentProps> = ({}) => {
  const { i18n } = useTranslation('translation');

  return <div className="PortfolioComonentContainer"></div>;
};

export default PortfolioComponent;
