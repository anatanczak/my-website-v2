import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import MailSticky from '../MailSticky/MailSticky';

import Footer from '../Footer/Footer';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import { projectCategories } from './ProjectCategories';
import Projects from './Projects/Projects';

import './styles.scss';

type PortfolioComponentProps = {};

const PortfolioComponent: FunctionComponent<PortfolioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const { pathname } = window.location;
  let history = useHistory();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    switch (pathname) {
      case '/portfolio/web':
        setActiveCategory('web');
        window.sessionStorage.setItem('projectCategory', 'web');
        break;
      case '/portfolio/ios':
        setActiveCategory('ios');
        window.sessionStorage.setItem('projectCategory', 'ios');
        break;
      case '/portfolio/uiux':
        setActiveCategory('uiux');
        window.sessionStorage.setItem('projectCategory', 'uiux');
        break;
      default:
        window.sessionStorage.setItem('projectCategory', 'all');
        break;
    }
  }, []);

  const projectCategoryClickHandler = (category: string) => {
    setActiveCategory(category);
    window.sessionStorage.setItem('projectCategory', category);

    if (category === 'all') {
      history.push('/portfolio');
    } else {
      history.push(`/portfolio/${category}`);
    }
  };

  return (
    <>
      <NavBar activePage="portfolio" />
      {/* <LanguageSelect /> */}
      <div className="PortfolioComonentContainer">
        <h1
          className="PortfolioComonentContainer-Title"
          onClick={() => {
            console.log('clicking');
          }}
        >
          {t('portfolio.title')}
        </h1>
        <div className="PortfolioComonentContainer-CategoriesContainer">
          {projectCategories.map((projectCategory, index) => {
            let categoryClassName =
              'PortfolioComonentContainer-CategoriesContainer-Category';
            if (projectCategory.name === activeCategory) {
              categoryClassName =
                'PortfolioComonentContainer-CategoriesContainer-ActiveCategory';
            }
            return (
              <div
                className={categoryClassName}
                key={projectCategory.name + index}
                onClick={() => {
                  projectCategoryClickHandler(projectCategory.name);
                }}
              >
                <p>{t(projectCategory.label)}</p>
              </div>
            );
          })}
        </div>
        <Projects category={activeCategory} />
      </div>
      <MailSticky />
      <Footer />
    </>
  );
};

export default PortfolioComponent;
