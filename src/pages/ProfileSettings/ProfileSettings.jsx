import { useContext, useRef, useState } from "react";
import { ProfileInputGroup } from "../../components/ProfileInputGroup";
import { SaveChangesButton } from "../../components/SaveChangesButton";
import { SeparatorLine } from "../../components/SeparatorLine";
import { ToggleInputGroup } from "../../components/ToggleInputGroup";
import { languages } from "../../constants";
import "./profilesettings.css";
import { langContext } from "../../context/langContext";
import { themeContext } from "../../context/themeContext";
import { notificationContext } from "../../context/notificationContext";
import { useTranslation } from "react-i18next";

export const ProfileSettings = () => {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const {lang, setLang} = useContext(langContext);
  const {theme, setTheme} = useContext(themeContext);
  const {setMsg} = useContext(notificationContext);
  const langRef = useRef();
  const themeRef = useRef();
  const {t} = useTranslation();
  function handleLangChange(e) {
     setIsValid(true);
     
  }

  function handleThemeChange(e) {
    setIsValid(true);
    
 }

 function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  
  let lang = langRef.current.value.toLowerCase();
  if(lang === 'uzbek') lang = 'uz';
  if(lang === 'russian') lang = 'ru';
  if(lang === 'english') lang = 'en';
  setLang(lang);

  if(themeRef.current.checked) setTheme('dark');
  else setTheme('light');

  
  setTimeout(() => {
    setLoading(false);
    setMsg(t('notifications.updated.title'));
  }, 1000);
}

  return (
    <div className="profilesettings">
        <div className="container">
          <form className="profilesettings__form" onSubmit={handleSubmit}>
              <strong className="profilesettings__title">
                {t("profile.settings.title")}
              </strong>
              <ProfileInputGroup ref={langRef} style={'mb-[10px]'} label={t("profile.settings.language.title")} value={lang} info={t("profile.settings.language.info")} isSelect={true} options={t("languages", {returnObjects: true})} onChange={handleLangChange} />
              <ToggleInputGroup ref={themeRef} label={t("profile.settings.theme.title")} checked={theme === 'dark' ? true : false} style={'mb-[40px]'} onChange={handleThemeChange} />
              <SeparatorLine style={'mb-[32px]'} />
              <SaveChangesButton style={!isValid ? 'opacity-65' : 'cursor-pointer'} loading={loading} disabled={!isValid}>{t("profile.button.save_changes")}</SaveChangesButton>
          </form>
        </div>
    </div>
  )
}
