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
      <LanguageSelect />
      <div className="ContactComponentContainer">
        <div className="ContactComponentContainer-InfoContainer">
          <h1>Want to hire me?</h1>
          <p>
            give me a call: <span>+33(0)6 95 56 49 93</span>
          </p>
          <p>or</p>
          <p>
            write an email: <span>anatkachen@gmail.com</span>
          </p>
          <h2>Want to know more about me?</h2>
          <div className="ContactComponentContainer-InfoContainer-LinksContainer">
            <a href="https://www.linkedin.com/in/anastasiatanczak/">
              <img src={LinkedinIcon} alt="linkedin icon" />
            </a>
            <a href="https://github.com/anaviktoriv">
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
