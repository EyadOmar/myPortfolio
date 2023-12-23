import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import arTrans from '../translations/ar/translation.json';
import enTrans from '../translations/en/translation.json';

const resources = {
  en: {
    translation: enTrans,
  },
  ar: {
    translation: arTrans,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  ns: 'translation',
  defaultNS: 'translation',
});

export default i18n;
