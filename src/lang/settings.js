import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from './langs/uz';
import ru from './langs/ru';
import en from './langs/en';
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      uz: {
        translation: uz
        
      },
      ru: {
        translation: ru
      },
      en: {
        translation: en
      },
    },
    loadPath: './langs/{{lng}}.js', 
    lng: "uz",
    fallbackLng: localStorage.getItem('lang') || "uz",

    interpolation: {
      escapeValue: false 
    }
  });
