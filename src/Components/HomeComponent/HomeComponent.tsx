import React, { FunctionComponent } from 'react';
import NavBar from '../../Components/NavBar/NavBar';

type HomeComponentProps = {};

const HomeComponent: FunctionComponent<HomeComponentProps> = () => {
  return (
    <div className="HomeComponentContainer">
      <NavBar />
      <p>HomeComponent</p>
    </div>
  );
};

export default HomeComponent;
