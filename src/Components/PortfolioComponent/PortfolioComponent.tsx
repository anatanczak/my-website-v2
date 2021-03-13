import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../Footer/Footer';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import { projectCategories } from './ProjectCategories';
import Projects from './Projects/Projects';

import './styles.scss';

type PortfolioComponentProps = {};

const PortfolioComponent: FunctionComponent<PortfolioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const { pathname } = window.location;
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    switch (pathname) {
      case '/portfolio/web':
        setActiveCategory('web');
        break;
      case '/portfolio/ios':
        setActiveCategory('ios');
        break;
      case '/portfolio/uiux':
        setActiveCategory('uiux');
        break;
      default:
        break;
    }
  }, []);

  const projectCategoryClickHandler = (category: string) => {
    setActiveCategory(category);
    //TODO decide if I need history.push('/portfolio' + '/' + category)
  };

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
              <div
                className={categoryClassName}
                key={projectCategory.name}
                onClick={() => {
                  projectCategoryClickHandler(projectCategory.name);
                }}
              >
                <p>{t(projectCategory.label)}</p>
              </div>
            );
          })}
        </div>
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioComponent;
