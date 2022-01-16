import React, { FunctionComponent, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../NavBar/NavBar';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Footer from '../Footer/Footer';

import LinkedinIcon from '../../assets/icons/linkedin_icon_palegreen.svg';
import GithubIcon from '../../assets/icons/github_icon_palegreen.svg';

import './styles.scss';

type ContactComponentProps = {};

const ContactComponent: FunctionComponent<ContactComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <NavBar activePage="contact" />
      {/* <LanguageSelect /> */}
      <div className="ContactComponentContainer">
        <div className="ContactComponentContainer-InfoContainer">
          <h1>{t('contact.hireMe')}</h1>
          <p>
            {t('contact.callMe')} <span>+33(0)6 95 56 49 93</span>
          </p>
          <p>{t('contact.or')}</p>
          <p>
            {t('contact.writeEmail')} <span>anatkachen@gmail.com</span>
          </p>
          <h2>{t('contact.knowMore')}</h2>
          <div className="ContactComponentContainer-InfoContainer-LinksContainer">
            <a href="https://www.linkedin.com/in/anastasiatanczak/">
              <img src={LinkedinIcon} alt="linkedin icon" />
            </a>
            <a href="https://github.com/anatanczak">
              <img src={GithubIcon} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactComponent;
