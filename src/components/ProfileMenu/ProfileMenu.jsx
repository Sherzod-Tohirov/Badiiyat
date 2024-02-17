import { NavLink } from "react-router-dom";
import "./profilemenu.css";
import { useTranslation } from "react-i18next";

export const ProfileMenu = () => {
  const {t} = useTranslation();
  return (
    <ul className="profilemenu__list w-full">
        <li className="profilemenu__item w-1/3">
            <NavLink className={({isActive}) => `profilemenu__link ${isActive ? 'active-profile-link' : ''}`} to={'/profile'} end>{t("profile.list.profile")}</NavLink>
        </li>
        <li className="profilemenu__item w-1/3">
            <NavLink className={({isActive}) => `profilemenu__link ${isActive ? 'active-profile-link' : ''}`} to={'/profile/security'}>{t("profile.list.security")}</NavLink>
        </li>
        <li className="profilemenu__item w-1/3">
            <NavLink className={({isActive}) => `profilemenu__link ${isActive ? 'active-profile-link' : ''}`} to={'/profile/settings'}>{t("profile.list.settings")}</NavLink>
        </li>
    </ul>
  )
}
