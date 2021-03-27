import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Service from './ServiceInterface';

import InternalLink from '../../../Links/InternalLink';
import './styles.scss';

type ServiceComponentProps = {
  service: Service;
};

const ServiceComponent: FunctionComponent<ServiceComponentProps> = ({
  service
}) => {
  const { t }: { t: any } = useTranslation();
  const url = `/portfolio/${service.tag}`;

  return (
    <div className="ServiceContainer">
      <img
        className="ServiceContainer-Image"
        src={service.image}
        alt={t(service.altText)}
      />
      <h3 className="ServiceContainer-Title">{t(service.title)}</h3>
      <p className="ServiceContainer-Text">{t(service.text)}</p>
      <InternalLink url={url} text={'home.services.link'} />
    </div>
  );
};

export default ServiceComponent;
