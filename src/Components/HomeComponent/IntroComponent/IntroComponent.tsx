import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Ball from '../../BallComponent/Ball';
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
        <h2 className="IntroductionAndPitchContainer-TextAndButtonContainer-Pitch">
          {t('home.pitch')}
        </h2>
        <button className="IntroductionAndPitchContainer-TextAndButtonContainer-DownloadButton">
          {t('home.button.downloadResume')}
        </button>
      </div>
    </div>
  );
};

export default IntroComponent;
