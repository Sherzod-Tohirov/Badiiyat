import { useTranslation } from "react-i18next";
import "./notfound.css";

export const NotFound = () => {
    const {t} = useTranslation();
  return (
    <div className="page-not-found">
        <div className="flex flex-col items-center justify-center gap-6 max-w-[800px]">
            <p className="page-not-found-desc">404</p>
            <p className="page-not-found-desc">{t("not_found.title")}</p>
        </div>
    </div>
  )
}
