import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import SkillsComponent from './SkillsComponent/SkillsComponent';
import LanguagesComponent from './LanguagesComponent/LanguagesComponent';
import BioComponent from './BioComponent/BioComponent';
import HobbiesComponent from './HobbiesComponent/HobbiesComponent';
import IntroComponent from './IntroComponent/IntroComponent';
import ServicesComponent from './ServicesComponent/ServicesComponent';
import MailSticky from '../MailSticky/MailSticky';
import Footer from '../Footer/Footer';

import './styles.scss';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <NavBar activePage="aboutMe" />
      {/* <LanguageSelect /> */}
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
      <MailSticky />
      <Footer />
    </>
  );
};

export default HomeComponent;
