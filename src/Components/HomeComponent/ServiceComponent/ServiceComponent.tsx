import React, { FunctionComponent } from 'react';

import Service from './ServiceInterface';

import './styles.scss';

type ServiceComponentProps = {
  service: Service;
};

const ServiceComponent: FunctionComponent<ServiceComponentProps> = ({
  service
}) => {
  return (
    <div className="ServicetContainer">
      <img
        className="ServiceContainer-Image"
        src={service.image}
        alt={service.altText}
      />
      <h3 className="ServiceContainer-Title">{service.title}</h3>
      <p className="ServiceContainer-Text">{service.text}</p>
    </div>
  );
};

export default ServiceComponent;
