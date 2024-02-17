import { useTranslation } from "react-i18next";
import "./headersubmenu.css";

import { Link } from "react-router-dom"
export const HeaderSubMenu = ({show, setShow}) => {
  const {t} = useTranslation();
  function handleClick(e) {
      if(e.target.matches('.header__sub-link')) {
            setShow(prev => !prev);
     }
  }
  return (
    <ul className={`header__sub-list ${!show ? 'display-none' : ''}`} onClick={handleClick}>
        <li>
            <Link className="header__sub-link rounded-t-[10px]" to={'/profile'}>{t("header.subheader.profile")}</Link>
        </li>
        <li>
            <Link className="header__sub-link" to={'/addauthor'}>{t("header.subheader.add_author")}</Link>
        </li>
        <li>
            <Link className="header__sub-link" to={'/addbook'}>{t("header.subheader.add_book")}</Link>
        </li>
        <li>
            <Link className="header__sub-link rounded-b-[10px]" to={'/logout'}>{t("header.subheader.logout")}</Link>
        </li>
    </ul>
  )
}
