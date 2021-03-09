import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceComponent from './ServiceComponent/ServiceComponent';

import services from './Services';

import './styles.scss';
type ServicesComponentProps = {};

const ServicesComponent: FunctionComponent<ServicesComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="HomeComponentContainer-ServicesContainer">
      <h2 className="HomeComponentContainer-ServicesContainer-Title">
        {t('home.services.title')}{' '}
      </h2>
      <div className="HomeComponentContainer-ServicesContainer-Services">
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
