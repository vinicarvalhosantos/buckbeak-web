import i18n from 'i18next';
import pt from './translations/pt-BR.json';
import en from './translations/en-US.json';
import {initReactI18next} from 'react-i18next';

export const resources = {
    pt: {
        translation: pt,
    },
    en: {
        translation: en,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'pt',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
});