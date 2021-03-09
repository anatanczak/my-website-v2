import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './styles.scss';

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <footer className="FooterContainer">
      <div className="FooterContainer-PolicyContainer">
        <h5>&#169; Anastasia Tanczak</h5>
      </div>
      <div className="FooterContainer-ContactContainer"></div>
      <div className="FooterContainer-SocialLinksContainer"></div>
    </footer>
  );
};

export default Footer;
