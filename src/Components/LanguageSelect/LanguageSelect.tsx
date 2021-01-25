import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { i18n } = useTranslation('translation');
  const storage = window.localStorage;
  const language = storage.getItem('language') || 'en';

  const changeLanguage = (code: string) => {
    storage.setItem('language', code);
    i18n.changeLanguage(code);
  };
  return (
    <select
      className="LanguageSelect"
      defaultValue={language}
      onChange={(event) => changeLanguage(event.target.value)}
    >
      <option
        className="LanguageSelect-LanguageOption"
        style={{ color: 'black' }}
        value="en"
      >
        EN
      </option>
      <option
        className="LanguageSelect-LanguageOption"
        style={{ color: 'black' }}
        value="fr"
      >
        FR
      </option>
      <option
        className="LanguageSelect-LanguageOption"
        style={{ color: 'black' }}
        value="de"
      >
        DE
      </option>
    </select>
  );
};

export default LanguageSelect;
