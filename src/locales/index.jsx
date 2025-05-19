import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import ruTranslation from "./ru.json";

const savedLanguage = localStorage.getItem("language") || navigator.language.split('-')[0] || "en";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        ru: { translation: ruTranslation },
    },
    lng: savedLanguage,
    interpolation: { escapeValue: false },
});

export const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
};

export default i18n;
