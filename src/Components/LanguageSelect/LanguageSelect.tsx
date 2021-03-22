import React, { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';
interface LanguageOption {
  label: string;
  value: string;
}

type LanguageSelectProps = {};

const LanguageSelect: FunctionComponent<LanguageSelectProps> = ({}) => {
  const { i18n } = useTranslation('translation');
  const [storedLanguage, setStoredLanguage] = useState(
    localStorage.getItem('language')
  );
  const languageOptions: Array<LanguageOption> = [
    // {
    //   label: 'En.',
    //   value: 'en'
    // },
    {
      label: 'Fr.',
      value: 'fr'
    }
    // {
    //   label: 'De.',
    //   value: 'de'
    // }
  ];

  const handleLanguageChange = (newValue: string) => {
    setStoredLanguage(newValue);
  };
  useEffect(() => {
    if (
      storedLanguage != null &&
      localStorage.getItem('language') !== storedLanguage
    ) {
      localStorage.setItem('language', storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
    console.log(localStorage.getItem('language'));
  }, [storedLanguage]);

  return (
    <div className="LangugageSelectContainer">
      <div className="LangugageSelectContainer-Languages">
        {languageOptions.map((languageOption) => {
          let styleClassName = 'LangugageSelectContainer-Languages-Language';
          if (storedLanguage === languageOption.value) {
            styleClassName =
              'LangugageSelectContainer-Languages-Language activeLangugage';
          }
          return (
            <p
              className={styleClassName}
              key={languageOption.label + languageOption.value}
              onClick={() => {
                handleLanguageChange(languageOption.value);
              }}
            >
              {languageOption.label}
            </p>
          );
        })}
        {/* <p className="LangugageSelectContainer-Languages-Language">En.</p>
        <p className="LangugageSelectContainer-Languages-Language">Fr.</p>
        <p className="LangugageSelectContainer-Languages-Language">De.</p> */}
      </div>
    </div>
  );
};

export default LanguageSelect;
