import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg';
import HamburgerMenuButton from './HamburgerMenuButton/HamburgerMenuButton';

import './style.scss';

interface MenuItem {
  title: string;
  translationKey: string;
}

type NavBarProps = {
  activePage: string;
};

const NavBar: FunctionComponent<NavBarProps> = ({ activePage }) => {
  const menuItems: Array<MenuItem> = [
    {
      title: 'aboutMe',
      translationKey: 'navbar.aboutMe'
    },
    {
      title: 'portfolio',
      translationKey: 'navbar.portfolio'
    },
    {
      title: 'contact',
      translationKey: 'navbar.contact'
    }
  ];
  const { t }: { t: any } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="NavBarContainer">
      <div className="NavBarContainer-AllwaysVisibleMenuContainer">
        <div className="NavBarContainer-AllwaysVisibleMenuContainer-LogoContainer">
          <Link to="/">
            <img
              className="NavBarContainer-AllwaysVisibleMenuContainer-LogoContainer-Logo"
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>
        <HamburgerMenuButton
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
        <div className="NavBarContainer-AllwaysVisibleMenuContainer-InvisibleItem"></div>
      </div>
      <div
        className={
          menuIsOpen
            ? 'NavBarContainer-ClosedMenuContainer NavBarContainer-MenuVisible'
            : 'NavBarContainer-ClosedMenuContainer'
        }
      >
        <ul className="NavBarContainer-ClosedMenuContainer-MenuListContainer">
          {menuItems.map((menuItem) => {
            let styleClassName =
              'NavBarContainer-ClosedMenuContainer-MenuListContainer-MenuItem';
            if (menuItem.title == activePage) {
              console.log(activePage);
              styleClassName +=
                ' NavBarContainer-ClosedMenuContainer-MenuListContainer-ActiveMenuItem';
            }
            return (
              <li className={styleClassName} key={menuItem.translationKey}>
                <span
                  className={
                    menuItem.title == activePage
                      ? 'NavBarContainer-ClosedMenuContainer-MenuListContainer-MenuItem-Circle'
                      : 'NavBarContainer-ClosedMenuContainer-MenuListContainer-MenuItem-EmptyCircle'
                  }
                ></span>{' '}
                {t(menuItem.translationKey)}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
