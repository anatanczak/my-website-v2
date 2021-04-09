import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//import Ball from '../../BallComponent/Ball';
import './styles.scss';

type IntroComponentProps = {};

const IntroComponent: FunctionComponent<IntroComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="IntroductionAndPitchContainer">
      {/* <Ball color="#c7a9c3" width="100px" /> */}
      <div className="IntroductionAndPitchContainer-TextAndButtonContainer">
        <h1 className="IntroductionAndPitchContainer-TextAndButtonContainer-MainTitle">
          {t('home.mainTitle')}
        </h1>
        <p className="IntroductionAndPitchContainer-TextAndButtonContainer-Pitch">
          {t('home.pitch')}
        </p>
        <div className="IntroductionAndPitchContainer-TextAndButtonContainer-ButtonsContainer">
          <a
            href="/files/cv_tanczak_fullstack.pdf"
            className="IntroductionAndPitchContainer-TextAndButtonContainer-ButtonsContainer-DownloadButton"
            download
          >
            {t('home.button.downloadResume')}
          </a>
          <Link
            className="IntroductionAndPitchContainer-TextAndButtonContainer-ButtonsContainer-DownloadButton"
            to="/portfolio"
          >
            {t('home.button.viewPortfolio')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
