import { useTranslation } from "react-i18next";
import "./notfound.css";

export const NotFound = () => {
  const {t} = useTranslation();
  return (
    <p className="not-found-desc">
        {t("not_found.title")}
    </p>
  )
}
