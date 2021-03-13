import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../Footer/Footer';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import { projectCategories } from './ProjectCategories';

import './styles.scss';

type PortfolioComponentProps = {};

const PortfolioComponent: FunctionComponent<PortfolioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <NavBar activePage="portfolio" />
      <LanguageSelect />
      <div className="PortfolioComonentContainer">
        <h1 className="PortfolioComonentContainer-Title">
          {t('portfolio.title')}
        </h1>
        <div className="PortfolioComonentContainer-CategoriesContainer">
          {projectCategories.map((projectCategory) => {
            let categoryClassName =
              'PortfolioComonentContainer-CategoriesContainer-Category';
            if (projectCategory.name === activeCategory) {
              categoryClassName =
                'PortfolioComonentContainer-CategoriesContainer-ActiveCategory';
            }
            return (
              <div className={categoryClassName} key={projectCategory.name}>
                <p>{t(projectCategory.label)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioComponent;
