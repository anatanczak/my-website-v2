import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceComponent from './ServiceComponent/ServiceComponent';

import services from './Services';

import './styles.scss';

type ServicesComponentProps = {};

const ServicesComponent: FunctionComponent<ServicesComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="ServicesContainer">
      <h2 className="ServicesContainer-Title">{t('home.services.title')}</h2>
      <div className="ServicesContainer-Services">
        {services.map((service, index) => {
          return (
            <ServiceComponent service={service} key={service.title + index} />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesComponent;
