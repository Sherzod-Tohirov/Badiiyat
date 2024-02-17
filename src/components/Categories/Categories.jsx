import { Outlet } from "react-router-dom";
import "./categories.css";
import { useTranslation } from "react-i18next";

export const Categories = () => {
  const {t} = useTranslation();
  return (
    <div className="categories">
        <div className="container">
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className="categories__title">
                    {t("categories.title")}
                </h2>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
