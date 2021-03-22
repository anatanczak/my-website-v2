import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Service from './ServiceInterface';

import Arrow from '../../../../assets/icons/darkblue_arrow.svg';

import './styles.scss';

type ServiceComponentProps = {
  service: Service;
};

const ServiceComponent: FunctionComponent<ServiceComponentProps> = ({
  service
}) => {
  const { t }: { t: any } = useTranslation();
  const link = `/portfolio/${service.tag}`;

  return (
    <div className="ServiceContainer">
      <img
        className="ServiceContainer-Image"
        src={service.image}
        alt={t(service.altText)}
      />
      <h3 className="ServiceContainer-Title">{t(service.title)}</h3>
      <p className="ServiceContainer-Text">{t(service.text)}</p>
      <Link to={link} className="ServiceContainer-Link">
        <div className="ServiceContainer-Link-LinkTextContainer">
          <p className="ServiceContainer-Link-LinkTextContainer-Text">
            {t('home.services.link')}
          </p>
        </div>

        <span className="ServiceContainer-Link-ArrowCircleBackground">
          <img
            className="ServiceContainer-Link-ArrowCircleBackground-Arrow"
            src={Arrow}
            alt="arrow"
          />
        </span>
      </Link>
    </div>
  );
};

export default ServiceComponent;
