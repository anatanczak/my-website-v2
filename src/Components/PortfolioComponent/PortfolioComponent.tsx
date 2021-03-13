import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../Footer/Footer';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import './styles.scss';

type PortfolioComponentProps = {};

const PortfolioComponent: FunctionComponent<PortfolioComponentProps> = ({}) => {
  const { i18n } = useTranslation('translation');

  return (
    <div className="PortfolioComonentContainer">
      <NavBar activePage="portfolio" />
      <LanguageSelect />
      <Footer />
    </div>
  );
};

export default PortfolioComponent;
