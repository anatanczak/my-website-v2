import React, { FunctionComponent } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = ({}) => {
  return (
    <>
      <NavBar activePage="aboutMe" />
      <LanguageSelect />
      <div className="HomeComponentContainer"></div>
    </>
  );
};

export default HomeComponent;
