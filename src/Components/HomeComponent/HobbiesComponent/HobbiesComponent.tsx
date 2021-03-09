import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import SalsaIcon from '../../../assets/icons/salsa_icon.svg';
import YogaIcon from '../../../assets/icons/yoga_icon.svg';
import DrawingIcon from '../../../assets/icons/drawing_icon.svg';
import TravelIcon from '../../../assets/icons/travel_icon.svg';

import './styles.scss';

type BioComponentProps = {};

const BioComponent: FunctionComponent<BioComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();
  const hobbies = [
    {
      title: 'home.hobbies.drawing',
      icon: DrawingIcon
    },
    {
      title: 'home.hobbies.yoga',
      icon: YogaIcon
    },
    {
      title: 'home.hobbies.salsa',
      icon: SalsaIcon
    },
    {
      title: 'home.hobbies.travel',
      icon: TravelIcon
    }
  ];

  return (
    <div className="HobbiesComponentContainer">
      <h2 className="HobbiesComponentContainer-Title">
        {t('home.hobbies.title')}
      </h2>
      <div className="HobbiesComponentContainer-HobbiesContainer">
        {hobbies.map((hobby) => {
          return (
            <div
              className="HobbiesComponentContainer-HobbiesContainer-HobbyContainer"
              key={hobby.title}
            >
              <img
                className="HobbiesComponentContainer-HobbiesContainer-HobbyContainer-Img"
                src={hobby.icon}
                alt="hobby icon"
              />
              <h4 className="HobbiesComponentContainer-HobbiesContainer-HobbyContainer-Label">
                {t(hobby.title)}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BioComponent;
