import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../CustomHooks/useIntersectionObserver';

import NavBar from '../../Components/NavBar/NavBar';
import Ball from '../BallComponent/Ball';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ServiceComponent from '../ServicesComponent/ServiceComponent/ServiceComponent';
import SkillsComponent from './SkillsComponent/SkillsComponent';

import services from '../ServicesComponent/Services';

import './styles.scss';
import LanguagesComponent from './LanguagesComponent/LanguagesComponent';
import BioComponent from './BioComponent/BioComponent';
import HobbiesComponent from './HobbiesComponent/HobbiesComponent';
import IntroComponent from './IntroComponent/IntroComponent';
import ServicesComponent from '../ServicesComponent/ServicesComponent';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <NavBar activePage="aboutMe" />
      <LanguageSelect />
      <div className="HomeComponentContainer">
        <section className="HomeComponentContainer-IntroHomeContainer">
          <IntroComponent />
        </section>
        <section className="HomeComponentContainer-ServicesContainer">
          <ServicesComponent />
        </section>
        <section className="HomeComponentContainer-SkillsHomeContainer">
          <SkillsComponent title={t('home.skills.title')} />
        </section>
        <section className="HomeComponentContainer-LanguagesHomeContainer">
          <LanguagesComponent />
        </section>
        <section className="HomeComponentContainer-BioHomeContainer">
          <BioComponent />
        </section>
        <section className="HomeComponentContainer-HobbiesHomeContainer">
          <HobbiesComponent />
        </section>
      </div>
    </>
  );
};

export default HomeComponent;
