import i18n, { use } from 'i18next';
import { I18N_DATA, DEFAULT_LANGUAGE } from 'config/constants';

use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: {
    en: {
      translation: I18N_DATA.en,
    },
  },
});

export default i18n;
