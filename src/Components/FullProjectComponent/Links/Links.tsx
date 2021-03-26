import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectLink } from '../../PortfolioComponent/ProjectInterface';
import LinkNumber from './LinkNumber/LinkNumber';

import './styles.scss';

type LinksProps = {
  links: Array<ProjectLink>;
};

const Links: FunctionComponent<LinksProps> = ({ links }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="LinksContainer">
      <h2>Links</h2>
      {links.map((link, index) => {
        return (
          <div key={'projectLink' + index}>
            <LinkNumber position={index + 1} />
          </div>
        );
      })}
    </div>
  );
};

export default Links;
