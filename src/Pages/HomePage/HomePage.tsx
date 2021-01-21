import React, { FunctionComponent } from 'react';
import HomeComponent from '../../Components/HomeComponent/HomeComponent';

import './styles.scss';

type HomePageProps = {};

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="HomePageContainer">
      <HomeComponent />
    </div>
  );
};

export default HomePage;
