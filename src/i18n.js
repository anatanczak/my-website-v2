/* eslint-disable prettier/prettier */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import Backend from 'i18next-xhr-backend';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  }
};

const detectedLanguage = () => {
  let { language } = window.navigator;
  const { localStorage } = window;
  language = language.substring(0, 2);
  if (localStorage.getItem('language') == null) {
    let defaultLanguage = 'en';
    if (language === 'en' || language === 'fr' || language === 'de') {
      defaultLanguage = language;
    }
    localStorage.setItem('language', defaultLanguage);
  }
  return localStorage.getItem('language');
};

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,

    lng: detectedLanguage(),
    fallbackLng: 'en',
    whitelist: ['en', 'fr', 'de'],
    keySeparator: true,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
