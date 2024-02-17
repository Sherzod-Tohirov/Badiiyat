import { useTranslation } from "react-i18next";
import "./categorylist.css";
export const CategoryList = ({genreId, setGenreId}) => {
  const {t} = useTranslation(); 
  return (
    <ul className="main__list mb-[30px]">
                <li className="main__item">
                    <button onClick={() => setGenreId(1)} className={`main__btn ${genreId == 1 && 'active-btn'}`}>{t("categories.subcategories.first")}</button>
                </li>
                <li className="main__item">
                    <button onClick={() => setGenreId(2)}  className={`main__btn ${genreId == 2 && 'active-btn'}`}>{t("categories.subcategories.second")}</button>
                </li>
                <li className="main__item">
                    <button onClick={() => setGenreId(3)}  className={`main__btn ${genreId == 3 && 'active-btn'}`}>{t("categories.subcategories.third")}</button>
                </li>
                <li className="main__item">
                    <button onClick={() => setGenreId(4)}  className={`main__btn ${genreId == 4 && 'active-btn'}`}>{t("categories.subcategories.fourth")}</button>
                </li>
    </ul>
  )
}
