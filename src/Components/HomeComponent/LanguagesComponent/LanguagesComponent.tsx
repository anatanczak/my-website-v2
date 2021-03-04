import React, { FunctionComponent, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Language from './LanguageInterface';
import languages from './LanguagesList';

import LanguageSkill from './LanguageSkill/LanguageSkill';

import './styles.scss';

type LanguagesComponentProps = {};

const LanguagesComponent: FunctionComponent<LanguagesComponentProps> = ({}) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="LanguagesContainer">
      <h3 className="LanguagesContainer-Title">{t('home.laguages.title')}</h3>
      <div className="LanguagesContainer-LanguageSkillsContainer">
        {languages.map((language: Language) => {
          return (
            <LanguageSkill key={`${language.label}`} language={language} />
          );
        })}
      </div>
    </div>
  );
};

export default LanguagesComponent;
