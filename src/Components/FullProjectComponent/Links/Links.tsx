import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectLink } from '../../PortfolioComponent/ProjectInterface';

import './styles.scss';
import ExternalLink from '../../Links/ExternalLink';

type LinksProps = {
  links: Array<ProjectLink>;
};

const Links: FunctionComponent<LinksProps> = ({ links }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="ProjectLinksContainer">
      <h2 className="ProjectLinksContainer-Title">
        {t('portfolio.fullProjectDetail.links')}
      </h2>
      <div className="ProjectLinksContainer-LinksContainer">
        {links.map((link, index) => {
          return (
            <div
              className="ProjectLinksContainer-LinksContainer-IndLinkContainer"
              key={'projectLink' + index}
            >
              <div className="ProjectLinksContainer-LinksContainer-IndLinkContainer-NumberContainer">
                <p className="ProjectLinksContainer-LinksContainer-IndLinkContainer-NumberContainer-Number">
                  {index + 1}
                </p>
              </div>
              <ExternalLink url={link.url} text={link.label} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
