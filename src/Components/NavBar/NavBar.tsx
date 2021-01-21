import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';

type NavBarProps = {};

const NavBar: FunctionComponent<NavBarProps> = ({}) => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarContainer-LogoContainer">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
