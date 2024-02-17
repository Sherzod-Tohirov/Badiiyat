import { useTranslation } from "react-i18next";
import "./search.css";
import { forwardRef, useContext, useRef } from "react";
import { searchContext } from "../../context/searchContext";
export const Search = forwardRef(({style, ...props}, ref) => {
    const {t} = useTranslation();
    const {setSearch} = useContext(searchContext);
    const searchRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        setSearch(searchRef.current.value);
    }
  return (
    <div className={style || ""}>
        <div className="container">
            <div className="search">
                <h2 className="search__title">
                    {t("search.title")}
                </h2>
                <form className="search__form" onSubmit={handleSubmit}>
                    <input className="search__input" ref={searchRef} {...props} type="search" placeholder={t("search.placeholder")} required />
                    <button className="search__button">{t("search.button")}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
)

Search.displayName = "Search";