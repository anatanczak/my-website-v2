import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Service from './ServiceInterface';

import './styles.scss';

type ServiceComponentProps = {
  service: Service;
};

const ServiceComponent: FunctionComponent<ServiceComponentProps> = ({
  service
}) => {
  const { t }: { t: any } = useTranslation();
  return (
    <div className="ServiceContainer">
      <img
        className="ServiceContainer-Image"
        src={service.image}
        alt={t(service.altText)}
      />
      <h3 className="ServiceContainer-Title">{t(service.title)}</h3>
      <p className="ServiceContainer-Text">{t(service.text)}</p>
    </div>
  );
};

export default ServiceComponent;
