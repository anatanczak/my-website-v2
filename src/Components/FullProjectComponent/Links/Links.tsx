import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ProjectLink } from '../../PortfolioComponent/ProjectInterface';
import Arrow from '../../../../assets/icons/darkblue_arrow.svg';

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
            <div>
              <p>{index + 1}</p>
            </div>
            <p>{link.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
