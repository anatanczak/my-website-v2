import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import Ball from '../BallComponent/Ball';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ServiceComponent from './ServiceComponent/ServiceComponent';

import services from './Services';

import './styles.scss';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <NavBar activePage="aboutMe" />
      <LanguageSelect />
      <div className="HomeComponentContainer">
        <div className="HomeComponentContainer-IntroductionAndPitchContainer">
          <Ball />
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
        <div className="HomeComponentContainer-ServicesContainer">
          <h2 className="HomeComponentContainer-ServicesContainer-Title">
            {t('home.services')}{' '}
          </h2>
          <div className="HomeComponentContainer-ServicesContainer-Services">
            {services.map((service, index) => {
              return (
                <ServiceComponent
                  service={service}
                  key={service.title + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
