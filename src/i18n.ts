import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LOCALE } from './config/constants';

import en from './assets/locales/en';

export const resources = {
  en,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: DEFAULT_LOCALE,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
