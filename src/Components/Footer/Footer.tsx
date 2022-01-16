import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Phone from '../../assets/icons/phone_icon_white.svg';
import Email from '../../assets/icons/email_icon_white.svg';
import Github from '../../assets/icons/github_icon_white.svg';
import Linkedin from '../../assets/icons/linkedin_icon_white.svg';

import './styles.scss';

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <footer className="FooterContainer">
      <div className="FooterContainer-PolicyContainer">
        <p className="FooterContainer-PolicyContainer-CopyRight">
          &#169; Anastasia Tanczak
        </p>
        <Link
          className="FooterContainer-PolicyContainer-PrivacyPolicyLink"
          to="/privacypolicy"
        >
          {t('footer.privacyPolicy')}
        </Link>
      </div>
      <div className="FooterContainer-ContactContainer">
        <h5 className="FooterContainer-ContactContainer-Title">
          {t('footer.contact')}
        </h5>
        <div className="FooterContainer-ContactContainer-Contact">
          <img
            className="FooterContainer-ContactContainer-Contact-Icon"
            src={Phone}
            alt="phone icon"
          />
          <p className="FooterContainer-ContactContainer-Contact-Text">
            +33(0)6 95 56 49 93
          </p>
        </div>
        <div className="FooterContainer-ContactContainer-Contact">
          <img
            className="FooterContainer-ContactContainer-Contact-Icon"
            src={Email}
            alt="Email icon"
          />
          <a
            href="mailto:anatkachen@gmail.com"
            className="FooterContainer-ContactContainer-Contact-Text"
          >
            anatkachen@gmail.com
          </a>
        </div>
      </div>
      <div className="FooterContainer-SocialLinksContainer">
        <h5 className="FooterContainer-SocialLinksContainer-Title">
          {t('footer.followMe')}
        </h5>
        <div className="FooterContainer-SocialLinksContainer-Links">
          <a
            className="FooterContainer-SocialLinksContainer-Links-Link"
            href="https://www.linkedin.com/in/anastasiatanczak/"
          >
            <img
              className="FooterContainer-SocialLinksContainer-Links-Link-Icon"
              src={Linkedin}
              alt="linkedin icon"
            />
          </a>
          <a
            className="FooterContainer-SocialLinksContainer-Links-Link"
            href="https://github.com/anatanczak"
          >
            <img
              className="FooterContainer-SocialLinksContainer-Links-Link-Icon"
              src={Github}
              alt="github icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
