import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../Components/NavBar/NavBar';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

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
      </div>
    </>
  );
};

export default HomeComponent;
