import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Service from './ServiceComponent/ServiceInterface';

import NavBar from '../../Components/NavBar/NavBar';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

import webDevIcon from '../../assets/icons/web_dev_icon.svg';

import './styles.scss';
import ServicesComponent from './ServiceComponent/ServiceComponent';
import ServiceComponent from './ServiceComponent/ServiceComponent';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  const services: Array<Service> = [
    {
      image: webDevIcon,
      altText: t('home.services.webDevelopment.altText'),
      title: t('home.services.webDevelopment.title'),
      text: t('home.services.webDevelopment.text')
    }
  ];

  return (
    <>
      <NavBar activePage="aboutMe" />
      <LanguageSelect />
      <div className="HomeComponentContainer">
        <div className="HomeComponentContainer-IntroductionAndPitchContainer">
          <div className="HomeComponentContainer-IntroductionAndPitchContainer-TextAndButtonContainer">
            <h1 className="HomeComponentContainer-IntroductionAndPitchContainer-TextAndButtonContainer-MainTitle">
              {t('home.mainTitle')}
            </h1>
            <h2 className="HomeComponentContainer-IntroductionAndPitchContainer-TextAndButtonContainer-Pitch">
              {t('home.pitch')}
            </h2>
            <button className="HomeComponentContainer-IntroductionAndPitchContainer-TextAndButtonContainer-DownloadButton">
              {t('home.button.downloadResume')}
            </button>
          </div>
        </div>
        <div className="HomeComponentContainer-WhatIDoContainer">
          <h2> {t('home.services')} </h2>
          {services.map((service, index) => {
            return (
              <ServiceComponent service={service} key={service.title + index} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
