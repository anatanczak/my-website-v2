import React, {
  FunctionComponent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import useDetectClick from '../../CustomHooks/useDetectClick';
import useOnScroll from '../../CustomHooks/useOnScroll';

import Logo from '../../assets/icons/logo.svg';
import GithubIcon from '../../assets/icons/github_icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin_icon.svg';

import HamburgerMenuButton from './HamburgerMenuButton/HamburgerMenuButton';

import './style.scss';

interface MenuItem {
  title: string;
  translationKey: string;
  link: string;
}

type NavBarProps = {
  activePage: string;
};

const NavBar: FunctionComponent<NavBarProps> = ({ activePage }) => {
  const menuItems: Array<MenuItem> = [
    {
      title: 'aboutMe',
      translationKey: 'navbar.aboutMe',
      link: '/'
    },
    {
      title: 'portfolio',
      translationKey: 'navbar.portfolio',
      link: '/portfolio'
    },
    {
      title: 'contact',
      translationKey: 'navbar.contact',
      link: '/contact'
    }
  ];

  const { t }: { t: any } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [position] = useOnScroll();

  const outSideNavbarClickHandler = (event: Event) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setMenuIsOpen(false);
    }
  };

  //close navbar when cklicked outside
  useDetectClick(outSideNavbarClickHandler);

  //close navbar when scrolled
  useEffect(() => {
    if (position > 10) {
      setMenuIsOpen(false);
    }
  }, [position]);

  return (
    <nav
      ref={navRef}
      className={
        menuIsOpen ? 'NavBarContainer OpenNavBarContainer' : 'NavBarContainer'
      }
    >
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
        <div className="NavBarContainer-AllwaysVisibleMenuContainer-SocialLinksContainer">
          <a href="https://github.com/anaviktoriv">
            <img src={GithubIcon} alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/anastasiatanczak/">
            <img src={LinkedinIcon} alt="linkedin logo" />
          </a>
        </div>
      </div>
      <div
        className={
          menuIsOpen
            ? 'NavBarContainer-ClosedMenuContainer NavBarContainer-MenuVisible'
            : 'NavBarContainer-ClosedMenuContainer'
        }
      >
        <ul className="NavBarContainer-ClosedMenuContainer-MenuListContainer">
          {menuItems.map((menuItem, index) => {
            let styleClassName =
              'NavBarContainer-ClosedMenuContainer-MenuListContainer-MenuItem';
            if (menuItem.title == activePage) {
              styleClassName +=
                ' NavBarContainer-ClosedMenuContainer-MenuListContainer-ActiveMenuItem';
            }
            if (menuIsOpen) {
              styleClassName +=
                ' NavBarContainer-ClosedMenuContainer-MenuListContainer-VisibleMenuItem' +
                (index + 1);
            }
            return (
              <Link
                to={menuItem.link}
                className={styleClassName}
                key={menuItem.translationKey}
              >
                {t(menuItem.translationKey)}
              </Link>
            );
          })}
          <div
            className={
              menuIsOpen
                ? 'NavBarContainer-ClosedMenuContainer-MenuListContainer-SocialLinksContainerMobile NavBarContainer-ClosedMenuContainer-MenuListContainer-SocialLinksContainerMobileAppear'
                : 'NavBarContainer-ClosedMenuContainer-MenuListContainer-SocialLinksContainerMobile'
            }
          >
            <a href="https://github.com/anaviktoriv">
              <img src={GithubIcon} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/anastasiatanczak/">
              <img src={LinkedinIcon} alt="linkedin logo" />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
