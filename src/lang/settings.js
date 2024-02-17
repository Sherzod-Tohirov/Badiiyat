import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { uz, ru, en } from "./langs";
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      uz: {
        translation: {
          ...uz
        }
      },
      ru: {
        translation: {
          ...ru
        }
      },
      en: {
        translation: {
          ...en
        }
      },
    },
    lng: "uz",
    fallbackLng: localStorage.getItem('lang') || "uz",

    interpolation: {
      escapeValue: false 
    }
  });
