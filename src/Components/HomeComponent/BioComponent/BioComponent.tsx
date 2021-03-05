import React, { FunctionComponent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import useWindowSize from '../../../CustomHooks/useWindowSize';

import './styles.scss';

type BioComponentProps = {};

const BioComponent: FunctionComponent<BioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const [windowWidth] = useWindowSize();

  if (windowWidth > 500) {
    console.log('500 and more');
  }

  return (
    <div className="BioContainer">
      <h2 className="BioContainer-Title">Bio</h2>
      <div className="BioContainer-ImgTextContainer">
        <img className="BioContainer-ImgTextContainer-Img" src="" alt="" />
        <p className="BioContainer-ImgTextContainer-Text">ble ble ble</p>
      </div>
    </div>
  );
};

export default BioComponent;
