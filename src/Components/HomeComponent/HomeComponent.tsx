import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../CustomHooks/useIntersectionObserver';

import NavBar from '../../Components/NavBar/NavBar';
import Ball from '../BallComponent/Ball';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ServiceComponent from './ServiceComponent/ServiceComponent';
import SkillsComponent from './SkillsComponent/SkillsComponent';

import services from './Services';

import './styles.scss';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const skillsDivRef = useRef<HTMLDivElement | null>(null);

  const [skillsDivIsVisible, entry] = useIntersectionObserver({
    elementRef: skillsDivRef
  });

  return (
    <>
      <NavBar activePage="aboutMe" />
      <LanguageSelect />
      <div className="HomeComponentContainer">
        <div className="HomeComponentContainer-IntroductionAndPitchContainer">
          {/* <Ball color="#c7a9c3" width="100px" /> */}
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
          <div
            className="HomeComponentContainer-SkillsContainer"
            ref={skillsDivRef}
          >
            <SkillsComponent title={t('home.skills.title')} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
