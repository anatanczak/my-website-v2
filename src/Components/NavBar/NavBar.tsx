import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Logo from '../../assets/icons/logo.svg';

import './style.scss';

type NavBarProps = {};

const NavBar: FunctionComponent<NavBarProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  return (
    <nav className="NavBarContainer">
      <div className="NavBarContainer-LogoContainer">
        <Link to="/">
          <img
            className="NavBarContainer-LogoContainer-Logo"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <ul className="NavBarContainer-MenuContainer">
        <li>{t('navbar.home')}</li>
        <li>{t('navbar.aboutMe')}</li>
        <li>{t('navbar.portfolio')}</li>
        <li>{t('navbar.contact')}</li>
        <LanguageSelect />
      </ul>
    </nav>
  );
};

export default NavBar;
