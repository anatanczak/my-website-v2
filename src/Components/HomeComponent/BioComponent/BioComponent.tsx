import React, { FunctionComponent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import useWindowSize from '../../../CustomHooks/useWindowSize';

import PhotoMobile from '../../../assets/img/portrait_bio_mobile.webp';
import PhotoDesktop from '../../../assets/img/portrait_bio_desktop.webp';

import './styles.scss';

type BioComponentProps = {};

const BioComponent: FunctionComponent<BioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const [windowWidth] = useWindowSize();
  let photo = PhotoMobile;
  let text = t('home.bio.text').split('\n');

  if (windowWidth > 1023) {
    photo = PhotoDesktop;
  } else {
    photo = PhotoMobile;
  }

  return (
    <div className="BioContainer">
      <h2 className="BioContainer-Title">{t('home.bio.title')}</h2>
      <div className="BioContainer-ImgTextContainer">
        <img
          className="BioContainer-ImgTextContainer-Img"
          src={photo}
          alt="my photo"
        />
        <div className="BioContainer-ImgTextContainer-Text">
          {' '}
          {text.map((paragraph: string, index: number) => {
            return (
              <p
                className="BioContainer-ImgTextContainer-Text-Paragraph"
                key={'paragraph' + index}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioComponent;
