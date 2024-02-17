import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const langContext = createContext();

export const LangProvider = ({children}) => {
    const [lang, setLang] = useState(localStorage.getItem('lang') || 'Uzbek');
    const {i18n} = useTranslation();
    localStorage.setItem('lang', lang);
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);
    return (
        <langContext.Provider value={{lang, setLang}}>
            {children}
        </langContext.Provider>
    )
}