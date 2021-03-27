import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/icons/darkblue_arrow.svg';

import './styles.scss';

type LinkComponentProps = {
  url: string;
  text: string;
};

const LinkComponent: FunctionComponent<LinkComponentProps> = ({
  url,
  text
}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <Link to={url} className="Link">
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
    </Link>
  );
};

export default LinkComponent;
