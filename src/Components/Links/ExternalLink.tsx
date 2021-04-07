import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Arrow from '../../assets/icons/darkblue_arrow.svg';

import './styles.scss';

type ExternalLinkProps = {
  url: string;
  text: string;
};

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({ url, text }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <a href={url} className="Link">
      <div className="Link-LinkTextContainer">
        <p className="Link-LinkTextContainer-Text">{t(text)}</p>
      </div>

      <span className="Link-ArrowCircleBackground">
        <img
          className="Link-ArrowCircleBackground-Arrow"
          src={Arrow}
          alt="arrow"
        />
      </span>
    </a>
  );
};

export default ExternalLink;
